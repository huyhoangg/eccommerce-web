import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      if (!userInfo) {
        await axios
          .get("/v1/user/profile")
          .then(({ data }) => setUserInfo(data));
      }
    }
    fetchUser();
  }, []);

  const contextValue = {
    userInfo,
    setUserInfo,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
