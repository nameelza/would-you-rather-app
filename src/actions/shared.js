import { _getQuestions } from "../utils/_DATA";
import {
  receiveUnansweredQuestions,
  receiveAnsweredQuestions,
} from "./questions";
import { setAuthedUser } from "./authedUser";

export function handleSignIn(user) {
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(setAuthedUser(user));
      dispatch(
        receiveUnansweredQuestions(
          questions.filter((question) => {
            return !user.answers.includes(question.id);
          })
        )
      );
      dispatch(
        receiveAnsweredQuestions(
          questions.filter((question) => {
            return user.answers.includes(question.id);
          })
        )
      );
    });
  };
}
