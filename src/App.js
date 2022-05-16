
//tut1 
//https://www.youtube.com/watch?v=tKzSnjWPtEw&list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr&index=1&ab_channel=AnthonySistilli
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange,purple } from '@material-ui/core/colors';
import {Button,Typography} from '@material-ui/core'
import theme from './theme';


const useStyles = makeStyles((theme) => ({
  helloThereStyle:{
    fontStyle:'oblique',
    color:"red",
    fontSize:"30px"

  },
  buttonStyles:{
    color:'green'
  }
}));


export default function App() {
  const classes = useStyles();
  return (  
      <div className="App">
        <Typography 
        className={classes.helloThereStyle}
        variant='h1' color='primary'>Hello there </Typography>
        <Button 
        className={classes.buttonStyles}
      color="secondary"
      variant="outlined">This is our first button</Button>
     </div>
  );
}