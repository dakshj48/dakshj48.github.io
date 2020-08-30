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
  },
}));

const Experience = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <b>
            College of Information and Computer Science, UMass
            </b>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Amherst, MA
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <i>
            Teaching Assistant
          </i>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Jan. 2019 - May 2019
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <b>
              Role:
            </b>
            {' '} Help other computer science undergraduates at UMass with a systems course.
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <b>
              Responsibilities:
            </b>
            {' '} Answering students' questions online and in-lab gatherings and helping professors in
            grading assignments and exams.
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Experience;
