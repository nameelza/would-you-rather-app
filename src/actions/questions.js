import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { updateUser, saveUserAnswer } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export const GET_UNANSWERED_QUESTIONS = "RECEIVE_UNANSWERED_QUESTIONS";
export const GET_ANSWERED_QUESTIONS = "RECEIVE_ANSWERED_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const CLEAR_OUT_ANSWERED = "CLEAR_OUT_ANSWERED";
export const CLEAR_OUT_UNANSWERED = "CLEAR_OUT_UNANSWERED";

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

function addQuestionAnswer(authedUser, qid, question, answer) {
  return {
    type: "ADD_QUESTION_ANSWER",
    authedUser,
    qid,
    question,
    answer,
  };
}

function removeQuestion(qid) {
  return {
    type: "REMOVE_QUESTION",
    qid,
  };
}

export function handleSaveAnswer(authedUser, qid, question, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addQuestionAnswer(authedUser, qid, question, answer));
      dispatch(removeQuestion(qid));
      dispatch(saveUserAnswer(authedUser, qid, answer));
    });
  };
}

function clearOutAnswered() {
  return {
    type: "CLEAR_OUT_ANSWERED",
  };
}

function clearOutUnanswered() {
  return {
    type: "CLEAR_OUT_UNANSWERED",
  };
}

export function clearOutQuestions() {
  return (dispatch) => {
    dispatch(clearOutUnanswered());
    dispatch(clearOutAnswered());
  }
}
