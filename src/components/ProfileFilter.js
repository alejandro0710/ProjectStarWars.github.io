import { Button, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { ContextProject } from '../hooks/Context';

const useStyles = makeStyles({
  Button: {
    margin: "0 3px"   
  }
});

function ProfileFilter({data, setFilteredData }) {
  const classes = useStyles();

  const { setFilter } = useContext(ContextProject)

  const filterByGender = (gender) => {
    if (gender === 'male') {
      setFilteredData(data.filter(item => item.gender === 'male'));
    } else if (gender === 'female') {
      setFilteredData(data.filter(item => item.gender === 'female'));
    } else {
      setFilteredData(data);
    }
  }

  return (
    <div>
      <Button className={classes.Button} size='small' variant='contained' onClick={() => {filterByGender('All'); setFilter( true)}}>All</Button>
      <Button className={classes.Button} size='small' variant='contained' onClick={() => {filterByGender('male'); setFilter( true)}}>Male</Button>
      <Button className={classes.Button} size='small' variant='contained' onClick={() => {filterByGender('female'); setFilter( true)}}>Female</Button>
    </div>
  );
}

export default ProfileFilter;
