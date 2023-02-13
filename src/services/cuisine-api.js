import ky from "ky";

const { VITE_BASE_URL } = import.meta.env;

export default {
  index() {
    return ky.get(`${VITE_BASE_URL}/cuisines`).json();
  },
};
