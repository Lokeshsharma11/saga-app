export const START_LOADER = "START_LOADER";
export const STOP_LOADER = "STOP_LOADER";
export const SET_INITIAL_PAGE = "SET_INITIAL_PAGE";

export const startLoader = () => {
  return {
    type: START_LOADER
  };
};

export const stopLoader = () => {
  return {
    type: STOP_LOADER
  };
};

export const setInitialPage = isInitialPage => {
  return {
    type: SET_INITIAL_PAGE,
    isInitialPage
  };
};
