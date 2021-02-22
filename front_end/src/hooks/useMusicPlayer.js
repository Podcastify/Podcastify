import { useRef, useState, useCallback, useEffect } from "react";
import { getEpisodeInfo } from "../WebAPI/listenAPI";
import { getRecords, getAllMyPlaylists } from "../WebAPI/me";
import useUser from "./useUser";

export default function useMusicPlayer() {
  const audioEl = useRef(null);
  const { userPlaylists, userPlayedRecord } = useUser();
  const [currentEpisode, setCurrentEpisode] = useState({
    id: "332fef",
  });
  const [playlist, setPlaylist] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  const getEpisodeData = useCallback((id) => {
    getEpisodeInfo(id).then((res) => {
      const data = res.data;
      if (res.ok) {
        setCurrentEpisode({
          id: data.id,
          src: data.audio,
          title: data.title,
          channelTitle: data.podcast.title,
          channelId: data.podcast.id,
        });
      }
    });
  }, []);

  const getMyPlaylist = useCallback(() => {
    getAllMyPlaylists().then((res) => {
      if (res.ok) {
        setPlaylist(res.data[0].Episodes);
        console.log(playlist);
      }
    });
  }, []);

  useEffect(() => {
    getRecords().then((res) => {
      if (res.ok) {
        const audio = audioEl.current;
        const data = res.data[0];
        const lastId = data.episodeId;
        const lastTime = data.progress;

        // 取得該集資料
        getEpisodeData(lastId);

        // 設定進度條到上次紀錄位置
        audio.currentTime = lastTime;
        const percent = ((lastTime / audio.duration) * 100).toFixed(2);
        setPercentage(percent);
        setCurrentTime(lastTime);

        getMyPlaylist();
      }
    });
  }, [getEpisodeData]);

  const onChange = (e) => {
    const audio = audioEl.current;
    if (audio.duration) {
      audio.currentTime = (audio.duration / 100) * e.target.value;
      setPercentage(e.target.value);
    }
  };

  const getCurrentTime = (e) => {
    const target = e.target;
    const time = target.currentTime;
    const percent = ((time / target.duration) * 100).toFixed(2);

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  const onLoadData = () => {
    setDuration(audioEl.current.duration.toFixed(2));
  };

  return {
    audioEl,
    getCurrentTime,
    onLoadData,
    percentage,
    onChange,
    duration,
    currentTime,
    currentEpisode,
    isPlaying,
    setIsPlaying,
    playlist,
  };
}
