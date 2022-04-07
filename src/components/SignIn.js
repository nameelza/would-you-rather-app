import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class SignIn extends Component {
  render() {
    const { users, loading } = this.props;
    return (
      <Fragment>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <h1>Sign In</h1>
            <form>
              <select>
                <option value="">Select User</option>
                {Object.keys(users).map((id) => (
                  <option key={id} value={users[id]}>
                    {users[id].name}
                  </option>
                ))}
              </select>
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
