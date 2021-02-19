export const GET_TABLE_DATA = "GET_TABLE_DATA";
export const SET_TABLE_DATA = "SET_TABLE_DATA";

export const getTableData = (payload, success) => {
  console.log("getTableData", payload)
  return {
    type: GET_TABLE_DATA,
    payload,
    success
  };
};

export const setTableData = data => {
  return {
    type: SET_TABLE_DATA,
    data
  };
};