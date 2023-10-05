import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser }; // Eita create korar karon hocche overall application e jeno sobai access korte pare
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
