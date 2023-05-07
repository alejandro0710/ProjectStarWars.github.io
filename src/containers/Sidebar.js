import styled from "styled-components";
import {
  Card,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { ContextProject } from "../hooks/Context";

const Aside = styled.aside`
  background: white;
  margin: 10px;
  width: min(100% - 1em, 20em);
  max-height: 730px;
  border-radius: 3px;

  & .aside__content-title {
    padding: 10px;
  }

  & .aside__content-title-list {
    padding-left: 15px;
  }

  & .aside__content-card-detail-profile {
    max-height: 710px;
  }

  & .aside__content-image-profile {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }

  & .aside__content-info-profile {
    display: flex;
    height: 20px;
    span {
      margin-left: 5px;
    }
  }

  & .aside__content-card-list {
    margin-top: -10px;
  }

  @media screen and (max-width: 1050px) {
    width: 39.8em;

    & .aside__content-card-detail-profile {
      display: flex;
    }
  }

  @media screen and (max-width: 740px) {
    width: 93%;
  }

  @media screen and (max-width: 560px) {
    width: 90%;
    & .aside__content-card-detail-profile {
      display: block;
    }
  }
`;

const DimensionsBodyList = styled(List)`
  width: 100%;
  min-width: 360px;
`;

const Sidebar = () => {
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
    <Aside>
      <Typography variant="h5" className="aside__content-title">
        Information about...
      </Typography>
      {showDetails ? (
        <Card className="aside__content-card-detail-profile">
          <img
            className="aside__content-image-profile"
            src={showDetails.Image}
            alt=""
          />
          <div>
            <ListItemText>
              <h2 className="aside__content-title-list">{showDetails.Name}</h2>
            </ListItemText>
            <DimensionsBodyList
              component="nav"
              className="aside__content-card-list"
            >
              {items.map((item) => (
                <ListItem key={item.name} divider>
                  <ListItemText
                    primary={
                      <div className="aside__content-info-profile">
                        <h4>{item.name}</h4>
                        <span>{item.value}</span>
                      </div>
                    }
                  />
                </ListItem>
              ))}
            </DimensionsBodyList>
          </div>
        </Card>
      ) : (
        <div className="aside__content-title">
          <Typography>Choose someone to get more information about!</Typography>
        </div>
      )}
    </Aside>
  );
};

export default Sidebar;
