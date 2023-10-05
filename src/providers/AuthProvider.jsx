import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
  }; // Eita create korar karon hocche overall application e jeno sobai access korte pare

  // Ekhane useEffect use kortesi karon observe korbo j kotokhon user login thaktese or logut hoye jacche kotokhon por page reload dilo etc ekhane basically state k dhore rakhtese log out na hole state ta k dhore rakhtese j user ta ase kina!!

  //observe auth state Change
  useEffect(() => {
    // So ekhane jini ta hocche jokhon ami kono ekta state change er moto observer kortesi oita ekta reference (unSubscribe) e rekhe dicchi shey ekta callback function hisebe peye jay jeta te ashole poroborti chaile relation ta detach korte pari
    // onAuthStateChanged jinis ta ansi hocche firebase->Web->Mange Users-> Web Modular Api
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // currentUser ekta function jeta hocche jokhon kono kisu change hobe tokhon ei function ta k call korbe
      setUser(currentUser);
      console.log(
        "Observing current User inside useEffect of auth provider",
        currentUser
      );
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
