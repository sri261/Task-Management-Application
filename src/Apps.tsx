import "./Apps.css";
import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import "./App.css";
import { firebaseAuth } from "./provider/AuthProvider";
import ProjectComponent from "./components/ProjectComponent/ProjectComponent";
function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(firebaseAuth);

  if (isAuthenticated.loading) {
    return <div>Loading ...</div>;
  }
  console.log(isAuthenticated);
  return (
    <div>
      <Switch>
        {/*
          REVIEW: when you are not logged in redirect to login page. This code mounts project component and signin page on same path.
          do something like
          isLoggedIn === true ? (
          // render project component
        ) : (
          //redirect to signin page
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
        */}
        {isAuthenticated.isAuthenticated ? (
          <Route exact path="/" render={() => <ProjectComponent />} />
        ) : null}

        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />

        <Route path="" component={Signin} />
      </Switch>
      {/* <a href="/signup">Signup</a> */}
    </div>
  );
}

export default App;
