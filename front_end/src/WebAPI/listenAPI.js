const apiUrl = "http://api.podcastify.tw/listenAPI";

// 搜尋功能
export const getSearchInfo = (keyword) => {
  // 將字串進行 UTF-8 編碼
  const encodeWord = encodeURIComponent(keyword);
  return fetch(`${apiUrl}/search/?q=${encodeWord}&type=episode%2C%20podcast`, {
    method: "GET",
  }).then((res) => res.json());
};

// HOT Podcasts
export const getHotPodcasts = () => {
  return fetch(`${apiUrl}/best_podcasts?region=tw&safe_mode=0`, {
    method: "GET",
  }).then((res) => res.json());
};

// 取得單一 Podcast 詳細資料
export const getPodcastInfo = (podcastId) => {
  return fetch(`${apiUrl}/podcasts/${podcastId}?sort=recent_first`, {
    method: "GET",
  }).then((res) => res.json());
};

// 取得單一 Episode 詳細資料
export const getEpisodeInfo = (episodeId) => {
  return fetch(`${apiUrl}/episodes/${episodeId}`, {
    method: "GET",
  }).then((res) => res.json());
};

// You Might Also Like
export const getRandomEpisode = () => {
  return fetch(`${apiUrl}/just_listen`, {
    method: "GET",
  }).then((res) => res.json());
};
