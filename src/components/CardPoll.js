import React from "react";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

function CardPoll() {
  const { id } = useParams();
  const location = useLocation();
  const { isAnswered } = location.state;
  console.log("card", isAnswered);
  //   const user = useSelector((state) => state.users[question.author]);
  //   const isAnswered = user.answers[id] !== undefined;
  return (
    <div>
      {isAnswered ? (
        <div>
          <h1>You have already answered this question</h1>
        </div>
      ) : (
        <div>
          <h1>You have not answered this question yet</h1>
        </div>
      )}
    </div>
  );
}

export default connect()(CardPoll);
