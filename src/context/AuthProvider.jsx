/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import AuthContext from "./AuthContext";
import { getCurrentUser } from "../services/requests";

const AuthProvider = ({ children }) => {
  const [ownerUser, setOwnerUser] = useState();

  useEffect(() => {
    const getOwnerChat = async () => {
      const ownerUser = await getCurrentUser();
      setOwnerUser(ownerUser);
    };
    getOwnerChat();
  }, []);

  const contextValue = useMemo(
    () => ({ ownerUser, setOwnerUser }),
    [ownerUser]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
