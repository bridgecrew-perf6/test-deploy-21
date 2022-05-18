import types from "./types";

const initialState = {
  forumPostsLoading: false,
  forumPostsData: [],
  forumPostsError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FORUM_POSTS_LOADING:
      return {
        ...state,
        forumPostsLoading: true,
        forumPostsData: [],
        forumPostsError: null,
      };
    case types.FORUM_POSTS_DATA:
      return {
        ...state,
        forumPostsLoading: false,
        forumPostsData: action.payload,
        forumPostsError: null,
      };
    case types.FORUM_POSTS_ERROR:
      return {
        ...state,
        forumPostsLoading: false,
        forumPostsData: [],
        forumPostsError: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
