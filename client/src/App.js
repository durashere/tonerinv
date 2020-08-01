import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import tonerService from "./services/toners";
import loginService from "./services/login";

import SignIn from "./components/SignIn";
import Main from "./components/Main";

import { initToners } from "./reducers/tonerReducer";

function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const signInUser = JSON.parse(loggedUserJSON);
      setUser(signInUser);
      tonerService.setToken(signInUser.token);
    }
  }, []);

  useEffect(() => {
    dispatch(initToners());
  }, [dispatch]);

  const handleLogin = async (credential) => {
    const signInUser = await loginService.login(credential);

    window.localStorage.setItem("loggedAppUser", JSON.stringify(signInUser));
    tonerService.setToken(signInUser.token);

    setUser(signInUser);
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    window.localStorage.removeItem("loggedAppUser");
    tonerService.setToken(null);
    setUser(null);
  };

  return (
    <div>
      {user === null ? (
        <SignIn handleLogin={handleLogin} />
      ) : (
        <Main user={user} handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
