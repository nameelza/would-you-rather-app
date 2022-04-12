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
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div>
        <div className="question-headers">
          <p onClick={this.showUnanswered}>Unanswered Questions</p>
          <p onClick={this.showAnswered}>Answered Questions</p>
        </div>
        {this.state.showAnswered ? (
          <ul>
            {Object.keys(answeredQuestions).map((questionId) => {
              const question = answeredQuestions[questionId];
              return (
                <li key={questionId}>
                  <Card question={question} />
                </li>
              );
            })}
          </ul>
        ) : (
          <ul>
            {Object.keys(unansweredQuestions).map((questionId) => {
              const question = unansweredQuestions[questionId];
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
  answeredQuestions,
  unansweredQuestions,
}) {
  return {
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(CardsList);
