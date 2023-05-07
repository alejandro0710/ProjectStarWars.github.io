/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { ContextProject } from "../hooks/Context";
import TableProject from "./TableProject";
import SavedProfiles from "./SavedProfiles";
import {
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import styled from "styled-components";

const SearchProfileWrapper = styled.section`
  padding: 10px;
  width: min(100% - 1em, 100em);

  & .search-profile__title {
    margin-bottom: 20px;
  }

  & .search-profile__form {
    padding: 15px;
    background: white;
  }

  & .search-profile__form-button {
    margin-left: 5px;
    height: 40px;
  }

  @media screen and (max-width: 1050px) {
    max-width: 41em;
  }
  @media screen and (max-width: 426px) {
    & .search-profile__form-Input {
      width: 55%;
    }
  }
`;

function SearchProfile() {
  const [shouldSearch, setShouldSearch] = useState(false);
  const {
    searchData,
    setSearchData,
    setSearchResponse,
    isLoading,
    setIsLoading,
  } = useContext(ContextProject);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    if (search) {
      setSearchData(search);
      setShouldSearch(true);
    }
  }, []);

  useEffect(() => {
    if (shouldSearch && searchData !== "") {
      const handleSearchData = async () => {
        setIsLoading(true);
        const response = await axios.get(
          `https://swapi.dev/api/people/?search=${searchData}`
        );
        setSearchResponse(response.data.results);
        setIsLoading(false);
        const params = new URLSearchParams({ search: searchData });
        window.history.replaceState(
          {},
          "",
          `${window.location.pathname}?${params}`
        );
      };
      handleSearchData();
    } else {
      setSearchResponse([]);
    }
    setShouldSearch(false);
  }, [shouldSearch, searchData]);

  const handleSearch = (e) => {
    e.preventDefault();
    setShouldSearch(true);
  };

  return (
    <SearchProfileWrapper>
      <form className="search-profile__form" onSubmit={handleSearch}>
        <Typography className="search-profile__title" variant="h4">Search people</Typography>
        <TextField
          className="search-profile__form-Input"
          variant="outlined"
          size="small"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 13) {
              e.preventDefault();
              setShouldSearch(true);
            }
          }}
        />
        <Button
          className="search-profile__form-button"
          variant="contained"
          color="primary"
          disabled={!searchData}
          type="submit"
        >
          {isLoading ? <CircularProgress size={24} color="white" /> : "Search"}
        </Button>
      </form>
      <TableProject />
      <SavedProfiles />
    </SearchProfileWrapper>
  );
}

export default SearchProfile;
