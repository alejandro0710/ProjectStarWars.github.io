import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@material-ui/core";
import { ContextProject } from "../hooks/Context";
import { useContext } from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "300px",
    overflowX: "auto",
    padding: "5px",
    background: "white",
  },
  table: {
    minWidth: 650,
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
    setView
  } = useContext(ContextProject);
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSave = (person) => {
    setFilter(false)
    setView(false)
    setSavedProfile([...savedProfile, person]);
    setSearchResponse(
      searchResponse.filter((result) => result.name !== person.name)
    );
  };

  const columns = [
    {
      id: "Name",
      label: "Name",
      minWidth: isSmallScreen ? 50 : 90,
      align: "lefth",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Gender",
      label: "Gender",
      minWidth: isSmallScreen ? 50 : 100,
      align: "lefth",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Birth year",
      label: "Birth year",
      minWidth: isSmallScreen ? 50 : 100,
      align: "lefth",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Eye color",
      label: "Eye color",
      minWidth: isSmallScreen ? 50 : 100,
      align: "lefth",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
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
                    style={{ marginRight: "5px" }}
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
      <br/>
    </div>
  );
}

export default TableProject;
