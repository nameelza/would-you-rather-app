import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { updateUser, saveUserAnswer } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export const GET_UNANSWERED_QUESTIONS = "RECEIVE_UNANSWERED_QUESTIONS";
export const GET_ANSWERED_QUESTIONS = "RECEIVE_ANSWERED_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

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

    dispatch(showLoading());
    return _saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(updateUser({ question, authedUser }));
      dispatch(hideLoading());
    });
  };
}

function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: "SAVE_QUESTION_ANSWER",
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveQuestionAnswer)
      dispatch(saveUserAnswer)
    });
  };
}
