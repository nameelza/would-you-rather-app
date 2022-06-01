import { showLoading, hideLoading } from "react-redux-loading";
import { _getQuestions } from "../utils/_DATA";
import {
  receiveUnansweredQuestions,
  receiveAnsweredQuestions,
  clearOutQuestions,
} from "./questions";
import { setAuthedUser, signOutUser } from "./authedUser";

export function handleSignIn(user) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(setAuthedUser(user.id));
    return _getQuestions().then((questions) => {
      // filter out questions that the user hasn't answered
      const unanswered = Object.keys(questions)
        .filter((key) => !(key in user.answers))
        .reduce((obj, key) => {
          return Object.assign(obj, {
            [key]: questions[key],
          });
        }, {});
      dispatch(receiveUnansweredQuestions(unanswered));

      // filter out questions that the user has answered
      const answered = Object.keys(questions)
        .filter((key) => key in user.answers)
        .reduce((obj, key) => {
          return Object.assign(obj, {
            [key]: questions[key],
          });
        }, {});
      dispatch(receiveAnsweredQuestions(answered));
      dispatch(hideLoading());
    });
  };
}

export function handleSignOut() {
  return (dispatch) => {
    dispatch(signOutUser());
    dispatch(clearOutQuestions());
  };
}
