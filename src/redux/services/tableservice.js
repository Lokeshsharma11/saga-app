import requestWithToken from "../../request/requestWithtoken";

export const tableService = (data) => {
  return requestWithToken({
    url: `useraccount`,
    method: 'GET',
    data
  });
};
