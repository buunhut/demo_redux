import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    store: (
      state = {
        arrSinhVien: [],
        sinhVien: { ma: "", ten: "", lop: "" },
        username: "",
        isLogin: false,
        number: 1,
      },
      action
    ) => {
      switch (action.type) {
        case "tang":
          return {
            ...state,
            number: state.number + 1,
          };
        case "giam":
          return {
            ...state,
            number: state.number - 1,
          };
        case "login":
          return {
            ...state,
            isLogin: action.isLogin,
          };
        case "themsinhvien":
          return {
            ...state,
            sinhVien: action.sinhVien,
            arrSinhVien: action.arrSinhVien,
          };
        default:
          return state;
      }
    },
  },
});
export default store;
