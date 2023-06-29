import AuthApi from "api/AuthApi";
import UserApi from "api/UserApi";
import setAuthToken from "helpers/setAuthToken";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });
  const [infoUser, setInfoUser] = useState({
    name_player1: "",
    name_player2: "",
    sex_player1: "1",
    sex_player2: "2",
  });
  useEffect(() => {
    loadUser();
  }, []);
  // Authenticate user
  const loadUser = async () => {
    if (sessionStorage.getItem("access_token")) {
      setAuthToken(sessionStorage.getItem("access_token"));
    }
    try {
      const response = await UserApi.getInfo();
      if (response.data.status === 200) {
        setAuthState({
          authLoading: false,
          isAuthenticated: true,
          user: response.data.data,
        });
      }
    } catch (e) {
      sessionStorage.removeItem("access_token");
      setAuthToken(null);
      setAuthState({
        authLoading: false,
        isAuthenticated: false,
        user: null,
      });
    }
  };
  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await AuthApi.login(userForm);
      console.log(response);
      if (response.data.status === 200) {
        sessionStorage.setItem("access_token", response.data.data.accessToken);
        await loadUser();
        return response.data;
      } else {
        return response.data;
      }
    } catch (e) {
      return e;
    }
  };
  const logoutUser = async () => {
    sessionStorage.removeItem("access_token");
    setAuthToken(null);
    setAuthState({
      authLoading: false,
      isAuthenticated: false,
      user: null,
    });

    await loadUser();
  };
  const authContextData = {
    loginUser,
    authState,
    logoutUser,
    loadUser,
    setAuthState,
    infoUser,
    setInfoUser,
  };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
