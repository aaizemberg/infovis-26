import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Viz from "./components/viz/Viz";
import Home from "./components/home/Home";

const useStyles = makeStyles((theme) => ({
  app: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "8px",
  },
}));

const App = () => {
  const { app } = useStyles();

  return (
    <div className={app}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/vizs/:vizId">
        <Viz />
      </Route>
    </div>
  );
};

export default App;
