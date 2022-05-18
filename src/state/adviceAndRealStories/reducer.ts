import types from "./types";

const initialState = {
  adviceAndRealStoriesLoading: false,
  adviceAndRealStoriesData: [],
  adviceAndRealStoriesError: null,

  adviceAndRealStoriesVideoLoading: false,
  adviceAndRealStoriesVideo: {},
  adviceAndRealStoriesVideoError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADVICE_AND_REAL_STORIES_LOADING:
      return {
        ...state,
        adviceAndRealStoriesLoading: true,
        adviceAndRealStoriesData: [],
        adviceAndRealStoriesError: null,
      };
    case types.ADVICE_AND_REAL_STORIES_DATA:
      return {
        ...state,
        adviceAndRealStoriesLoading: false,
        adviceAndRealStoriesData: action.payload,
        adviceAndRealStoriesError: null,
      };
    case types.ADVICE_AND_REAL_STORIES_ERROR:
      return {
        ...state,
        adviceAndRealStoriesLoading: false,
        adviceAndRealStoriesData: [],
        adviceAndRealStoriesError: action.payload,
      };
    case types.ADVICE_AND_REAL_STORIES_VIDEO_LOADING:
      return {
        ...state,
        adviceAndRealStoriesVideoLoading: true,
        adviceAndRealStoriesVideo: {},
      };
    case types.ADVICE_AND_REAL_STORIES_VIDEO_DATA:
      return {
        ...state,
        adviceAndRealStoriesVideoLoading: false,
        adviceAndRealStoriesVideo: action.payload,
      };
    case types.ADVICE_AND_REAL_STORIES_VIDEO_ERROR:
      return {
        ...state,
        adviceAndRealStoriesVideoLoading: false,
        adviceAndRealStoriesVideo: {},
        adviceAndRealStoriesVideoError: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
