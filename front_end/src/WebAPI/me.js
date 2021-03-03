import { getAuthToken } from "../utils";
import { BASE_URL } from "../constants/apiUrl";

// 取得會員資料
export const getMyInfo = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得會員所有播放清單
export const getAllMyPlaylists = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/playlist`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得會員指定播放清單
export const getMyPlaylist = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/playlist/${id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 新增播放清單
export const addPlaylist = (name) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/playlist`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
    }),
  }).then((res) => res.json());
};

// 編輯播放清單名稱
export const renamePlaylist = (id, name) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/playlist/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
    }),
  }).then((res) => res.json());
};

// 刪除播放清單
export const deletePlaylist = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/playlist/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 新增單元到播放清單
export const addEpisodeToPlaylist = (playlistId, episodeId) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/playlist/${playlistId}/${episodeId}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 從播放清單刪除單元
export const deleteEpisodeFromPlaylist = (playlistId, episodeId) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/playlist/${playlistId}/${episodeId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得會員已訂閱頻道
export const getMySubsciption = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/subscription`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 訂閱頻道
export const addSubsciption = (podcastId) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/subscription/${podcastId}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取消訂閱頻道
export const deleteSubsciption = (podcastId) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/subscription/${podcastId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得所有播放紀錄
export const getRecords = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/record`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 新增播放紀錄
export const addRecords = (episodeId, progress) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me/record/${episodeId}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      progress,
    }),
  }).then((res) => res.json());
};
