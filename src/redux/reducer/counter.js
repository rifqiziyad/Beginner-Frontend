// Intial State untuk menimpan data di dalam store bedasarkan feature/reducernya
const initialState = {
  count: 0,
};

// Proses reducer yang dijalankan setelah proses action berdasarkan type yang dikirimkan oleh action, yang akan menjalankan proses selanjutnya
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      return {
        ...initialState,
        count: state.count + 1, // count: 0 + 1
      };
    }
    case "DECREASE": {
      return {
        ...initialState,
        count: state.count - 1,
      };
    }
    case "RESET": {
      return {
        ...initialState,
        count: 0,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default counter;
