import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles({
    Header: {
        width: "min(100% - 1em, 75em)",
        marginInline: "auto",
        color: "white",
        padding: "30px 0px 0px 30px"
    }
  });

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.Header}>
      <Typography variant='h3'>Web test</Typography>
      <Typography variant='h4'>Play with SWAPI</Typography>
    </header>
  )
}

export default Header