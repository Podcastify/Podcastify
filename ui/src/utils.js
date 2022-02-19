import { getPodcastInfo, getEpisodeInfo } from "./WebAPI/listenAPI";
import { addRecords, getMyInfo } from "./WebAPI/me";

export const getAuthToken = () => {
  return window.localStorage.getItem("podcastifyToken");
};

export const addRecord = (audio, currentEpisodeId) => {
  const currentTime = audio.current.currentTime.toFixed(2);
  addRecords(currentEpisodeId, currentTime);
};

export const handlePlaylistPlayPauseBtn = (
  episodeInfo,
  userPlaylists,
  currentEpisode,
  setCurrentEpisode
) => {
  if (!episodeInfo) return;

  // 取得目前該集數在播放列表的順序
  let playlistOrder;
  const episodes = userPlaylists[0].Episodes;
  for (let i = 0; i < episodes.length; i++) {
    if (episodeInfo.id === episodes[i].id) {
      playlistOrder = i;
    }
  }

  // 如果現在播放內容就是該集內容，先確認播放狀況並設定播放順序
  if (currentEpisode.id === episodeInfo.id) {
    const { playing, playmode, order, ...rest } = currentEpisode;
    setCurrentEpisode({
      playing: !playing,
      playmode: "continued",
      order: playlistOrder,
      ...rest,
    });
    return;
  }

  // 如果現在播放內容不是該集內容，直接播放並設定播放順序
  setCurrentEpisode({
    id: episodeInfo.id,
    src: episodeInfo.audio,
    title: episodeInfo.title,
    channelTitle: episodeInfo.podcast.title,
    channelId: episodeInfo.podcast.id,
    order: playlistOrder,
    playmode: "continued",
    playing: true,
  });
};

export const getPlayRecordDetail = async (playedRecords, setAlert) => {
  let record = [];

  if (playedRecords.length !== 0) {
    // 過濾無效 id
    const filterRecord = playedRecords.filter(
      (record) => record.episodeId.length === 32
    );

    // 節省打 API 次數，只取最後四筆播放紀錄
    let lastFourPlayedRecords = [];
    if (filterRecord.length > 4) {
      for (let i = 0; i < 4; i++) {
        lastFourPlayedRecords[i] = filterRecord[i];
      }
    } else {
      for (let i = 0; i < filterRecord.length; i++) {
        lastFourPlayedRecords[i] = filterRecord[i];
      }
    }

    // 拿到播放紀錄的單集詳細資料
    let playedRecordsDetails;

    try {
      playedRecordsDetails = await Promise.all(
        lastFourPlayedRecords.map(async (ep) => {
          const episodeInfo = await getEpisodeInfo(ep.episodeId);

          if (!episodeInfo.ok) {
            setAlert(true);
            return;
          }
          return episodeInfo.data;
        })
      );
    } catch {
      setAlert(true);
    }

    // 播放紀錄資料重整
    for (let i = 0; i < playedRecordsDetails.length; i++) {
      record[i] = {
        episode: playedRecordsDetails[i],
        progress: lastFourPlayedRecords[i].progress,
      };
    }
  }
  return record;
};

export const setInitialUserContext = async (
  setUserInfo,
  setUserPlaylists,
  setUserPlayedRecord,
  setUserSubscription,
  setAlert,
  setIsLoading
) => {
  try {
    setIsLoading(true);

    const response = await getMyInfo();
    if (!response.ok) {
      setAlert(true);
      setIsLoading(false);
      return;
    }

    let {
      playlists,
      subscriptions,
      playedRecords,
      ...userInfo
    } = response.data;

    for (let i = 0; i < playlists.length; i++) {
      let { Episodes, ...rest } = playlists[i];
      Episodes = await Promise.all(
        Episodes.map(async (ep) => {
          const episodeInfo = await getEpisodeInfo(ep.id);
          return episodeInfo.ok ? episodeInfo.data : ep;
        })
      );
      playlists[i] = { Episodes, ...rest };
    }

    // 將 Podcast 的詳細資料，放進頻道訂閱清單
    subscriptions = await Promise.all(
      subscriptions.map(async (data) => {
        const podcastInfo = await getPodcastInfo(data.id);
        return podcastInfo.data;
      })
    );

    // 取得紀錄詳細資訊
    const record = await getPlayRecordDetail(playedRecords, setAlert);

    setUserPlayedRecord(record);
    setUserInfo(userInfo);
    setUserPlaylists(playlists);
    setUserSubscription(subscriptions);
    setIsLoading(false);
  } catch {
    setIsLoading(false);
    setAlert(true);
  }
};
