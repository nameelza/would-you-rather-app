import { _saveQuestion } from "../utils/_DATA";
import { updateUser } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export const GET_UNANSWERED_QUESTIONS = "RECEIVE_UNANSWERED_QUESTIONS";
export const GET_ANSWERED_QUESTIONS = "RECEIVE_ANSWERED_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveUnansweredQuestions(questions) {
  return {
    type: GET_UNANSWERED_QUESTIONS,
    questions,
  };
}

export function receiveAnsweredQuestions(questions) {
  return {
    type: GET_ANSWERED_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion({ optionOne, optionTwo }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return _saveQuestion({ optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser }).then(
      (question) => {
        dispatch(showLoading());
        dispatch(addQuestion(question));
        dispatch(updateUser({question, authedUser}));
        dispatch(hideLoading());
      }
    );
  };
}
