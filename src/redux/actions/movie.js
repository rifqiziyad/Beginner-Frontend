import axiosApiIntances from "../../utils/axios";

export const getAllMovie = (page, limit) => {
  return {
    type: "GET_ALL_MOVIE",
    payload: axiosApiIntances.get(
      `movie?page=${page}&limit=${limit}&search=&sort=movie_id DESC`
    ),
  };
};

export const getMovieById = (id) => {
  return {
    type: "GET_MOVIE_BY_ID",
    payload: axiosApiIntances.get(`/movie/${id}`),
  };
};
