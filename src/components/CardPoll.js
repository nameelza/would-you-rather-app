import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

function CardPoll() {
  const { id } = useParams();
  const location = useLocation();
  const { isAnswered } = location.state;
  console.log(isAnswered);
//   const user = useSelector((state) => state.users[question.author]);
//   const isAnswered = user.answers[id] !== undefined;
const question = useSelector((state) => state?.unansweredQuestions?.[id] || state?.answeredQuestions?.[id]);
console.log(question);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}


export default connect()(CardPoll);
