import axios from "axios";
import types from "./types";

export const fetchCaseStudies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.CASE_STUDIES_LOADING });
      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/case-studies`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      dispatch({ type: types.CASE_STUDIES_DATA, payload: results });
    } catch (error) {
      dispatch({
        type: types.CASE_STUDIES_ERROR,
        payload: "Could not get case studies",
      });
    }
  };
};
