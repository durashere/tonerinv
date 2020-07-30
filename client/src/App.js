import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import TonerForm from "./components/TonerForm";
import TonerList from "./components/TonerList";

import { initToners } from "./reducers/tonerReducer";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initToners());
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <div>
          <TonerForm />
          <TonerList />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
