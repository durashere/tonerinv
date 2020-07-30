import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { subToner, addToner } from "../reducers/tonerReducer";

const Toner = ({ toner }) => {
  const dispatch = useDispatch();

  const handleSubToner = () => {
    dispatch(subToner(toner));
  };

  const handleAddToner = () => {
    dispatch(addToner(toner));
  };

  return (
    <div>
      model: {toner.model}
      <br></br>
      amount: {toner.amount}
      <button type="button" onClick={handleSubToner}>
        -
      </button>
      <button type="button" onClick={handleAddToner}>
        +
      </button>
    </div>
  );
};

const TonerList = () => {
  const toners = useSelector((state) => state.toners);
  return (
    <div id="tonerlist">
      {toners.map((toner) => (
        <div key={toner.id}>
          <Toner toner={toner} />
        </div>
      ))}
    </div>
  );
};

export default TonerList;
