import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
  name: "message",
  initialState: { last: null, messages: [] as any[] },
  reducers: {
    setMessages(state, action) {
      state.messages = [...action.payload];
      try {
        let lastMessage = state.messages.at(-1);
        state.last =
          lastMessage == undefined || lastMessage.id == undefined
            ? null
            : lastMessage.id;
      } catch (e) {
        console.log(
          "Last message not updated. Recieved messages might be empty."
        );
      }
    },
    addMessages(state, action) {
      let newMessages = action.payload;
      state.messages.push(...newMessages);
    },
    clearMessages(state) {
      state.messages = [];
      state.last = null;
    },
  },
});

export const MessageActions = MessageSlice.actions;
export default MessageSlice.reducer;
