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
    textAlign: 'flex-start',
  },
}));

const HonorsAndAwards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Baystate Scholarship:
            </b> 
            {' '} Scholarship awarded to undergraduates who excelled in computer science and are
            pursuing master's in computer science at UMass.
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Dean's List:
            </b> 
            {' '} Honor awarded to undergraduates who complete a minimum of 12 graded credits while maintaining a high grade point average. 
            Received all semesters.
          </Paper>
        </Grid>
      </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Chancellor's Award:
            </b> 
            {' '} Scholarship awarded to admitted freshmen whose academic and personal achievements are especially strong.
          </Paper>
        </Grid>
    </div>
  )
}

export default HonorsAndAwards;
