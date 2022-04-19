import { ADD_QUESTION, GET_UNANSWERED_QUESTIONS, REMOVE_QUESTION, CLEAR_OUT_UNANSWERED} from "../actions/questions";

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
      const qid = action.qid;
      const { [qid]: value, ...oldState } = state;
      return {
        ...oldState
      }
    case CLEAR_OUT_UNANSWERED:
      return {};
    default:
      return state;
  }
}
