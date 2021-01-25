import "./Signin.css";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { firebaseAuth } from "../../provider/AuthProvider";
import { auth } from "../../firebase/firebaseIndex";
import { setEmailActionMethod } from "../../store/actions/actions";
import { setCurrentUserThunkActionMethod } from "../../store/actions/currentUserActions";

const Signin = (props: any) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(firebaseAuth);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(null);
    const { email, password } = e.target;
    // Dispatch
    dispatch(setCurrentUserThunkActionMethod(email.value));
    console.log(email.value, password.value);
    auth()
      .signInWithEmailAndPassword(email.value, password.value)
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
      <form className="signin" onSubmit={handleSubmit}>
        <h2 className="title"> SignIn</h2>

        <input className="input" required name="email" placeholder="email" />
        <input
          className="input"
          required
          name="password"
          placeholder="password"
          type="password"
        />
        <button className="signin-button" type="submit">
          Signin
        </button>
        {error || null}
        <a
          onClick={() => {
            props.history.push("/signup");
          }}
        >
          Create new account?
        </a>
      </form>
    </div>
  );
};

export default Signin;
