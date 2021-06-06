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
            {' '}
            <i>
              Proficient:
            </i>
            {' '} Java, Python, JavaScript {' '}
            <i>
              Familiar:
            </i>
            {' '} Scala, C#, C, C++, GraphQL, Matlab
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Front-end:
            </b> 
            {' '} ReactJS, Redux, Cypress, Material-UI, Semantic-UI, HTML5, CSS3
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Frameworks/Services:
            </b> 
            {' '} Relational Databases (PostgreSQL), NoSQL Databases (MongoDB), JVM, Docker, PyTorch, Express, Node.js, NumPy, scikit-learn, Flask, AWS EC2, Spark
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Tools:
            </b> 
            {' '} Git, Linux, Bash, Heroku, Unity3D
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Methodologies:
            </b> 
            {' '} Object oriented programming, Unit testing, RESTful API, Full-stack development, Version control
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Soft skills:
            </b> 
            {' '} Communication, Collaboration, Leadership, Critical thinking
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default TechnicalSkills;
