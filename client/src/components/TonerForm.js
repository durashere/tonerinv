import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";

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
          <TextField
            label="Model"
            variant="outlined"
            value={model}
            onChange={({ target }) => setModel(target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TonerForm;
