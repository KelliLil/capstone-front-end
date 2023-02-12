import ky from "ky";

const { VITE_BASE_URL } = import.meta.env;

export default {
  // http://localhost:3000/api/restaurants?location=62236&category=mexican&radius=20
  show({ location, category, radius }) {
    return ky
      .get(`${VITE_BASE_URL}/restaurants`, {
        searchParams: {
          location,
          category: category.toLowerCase(),
          radius,
        },
      })
      .json();
  },
};
