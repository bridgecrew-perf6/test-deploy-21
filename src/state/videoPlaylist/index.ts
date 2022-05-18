import axios from "axios";
import types from "./types";

export const fetchVideoPlaylist = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.VIDEO_PLAYLIST_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/playlists`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      // let videos = results.filter(
      //   (v, i, a) => a.findIndex((t) => t.video_id === v.video_id) === i
      // );

      const playlist = results.filter(
        (playlist: { playlist_id: string }) =>
          playlist.playlist_id === "PLLQEg_J20uTg0W9cAD5HQI5PWcraltc9i"
      );

      dispatch({
        type: types.VIDEO_PLAYLIST_DATA,
        payload: playlist,
      });
    } catch (error) {
      dispatch({
        type: types.VIDEO_PLAYLIST_ERROR,
        payload: "Could not get videos",
      });
    }
  };
};

export const setActiveVideo = (activeVideo: any) => {
  return { type: types.SET_ACTIVE_VIDEO, payload: activeVideo };
};
