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
