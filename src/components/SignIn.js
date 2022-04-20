import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { handleSignIn } from "../actions/shared";
import { useNavigate } from "react-router-dom";

function SignIn({ users, loading, dispatch }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setError("Please select a user");
    } else {
      dispatch(handleSignIn(users[value]));
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Fragment>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="border">
          <h1 className="center">Welcome to Would You Rather app</h1>
          <p className="center" id="subheading">
            Please sign in to continue
          </p>
          <form onSubmit={handleSubmit}>
            <select value={value} onChange={handleChange} className="input">
              <option value="" disabled>
                Select User
              </option>
              {Object.keys(users).map((user) => (
                <option key={user} value={user}>
                  {users[user].name}
                </option>
              ))}
            </select>
            {error && <p className="error">{error}</p>}
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
    </Fragment>
  );
}

function mapStateToProps({ users }) {
  return {
    users,
    loading: Object.keys(users).length === 0,
  };
}

export default connect(mapStateToProps)(SignIn);
