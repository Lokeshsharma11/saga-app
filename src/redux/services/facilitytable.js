import requestWithToken from "../../request/requestWithtoken";

export const facilitytableService = (data) => {
  return requestWithToken({
    url: `swipetracker`,
    method: 'GET',
    data
  });
};
