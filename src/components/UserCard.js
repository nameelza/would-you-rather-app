import React from "react";

function UserCard({ user }) {
  const { name, avatarURL, answers, questions } = user;
  const totalAnswers = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const score = totalAnswers + totalQuestions;

  return (
    <div className="card" id="user-card">
      <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
      <div>
        <h3>{name}</h3>
        <p> Created questions {totalQuestions}</p>
        <p> Answered questions {totalAnswers}</p>
      </div>
      <div>
        <p>Score {score}</p>
      </div>
    </div>
  );
}

export default UserCard;
