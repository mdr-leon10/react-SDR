import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    textAlign: 'center',
    height: '200px'

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: 'Start',
    flexDirection: "column",
    height: '200px'
  },
  customBar: {
    height: '200px'
  }
}));

export default function ButtonAppBar(props) {
  //const { button1, button2, showButton1, showButton2, showButton3} = props;
  const { labels, showSearchButton, buttonHandlers } = props;
  const classes = useStyles();

  return (
    <div className={classes.root} style={{justifyContent: "space-evenly", alignItems: "center"}}>
      <AppBar position="static" className={classes.customBar}>
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            MyMusic.io
          </Typography>
          <div style={{flexDirection: "column" }}>
            {labels.map((buttonName, index) => (<Button color="inherit" variant="h1" onClick={() => buttonHandlers[index]()}>{buttonName}</Button>))}
            {showSearchButton && (<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Search artists you like">
                              <SearchOutlinedIcon/>
                              </IconButton>)}
          </div>
        </Toolbar> 
      </AppBar>
    </div>
  );
}