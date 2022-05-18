import types from "./types";

const initialState = {
  videoPlaylistLoading: false,
  videoPlaylistData: [],
  videoPlaylistError: null,

  activeVideo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VIDEO_PLAYLIST_LOADING:
      return {
        ...state,
        videoPlaylistLoading: true,
        videoPlaylistData: [],
        videoPlaylistError: null,
        activeVideo: {},
      };
    // when we fetch all videos, set the first one to active
    case types.VIDEO_PLAYLIST_DATA:
      return {
        ...state,
        videoPlaylistLoading: false,
        videoPlaylistData: action.payload,
        videoPlaylistError: null,
        activeVideo: action.payload[0].videos[0],
      };
    case types.VIDEO_PLAYLIST_ERROR:
      return {
        ...state,
        videoPlaylistLoading: false,
        videoPlaylistData: [],
        videoPlaylistError: action.payload,
      };

    case types.SET_ACTIVE_VIDEO:
      return {
        ...state,
        activeVideo: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
