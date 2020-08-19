import React from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import HonorsAndAwards from './components/HonorsAndAwards';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div>
      <h1>
        Daksh Jain
      </h1>
      <Contacts />
      <Education />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <HonorsAndAwards />
    </div>
  )
}

export default App;
