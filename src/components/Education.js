import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

const Education = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <b>
              Master of Science at the University of Massachusetts, Amherst
            </b>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Sep. 2020 - Dec. 2021
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
          <i>
            Master's in Computer Science
          </i>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <b>
              Current Coursework:
            </b>
            {' '} Neural Networks, Computer Vision, Advanced Algorithms
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <b>
              Bachelor of Science at the University of Massachusetts, Amherst
            </b>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Sep. 2016 - May 2020
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <i>
            Double major in Computer Science and Mathematics
          </i>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            GPA: 3.8/4.0
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <b>
              Coursework:
            </b>
            {' '} Web Development, Machine Learning, Natural Language Processing, Networks, Formal Language Theory, 
            Game Programming, Algorithms, Operating Systems
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Education;
