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
    const {
      answeredQuestions,
      answeredIds,
      unansweredQuestions,
      unansweredIds,
      isLoading,
    } = this.props;

    const { answeredStyle, unansweredStyle } = this.state;
    return (
      <div>
      {isLoading ? (
          <div className="loading">
            <h3>Loading...</h3>
            <div className="loader"></div>
          </div>
        ) : (
          <>
        <div className="question-headers">
          <span onClick={this.showUnanswered} id={unansweredStyle}>
            Unanswered Questions
          </span>
          <span onClick={this.showAnswered} id={answeredStyle}>
            Answered Questions
          </span>
        </div>
          <div>
            {this.state.showAnswered ? (
              <ul>
                {answeredIds.length !== 0 ? (
                  answeredIds.map((questionId) => (
                    <li key={questionId}>
                      <Card
                        question={answeredQuestions[questionId]}
                        isAnswered={true}
                      />
                    </li>
                  ))
                ) : (
                  <div className="no-questions">
                    <p>You haven't voted on any question yet</p>
                  </div>
                )}
              </ul>
            ) : (
              <ul>
                {unansweredIds.length !== 0 ? (
                  unansweredIds.map((questionId) => (
                    <li key={questionId}>
                      <Card
                        question={unansweredQuestions[questionId]}
                        isAnswered={false}
                      />
                    </li>
                  ))
                ) : (
                  <div className="no-questions">
                    <p>No unanswered questions</p>
                  </div>
                )}
              </ul>
            )}
          </div>
          </>
          )}
      </div>
    );
  }
}

function mapStateToProps({
  answeredQuestions,
  unansweredQuestions,
  loadingBar,
}) {
  return {
    answeredQuestions,
    unansweredQuestions,
    unansweredIds: unansweredQuestions
      ? Object.keys(unansweredQuestions).sort(
          (a, b) =>
            unansweredQuestions[b].timestamp - unansweredQuestions[a].timestamp
        )
      : [],
    answeredIds: answeredQuestions
      ? Object.keys(answeredQuestions).sort(
          (a, b) =>
            answeredQuestions[b].timestamp - answeredQuestions[a].timestamp
        )
      : [],
    isLoading: loadingBar.default === 1,
  };
}

export default connect(mapStateToProps)(CardsList);
