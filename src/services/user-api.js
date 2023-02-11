import ky from "ky";

const { VITE_BASE_URL } = import.meta.env;

export default {
  signIn({ username, password, isRegistering }) {
    return ky
      .post(`${VITE_BASE_URL}/users/${isRegistering ? "register" : "login"}`, {
        json: { username, password },
      })
      .json();
  },
};
