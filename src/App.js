// import * as React from "react";
// import "./styles.css";
// import {Button} from '@material-ui/core'

// export default function App() {
//   return (
//     <div className="App">
//       <h1>test</h1>
//      <Button 
//      color="primary"
//      variant="outlined">This is our first button</Button>
//     </div>
//   );
// }


import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange,purple } from '@material-ui/core/colors';
import {Button} from '@material-ui/core'
import theme from './theme';
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger,
    },
  },
  checked: {},
}));


export default function App() {
  return (  
      <div>
           <Button 
      color="status"
      variant="outlined">This is our first button</Button>
     </div>
  );
}