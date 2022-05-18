import types from "./types";

const initialState = {
  loading: false,
  caseStudies: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CASE_STUDIES_LOADING:
      return {
        ...state,
        loading: true,
        caseStudies: [],
        error: null,
      };
    case types.CASE_STUDIES_DATA:
      return {
        ...state,
        loading: false,
        caseStudies: action.payload,
        error: null,
      };
    case types.CASE_STUDIES_ERROR:
      return {
        ...state,
        loading: false,
        caseStudies: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
