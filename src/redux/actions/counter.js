export const increaseCounter = () => {
  return {
    // type = Untuk penamaan fitur
    // payload = Untuk menjalankan proses axios
    type: "INCREASE", // type juga digunakan untuk proses di dalam REDUCER
  };
};

export const decreaseCounter = () => {
  return {
    type: "DECREASE",
  };
};

export const resetCounter = () => {
  return {
    type: "RESET",
  };
};
