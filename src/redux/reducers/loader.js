import { START_LOADER, STOP_LOADER } from "../action";

const initialCommonState = {
  loader: false
};

const LoaderReducer = (state = initialCommonState, action) => {
  switch (action.type) {
    case START_LOADER:
      return {
        ...state,
        loader: true
      };
    case STOP_LOADER:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
};

export default LoaderReducer;
