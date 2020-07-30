import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

import TonerForm from "./components/TonerForm";
import TonerList from "./components/TonerList";

import { initToners } from "./reducers/tonerReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initToners());
  }, [dispatch]);

  return (
    <div>
      <TonerForm />
      <TonerList />
    </div>
  );
}

export default App;
