export const GET_FACILITY_DATA = "GET_FACILITY_DATA";
export const SET_FACILITY_DATA = "SET_FACILITY_DATA";

export const getFacilityTableData = (payload, success) => {
  console.log("getFacilityTableData", payload)
  return {
    type: GET_FACILITY_DATA,
    payload,
    success
  };
};

export const setFacilityTableData = data => {
  return {
    type: SET_FACILITY_DATA,
    data
  };
};