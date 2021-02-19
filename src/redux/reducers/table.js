import { SET_TABLE_DATA } from "../action";
const initialCommonState = {
  tableData: [],
};

const TableReducer = (state = initialCommonState, action) => {
  console.log("Action", action);
  switch (action.type) {
    case SET_TABLE_DATA:
      return {
        ...state,
        tableData: action.data,
      };
    default:
      return state;
  }
};

export default TableReducer;
