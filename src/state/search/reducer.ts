import types from "./types";

const initialState = {
  searchCategoriesLoading: false,
  searchCategoriesError: null,
  searchCategoriesData: [],

  searchResultsLoading: false,
  searchResultsError: null,
  searchResultsData: [],

  typeOfContentData: [],

  appliedFilters: {
    categories: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_RESULTS_LOADING:
      return {
        ...state,
        searchResults: true,
        searchResultsData: [],
        searchResultsError: null,
      };
    case types.SEARCH_RESULTS_DATA:
      return {
        ...state,
        searchResults: false,
        searchResultsData: action.payload,
        searchResultsError: null,
      };
    case types.SEARCH_RESULTS_ERROR:
      return {
        ...state,
        searchResults: false,
        searchResultsData: [],
        searchResultsError: action.payload,
      };
    case types.SEARCH_CATEGORIES_LOADING:
      return {
        ...state,
        searchCategoriesLoading: true,
        searchCategoriesData: [],
        searchCategoriesError: null,
      };
    case types.SEARCH_CATEGORIES_DATA:
      return {
        ...state,
        searchCategoriesLoading: false,
        searchCategoriesData: action.payload,
        searchCategoriesError: null,
      };
    case types.SEARCH_CATEGORIES_ERROR:
      return {
        ...state,
        searchCategoriesLoading: false,
        searchCategoriesData: [],
        searchCategoriesError: action.payload,
      };

    case types.UPDATE_TYPE_OF_CONTENT:
      const updatedArray = state.typeOfContentData.map((a) => {
        if (a.name == action.payload.name) {
          a.checked = action.payload.checked;
        }
        return a;
      });

      return {
        ...state,
        typeOfContentData: updatedArray,
      };

    case types.UPDATE_TYPE_OF_CATEGORY:
      const updatedCategory = state.searchCategoriesData.map((a) => {
        if (a.name == action.payload.name) {
          a.checked = action.payload.checked;
        }
        return a;
      });

      return {
        ...state,
        searchCategoriesData: updatedCategory,
      };

    case types.SET_TYPE_OF_CONTENT:
      return {
        ...state,
        typeOfContentData: action.payload,
      };

    case types.UPDATE_CHECKED_CATEGORIES_IN_APPLIED_FILTERS:
      const checkedCategories = state.searchCategoriesData.filter(
        (category) => {
          return category.checked === true;
        }
      );

      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          categories: checkedCategories,
        },
      };

    case types.UPDATE_APPLIED_FILTERS:
      return {
        ...state,
        appliedFilters: action.payload,
      };

    case types.UPDATE_TYPE_OF_CATEGORY_FROM_NAVIGATION:
      const findActiveCategory = state.searchCategoriesData.filter(
        (category) => {
          return category.name === action.payload;
        }
      );

      // set to checked
      const updateFindActiveCategoryToChecked = findActiveCategory.map((a) => {
        a.checked = true;

        return a;
      });

      console.log("Find is: ", action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
