import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  header: {
    width: "min(100% - 1em, 75em)",
    marginInline: "auto",
    color: "white",
    padding: "30px 0px 0px 30px",
    "& .header__title": {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    "& .header__subtitle": {
      fontSize: "2rem",
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Typography variant="h3" className="header__title">
        Web test
      </Typography>
      <Typography variant="h4" className="header__subtitle">
        Play with SWAPI
      </Typography>
    </header>
  );
};

export default Header;
