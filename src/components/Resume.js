import React, { useState } from 'react';
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
import {Link} from 'react-scroll'

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


const Resume = () => {  
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    if (expanded.includes(panel)) {
      setExpanded(expanded.filter(item => item !== panel));
    }
    else {
      setExpanded(expanded.concat(panel));
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
        >
          <Link 
            activeClass="active" 
            to="education-header" 
            spy={true} 
            smooth={true}
            easeOutQuint={true}
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
          </Link>
          <AccordionDetails>
            <Typography component={'div'}>
              <Education />
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes('experience')}
          onChange={handleChange('experience')}
        >
          <Link 
            activeClass="active" 
            to="experience-header" 
            spy={true} 
            smooth={true}
            easeOutQuint={true}
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
          </Link>
          <AccordionDetails>
            <Typography component={'div'}>
              <Experience />
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion
          expanded={expanded.includes('projects')}
          onChange={handleChange('projects')}
        >
          <Link 
            activeClass="active" 
            to="projects-header" 
            spy={true} 
            smooth={true}
            easeOutQuint={true}
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
          </Link>
          <AccordionDetails>
            <Typography component={'div'}>
              <Projects />
            </Typography>
          </AccordionDetails>
        </Accordion>
      
        <Accordion
          expanded={expanded.includes('technicalskills')}
          onChange={handleChange('technicalskills')}
        >
          <Link 
            activeClass="active" 
            to="technicalskills-header" 
            spy={true} 
            smooth={true}
            easeOutQuint={true}
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
          </Link>
          <AccordionDetails>
            <Typography component={'div'}>
              <TechnicalSkills />
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion
          expanded={expanded.includes('honors')}
          onChange={handleChange('honors')}
        >
          <Link 
            activeClass="active" 
            to="honorsandawards-header" 
            spy={true} 
            smooth={true}
            easeOutQuint={true}
          >
            <LeftAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='honorsandawards-header'
              IconButtonProps={{edge: 'start'}}
            >
              <Typography className={classes.heading} >
                Honors and Awards
              </Typography>
            </LeftAccordionSummary>
          </Link>
          <AccordionDetails>
            <Typography component={'div'}>
              <HonorsAndAwards />
            </Typography>
          </AccordionDetails>
        </Accordion>

        {
          expanded.length < 5 &&
          <Link 
            activeClass="active" 
            to="education-header" 
            spy={true} 
            smooth={true}
          >
            <Tooltip title='Expand All' aria-label='expand'>
                <Fab color='secondary' className={classes.fab} onClick={expandAll}>
                  <ExpandMoreIcon />
                </Fab>
            </Tooltip>
          </Link>
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
