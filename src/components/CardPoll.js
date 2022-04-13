import React from "react";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

function CardPoll() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.state);
  //   const user = useSelector((state) => state.users[question.author]);
  //   const isAnswered = user.answers[id] !== undefined;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default connect()(CardPoll);
