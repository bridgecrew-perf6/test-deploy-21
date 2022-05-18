import types from "./types";

const initialState = {
  videosLoading: false,
  videosData: [],
  videosError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VIDEOS_LOADING:
      return {
        ...state,
        videosLoading: true,
        videosData: [],
        videosError: null,
      };
    case types.VIDEOS_DATA:
      return {
        ...state,
        videosLoading: false,
        videosData: action.payload,
        videosError: null,
      };
    case types.VIDEOS_ERROR:
      return {
        ...state,
        videosLoading: false,
        videosData: [],
        videosError: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
