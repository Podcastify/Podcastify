import { BASE_URL } from "../constants/apiUrl";

// 搜尋功能
export const getSearchInfo = (keyword) => {
  // 將字串進行 UTF-8 編碼
  const encodeWord = encodeURIComponent(keyword);
  return fetch(
    `${BASE_URL}/listenAPI/search/?q=${encodeWord}&type=episode%2C%20podcast&language=Chinese&region=tw&safe_mode=0`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
};

// HOT Podcasts
export const getHotPodcasts = () => {
  return fetch(`${BASE_URL}/listenAPI/best_podcasts?region=tw&safe_mode=0`, {
    method: "GET",
  }).then((res) => res.json());
};

// 取得單一 Podcast 詳細資料
export const getPodcastInfo = (podcastId) => {
  return fetch(
    `${BASE_URL}/listenAPI/podcasts/${podcastId}?sort=recent_first`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
};

// 取得單一 Episode 詳細資料
export const getEpisodeInfo = (episodeId) => {
  return fetch(`${BASE_URL}/listenAPI/episodes/${episodeId}`, {
    method: "GET",
  }).then((res) => res.json());
};

// You Might Also Like
export const getRandomEpisode = () => {
  return fetch(`${BASE_URL}/listenAPI/just_listen`, {
    method: "GET",
  }).then((res) => res.json());
};
