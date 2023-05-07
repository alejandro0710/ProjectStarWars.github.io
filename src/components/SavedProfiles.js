/* eslint-disable no-undef */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { ContextProject } from "../hooks/Context";
import ProfileFilter from "./ProfileFilter";
import styled from "styled-components";

const SavedProfilesWrapper = styled.section`
  background-color: white;
  padding: 10px 10px 40px 10px;

  & .savedProfiles__title {
    margin-bottom: 20px;
  }

  & .savedProfiles__characters {
    display: flex;
    justify-content: ${(props) => (props.widthView <= 1050 ? "center" : null)};
    flex-wrap: wrap;
    margin-top: 20px;
  }

  & .savedProfiles__card-profiles {
    margin: 5px;
    width: 260px;
  }

  & .savedProfiles__image-profile {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }

  & .savedProfiles__card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

const CardSx = styled(Card)`
  min-width: 200px;
`;

const SavedProfiles = () => {
  const {
    savedProfile,
    setSavedProfile,
    setShowDetails,
    filter,
    view,
    setView,
    savedCharacters,
    setSavedCharacters,
    scrollToBottom,
    widthView,
  } = useContext(ContextProject);

  const [data, setData] = useState([...savedProfile]);
  const [filteredData, setFilteredData] = useState([...savedProfile]);

  const handleRemove = (index) => {
    const deleteProfile = [...savedProfile];
    deleteProfile.splice(index, 1);
    setSavedProfile(deleteProfile);
    const newFilteredData = filteredData.filter(
      (profile) => profile.name !== deleteProfile[index].name
    );
    setFilteredData(newFilteredData);
  };

  const handleRemoveFilter = (index) => {
    const deletedProfile = savedProfile[index];
    const newSavedCharacters = savedCharacters.filter(
      (profile) => profile.url !== deletedProfile.url
    );
    setSavedCharacters(newSavedCharacters);
    const newSavedProfile = savedProfile.filter(
      (profile) => profile.url !== deletedProfile.url
    );
    setSavedProfile(newSavedProfile);
    const newFilteredData = filteredData.filter(
      (profile) => profile.url !== deletedProfile.url
    );
    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    setData(savedProfile);
  }, [savedProfile]);

  useEffect(() => {
    if (filteredData.length === 0) {
      setView(false);
    } else if (filteredData !== [{}]) {
      setView(true);
    }
  }, [filteredData, setView]);

  return (
    <SavedProfilesWrapper widthView={widthView}>
      <Typography className="savedProfiles__title" variant="h4">Saved people</Typography>
      <ProfileFilter data={data} setFilteredData={setFilteredData} />
      <div className="savedProfiles__characters">
        {view &&
          filteredData.map((person, index) => (
            <Card
              key={person.name}
              sx={CardSx}
              className="savedProfiles__card-profiles"
            >
              <img
                className="savedProfiles__image-profile"
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  person.url.match(/(\d+)/)[0]
                }.jpg`}
                title={person.name}
              />
              <CardContent className="savedProfiles__card-content">
                <Typography variant="h5" component="div">
                  {person.name}
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => {
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
                      });
                      scrollToBottom();
                    }}
                  >
                    Show details
                  </Button>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={() => handleRemoveFilter(index)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        {!filter &&
          savedProfile.map((person, index) => (
            <Card
              key={person.name}
              sx={CardSx}
              className="savedProfiles__card-profiles"
            >
              <img
                className="savedProfiles__image-profile"
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  person.url.match(/(\d+)/)[0]
                }.jpg`}
                title={person.name}
              />
              <CardContent className="savedProfiles__card-content">
                <Typography variant="h5" component="div">
                  {person.name}
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => {
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
                      });
                      scrollToBottom();
                    }}
                  >
                    Show details
                  </Button>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
      </div>
    </SavedProfilesWrapper>
  );
};

export default SavedProfiles;
