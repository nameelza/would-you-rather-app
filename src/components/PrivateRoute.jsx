import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, signedIn }) => {
  return signedIn ? <Component /> : <Navigate to="/signIn" />;
};

function mapStateToProps(state) {
  return { signedIn: state.authedUser !== null };
}

export default connect(mapStateToProps)(PrivateRoute);
