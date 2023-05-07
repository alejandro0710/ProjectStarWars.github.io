import styled from "styled-components";
import SearchProfile from "../components/SearchProfile";
import Sidebar from "./Sidebar";

const MainContainer = styled.main`
  display: flex;
  width: min(100% - 1em, 80em);
  margin-inline: auto;
  justify-content: space-between;
  padding: 0px 25px;

  @media screen and (max-width: 1050px) {
    max-width: 80em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 520px) {
    padding: 0px;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <SearchProfile />
      <Sidebar />
    </MainContainer>
  );
};

export default Main;
