export const getAuthToken = () => {
  return window.localStorage.getItem("podcastifyToken");
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
