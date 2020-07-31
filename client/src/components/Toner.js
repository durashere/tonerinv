import React from "react";
import { useDispatch } from "react-redux";
import { TableRow, TableCell, Button } from "@material-ui/core";

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
      <TableCell align="center">{toner.amount}</TableCell>
      <TableCell align="right">
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
