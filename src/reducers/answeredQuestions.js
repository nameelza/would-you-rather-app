import {
  GET_ANSWERED_QUESTIONS,
  ADD_QUESTION_ANSWER,
  CLEAR_OUT_ANSWERED,
} from "../actions/questions";

export default function answeredQuestions(state = {}, action) {
  switch (action.type) {
    case GET_ANSWERED_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...action.question,
          [action.answer]: {
            ...action.question[action.answer],
            votes: [...action.question[action.answer].votes, action.authedUser],
          },
        },
      };
    case CLEAR_OUT_ANSWERED:
      return {};
    default:
      return state;
  }
}
