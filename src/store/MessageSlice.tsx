import { createSlice } from "@reduxjs/toolkit";
import { messages } from "@/State";
const MessageSlice = createSlice({
  name: "message",
  initialState: {
    last: null,
    messages: [] as any[],
    allMessages: { ...messages },
  },
  reducers: {
    setMessages(state, action) {
      console.log(action.payload);
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
      let newMessages = action.payload.messageobj;
      let id = action.payload.active;
      state.allMessages[id].push(newMessages);
    },
    clearMessages(state) {
      state.messages = [];
      state.last = null;
    },
  },
});

export const MessageActions = MessageSlice.actions;
export default MessageSlice.reducer;
