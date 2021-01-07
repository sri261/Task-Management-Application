import React, { useState, useEffect, useMemo } from "react";
import { auth } from "../firebase/firebaseIndex";

interface FirebaseContextType {
  isAuthenticated: Authenticated;
  setIsAuthenticated: Function;
}

interface Authenticated {
  loading: Boolean;
  isAuthenticated: Boolean;
}

export const firebaseAuth = React.createContext({} as FirebaseContextType);

const AuthProvider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState({
    loading: true,
    isAuthenticated: false,
  } as Authenticated);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated({
          loading: false,
          isAuthenticated: true,
        });
      } else {
        setIsAuthenticated({
          loading: false,
          isAuthenticated: false,
        });
      }
    });
  }, []);

  return (
    <firebaseAuth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
