import appReducer from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    appReducer,
  },
});
