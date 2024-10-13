import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(_, action) {
      return action.payload;
    },
    clearUser() {
      return null;
    },
  },
});

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;
