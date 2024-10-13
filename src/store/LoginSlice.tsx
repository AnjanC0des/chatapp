import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: { details: null },
  reducers: {
    setLogin(state, action) {
      state.details = action.payload;
    },
    reset(state) {
      state.details = null;
    },
  },
});

export const LoginActions = LoginSlice.actions;

export default LoginSlice.reducer;
