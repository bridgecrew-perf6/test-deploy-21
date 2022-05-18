import types from "./types";

export const openSupportModal = () => {
  return { type: types.OPEN_SUPPORT_MODAL };
};

export const openSearchModal = () => {
  return { type: types.OPEN_SEARCH_MODAL };
};

export const openLocationSearchModal = () => {
  return { type: types.OPEN_LOCATION_SEARCH_MODAL };
};

export const closeLocationSearchModal = () => {
  return { type: types.CLOSE_LOCATION_SEARCH_MODAL };
};

export const openVideoOverlay = (videoId: string) => {
  return { type: types.OPEN_VIDEO_OVERLAY, payload: videoId };
};

export const closeModals = () => {
  return { type: types.CLOSE_MODALS };
};
