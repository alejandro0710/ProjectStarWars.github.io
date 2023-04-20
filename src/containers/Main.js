import { makeStyles } from "@material-ui/core";
import React from "react";
import SearchProfile from "../components/SearchProfile";
import Sidebar from "./Sidebar";

const useStyles = makeStyles({
  Main: {
    display: "flex",
    width: "min(100% - 1em, 75em)",
    marginInline: "auto",
    justifyContent: "space-between",
    padding: "0px 25px",
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.Main}>
      <SearchProfile />
      <Sidebar />
    </main>
  );
};

export default Main;
