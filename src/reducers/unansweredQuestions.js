import { ADD_QUESTION, GET_UNANSWERED_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_UNANSWERED_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;
      console.log("question", question);
      return {
        ...state,
        [question.id]: question,
      };
    default:
      return state;
  }
}
