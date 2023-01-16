import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../models/interfaces";

interface GithubState {
  openedArticle: IArticle | null;
}

const initialState: GithubState = {
  openedArticle: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle(state, action: PayloadAction<IArticle>) {
      state.openedArticle = action.payload;
    },
  },
});

export const articleActions = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
