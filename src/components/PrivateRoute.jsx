import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = this.props;

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{ pathname: "/signIn", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

function mapStateToProps({ authedUser }) {
  return {
    isLoggedIn: authedUser !== null,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
