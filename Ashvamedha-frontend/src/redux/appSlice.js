import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appSlice",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export default appConfigSlice.reducer;
export const { setLoading } = appConfigSlice.actions;
