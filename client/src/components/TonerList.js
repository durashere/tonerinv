import React from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableContainer, Paper } from "@material-ui/core";
import Toner from "./Toner";

const TonerList = () => {
  const toners = useSelector((state) => state.toners);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {toners.map((toner) => (
              <Toner key={toner.id} toner={toner} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TonerList;
