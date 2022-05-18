import types from "./types";

const initialState = {
  isFirstSlideOpen: true,
  isPositiveSlideOpen: false,
  isNegativeSlideOpen: false,
  formData: {
    id: null,
    type: "",
    score: 0,
    reason: "",
  },
  isPostRatingsLoading: false,
  isPostRatingsData: {},
  isPostRatingsError: null,

  isPostFeedbackLoading: false,
  isPostFeedbackData: null,
  isPostFeedbackError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_FIRST_SLIDE:
      return {
        ...state,
        isFirstSlideOpen: true,
        isPositiveSlideOpen: false,
        isNegativeSlideOpen: false,
      };
    case types.OPEN_POSITIVE_SLIDE:
      return {
        ...state,
        isFirstSlideOpen: false,
        isPositiveSlideOpen: true,
        isNegativeSlideOpen: false,
      };
    case types.OPEN_NEGATIVE_SLIDE:
      return {
        ...state,
        isFirstSlideOpen: false,
        isPositiveSlideOpen: false,
        isNegativeSlideOpen: true,
      };
    case types.UPDATE_FORM_DATA:
      console.log("Action is: ", action);
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      };
    case types.POST_RATINGS_LOADING:
      return {
        ...state,
        isPostRatingsLoading: true,
        isPostRatingsData: {},
        isPostRatingsError: null,
      };
    case types.POST_RATINGS_SUCCESS:
      return {
        ...state,
        isPostRatingsLoading: false,
        isPostRatingsData: action.payload,
        isPostRatingsError: null,
      };
    case types.POST_RATINGS_ERROR:
      return {
        ...state,
        isPostRatingsLoading: false,
        isPostRatingsData: {},
        isPostRatingsError: action.payload,
      };

    case types.POST_FEEDBACK_LOADING:
      return {
        ...state,
        isPostFeedbackLoading: true,
        isPostFeedbackData: null,
        isPostFeedbackError: null,
      };
    case types.POST_FEEDBACK_SUCCESS:
      return {
        ...state,
        isPostFeedbackLoading: false,
        isPostFeedbackData: action.payload,
        isPostFeedbackError: null,
      };
    case types.POST_FEEDBACK_ERROR:
      return {
        ...state,
        isPostFeedbackLoading: false,
        isPostFeedbackData: null,
        isPostFeedbackError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
