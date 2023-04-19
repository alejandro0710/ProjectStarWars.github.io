import React, { createContext, useState } from "react";
import axios from "axios";

// Creamos el contexto
const ContextProject = createContext();

// Creamos el proveedor del contexto
const ContextProjectProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);
  const [savedPeople, setSavedPeople] = useState([]);
  const [savedProfile, setSavedProfile] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [filter, setFilter] = useState(false)
  const [view, setView] = useState(false);

  
  const handleSearchData = async () => {
    const response = await axios.get(
      `https://swapi.dev/api/people/?search=${searchData}`
    );
    setSearchResponse(response.data.results);
  };

  const value = {
    handleSearchData,
    searchResponse,
    setSearchResponse,
    searchData,
    setSearchData,
    savedPeople,
    setSavedPeople,
    savedProfile,
    setSavedProfile,
    showDetails,
    setShowDetails,
    filter,
    setFilter,
    view,
    setView
  };
  return (
    <ContextProject.Provider value={value}>{children}</ContextProject.Provider>
  );
};

export { ContextProject, ContextProjectProvider };
