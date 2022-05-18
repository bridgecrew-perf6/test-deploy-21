import axios from "axios";
import types from "./types";

export const fetchForumPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.FORUM_POSTS_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/forum-posts?phrase=a`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      dispatch({
        type: types.FORUM_POSTS_DATA,
        payload: results,
      });
    } catch (error) {
      console.log("Error is: ", error);
      dispatch({
        type: types.FORUM_POSTS_ERROR,
        payload: "Could not get forum posts",
      });
    }
  };
};
