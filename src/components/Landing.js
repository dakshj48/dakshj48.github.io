import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Photo from '../static/profile_photo.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  h1: {
    fontSize: '500%',
    padding: '0px 0px 0px 0px',
  },
  h2: {
    fontSize: '150%',
    marginTop: '0px',
  },
  photo: {
    height: '7em',
    width: '7em'
  },

}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div align='center' className={classes.root}>
      <Avatar alt='Daksh Jain' src={Photo} className={classes.photo} component={'span'}/>
      <span align='center' className={classes.h1}>
        <b>
          Daksh Jain
        </b>
      </span>
      <br />
      <span align='center' className={classes.h2}>
        Pursuing MS in CS at UMass, Amherst
      </span>
      <br />
      <br />
      <span align='center'>
        A result-oriented first year master's student who aspires to become a top software engineer. 
      </span>
      <br />
      <span align='center'>
        Passionate about computers, technology, and gaming.
      </span>
    </div>
  )
}

export default Landing;
