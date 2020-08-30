import React, { useState } from 'react';
import './App.css';
import Landing from './components/Landing';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='App Site'>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className='Site-content'>
          <div className='App-header'>
            <img src={background} className='bg' alt='12'/>
            <AppBar position='static' color='inherit' component='div'>
              <Tabs value={value} onChange={handleChange} component='div'>
                <Tab label='About Me' {...a11yProps(0)} component='div' />
                <Tab label='Resume' {...a11yProps(1)} component='div' />
              </Tabs>
            </AppBar>
          </div>
          <div className='main'>
            <TabPanel value={value} index={0} component={'div'}>
              <Landing />
            </TabPanel>
            <TabPanel value={value} index={1} component={'div'}>
              <Resume />
            </TabPanel>
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
