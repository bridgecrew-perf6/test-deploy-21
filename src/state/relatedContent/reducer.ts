import types from "./types";

const initialState = {
  relatedContentLoading: false,
  relatedContentData: {
    videos: [],
    articles: [],
    forum_posts: [],
    localservices: [],
  },
  relatedContentError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RELATED_CONTENT_LOADING:
      return {
        ...state,
        relatedContentLoading: true,
        relatedContentData: [],
        relatedContentError: null,
      };
    case types.RELATED_CONTENT_DATA:
      return {
        ...state,
        relatedContentLoading: false,
        relatedContentData: {
          ...initialState.relatedContentData,
          ...action.payload,
        },
        relatedContentError: null,
      };
    case types.RELATED_CONTENT_ERROR:
      return {
        ...state,
        relatedContentLoading: false,
        relatedContentData: [],
        relatedContentError: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
