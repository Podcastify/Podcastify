export const getAuthToken = () => {
  return window.localStorage.getItem("podcastifyToken");
};
