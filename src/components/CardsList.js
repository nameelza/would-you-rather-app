import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class CardsList extends Component {
  state = {
    answered: false,
  }

  handleChange = () => {
    this.setState({
      answered: !this.state.answered,
    });
  }
  render() {
    return (
      <div>
        <h3 className="center">List</h3>
        <div className="question-headers">
          <h5 onClick={this.handleChange}>Unanswered Questions</h5>
          <h5 onClick={this.handleChange}>Answered Questions</h5>
        </div>
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
