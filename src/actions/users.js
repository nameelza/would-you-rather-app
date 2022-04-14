import { _getUsers } from "../utils/_DATA";

export const GET_USERS = "GET_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

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

export function updateUser({question, authedUser}) {
  return {
    type: UPDATE_USER,
    questionId: question.id,
    authedUser,
  };
}

export function saveUserAnswer(authedUser, qid, answer) {
  return{
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer
  }
}


