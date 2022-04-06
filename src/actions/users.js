import { _getUsers } from "../utils/_DATA";

export const GET_USERS = "GET_USERS";

function receiveUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function getUsers() {
  return (dispatch) => {
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}
