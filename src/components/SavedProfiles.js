/* eslint-disable jsx-a11y/alt-text */
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { ContextProject } from "../hooks/Context";
import ProfileFilter from "./ProfileFilter";

const useStyles = makeStyles({
    Section: {
        background: "white", 
        padding: "10px",
        "& .div":{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "20px"
        },
        "& .card":{
            margin:5
        },
        "& .img":{
            width: 150,
            height: 150,
            objectFit: "contain"
        },
        "& .cardContent":{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
    },
    cardSx: {
        minWidth: 200
    },
  });

const SavedProfiles = () => {
  const classes = useStyles();
  const { savedProfile, setSavedProfile, setShowDetails, filter,  view, setView } = useContext(ContextProject);

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
  }

  useEffect(()=>{
    setData(savedProfile)
  },[savedProfile])

  useEffect(()=>{
    if(filteredData === []){
        setView(false)
    } else if(filteredData !== [{}]) {
        setView(true)
    }
  },[filteredData, setView])

  return (
    <section className={classes.Section}>
      <Typography variant="h4">Saved people</Typography>
      <br/>
      <ProfileFilter data={data} setFilteredData={setFilteredData} />
      <div className="div">
        {view && filteredData.map((person, index) => (
            <Card key={person.name} sx={classes.cardSx} className="card">
            <CardContent className="cardContent">
              <img
                className="img"
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  person.url.match(/(\d+)/)[0]
                }.jpg`}
                title={person.name}
              />
              <Typography gutterBottom variant="h5" component="div">
                {person.name}
              </Typography>
              <CardActions>
                <Button size="small" variant="contained" onClick={() => handleRemoveFilter(index)}>
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
        { !filter && savedProfile.map((person, index) => (
          <Card key={person.name} sx={classes.cardSx} className="card">
            <CardContent className="cardContent">
              <img
                className="img"
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  person.url.match(/(\d+)/)[0]
                }.jpg`}
                title={person.name}
              />
              <Typography gutterBottom variant="h5" component="div">
                {person.name}
              </Typography>
              <CardActions>
                <Button size="small" variant="contained" onClick={() => handleRemove(index)}>
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

      <div>
      
      <ul>
        
      </ul>
    </div>
    </section>
  );
};

export default SavedProfiles;
