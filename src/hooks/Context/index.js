/* eslint-disable no-undef */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ContextProject = createContext();

const ContextProjectProvider = (props) => {
  const { children } = props;
  const [searchData, setSearchData] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);
  const [savedPeople, setSavedPeople] = useState([]);
  const [savedProfile, setSavedProfile] = useState([]);
  const [savedCharacters, setSavedCharacters] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [filter, setFilter] = useState(false);
  const [view, setView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [widthView, setWidthView] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidthView(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToBottom = () => {
    if (widthView < 1050) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 500);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const value = {
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
    setView,
    isLoading,
    setIsLoading,
    savedCharacters,
    setSavedCharacters,
    scrollToBottom,
    widthView,
  };
  return (
    <ContextProject.Provider value={value}>{children}</ContextProject.Provider>
  );
};

ContextProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProject, ContextProjectProvider };
