import ky from "ky";

const { VITE_BASE_URL } = import.meta.env;

export default {
  register(username, password) {
    return ky
      .post(`${VITE_BASE_URL}/users/register`, {
        json: { username, password },
      })
      .json();
  },
  signIn(username, password) {
    return ky
      .post(`${VITE_BASE_URL}/users/login`, {
        json: { username, password },
      })
      .json();
  },
};
