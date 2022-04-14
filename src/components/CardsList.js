import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class CardsList extends Component {
  state = {
    showAnswered: false,
    answeredStyle: "",
    unansweredStyle: "focused",
  };

  showAnswered = () => {
    this.setState({
      showAnswered: true,
      answeredStyle: "focused",
      unansweredStyle: "",
    });
  };

  showUnanswered = () => {
    this.setState({
      showAnswered: false,
      answeredStyle: "",
      unansweredStyle: "focused",
    });

  };

  render() {
    const { answeredQuestions, unansweredQuestions, unansweredIds, answeredIds } = this.props;
    return (
      <div>
        <div className="question-headers">
          <p onClick={this.showUnanswered} id={this.state.unansweredStyle}>Unanswered Questions</p>
          <p onClick={this.showAnswered} id={this.state.answeredStyle}>Answered Questions</p>
        </div>
        {this.state.showAnswered ? (
          <ul>
            {answeredIds.map((questionId) => (
              <li key={questionId}>
                <Card question={answeredQuestions[questionId]} isAnswered={true}/>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {unansweredIds.map((questionId) => (
              <li key={questionId}>
                <Card question={unansweredQuestions[questionId]} isAnswered={false}/>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps({ answeredQuestions, unansweredQuestions }) {
  return {
    answeredQuestions,
    unansweredQuestions,
    unansweredIds: unansweredQuestions ? Object.keys(unansweredQuestions).sort(
      (a, b) => unansweredQuestions[b].timestamp - unansweredQuestions[a].timestamp
    ) : [],
    answeredIds: answeredQuestions ? Object.keys(answeredQuestions).sort(
      (a, b) => answeredQuestions[b].timestamp - answeredQuestions[a].timestamp
    ) : [],
  };
}

export default connect(mapStateToProps)(CardsList);
