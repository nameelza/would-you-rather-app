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
  const [answer, setAnswer] = useState(null);
  const [optionOneVotes, setOptionOneVotes] = useState(optionOne.votes.length);
  const [optionTwoVotes, setOptionTwoVotes] = useState(optionTwo.votes.length);

  const votesCount = optionOneVotes + optionTwoVotes;
  const optionOnePercentage = (optionOneVotes / votesCount) * 100;
  const optionTwoPercentage = (optionTwoVotes / votesCount) * 100;
  console.log(optionOnePercentage, optionTwoPercentage);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleSaveAnswer(authedUser, question.id, question, selectedOption)
    );
    selectedOption === "optionOne"
      ? setOptionOneVotes(optionOneVotes + 1)
      : setOptionTwoVotes(optionTwoVotes + 1);
    setAnswer(selectedOption);
    setIsAnswered(true);
  };

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
              answer === "optionOne" ? (
                <div className="poll-answers">
                  <div id="selected" className="poll-box">
                    <h3>Would you rather {optionOne.text}?</h3>
                    <div className="progress-bar">
                      <span className="progress" style={{width: `${optionOnePercentage}%`}}></span>
                    </div>
                    <p className="center">
                      {optionOneVotes} out of {votesCount} votes
                    </p>
                  </div>
                  <div className="poll-box">
                    <h3>Would you rather {optionTwo.text}?</h3>
                    <div className="progress-bar">
                      <span className="progress" style={{width: `${optionTwoPercentage}%`}}></span>
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
                      <span className="progress" style={{width: `${optionOnePercentage}%`}}></span>
                    </div>
                    <p className="center">
                      {optionOneVotes} out of {votesCount} votes
                    </p>
                  </div>
                  <div id="selected" className="poll-box">
                    <h3>Would you rather {optionTwo.text}?</h3>
                    <div className="progress-bar">
                      <span className="progress" style={{width: `${optionTwoPercentage}%`}}></span>
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
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default connect()(CardPoll);
