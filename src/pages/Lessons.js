import React from 'react';
import { Grid } from '@mui/material';

export const LessonsPage = () => {
  return (
    <>
      <Grid item sm={2}>
        {/*<FoneImages className="left" />*/}
      </Grid>
      <Grid item sm={8} pt={3} className="App-header lessons">
        {/*<GoBackButton />*/}
        {/*<h1>Евангелизация </h1>*/}
        {/*<LessonList />*/}
      </Grid>
      <Grid item sm={2}>
        {/*<FoneImages className="right" />*/}
      </Grid>
    </>
  );
};
