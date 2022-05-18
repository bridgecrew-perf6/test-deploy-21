import axios from "axios";
import types from "./types";

export const setUserEmail = (email: string) => {
  return { type: types.SET_USER_EMAIL, payload: email };
};

export const setNewsletter = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.NEWS_LETTER_LOADING });

      setTimeout(() => {
        dispatch({ type: types.NEWS_LETTER_DATA, payload: "success" });
      }, 2000);
    } catch (error) {
      dispatch({
        type: types.NEWS_LETTER_ERROR,
        payload: "Could not get forum posts",
      });
    }
  };
};
