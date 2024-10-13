import { createSlice } from "@reduxjs/toolkit";
const MessageSlice = createSlice({
  name: "message",
  initialState: {
    last: null,
    messages: [] as any[],
  },
  reducers: {
    setMessages(state, action) {
      state.messages = [...action.payload];
    },
    addMessages(state, action) {
      state.messages = [...state.messages, action.payload];
    },
    clearMessages(state) {
      state.messages = [];
      state.last = null;
    },
  },
});

export const MessageActions = MessageSlice.actions;
export default MessageSlice.reducer;
