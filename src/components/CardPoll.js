import React, { Fragment, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { handleSaveAnswer } from "../actions/questions";

function CardPoll() {
  const location = useLocation();
  const { isAnswered, question, avatar } = location.state;
  const { author, optionOne, optionTwo } = question;

  const authedUser = useSelector((state) => state.authedUser);

  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setIsAnswered] = useState(isAnswered);
  const [optionOneAnswer, setAnswerOne] = useState('');
  const [optionTwoAnswer, setAnswerTwo] = useState('');
  const [optionOneVotes, setOptionOneVotes] = useState(optionOne.votes.length);
  const [optionTwoVotes, setOptionTwoVotes] = useState(optionTwo.votes.length);

  const votesCount = optionOneVotes + optionTwoVotes;
  const optionOnePercentage = ((optionOneVotes / votesCount) * 100).toFixed(0);
  const optionTwoPercentage = ((optionTwoVotes / votesCount) * 100).toFixed(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleSaveAnswer(authedUser, question.id, question, selectedOption)
    );
    if (selectedOption === "optionOne") {
      setOptionOneVotes(optionOneVotes + 1);
      setAnswerOne("selected");
      setAnswerTwo("false");
    } else {
      setOptionTwoVotes(optionTwoVotes + 1);
      setAnswerTwo("selected");
      setAnswerOne("false");
    }
    setIsAnswered(true);
  };

  console.log(optionOneAnswer, optionTwoAnswer);

  return (
    <Fragment>
      {answered ? (
        <div className="card">
          <div className="card-header">
            <p>Asked by {author}</p>
          </div>
          <div id="user-card">
            <img
              src={avatar}
              alt={`Avatar of ${author.name}`}
              className="avatar"
            />
            <div>
              <h2>Results:</h2>
              {optionOne.votes.includes(authedUser) ||
              optionOneAnswer === "selected"  ? (
                <div className="poll-answers">
                  <div className="poll-box" id={optionOneAnswer} >
                    <h3>Would you rather {optionOne.text}?</h3>
                    <div className="progress-bar">
                      {optionOnePercentage !== "0" && (
                        <span
                          className="progress"
                          style={{ width: `${optionOnePercentage}%` }}
                        >
                          {optionOnePercentage}%
                        </span>
                      )}
                    </div>
                    <p className="center">
                      {optionOneVotes} out of {votesCount} votes
                    </p>
                  </div>
                  <div className="poll-box" id="id={optionTwoAnswer}">
                    <h3>Would you rather {optionTwo.text}?</h3>
                    <div className="progress-bar">
                      {optionTwoPercentage !== "0" && (
                        <span
                          className="progress"
                          style={{ width: `${optionTwoPercentage}%` }}
                        >
                          {optionTwoPercentage}%
                        </span>
                      )}
                    </div>
                    <p className="center">
                      {optionTwoVotes} out of {votesCount} votes
                    </p>
                  </div>
                </div>
              ) : (
                <div className="poll-answers">
                  <div className="poll-box">
                    <h3>Would you rather {optionOne.text}?</h3>
                    <div className="progress-bar">
                      {optionOnePercentage !== "0" && (
                        <span
                          className="progress"
                          style={{ width: `${optionOnePercentage}%` }}
                        >
                          {optionOnePercentage}%
                        </span>
                      )}
                    </div>
                    <p className="center">
                      {optionOneVotes} out of {votesCount} votes
                    </p>
                  </div>
                  <div id={optionTwoAnswer} className="poll-box">
                    <h3>Would you rather {optionTwo.text}?</h3>
                    <div className="progress-bar">
                      {optionTwoPercentage !== "0" && (
                        <span
                          className="progress"
                          style={{ width: `${optionTwoPercentage}%` }}
                        >
                          {optionTwoPercentage}%
                        </span>
                      )}
                    </div>
                    <p className="center">
                      {optionTwoVotes} out of {votesCount} votes
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-header">
            <p>{author} asks:</p>
          </div>
          <div id="user-card">
            <img
              src={avatar}
              alt={`Avatar of ${author.name}`}
              className="avatar"
            />
            <div>
              <h2>Would you rather</h2>
              <form onSubmit={handleSubmit}>
                <div className="vote-option">
                  <label>
                    <input
                      type="radio"
                      id="optionOne"
                      name="option"
                      value="optionOne"
                      onChange={() => setSelectedOption("optionOne")}
                    />
                    {optionOne.text}
                  </label>
                </div>
                <div className="vote-option">
                  <label>
                    <input
                      type="radio"
                      id="optionTwo"
                      name="option"
                      value="optionTwo"
                      onChange={() => setSelectedOption("optionTwo")}
                    />
                    {optionTwo.text}
                  </label>
                </div>
                <button type="submit" id="vote-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default connect()(CardPoll);
