import React, { Fragment } from "react";
import { connect, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function CardPoll() {
  const location = useLocation();
  const { isAnswered, question, avatar } = location.state;
  const { author, optionOne, optionTwo } = question;
  const authedUser = useSelector((state) => state.authedUser);
  const votesCount = optionOne.votes.length + optionTwo.votes.length;
  return (
    <Fragment>
      {isAnswered ? (
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
              {optionOne.votes.includes(authedUser) ? (
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
              <form>
                <div>
                  <input
                    type="radio"
                    id="optionOne"
                    name="option"
                    value="optionOne"
                  />
                  <label for="optionOne">{optionOne.text}</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="optionTwo"
                    name="option"
                    value="optionTwo"
                  />
                  <label for="optionTwo">{optionTwo.text}</label>
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
