import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles=makeStyles({
// buttonStyle:{
//     color:props=>(props.cool?"blue":"red")
// } 
buttonStyle:props=>{
    
        return (
            color:props.cool?"blue":"red",
        );
    }


});

export default function Hook(props){
    const classes=useStyles(props);
    return <Button className={classes.buttonStyle}>the button</Button>;
}