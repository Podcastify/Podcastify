import { BASE_URL } from "../constants/apiUrl";
import { getAuthToken } from "../utils";

export const register = (username, password) => {
  return fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const login = (username, password) => {
  return fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const changeUserProfile = (password, newPassword) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/users/me`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      password,
      newPassword
    }),
  }).then((res) => res.json());
}