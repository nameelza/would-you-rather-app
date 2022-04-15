import { GET_ANSWERED_QUESTIONS, ADD_QUESTION_ANSWER } from "../actions/questions";

export default function answeredQuestions(state = {}, action) {
  switch (action.type) {
    case GET_ANSWERED_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION_ANSWER:
      return {
      }
    default:
      return state;
  }
}