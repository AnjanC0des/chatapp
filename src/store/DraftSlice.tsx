import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// interface MyState {
//   [key: string]: string;
// }
// const initialState: MyState = {};
const DraftSlice = createSlice({
  name: "draft",
  initialState: { x: "abc" },
  reducers: {
    setDraft(state, action) {
      return { ...state, ...action.payload };
    },
    clearDraft(state, action: PayloadAction<string>) {
      const { [action.payload]: _, ...newstate } = state;
      return newstate;
    },
  },
});

export const DraftActions = DraftSlice.actions;
export default DraftSlice.reducer;
