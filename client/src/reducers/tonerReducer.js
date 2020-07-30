import tonerService from "../services/toners";

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "INIT_TONERS":
      return action.data;

    case "CREATE_TONER":
      return state.concat(action.data);

    case "ADD_TONER":
      return state.map((a) => (a.id === action.data.id ? action.data : a));

    case "SUB_TONER":
      return state.map((a) => (a.id === action.data.id ? action.data : a));

    default:
      return state;
  }
};

export const initToners = () => {
  return async (dispatch) => {
    const toners = await tonerService.getAll();
    dispatch({
      type: "INIT_TONERS",
      data: toners,
    });
  };
};

export const createToner = (model) => {
  return async (dispatch) => {
    const tonerToCreate = { model, amount: 0 };
    const newToner = await tonerService.create(tonerToCreate);
    dispatch({
      type: "CREATE_TONER",
      data: newToner,
    });
  };
};

export const addToner = (toner) => {
  return async (dispatch, getState) => {
    const tonerToChange = getState().toners.find((a) => a.id === toner.id);
    const addedToner = {
      ...tonerToChange,
      amount: tonerToChange.amount + 1,
    };
    const updatedToner = await tonerService.update(toner.id, addedToner);
    dispatch({ type: "ADD_TONER", data: updatedToner });
  };
};

export const subToner = (toner) => {
  return async (dispatch, getState) => {
    const tonerToChange = getState().toners.find((a) => a.id === toner.id);
    const addedToner = {
      ...tonerToChange,
      amount: tonerToChange.amount - 1,
    };
    const updatedToner = await tonerService.update(toner.id, addedToner);
    dispatch({ type: "ADD_TONER", data: updatedToner });
  };
};

export default reducer;
