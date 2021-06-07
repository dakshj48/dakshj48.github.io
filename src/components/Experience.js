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
      <Grid container spacing={1} justify = "center">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <b>
              Mystry
            </b>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Remote
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <i>
            Software Development Engineering Intern
          </i>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            June 2021 - Aug. 2021
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <ul style={{textAlign: 'left'}}>
              <li>
                Working on full-stack development of the main website using React.js
              </li>
              <li>
                Developing the website in a team of two from the ground up
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={1} justify = "center">
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
              Machine Learning Researcher, 
              <a 
              href='https://drive.google.com/file/d/1TSrPhzaBHNgoeXc8YaU43xupCe98WPBK/view?usp=sharing' 
              target='_blank' 
              rel='noopener noreferrer'
              style={{textDecoration: 'none'}}
            >
              <i>
                {' '} Research Paper
              </i>
            </a>
            </i>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Aug. 2020 - Dec. 2020
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <ul style={{textAlign: 'left'}}>
              <li>
                Worked in a team of 2 to train a CNN to do object detection and classification on traffic signs using PyTorch
              </li>
              <li>
                Dataset consisted of 43 classes of traffic signs and a varying number of traffic signs per real-world image
              </li>
              <li>
                Achieved 73.7% and 74.4% average precision and recall values under a limited dataset
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={1} justify = "center">
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
            <ul style={{textAlign: 'left'}}>
              <li>
                Mentored computer science undergraduates at UMass with a computer systems course
              </li>
              <li>
                Answered students’ questions online and in-lab gatherings and graded assignments and exams
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Experience;
