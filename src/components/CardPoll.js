import React, { Fragment } from "react";
import { connect, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function CardPoll() {
  const location = useLocation();
  const { isAnswered, question, avatar } = location.state;
  const { author, optionOne, optionTwo } = question;
  const authedUSer = useSelector((state) => state.authedUser);
  const user = useSelector((state) => state.users[authedUSer]);
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
              <p>{author}</p>
              <p>{optionOne.text}</p>
              <p>{optionTwo.text}</p>
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
              <div>
                <h3>Would you rather</h3>
              </div>
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
