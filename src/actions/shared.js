import { _getQuestions } from "../utils/_DATA";
import { receiveQuestions } from "./unansweredQuestions";
import { setAuthedUser } from "./authedUser";

export function handleSignIn(userId) {
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(setAuthedUser(userId))
      dispatch()
    });
  };
}
