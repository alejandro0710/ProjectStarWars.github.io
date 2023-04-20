import { Button, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { ContextProject } from "../hooks/Context";

const useStyles = makeStyles({
  profileFilter__button: {
    "& .profileFilter__button--all": {
      backgroundColor: "#03cc03",
      margin: "0 3px",
    },
    "& .profileFilter__button--male": {
      backgroundColor: "#03a9f4",
      margin: "0 3px",
    },
    "& .profileFilter__button--female": {
      backgroundColor: "pink",
      margin: "0 3px",
    },
  },
});

function ProfileFilter({ data, setFilteredData }) {
  const classes = useStyles();

  const { setFilter } = useContext(ContextProject);

  const filterByGender = (gender) => {
    if (gender === "male") {
      setFilteredData(data.filter((item) => item.gender === "male"));
    } else if (gender === "female") {
      setFilteredData(data.filter((item) => item.gender === "female"));
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className={classes.profileFilter__button}>
      <Button
        className="profileFilter__button--all"
        size="small"
        variant="contained"
        onClick={() => {
          filterByGender("All");
          setFilter(true);
        }}
      >
        All
      </Button>
      <Button
        className="profileFilter__button--male"
        size="small"
        variant="contained"
        onClick={() => {
          filterByGender("male");
          setFilter(true);
        }}
      >
        Male
      </Button>
      <Button
        className="profileFilter__button--female"
        size="small"
        variant="contained"
        onClick={() => {
          filterByGender("female");
          setFilter(true);
        }}
      >
        Female
      </Button>
    </div>
  );
}

export default ProfileFilter;
