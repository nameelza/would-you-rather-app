import { ADD_QUESTION, GET_UNANSWERED_QUESTIONS, REMOVE_QUESTION} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_UNANSWERED_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case REMOVE_QUESTION:
      const { qid, ...oldState } = state;
      return {
        ...oldState
      }
    default:
      return state;
  }
}
