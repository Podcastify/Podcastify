import { BASE_URL } from "../constants/apiUrl";

// 搜尋功能
export const getSearchPodcast = (keyword) => {
  // 將字串進行 UTF-8 編碼
  const encodeWord = encodeURIComponent(keyword);
  return fetch(
    `${BASE_URL}/listenAPI/search/?q=${encodeWord}&type=podcast&language=Chinese&region=tw&safe_mode=0
  `,
    {
      method: "GET",
    }
  ).then((res) => res.json());
};

// You Might Also Like with random genres
export const getMightLovePodcasts = () => {
  const genres = [
    144,
    151,
    93,
    133,
    111,
    168,
    117,
    88,
    125,
    132,
    82,
    134,
    99,
    69,
    107,
    122,
    77,
    68,
    127,
    135,
    100,
  ];
  const randomIndex = Math.floor(Math.random() * 21);
  const randomGenres = genres[randomIndex];

  return fetch(
    `${BASE_URL}/listenAPI/best_podcasts?genre_id=${randomGenres}&region=tw&safe_mode=0`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
};

// Hot Podcasts in Taiwan
export const getHotPodcastsInTaiwan = () => {
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

// 取得所有訂閱 Podcasts 詳細資料
export const getAllPodcastsInfo = async (podcastIdList) => {
  return Promise.all(
    podcastIdList.map(async (data) => {
      const podcastInfo = await getPodcastInfo(data.id);
      return podcastInfo.data;
    })
  );
};

// 取得單一 Episode 詳細資料
export const getEpisodeInfo = (episodeId) => {
  return fetch(`${BASE_URL}/listenAPI/episodes/${episodeId}`, {
    method: "GET",
  }).then((res) => res.json());
};
