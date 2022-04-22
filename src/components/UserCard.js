import React from "react";

function UserCard({ user }) {
  const { name, avatarURL, answers, questions } = user;
  const totalAnswers = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const score = totalAnswers + totalQuestions;

  return (
    <div className="card" id="user-card">
      <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
      <div className="middle-container">
        <h2>{name}</h2>
        <div className="points-container">
          <div>
            <p>Created questions</p>
            <p>{totalQuestions} </p>
          </div>
          <div>
            <p>Answered questions</p>
            <p>{totalAnswers}</p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <h2>Score</h2>
        <p className="score">{score}</p>
      </div>
    </div>
  );
}

export default UserCard;
