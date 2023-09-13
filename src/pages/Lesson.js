import React from 'react';
import { Grid } from '@mui/material';

export const Lesson = () => {
  return (
    <>
      <Grid item sm={2}>
        {/*<FoneImages className="left" />*/}
      </Grid>
      <Grid item sm={8} pt={3} className="App-header lessons">
        {/*<GoBackButton />*/}
        {/*<LessonTabs />*/}
      </Grid>
      <Grid item sm={2}>
        {/*<FoneImages className="right" />*/}
      </Grid>
    </>
  );
};
