/* eslint-disable jsx-a11y/alt-text */
import {
  Card,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { ContextProject } from "../hooks/Context";

const useStyles = makeStyles({
  Aside: {
    padding: "10px",
    background: "white",
    margin: "10px",
    width: "min(100% - 1em, 30em)",
    maxHeight: 730,
    "& .aside__content-card-detail-profile": {
      maxHeight: 710,
      padding: 15,
    },
    "& .aside__content-image-profile": {
      width: "100%",
      height: 300,
      objectFit: "contain",
    },
    "& .aside__content-info-profile": {
      display: "flex",
    },
  },
  dimensionsBodyList: {
    width: "100%",
    minWidth: 360,
    bgcolor: "background.paper",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const { showDetails } = useContext(ContextProject);

  const items = [
    { name: "Height: ", value: `${showDetails.Height}` },
    { name: "Mass: ", value: ` ${showDetails.Mass}` },
    { name: "Hair color: ", value: `${showDetails.HairColor}` },
    { name: "Skin color: ", value: `${showDetails.SkinColor}` },
    { name: "Eye color: ", value: `${showDetails.EyeColor}` },
    { name: "Birth year: ", value: `${showDetails.BirthYear}` },
    { name: "Gender: ", value: `${showDetails.Gender}` },
  ];

  return (
    <aside className={classes.Aside}>
      {showDetails ? (
        <Card className="aside__content-card-detail-profile">
          <img
            className="aside__content-image-profile"
            src={showDetails.Image}
          />
          <ListItemText>
            <h2>{showDetails.Name}</h2>
          </ListItemText>
          <List
            sx={`${classes.dimensionsBodyList}`}
            component="nav"
            aria-label="mailbox folders"
          >
            {items.map((item, index) => (
              <ListItem key={item.name} divider>
                <ListItemText
                  primary={
                    <div className="aside__content-info-profile">
                      <h4>{item.name}</h4>
                      {item.value}
                    </div>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Card>
      ) : (
        <div>
          <Typography variant="h5">Information about...</Typography>
          <br />
          <Typography>Choose someone to get more information about!</Typography>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
