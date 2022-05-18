//tut3
//https://www.youtube.com/watch?v=k_AN49fA9g0&list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr&index=3&ab_channel=AnthonySistilli
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles=makeStyles({
buttonStyle:{
  color:'red',
  border:'none'
}
});

export default function App(){
  const classes = useStyles();
  return(<>
    <Button className={classes.buttonStyle}>Small button</Button>
    </>);
};