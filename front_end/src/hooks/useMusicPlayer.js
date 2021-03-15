import { useRef, useState, useEffect, useCallback } from "react";
import useUser from "./useUser";
import useCurrentEpisode from "../hooks/useCurrentEpisode";
import useAlertMessage from "../hooks/useAlertMessage";
import { addRecord, getPlayRecordDetail } from "../utils";
import { getRecords } from "../WebAPI/me";

export default function useMusicPlayer() {
  const audioRef = useRef();
  const {
    userPlaylists,
    userPlayedRecord,
    userInfo,
    setUserPlayedRecord,
  } = useUser();
  const { setAlert } = useAlertMessage();
  const { currentEpisode, setCurrentEpisode } = useCurrentEpisode();
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  // 如果有播放紀錄，設定為目前播放
  useEffect(() => {
    let data = userPlayedRecord[0];
    if (!data) return;
    if (data && data.episode === undefined) return;

    data = data.episode;
    setCurrentEpisode({
      id: data.id,
      src: data.audio,
      title: data.title,
      channelTitle: data.podcast.title,
      channelId: data.podcast.id,
      order: null,
      playmode: null,
      playing: false,
    });
  }, [userPlayedRecord, setCurrentEpisode]);

  // 非會員 progress bar 歸零
  useEffect(() => {
    if (!userInfo) {
      setPercentage(0);
      setCurrentTime(0);
      setDuration(0);
    }
  }, [userInfo]);

  // 新增播放紀錄
  useEffect(() => {
    if (currentEpisode.id === undefined) return;

    // 將記錄存進資料庫
    addRecord(audioRef, currentEpisode.id);

    // 從資料庫抓紀錄、打 API 拿詳細資料後再放入 context
    // getRecords().then((response) => {
    //   if (response.ok) {
    //     const playedRecord = response.data;
    //     getPlayRecordDetail(playedRecord).then((record) => {
    //       setUserPlayedRecord(record);
    //     });
    //   } else {
    //     setAlert(true);
    //   }
    // });
  }, [currentEpisode.id, setUserPlayedRecord, setAlert]);

  // 上一首或下一首
  const handleSong = useCallback(
    (keyword) => {
      const playlist = userPlaylists[0];

      // 如果非會員或不是播放播放清單
      if (!userInfo || !currentEpisode.playmode) return;

      // 如果播放清單只有一首
      if (playlist.Episodes.length === 1) return;

      // 如果按下一首且目前是是播放清單最後一首
      if (
        keyword === "next" &&
        currentEpisode.order === playlist.Episodes.length - 1
      )
        return;

      // 如果按上一首且目前是是播放清單第一首
      if (keyword === "last" && currentEpisode.order === 0) return;

      const episode =
        keyword === "next"
          ? playlist.Episodes[currentEpisode.order + 1]
          : playlist.Episodes[currentEpisode.order - 1];

      setCurrentEpisode({
        id: episode.id,
        src: episode.audio,
        title: episode.title,
        channelTitle: episode.podcast.title,
        channelId: episode.podcast.id,
        order:
          keyword === "next"
            ? currentEpisode.order + 1
            : currentEpisode.order - 1,
        playmode: "continued",
        playing: true,
      });
    },
    [
      currentEpisode.order,
      currentEpisode.playmode,
      setCurrentEpisode,
      userInfo,
      userPlaylists,
    ]
  );

  // 該集播放結束時
  const handleEnd = () => {
    handleSong("next");
  };

  // 更動播放進度條
  const onChange = (e) => {
    if (!userInfo) return;

    const audio = audioRef.current;
    if (audio.duration) {
      audio.currentTime = (audio.duration / 100) * e.target.value;
      setPercentage(e.target.value);
    }
  };

  const getCurrentTime = (e) => {
    const target = e.target;
    const time = target.currentTime;
    let percent;

    if (time) {
      percent = ((time / target.duration) * 100).toFixed(2);
    } else {
      percent = 0;
    }

    setPercentage(percent);
    setCurrentTime(time.toFixed(2));
  };

  const onLoadData = () => {
    const audio = audioRef.current;
    setDuration(audio.duration.toFixed(2));

    let data = userPlayedRecord[0];
    if (!data) return;

    // 首次載入時載入歷史紀錄
    if (firstLoad) {
      const lastTime = data.progress;
      audio.currentTime = lastTime;
      const percent = ((lastTime / audio.duration) * 100).toFixed(2);

      setPercentage(percent);
      setCurrentTime(lastTime);
      setFirstLoad(false);
    }
  };

  return {
    audioRef,
    getCurrentTime,
    onLoadData,
    percentage,
    onChange,
    duration,
    currentTime,
    handleSong,
    handleEnd,
  };
}
