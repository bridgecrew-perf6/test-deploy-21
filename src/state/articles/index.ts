import axios from "axios";

import types from "./types";

export const fetchArticles = (articles) => {
  return { type: types.FETCH_ARTICLES, payload: articles };
};

export const fetchAllArticles = () => {
  console.log("Fetching articles ***********");
  return async (dispatch) => {
    try {
      dispatch({ type: types.FETCH_ALL_ARTICLES_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/articles?phrase=a&limit=50`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      dispatch({ type: types.FETCH_ALL_ARTICLES_DATA, payload: results });
    } catch (error) {
      dispatch({
        type: types.FETCH_ALL_ARTICLES_ERROR,
        payload: "Could not get articles",
      });
    }
  };
};

export const fetchSingleArticle = (phrase) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.FETCH_ONE_ARTICLES_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/articles?phrase=${phrase}&limit=1`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      dispatch({ type: types.FETCH_ONE_ARTICLES_DATA, payload: results[0] });
    } catch (error) {
      dispatch({
        type: types.FETCH_ONE_ARTICLES_ERROR,
        payload: "Could not get article",
      });
    }
  };
};
