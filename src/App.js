
//tut1 
//https://www.youtube.com/watch?v=tKzSnjWPtEw&list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr&index=2&ab_channel=AnthonySistilli
import React from 'react';
import { Grid } from '@material-ui/core';

const App=()=> {
  
  return (  
      <Grid container direction='column'>
        <Grid>header</Grid>
        <Grid>content</Grid>
      </Grid>
  );
}

export default App;