import React, { Component } from "react";
import { connect } from "react-redux";

class CardsList extends Component {
  render() {
    return (
      <div>
        <h3>List</h3>
        <ul>
          {/* list of answeredQuestions */}
          {Object.keys(this.props.answeredQuestions).map((questionId) => {
            const question = this.props.answeredQuestions[questionId];
            return (
              <li key={questionId}>
                <div> {question.author}</div>
                Would you rather {question.optionOne.text} or {question.optionTwo.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({
  authedUser,
  answeredQuestions,
  unansweredQuestions,
}) {
  console.log("CardsList", answeredQuestions);
  return {
    authedUser,
    answeredQuestions,
  };
}

export default connect(mapStateToProps)(CardsList);
