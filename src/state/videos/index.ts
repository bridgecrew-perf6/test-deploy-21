import axios from "axios";
import types from "./types";

export const fetchVideos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.VIDEOS_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/videos`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      let videos = results.filter(
        (v, i, a) => a.findIndex((t) => t.video_id === v.video_id) === i
      );

      dispatch({
        type: types.VIDEOS_DATA,
        payload: videos,
      });
    } catch (error) {
      dispatch({
        type: types.VIDEOS_ERROR,
        payload: "Could not get videos",
      });
    }
  };
};
