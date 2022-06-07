import React, { useState } from "react";
import { connect } from "react-redux";
import { handleSignIn } from "../actions/shared";
import { useNavigate } from "react-router-dom";

const SignIn = ({ users, isLoading, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedUser) {
      setError("Please select a user");
    } else {
      dispatch(handleSignIn(users[selectedUser]));
      navigate("/");
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <h3>Loading...</h3>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="border">
          <h1 className="center">Welcome to Would You Rather app</h1>
          <p className="center" id="subheading">
            Please sign in to continue
          </p>
          <form onSubmit={handleSubmit}>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="input"
            >
              <option value="" disabled>
                Select User
              </option>
              {Object.entries(users).map(([key, user]) => (
                <option key={key} value={key}>
                  {user.name}
                </option>
              ))}
            </select>
            {error && <p className="error">{error}</p>}
            <button disabled={!selectedUser} type="submit">
              Sign In
            </button>
          </form>
        </div>
      )}
    </>
  );
};

function mapStateToProps({ users, loadingBar }) {
  return {
    users,
    isLoading: loadingBar.default === 1,
  };
}

export default connect(mapStateToProps)(SignIn);
