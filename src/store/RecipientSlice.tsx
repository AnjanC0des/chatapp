import { createSlice } from "@reduxjs/toolkit";

const ActiveRecipient = createSlice({
  name: "active",
  initialState: null,
  reducers: {
    setActiveRecipient(_, action) {
      console.log(action.payload);
      return action.payload;
    },
    clearActiveRecipient() {
      return null;
    },
  },
});

const RecipientList = createSlice({
  name: "recipients",
  initialState: [],
  reducers: {
    setRecipients(_, action) {
      return action.payload;
    },
    clearRecipients() {
      return [];
    },
  },
});

export const ActiveRecipientActions = ActiveRecipient.actions;
export const RecipientListActions = RecipientList.actions;

export const ActiveRecipientReducer = ActiveRecipient.reducer;
export const RecipientListReducer = RecipientList.reducer;
