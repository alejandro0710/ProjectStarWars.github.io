import { ContextProjectProvider } from "./hooks/Context";
import Main from "./containers/Main";
import Header from "./containers/Header";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  Projectbody: {
    background: "#353a3e",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ContextProjectProvider>
      <body className={classes.Projectbody}>
        <Header />
        <Main />
      </body>
    </ContextProjectProvider>
  );
}

export default App;
