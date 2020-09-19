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

const TechnicalSkills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Languages:
            </b> 
            {' '} Java, Python, JavaScript, Scala, C#, C, C++, GraphQL, Matlab
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Frameworks and Libraries:
            </b> 
            {' '} React, Express, Node.js, Redux, scikit-learn, PyTorch, Flask, NumPy, Cypress
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Tools:
            </b> 
            {' '} git, MongoDB, Heroku, bash, Unity
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default TechnicalSkills;
