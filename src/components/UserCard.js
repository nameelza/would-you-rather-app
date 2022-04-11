import React from "react";

function UserCard({ user }) {
  const { name, avatarURL, answers, questions } = user;
  const totalAnswers = Object.keys(answers).length;
  const totalQuestions = questions.length;
  return (
    <div className="card">
      <img src={avatarURL} alt={`Avatar of ${name}`} />
      <p>{name}</p>
      <p>{totalQuestions}</p>
      <p>{totalAnswers}</p>
    </div>
  );
}

export default UserCard;
