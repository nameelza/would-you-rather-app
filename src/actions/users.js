import { _getUsers } from "../utils/_DATA";

export const GET_USERS = "GET_USERS";
export const UPDATE_USER = "UPDATE_USER";

function receiveUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function updateUser({question, authedUser}) {
  return {
    type: UPDATE_USER,
    questionId: question.id,
    authedUser,
  };
}

export function getUsers() {
  return (dispatch) => {
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}
