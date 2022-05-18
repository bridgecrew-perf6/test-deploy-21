import types from "./types";

const initialState = {
  isSupportModalOpen: false,
  isSearchModalOpen: false,
  isSearchLocationModalOpen: false,
  isVideoOverlayOpen: false,
  activeVideoId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_SUPPORT_MODAL:
      return {
        ...state,
        isSupportModalOpen: true,
      };
    case types.OPEN_SEARCH_MODAL:
      return {
        ...state,
        isSearchModalOpen: true,
      };
    case types.OPEN_LOCATION_SEARCH_MODAL:
      return {
        ...state,
        isSearchLocationModalOpen: true,
      };
    case types.CLOSE_LOCATION_SEARCH_MODAL:
      return {
        ...state,
        isSearchLocationModalOpen: false,
      };
    case types.OPEN_VIDEO_OVERLAY:
      return {
        ...state,
        isVideoOverlayOpen: true,
        activeVideoId: action.payload,
      };
    case types.CLOSE_MODALS:
      return {
        ...state,
        isSupportModalOpen: false,
        isSearchModalOpen: false,
        isVideoOverlayOpen: false,
        activeVideoId: null,
      };
    default:
      return state;
  }
};

export default reducer;
