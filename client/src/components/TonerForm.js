import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createToner } from "../reducers/tonerReducer";

const TonerForm = () => {
  const dispatch = useDispatch();
  const [model, setModel] = useState("");

  const addToner = async (event) => {
    event.preventDefault();
    setModel("");
    dispatch(createToner(model));
  };

  return (
    <div>
      <form onSubmit={addToner}>
        <div>
          model:
          <input
            id="tonerform__model"
            value={model}
            onChange={({ target }) => setModel(target.value)}
          />
        </div>
        <button id="tonerform__submit" type="submit">
          create
        </button>
      </form>
    </div>
  );
};

export default TonerForm;
