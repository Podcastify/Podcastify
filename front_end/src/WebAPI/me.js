const apiUrl = "http://api.podcastify.tw";
const token = window.localStorage.getItem("podcastifyToken");

// 取得會員資料
export const getMyInfo = () => {
  return fetch(`${apiUrl}/me`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得會員所有播放清單
export const getAllMyPlaylists = () => {
  return fetch(`${apiUrl}/me/playlist`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得會員指定播放清單
export const getMyPlaylist = (id) => {
  return fetch(`${apiUrl}/me/playlist/${id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 新增播放清單
export const addPlaylist = (name) => {
  return fetch(`${apiUrl}/me/playlist/`, {
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
  return fetch(`${apiUrl}/me/playlist/${id}`, {
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
  return fetch(`${apiUrl}/me/playlist/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 新增單元到播放清單
export const addEpisodeToPlaylist = (playlistId, episodeId) => {
  return fetch(`${apiUrl}/me/playlist/${playlistId}/${episodeId}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 從播放清單刪除單元
export const deleteEpisodeFromPlaylist = (playlistId, episodeId) => {
  return fetch(`${apiUrl}/me/playlist/${playlistId}/${episodeId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得會員已訂閱清單
export const getMySubsciption = () => {
  return fetch(`${apiUrl}/me/subscription`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 訂閱頻道
export const addSubsciption = (podcastId) => {
  return fetch(`${apiUrl}/me/subscription/${podcastId}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取消訂閱頻道
export const deleteSubsciption = (podcastId) => {
  return fetch(`${apiUrl}/me/subscription/${podcastId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 取得所有播放紀錄
export const getRecords = () => {
  return fetch(`${apiUrl}/me/record`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 新增播放紀錄
export const addRecords = (episodeId, progress = 0) => {
  return fetch(`${apiUrl}/me/record/${episodeId}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      progress,
    }),
  }).then((res) => res.json());
};
