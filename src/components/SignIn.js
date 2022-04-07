import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class SignIn extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  }
  render() {
    const { users, loading } = this.props;
    return (
      <Fragment>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
              <select>
                <option value="" >Select User</option>
                {Object.keys(users).map((id) => (
                  <option key={id} value={users[id]}>
                    {users[id].name}
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
}

function mapStateToProps({ users }) {
  return {
    users,
    loading: Object.keys(users).length === 0,
  };
}

export default connect(mapStateToProps)(SignIn);
