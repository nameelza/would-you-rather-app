import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

const LeaderBoard = ({ users }) => {
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    const newSortedUsers = Object.values(users).sort(
      (a, b) =>
        b.questions.length +
        Object.keys(b.answers).length -
        (a.questions.length + Object.keys(a.answers).length)
    );

    setSortedUsers(newSortedUsers);

    // eslint-disable-next-line react-hooks/exhaustive-deps -- run only on mount
  }, []);
  console.log(sortedUsers);
  return (
    <div>
      <h1 className="center">Leader Board</h1>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
