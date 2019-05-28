import React from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';

const Heading = styled.h1`
  font-size: 2rem;
`

const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  color: white;
  font-size: 2rem;
  border: none;
  ${p => p.type === 'cancel' && 'background: tomato'};
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Save</Button>
        <Button type="cancel">Cancel</Button>
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
