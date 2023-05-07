import styled from "styled-components";
import { Typography } from "@material-ui/core";

const HeaderContainer = styled.header`
  width: min(100% - 1em, 75em);
  margin-inline: auto;
  color: white;
  padding: 30px 0px 0px 0px;

  .header__title {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .header__subtitle {
    font-size: 2rem;
  }

  @media screen and (max-width: 1050px) {
    max-width: 42em;
    display: flex;
    align-items: end;
    .header__subtitle {
      margin-left: 15px;
    }

    @media screen and (max-width: 710px) {
      width: 100%;
      justify-content: center;
      padding: 10px 0px;
    }

    @media screen and (max-width: 490px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Typography variant="h3" className="header__title">
        Web test
      </Typography>
      <Typography variant="h4" className="header__subtitle">
        Play with SWAPI
      </Typography>
    </HeaderContainer>
  );
};

export default Header;
