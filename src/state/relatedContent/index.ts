import axios from "axios";
import types from "./types";

export const fetchRelatedContent = (title) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.RELATED_CONTENT_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/related-content?title=${title}&limit=5`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      dispatch({
        type: types.RELATED_CONTENT_DATA,
        payload: results,
      });
    } catch (error) {
      dispatch({
        type: types.RELATED_CONTENT_ERROR,
        payload: "Could not get related content",
      });
    }
  };
};
