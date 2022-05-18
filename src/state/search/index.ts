import axios from "axios";
import types from "./types";

const typeOfContent = [
  {
    type: "Video",
    name: "video",
    checked: false,
  },
  {
    type: "Article",
    name: "article",
    checked: false,
  },
  {
    type: "Organisation",
    name: "organisation",
    checked: false,
  },
  {
    type: "Forum Topics",
    name: "forum-topics",
    checked: false,
  },
];

export const fetchSearchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SEARCH_CATEGORIES_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/categories`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      const newResults = results.map((category) => {
        category["checked"] = false;
        return category;
      });

      dispatch({
        type: types.SEARCH_CATEGORIES_DATA,
        payload: newResults,
      });
    } catch (error) {
      dispatch({
        type: types.SEARCH_CATEGORIES_ERROR,
        payload: "Could not fetch categories",
      });
    }
  };
};

export const updateTypeOfCategory = (category) => {
  return (dispatch) => {
    const checked = category.checked;
    const update = { ...category, checked: !checked };

    dispatch({ type: types.UPDATE_TYPE_OF_CATEGORY, payload: update });

    // update checked categories in applied filters object
    dispatch({ type: types.UPDATE_CHECKED_CATEGORIES_IN_APPLIED_FILTERS });
  };
};

export const updatTypeOfCategoryFromNavigation = (categoryTitle) => {
  return {
    type: types.UPDATE_TYPE_OF_CATEGORY_FROM_NAVIGATION,
    payload: categoryTitle,
  };
};

export const fetchResults = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SEARCH_RESULTS_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/all`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      dispatch({
        type: types.SEARCH_RESULTS_DATA,
        payload: results,
      });
    } catch (error) {
      dispatch({
        type: types.SEARCH_RESULTS_ERROR,
        payload: "Could not fetch",
      });
    }
  };
};

export const setTypeOfContent = () => {
  return { type: types.SET_TYPE_OF_CONTENT, payload: typeOfContent };
};

export const updateTypeOfContent = (content) => {
  const checked = content.checked;
  const update = { ...content, checked: !checked };

  return { type: types.UPDATE_TYPE_OF_CONTENT, payload: update };
};
