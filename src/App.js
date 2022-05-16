//tut2
//https://www.youtube.com/watch?v=tKzSnjWPtEw&list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr&index=2&ab_channel=AnthonySistilli
import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./header";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Content from "./Content";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid xs={false} sm={2} />
        <Grid xs={2} sm={8}>
          <Content />
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
