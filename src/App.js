import React from 'react';
import logo from './logo.svg';
import Student from './Student.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a React based Bootcamp 2020.
        </p>
        <Student myname="Ahsan ul Haq"/>
        <Student myage="26"/>
        <Student mycourse="Reactjs"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
