import { combineReducers } from "redux";
import users from "./users";
import answeredQuestions from "./answeredQuestions";
import unansweredQuestions from "./unansweredQuestions";
import authedUser from "./authedUser";

export default combineReducers({
  users,
  answeredQuestions,
  unansweredQuestions,
  authedUser,
});
