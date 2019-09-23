import React from 'react'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function BlockA(props) {
  const { data } = props // A: { name, title, author }
  return <Grid container spacing={3}>
    <Grid item xs={6}>
      <Paper>{`name: ${data.name}, title: ${data.title}`}</Paper>
      <Paper>{data.author}</Paper>
    </Grid>
  </Grid>


}

export default BlockA