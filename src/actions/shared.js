import { _getQuestions } from "../utils/_DATA";
import {
  receiveUnansweredQuestions,
  receiveAnsweredQuestions,
} from "./questions";
import { setAuthedUser } from "./authedUser";

export function handleSignIn(user) {
  console.log("handleSignIn", user);
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(setAuthedUser(user.id));

      // filter out questions that the user hasn't answered
      const unanswered = Object.entries(questions).filter(([key, value]) => {
        return !(key in user.answers);
      });
      dispatch(receiveUnansweredQuestions(Object.fromEntries(unanswered)));

      // filter out questions that the user has answered
      const answered = Object.entries(questions).filter(([key, value]) => {
        return key in user.answers;
      });
      dispatch(receiveAnsweredQuestions(Object.fromEntries(answered)));
    });
  };
}
