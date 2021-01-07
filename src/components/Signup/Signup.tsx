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
    <form onSubmit={handleSubmit}>
      SignUp
      <input required name="email" placeholder="email" />
      <input required name="password" placeholder="password" type="password" />
      <button type="submit">SignUp</button>
      {error || null}
      <button
        onClick={() => {
          props.history.push("/signin");
        }}
      >
        Sign In?
      </button>
    </form>
  );
};

export default withRouter(Signup);
