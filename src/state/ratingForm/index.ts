import axios from "axios";
import types from "./types";

export const openFirstSlide = () => {
  return { type: types.OPEN_FIRST_SLIDE };
};

export const openPositiveSlide = () => {
  return { type: types.OPEN_POSITIVE_SLIDE };
};

export const openNegativeSlide = () => {
  return { type: types.OPEN_NEGATIVE_SLIDE };
};

export const postUserRatings = (data) => {
  return async (dispatch) => {
    const onSuccess = (success) => {
      dispatch({ type: types.POST_RATINGS_SUCCESS, payload: success });
      dispatch({ type: types.UPDATE_FORM_DATA, payload: data });
      return success;
    };
    const onError = (error) => {
      dispatch({ type: types.POST_RATINGS_ERROR, payload: error });
      return error;
    };
    try {
      dispatch({ type: types.POST_RATINGS_LOADING });

      const response = await fetch(
        "https://2nvuxm005l.execute-api.eu-west-2.amazonaws.com/dev/ratings",
        {
          method: "POST",
          headers: {
            "x-api-key": "Yrk599WubJnrSBduwMuD7s0nN36TVlH7OILwOcT8",
          },
          body: JSON.stringify({
            ...data,
          }),
        }
      );
      const res = await response.json();

      return onSuccess(res);
    } catch (error) {
      return onError(error);
    }
  };
};

export const postUserFeedback = (data) => {
  return async (dispatch) => {
    const onSuccess = (success) => {
      dispatch({ type: types.POST_FEEDBACK_LOADING, payload: success });
      dispatch({ type: types.OPEN_FIRST_SLIDE });
      return success;
    };
    const onError = (error) => {
      dispatch({
        type: types.POST_FEEDBACK_ERROR,
        payload: "Something went wrong. Please try again",
      });
      setTimeout(() => {
        dispatch({ type: types.POST_FEEDBACK_ERROR, payload: null });
      }, 3000);
      return error;
    };
    try {
      dispatch({ type: types.POST_FEEDBACK_LOADING });

      const response = await fetch(
        "https://2nvuxm005l.execute-api.eu-west-2.amazonaws.com/dev/feedback",
        {
          method: "POST",
          headers: {
            "x-api-key": "Yrk599WubJnrSBduwMuD7s0nN36TVlH7OILwOcT8",
          },
          body: JSON.stringify({
            ...data,
          }),
        }
      );
      const res = await response.json();

      return onSuccess(res);
    } catch (error) {
      return onError(error);
    }
  };
};
