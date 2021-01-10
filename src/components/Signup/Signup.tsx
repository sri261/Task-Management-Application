import "./Signup.css";
import React, { useContext, useState } from "react";
import { firebaseAuth } from "../../provider/AuthProvider";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebaseIndex";

const Signup = (props: any) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(firebaseAuth);
  const [error, setError] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(null);
    const { email, password } = e.target;
    console.log(email.value, password.value);
    auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(() => {
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="bg">
      <form className="signup" onSubmit={handleSubmit}>
        <h2 className="title">SignUp</h2>
        <input className="input" required name="email" placeholder="email" />
        <input
          className="input"
          required
          name="password"
          placeholder="password"
          type="password"
        />
        <button className="signup-button" type="submit">
          SignUp
        </button>
        {error || null}
        <a
          onClick={() => {
            props.history.push("/signin");
          }}
        >
          Already have an account, SignIn
        </a>
      </form>
    </div>
  );
};

export default withRouter(Signup);
