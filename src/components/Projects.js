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

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Full-stack web app for listing blogs
            </b>
            <div style={{float: 'right'}}>
              <a 
                href='https://github.com/dakshj48/Bloglist' 
                target='_blank' 
                rel='noopener noreferrer'
                style={{textDecoration: 'none'}}
              >
                <i>
                  Project link
                </i>
              </a>
            </div>
            <ul>
              <li>
                Users can add links of blogs to the list, like and comment on existing blogs in the list and remove added blogs
              </li>
              <li>
                Utilized MongoDB, Express, React and Node.js (MERN) for development and Heroku for deployment
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Movie Plot Generator
            </b>
            <div style={{float: 'right'}}>
              <a 
                href='https://colab.research.google.com/drive/1FHsFYf7P5pOL-URpOl5l_1ZlbflMTyG2?authuser=1' 
                target='_blank' 
                rel='noopener noreferrer'
                style={{textDecoration: 'none'}}
              >
                <i>
                  Project link
                </i>
              </a>
            </div>
            <ul>
              <li>
                Worked in a team of 5 to generate movie plots given context and genre using NLP algorithms
              </li>
              <li>
                Harnessed Pytorch and Google Colab to meet the resources needed to learn the data from thousands of movies
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              8-D Music Converter
            </b>
            <div style={{float: 'right'}}>
              <a 
                href='https://github.com/dakshj48/8D-Audio-Converter' 
                target='_blank' 
                rel='noopener noreferrer'
                style={{textDecoration: 'none'}}
              >
                <i>
                  Project link
                </i>
              </a>
            </div>
            <ul>
              <li>
                A user-friendly application to convert audio files into 8-D audio files locally
              </li>
              <li>
                Utilized open-source Python APIs for complex audio processing and Flask to receive and serve audio files
              </li>
            </ul>
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              N-puzzle Solver
            </b>
            <ul>
              <li>
                Designed an AI for solving N-puzzles using the Manhattan distance heuristic using Java.
              </li>
              <li>
                Used data structures like hashmap to significantly reduce the computation time.
              </li>
            </ul>
          </Paper>
        </Grid> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Multi-threaded Chat Server and Client
            </b>
            <ul>
              <li>
                Established communication between a server and multiple clients using threads in C++ and Python
              </li>
              <li>
                Features include hosting multiple rooms to which clients can connect and direct messaging between clients
              </li>
            </ul>
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Cache Simulator and Bank Simulator
            </b>
            <ul>
              <li>
                Implemented a Least Recently Used (LRU) cache in C.
              </li>
              <li>
                Simulated communication in an ATM system (a bank and several ATMs).
              </li>
            </ul>
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  )
}

export default Projects;
