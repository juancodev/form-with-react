import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = React.useState(null);

  const logout = () => {
    signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  }, [])

  const authValue = { user, logout };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const contextAuth = React.useContext(AuthContext);
  if (!contextAuth) throw new Error('There is not auth provider');
  return contextAuth;
}

export { AuthProvider, useAuth };
