const initialState = {
  dataMovie: [],
  pagination: {},
  isLoading: false,
  isError: false,
  msg: "",
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_ALL_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataMovie: action.payload.data.data,
        msg: action.payload.data.msg,
        pagination: action.payload.data.pagination,
      };
    case "GET_ALL_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        dataMovie: [],
        msg: action.payload.response.data.msg,
        pagination: {},
      };
    case "GET_MOVIE_BY_ID_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_MOVIE_BY_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataMovie: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "GET_MOVIE_BY_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        dataMovie: [],
        msg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default movie;
