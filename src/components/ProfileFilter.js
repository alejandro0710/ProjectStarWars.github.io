import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ContextProject } from "../hooks/Context";
import styled from "styled-components";

const ProfileFilterWrapper = styled.div`
  & .profileFilter__button--all {
    background-color: ${(props) =>
      props.selectedButton === "all" ? "#514f4f" : "#979696"};
    margin: 0 2px;
    color: white;
  }
  & .profileFilter__button--male {
    background-color: ${(props) =>
      props.selectedButton === "male" ? "#514f4f" : "#979696"};
    margin: 0 2px;
    color: white;
  }
  & .profileFilter__button--female {
    background-color: ${(props) =>
      props.selectedButton === "female" ? "#514f4f" : "#979696"};
    margin: 0 2px;
    color: white;
  }
`;

function ProfileFilter(props) {
  const { data, setFilteredData } = props;
  const { setFilter } = useContext(ContextProject);
  const [selectedButton, setSelectedButton] = useState("all");

  const filterByGender = (gender) => {
    if (gender === "male") {
      setFilteredData(data.filter((item) => item.gender === "male"));
    } else if (gender === "female") {
      setFilteredData(data.filter((item) => item.gender === "female"));
    } else {
      setFilteredData(data);
    }
    setSelectedButton(gender);
  };

  return (
    <ProfileFilterWrapper selectedButton={selectedButton}>
      <Button
        className="profileFilter__button--all"
        size="small"
        variant="contained"
        onClick={() => {
          filterByGender("all");
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
    </ProfileFilterWrapper>
  );
}

ProfileFilter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilteredData: PropTypes.func.isRequired,
};

export default ProfileFilter;
