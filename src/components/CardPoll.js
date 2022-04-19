import React, { Fragment, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { handleSaveAnswer } from "../actions/questions";

function CardPoll() {
  const location = useLocation();
  const { isAnswered, question, avatar } = location.state;
  const { author, optionOne, optionTwo } = question;

  const votesCount = optionOne.votes.length + optionTwo.votes.length;

  const authedUser = useSelector((state) => state.authedUser);

  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setIsAnswered] = useState(isAnswered);
  const [answer, setAnswer] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswer(selectedOption);
    dispatch(
      handleSaveAnswer(authedUser, question.id, question, selectedOption)
    );
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
              <h3>Results:</h3>
              {optionOne.votes.includes(authedUser) || answer === "optionOne" ? (
                <div className="poll-answers">
                  <div id="selected">
                    <p>Would you rather {optionOne.text}?</p>
                    <p>
                      {optionOne.votes.length} out of {votesCount} votes
                    </p>
                  </div>
                  <div>
                    <p>Would you rather {optionTwo.text}?</p>
                    <p>
                      {optionTwo.votes.length} out of {votesCount} votes
                    </p>
                  </div>
                </div>
              ) : (
                <div className="poll-answers">
                  <div>
                    <p>Would you rather {optionOne.text}?</p>
                    <p>
                      {optionOne.votes.length} out of {votesCount} votes
                    </p>
                  </div>
                  <div id="selected">
                    <p>Would you rather {optionTwo.text}?</p>
                    <p>
                      {optionTwo.votes.length} out of {votesCount} votes
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
              <h3>Would you rather</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="radio"
                    id="optionOne"
                    name="option"
                    value="optionOne"
                    onChange={() => setSelectedOption("optionOne")}
                  />
                  <label htmlFor="optionOne">{optionOne.text}</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="optionTwo"
                    name="option"
                    value="optionTwo"
                    onChange={() => setSelectedOption("optionTwo")}
                  />
                  <label htmlFor="optionTwo">{optionTwo.text}</label>
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
