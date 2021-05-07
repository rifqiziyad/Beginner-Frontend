import axiosApiIntances from "../../utils/axios";

export const getAllMovie = (page, limit) => {
  return {
    type: "GET_ALL_MOVIE",
    payload: axiosApiIntances.get(
      `movie?page=${page}&limit=${limit}&search=&sort=movie_id ASC`
    ),
  };
};

export const createMovie = (data) => {
  return {
    type: "CREATE_MOVIE",
    payload: axiosApiIntances.post("movie", data),
  };
};

export const updateMovie = (data, id) => {
  return {
    type: "UPDATE_MOVIE",
    payload: axiosApiIntances.patch(`movie/${id}`, data),
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: axiosApiIntances.delete(`movie/${id}`),
  };
};
