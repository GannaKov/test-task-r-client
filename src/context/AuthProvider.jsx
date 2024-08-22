/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import AuthContext from "./AuthContext";
import { getCurrentUser } from "../services/requests";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getOwnerChat = async () => {
      const user = await getCurrentUser();
      setUser(user);
    };
    getOwnerChat();
  }, []);

  const contextValue = useMemo(() => ({ user, setUser }), [user]);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
