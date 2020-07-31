import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import Toner from "./Toner";
import { initToners } from "../reducers/tonerReducer";

const TonerList = () => {
  const dispatch = useDispatch();
  const toners = useSelector((state) => state.toners);

  useEffect(() => {
    dispatch(initToners());
  }, [dispatch]);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Model</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Add / Sub</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {toners.map((toner) => (
            <Toner key={toner.id} toner={toner} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TonerList;
