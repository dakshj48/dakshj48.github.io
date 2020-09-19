import React, { useState, useRef } from 'react';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import TechnicalSkills from './TechnicalSkills';
import HonorsAndAwards from './HonorsAndAwards';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 25,
    left: 'auto',
    position: 'fixed',
  }
}));

const LeftAccordionSummary = withStyles({
  expandIcon: {
      order: -1
    },
})(AccordionSummary);

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Resume = () => {  
  const classes = useStyles();
  const ref = useRef(null)
  const executeScroll = () => scrollToRef(ref)

  const handleChange = (panel) => (event, newExpanded) => {
    if (expanded.includes(panel)) {
      setExpanded(expanded.filter(item => item !== panel));
    }
    else {
      setExpanded(expanded.concat(panel));
      executeScroll();
    }
  };

  const [expanded, setExpanded] = useState([]);

  const expandAll = () => {
    setExpanded(['education', 'experience', 'projects', 'technicalskills', 'honors']);
  }

  return (
      <div className={classes.root}>
        <br />
        <Accordion
          expanded={expanded.includes('education')}
          onChange={handleChange('education')}
          ref={ref}
        >
          <LeftAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='education-header'
            IconButtonProps={{edge: 'start'}}
          >
            <Typography className={classes.heading}>
              Education
            </Typography>
          </LeftAccordionSummary>
          <AccordionDetails>
            <Typography>
              <Education />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('experience')}
          onChange={handleChange('experience')}
        >
          <LeftAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='experience-header'
            IconButtonProps={{edge: 'start'}}
          >
            <Typography className={classes.heading}>
              Experience
            </Typography>
          </LeftAccordionSummary>
          <AccordionDetails>
            <Typography>
              <Experience />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('projects')}
          onChange={handleChange('projects')}
        >
          <LeftAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='projects-header'
            IconButtonProps={{edge: 'start'}}
          >
            <Typography className={classes.heading}>
              Projects
            </Typography>
          </LeftAccordionSummary>
          <AccordionDetails>
            <Typography>
              <Projects />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('technicalskills')}
          onChange={handleChange('technicalskills')}
        >
          <LeftAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='technicalskills-header'
            IconButtonProps={{edge: 'start'}}
          >
            <Typography className={classes.heading}>
              Technical Skills
            </Typography>
          </LeftAccordionSummary>
          <AccordionDetails>
            <Typography>
              <TechnicalSkills />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('honors')}
          onChange={handleChange('honors')}
        >
          <LeftAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='honorsandawards-header'
            IconButtonProps={{edge: 'start'}}
          >
            <Typography className={classes.heading}>
              Honors and Awards
            </Typography>
          </LeftAccordionSummary>
          <AccordionDetails>
            <Typography>
              <HonorsAndAwards />
            </Typography>
          </AccordionDetails>
        </Accordion>
        {
          expanded.length < 5 &&
          <Tooltip title='Expand All' aria-label='expand'>
            <Fab color='secondary' className={classes.fab} onClick={expandAll}>
              <ExpandMoreIcon />
            </Fab>
          </Tooltip>
        }
        {
          expanded.length === 5 &&
          <Tooltip title='Collapse All' aria-label='collapse'>
            <Fab color='secondary' className={classes.fab} onClick={() => setExpanded([])}>
              <ExpandLessIcon />
            </Fab>
          </Tooltip>     
        }
      </div>
  )
}

export default Resume;
