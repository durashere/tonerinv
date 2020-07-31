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
      setUser(JSON.parse(loggedUserJSON));
      tonerService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (credential) => {
    const signInUser = await loginService.login(credential);

    window.localStorage.setItem("loggedAppUser", JSON.stringify(signInUser));
    tonerService.setToken(signInUser.token);

    setUser(signInUser);
  };

  return (
    <div>
      {user === null ? <SignIn handleLogin={handleLogin} /> : <Dashboard />}
      {/* <SignIn handleLogin={handleLogin} /> */}
    </div>
  );
}

export default App;
