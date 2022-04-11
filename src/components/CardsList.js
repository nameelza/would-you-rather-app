import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class CardsList extends Component {
  state = {
    showAnswered: false,
  };

  showAnswered = () => {
    this.setState({
      showAnswered: true,
    });
  };

  showUnanswered = () => {
    this.setState({
      showAnswered: false,
    });
  };
  render() {
    return (
      <div>
        <h3 className="center">List</h3>
        <div className="question-headers">
          <h5 onClick={this.showAnswered}>Unanswered Questions</h5>
          <h5 onClick={this.showUnanswered}>Answered Questions</h5>
        </div>
        {this.state.showAnswered ? (
          <ul>
            {Object.keys(this.props.answeredQuestions).map((questionId) => {
              const question = this.props.answeredQuestions[questionId];
              return (
                <li key={questionId}>
                  <Card question={question} />
                </li>
              );
            })}
          </ul>
        ) : (
          <ul>
            {Object.keys(this.props.unansweredQuestions).map((questionId) => {
              const question = this.props.unansweredQuestions[questionId];
              return (
                <li key={questionId}>
                  <Card question={question} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps({
  authedUser,
  answeredQuestions,
  unansweredQuestions,
}) {
  return {
    authedUser,
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(CardsList);
