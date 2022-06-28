import { useEffect } from "react";
import { getUsers } from "../actions/users";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import "../App.css";
import "../index.css";
import SignIn from "./SignIn";
import CardsList from "./CardsList";
import New from "./New";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import CardPoll from "./CardPoll";
import PrivateRoute from "./PrivateRoute";
import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps -- no need for dependency
  }, []);

  return (
    <>
      <LoadingBar />
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<PrivateRoute component={CardsList} />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route
            path="/newQuestion"
            element={<PrivateRoute component={New} />}
          />
          <Route
            path="/leaderBoard"
            element={<PrivateRoute component={LeaderBoard} />}
          />
          <Route
            path="/card/:id"
            element={<PrivateRoute component={CardPoll} />}
          />
          <Route
            path="*"
            element={<p>Oops, wrong URL. There's nothing here!</p>}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
