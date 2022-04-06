export const RECEIVE_UNANSWERED_QUESTIONS = "RECEIVE_UNANSWERED_QUESTIONS";
export const RECEIVE_ANSWERED_QUESTIONS = "RECEIVE_ANSWERED_QUESTIONS";

export function receiveUnansweredQuestions(questions) {
  return {
    type: RECEIVE_UNANSWERED_QUESTIONS,
    questions,
  };
}

export function receiveAnsweredQuestions(questions) {
  return {
    type: RECEIVE_ANSWERED_QUESTIONS,
    questions,
  };
}
