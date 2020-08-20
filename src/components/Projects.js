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
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              <a href='https://github.com/dakshj48/Bloglist' target='_blank' rel='noopener noreferrer'>
                Full-stack web app for listing blogs
              </a>
            </b>
            <ul>
              <li>
                Users can add links to blogs to the list, like and comment on existing blogs in the list and remove
                the blogs that they have added.
              </li>
              <li>
                Utilized MongoDB, Express, React and Node.js (MERN) for the development and Heroku to
                deploy it to the web.
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Movie Plot Generator
            </b>
            <ul>
              <li>
                Used NLP algorithms (
                <a href='https://colab.research.google.com/drive/1pdU-T8UZY4V3Iqls_uMWWK42zMvDd_EP' 
                target='_blank' rel='noopener noreferrer'> 
                  n-grams, RNN
                </a> 
                {' '} and {' '}
                <a href='https://colab.research.google.com/drive/1FHsFYf7P5pOL-URpOl5l_1ZlbflMTyG2'
                target='_blank' rel='noopener noreferrer'>
                  GPT-2
                </a>
                ) to generate movie plots given context and genre.
              </li>
              <li>
                Utilized MongoDB, Express, React and Node.js (MERN) for the development and Heroku to
                deploy it to the web.
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              N-puzzle Solver
            </b>
            <ul>
              <li>
                Designed an AI for solving N-puzzles using the Manhattan distance heuristic in Java.
              </li>
              <li>
                Used data structures like hashmap to signicantly reduce the computation time.
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>
              Multi-threaded Chat Server and Client
            </b>
            <ul>
              <li>
                Established a communication between server and multiple clients using threads.
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </div>
  )
}

export default Projects;
