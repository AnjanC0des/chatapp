import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {},
  reducers: {},
});

export const LoginActions = ChatSlice.actions;

export default ChatSlice.reducer;
