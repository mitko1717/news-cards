import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { articleActions } from "../store/articles/articles.slice";

const actions = {
  ...articleActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
