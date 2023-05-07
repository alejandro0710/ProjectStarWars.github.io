import { useState, useContext } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TablePagination,
} from "@material-ui/core";
import { ContextProject } from "../hooks/Context";
import styled from "styled-components";

const ContentTable = styled.div`
  width: 100%;
  max-height: 480px;
  padding: 10px 10px 20px 10px;
  margin-bottom: 15px;
  overflow-x: auto;
  background: white;

  & .ContentTable__table {
    min-width: 650px;
  }

  & .ContentTable__table-head {
    min-width: 100px;
  }

  & .ContentTable__button-view-details {
    margin-right: 5px;
  }

  & .ContentTable__button--save {
    margin-left: 5px;
  }

  @media screen and (max-width: 1050px) {
    max-width: 41em;

    & .ContentTable__table-head {
      width: 10px;
    }
  }

  @media screen and (max-width: 530px) {
  }
`;

function TableProject() {
  const {
    searchResponse,
    setSearchResponse,
    savedProfile,
    setSavedProfile,
    setShowDetails,
    setFilter,
    setView,
    savedCharacters,
    setSavedCharacters,
    scrollToBottom,
    widthView,
  } = useContext(ContextProject);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSave = (person) => {
    setFilter(false);
    setView(false);
    setSavedProfile([...savedProfile, person]);
    setSearchResponse(
      searchResponse.filter((result) => result.name !== person.name)
    );
    setSavedCharacters([...savedCharacters, person]);
  };

  const filteredResponse = searchResponse.filter(
    (result) =>
      !savedCharacters.some((character) => character.name === result.name)
  );

  const columns =
    widthView < 730
      ? widthView < 490
        ? [
            {
              id: 0,
              label: "Name",
            },
          ]
        : [
            {
              id: 0,
              label: "Name",
            },
            {
              id: 1,
              label: "Gender",
            },
          ]
      : [
          {
            id: 0,
            label: "Name",
          },
          {
            id: 1,
            label: "Gender",
          },
          {
            id: 2,
            label: "Birth year",
          },
          {
            id: 3,
            label: "Eye color",
          },
        ];

  return (
    <ContentTable>
      <TableContainer component={Paper}>
        <Table className="ContentTable__table" aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} className="ContentTable__table-head">
                  <h3>{column.label}</h3>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredResponse
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((character) => (
                <TableRow key={character.name}>
                  <TableCell>{character.name}</TableCell>
                  {widthView >= 490 && (
                    <TableCell>{character.gender}</TableCell>
                  )}
                  {widthView >= 730 && (
                    <>
                      <TableCell>{character.birth_year}</TableCell>
                      <TableCell>{character.eye_color}</TableCell>{" "}
                    </>
                  )}
                  <TableCell>
                    <Button
                      className="ContentTable__button-show-details"
                      size="small"
                      variant="contained"
                      onClick={() => {
                        setShowDetails({
                          Image: `https://starwars-visualguide.com/assets/img/characters/${
                            character.url.match(/(\d+)/)[0]
                          }.jpg`,
                          Name: character.name,
                          Height: character.height,
                          Mass: character.mass,
                          HairColor: character.hair_color,
                          SkinColor: character.skin_color,
                          EyeColor: character.eye_color,
                          BirthYear: character.birth_year,
                          Gender: character.gender,
                        });
                        scrollToBottom();
                      }}
                    >
                      {widthView < 530 ? "Details" : "Show details"}
                    </Button>
                    <Button
                      className="ContentTable__button--save"
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => handleSave(character)}
                    >
                      Save
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {searchResponse.length > 0 && (
        <TablePagination
          rowsPerPageOptions={false}
          component="div"
          count={searchResponse.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </ContentTable>
  );
}

export default TableProject;
