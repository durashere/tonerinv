import React from "react";
import { useDispatch } from "react-redux";
import { TableCell, TableRow, Button } from "@material-ui/core";

import { subToner, addToner } from "../reducers/tonerReducer";

const Toner = ({ toner }) => {
  const dispatch = useDispatch();

  const handleSubToner = () => {
    if (toner.amount <= 0) {
      return console.log("error");
    }
    dispatch(subToner(toner));
  };

  const handleAddToner = () => {
    dispatch(addToner(toner));
  };

  return (
    <TableRow>
      <TableCell>{toner.model}</TableCell>
      <TableCell>{toner.amount}</TableCell>
      <TableCell>
        <Button variant="contained" type="button" onClick={handleSubToner}>
          -
        </Button>
        <Button variant="contained" type="button" onClick={handleAddToner}>
          +
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Toner;
