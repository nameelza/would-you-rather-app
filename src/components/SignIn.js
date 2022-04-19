import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { handleSignIn } from "../actions/shared";
import { useNavigate } from "react-router-dom";

function SignIn({ users, loading, dispatch }) {

  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please select a user");
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
          <div>
            <h1 className="center">Sign In</h1>
            <form onSubmit={handleSubmit}>
              <select value={value} onChange={handleChange}>
                <option value="" disabled>
                  Select User
                </option>
                {Object.keys(users).map((user) => (
                  <option key={user} value={user}>
                    {users[user].name}
                  </option>
                ))}
              </select>
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
