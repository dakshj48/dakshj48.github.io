import React from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <h1>
        Daksh Jain
      </h1>
      <Education />
      <Experience />
      <Projects />
    </div>
  )
}

export default App;
