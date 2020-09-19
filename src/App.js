import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import background from './static/background.jpg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {
  return (
    <div className='App Site'>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className='Site-content'>
          <div className='App-header'>
            <img src={background} className='bg' alt='12'/>
            <Contacts />
          </div>
          <div className='main'>
            <br />
            <Landing />
            <Resume />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </ThemeProvider>
    </div>    
  )
}

export default App;
