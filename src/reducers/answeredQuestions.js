import { GET_ANSWERED_QUESTIONS } from "../actions/questions";

export default function answeredQuestions(state = {}, action) {
  switch (action.type) {
    case GET_ANSWERED_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}