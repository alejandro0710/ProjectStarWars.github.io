import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import { ContextProject } from "../hooks/Context";
import { useContext } from "react";

const useStyles = makeStyles({
  ContentTable: {
    width: "100%",
    height: "300px",
    overflowX: "auto",
    padding: "5px",
    background: "white",
    "& .ContentTable__table": {
      minWidth: 650,
    },
    "& .ContentTable__table-head": {
      minWidth: (props) => (props.isSmallScreen ? 50 : 100),
    },
    "& .ContentTable__button-view-details": {
      marginRight: 5,
    },
    "& .ContentTable__button--save": {
      marginLeft: 5,
    },
  },
});

function TableProject() {
  const {
    searchResponse,
    setSearchResponse,
    savedProfile,
    setSavedProfile,
    setShowDetails,
    setFilter,
    setView,
  } = useContext(ContextProject);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ isSmallScreen });

  const handleSave = (person) => {
    setFilter(false);
    setView(false);
    setSavedProfile([...savedProfile, person]);
    setSearchResponse(
      searchResponse.filter((result) => result.name !== person.name)
    );
  };

  const columns = [
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
    <div className={classes.ContentTable}>
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
            {searchResponse.map((character) => (
              <TableRow key={character.name}>
                <TableCell>{character.name}</TableCell>
                <TableCell>{character.gender}</TableCell>
                <TableCell>{character.birth_year}</TableCell>
                <TableCell>{character.eye_color}</TableCell>
                <TableCell>
                  <Button
                    className="ContentTable__button-show-details"
                    size="small"
                    variant="contained"
                    onClick={() =>
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
                      })
                    }
                  >
                    Show details
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
      <br />
    </div>
  );
}

export default TableProject;
