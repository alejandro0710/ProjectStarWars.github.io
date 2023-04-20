/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import { ContextProject } from "../hooks/Context";
import TableProject from "./TableProject";
import SavedProfiles from "./SavedProfiles";
import {
  Button,
  CircularProgress,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  SearchProfile: {
    padding: "10px",
    width: "min(100% - 1em, 60em)",
    "& .search-profile__form": {
      padding: "15px",
      background: "white",
    },
    "& .search-profile__form-button": {
      marginLeft: "5px",
      height: "40px",
    },
  },
});

function SearchProfile() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { searchData, setSearchData, handleSearchData, searchResponse } =
    useContext(ContextProject);

  const handleClick = () => {
    setLoading(true);
  };
  useEffect(() => {
    searchResponse !== [] && setLoading(false);
  }, [searchResponse]);

  return (
    <section className={classes.SearchProfile}>
      <div className="search-profile__form">
        <Typography variant="h4">Search people</Typography>
        <br />
        <TextField
          variant="outlined"
          size="small"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <Button
          className="search-profile__form-button"
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={() => {
            handleSearchData();
            handleClick();
          }}
        >
          {loading ? <CircularProgress size={24} color="primary" /> : "Search"}
        </Button>
      </div>
      <TableProject />
      <br />
      <SavedProfiles />
    </section>
  );
}

export default SearchProfile;
