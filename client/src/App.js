import React, { useState, useEffect } from "react";

import tonerService from "./services/toners";
import loginService from "./services/login";

import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const signInUser = JSON.parse(loggedUserJSON);
      setUser(signInUser);
      tonerService.setToken(signInUser.token);
    }
  }, []);

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
        <Dashboard user={user} handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
