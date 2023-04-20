/* eslint-disable jsx-a11y/alt-text */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { ContextProject } from "../hooks/Context";
import ProfileFilter from "./ProfileFilter";

const useStyles = makeStyles({
  SavedProfiles: {
    background: "white",
    padding: "10px",
    "& .savedProfiles__characters": {
      display: "flex",
      flexWrap: "wrap",
      marginTop: "20px",
    },
    "& .savedProfiles__card-profiles": {
      margin: 5,
    },
    "& .savedProfiles__image-profile": {
      width: 150,
      height: 150,
      objectFit: "contain",
    },
    "& .savedProfiles__card-content": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  cardSx: {
    minWidth: 200,
  },
});

const SavedProfiles = () => {
  const classes = useStyles();
  const {
    savedProfile,
    setSavedProfile,
    setShowDetails,
    filter,
    view,
    setView,
  } = useContext(ContextProject);

  const [data, setData] = useState(savedProfile);
  const [filteredData, setFilteredData] = useState(data);

  const handleRemove = (index) => {
    const deleteProfile = [...savedProfile];
    deleteProfile.splice(index, 1);
    setSavedProfile(deleteProfile);
  };

  const handleRemoveFilter = (index) => {
    const deleteFilter = [...filteredData];
    deleteFilter.splice(index, 1);
    setFilteredData(deleteFilter);
  };

  useEffect(() => {
    setData(savedProfile);
  }, [savedProfile]);

  useEffect(() => {
    if (filteredData === []) {
      setView(false);
    } else if (filteredData !== [{}]) {
      setView(true);
    }
  }, [filteredData, setView]);

  return (
    <section className={classes.SavedProfiles}>
      <Typography variant="h4">Saved people</Typography>
      <br />
      <ProfileFilter data={data} setFilteredData={setFilteredData} />
      <div className="savedProfiles__characters">
        {view &&
          filteredData.map((person, index) => (
            <Card
              key={person.name}
              sx={classes.cardSx}
              className="savedProfiles__card-profiles"
            >
              <CardContent className="savedProfiles__card-content">
                <img
                  className="savedProfiles__image-profile"
                  src={`https://starwars-visualguide.com/assets/img/characters/${
                    person.url.match(/(\d+)/)[0]
                  }.jpg`}
                  title={person.name}
                />
                <Typography gutterBottom variant="h5" component="div">
                  {person.name}
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleRemoveFilter(index)}
                  >
                    Remove
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      setShowDetails({
                        Image: `https://starwars-visualguide.com/assets/img/characters/${
                          person.url.match(/(\d+)/)[0]
                        }.jpg`,
                        Name: person.name,
                        Height: person.height,
                        Mass: person.mass,
                        HairColor: person.hair_color,
                        SkinColor: person.skin_color,
                        EyeColor: person.eye_color,
                        BirthYear: person.birth_year,
                        Gender: person.gender,
                      })
                    }
                  >
                    Hide details
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        {!filter &&
          savedProfile.map((person, index) => (
            <Card
              key={person.name}
              sx={classes.cardSx}
              className="savedProfiles__card-profiles"
            >
              <CardContent className="savedProfiles__card-content">
                <img
                  className="savedProfiles__image-profile"
                  src={`https://starwars-visualguide.com/assets/img/characters/${
                    person.url.match(/(\d+)/)[0]
                  }.jpg`}
                  title={person.name}
                />
                <Typography gutterBottom variant="h5" component="div">
                  {person.name}
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      setShowDetails({
                        Image: `https://starwars-visualguide.com/assets/img/characters/${
                          person.url.match(/(\d+)/)[0]
                        }.jpg`,
                        Name: person.name,
                        Height: person.height,
                        Mass: person.mass,
                        HairColor: person.hair_color,
                        SkinColor: person.skin_color,
                        EyeColor: person.eye_color,
                        BirthYear: person.birth_year,
                        Gender: person.gender,
                      })
                    }
                  >
                    Hide details
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default SavedProfiles;
