import axios from "axios";
import types from "./types";

export const fetchAdviceAndRealStoriesVideo = (tag) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.ADVICE_AND_REAL_STORIES_VIDEO_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/videos?phrase=${tag}&limit=1`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      dispatch({
        type: types.ADVICE_AND_REAL_STORIES_VIDEO_DATA,
        payload: results[0],
      });
    } catch (error) {
      dispatch({
        type: types.ADVICE_AND_REAL_STORIES_VIDEO_ERROR,
        payload: "Could not get case studies",
      });
    }
  };
};

export const fetchAdviceAndRealStories = (tag) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.ADVICE_AND_REAL_STORIES_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/articles?phrase=${tag}&type=expert-advice&limit=4`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      dispatch({ type: types.ADVICE_AND_REAL_STORIES_DATA, payload: results });
    } catch (error) {
      dispatch({
        type: types.ADVICE_AND_REAL_STORIES_ERROR,
        payload: "Could not get case studies",
      });
    }
  };
};
