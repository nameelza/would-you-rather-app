import { _getQuestions } from "../utils/_DATA";
import {
  receiveUnansweredQuestions,
  receiveAnsweredQuestions,
  clearOutQuestions,
} from "./questions";
import { setAuthedUser, signOutUser } from "./authedUser";

export function handleSignIn(user) {
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(setAuthedUser(user.id));

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
    });
  };
}

export function handleSignOut() {
  return (dispatch) => {
    dispatch(signOutUser());
    dispatch(clearOutQuestions());
  };
}
