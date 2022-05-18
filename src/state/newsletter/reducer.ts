import types from "./types";

const initialState = {
  userNewsletterEmail: null,
  newsLetterLoading: false,
  newsLetterData: null,
  newsLetterError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_EMAIL:
      return {
        ...state,
        userNewsletterEmail: action.payload,
      };
    case types.NEWS_LETTER_LOADING:
      return {
        ...state,
        newsLetterLoading: true,
        newsLetterData: null,
        newsLetterError: null,
      };
    case types.NEWS_LETTER_DATA:
      return {
        ...state,
        userNewsletterEmail: null,
        newsLetterLoading: false,
        newsLetterData: action.payload,
        newsLetterError: null,
      };
    case types.NEWS_LETTER_ERROR:
      return {
        ...state,
        userNewsletterEmail: null,
        newsLetterLoading: false,
        newsLetterData: null,
        newsLetterError: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
