import { getToken } from "../utils";
const apiUrl = "http://api.podcastify.tw/me";

// 取得會員資料
export const getMyInfo = () => {
  const token = getToken();
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得會員所有播放清單
export const getAllMyPlaylists = () => {
  const token = getToken();
  return fetch(`${apiUrl}/playlist`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得會員指定播放清單
export const getMyPlaylist = (id) => {
  const token = getToken();
  return fetch(`${apiUrl}/playlist/${id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 新增播放清單
export const addPlaylist = (name) => {
  const token = getToken();
  return fetch(`${apiUrl}/playlist`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
    }),
  }).then((res) => res.json());
};

// 編輯播放清單名稱
export const renamePlaylist = (id, name) => {
  const token = getToken();
  return fetch(`${apiUrl}/playlist/${id}`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
    }),
  }).then((res) => res.json());
};

// 刪除播放清單
export const deletePlaylist = (id) => {
  const token = getToken();
  return fetch(`${apiUrl}/playlist/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 新增單元到播放清單
export const addEpisodeToPlaylist = (playlistId, episodeId) => {
  const token = getToken();
  return fetch(`${apiUrl}/playlist/${playlistId}/${episodeId}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 從播放清單刪除單元
export const deleteEpisodeFromPlaylist = (playlistId, episodeId) => {
  const token = getToken();
  return fetch(`${apiUrl}/playlist/${playlistId}/${episodeId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得會員已訂閱清單
export const getMySubsciption = () => {
  const token = getToken();
  return fetch(`${apiUrl}/subscription`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 訂閱頻道
export const addSubsciption = (podcastId) => {
  const token = getToken();
  return fetch(`${apiUrl}/subscription/${podcastId}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取消訂閱頻道
export const deleteSubsciption = (podcastId) => {
  const token = getToken();
  return fetch(`${apiUrl}/subscription/${podcastId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得所有播放紀錄
export const getRecords = () => {
  const token = getToken();
  return fetch(`${apiUrl}/record`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 新增播放紀錄
export const addRecords = (episodeId, progress = 0) => {
  const token = getToken();
  return fetch(`${apiUrl}/record/${episodeId}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      progress,
    }),
  }).then((res) => res.json());
};
