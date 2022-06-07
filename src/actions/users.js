import { showLoading, hideLoading } from "react-redux-loading";
import { _getUsers } from "../utils/_DATA";

const GET_USERS = "GET_USERS";
const UPDATE_USER = "UPDATE_USER";
const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

function receiveUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

function getUsers() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
}

function updateUser({ question, authedUser }) {
  return {
    type: UPDATE_USER,
    questionId: question.id,
    authedUser,
  };
}

function saveUserAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export {
  saveUserAnswer,
  updateUser,
  getUsers,
  GET_USERS,
  UPDATE_USER,
  SAVE_USER_ANSWER,
};
