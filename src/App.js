import React from "react";
import styled, { css } from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const size = {
  small: 400,
  med: 960,
  large: 1140
};

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

const Heading = styled.h1`
  font-size: 2rem;
  ${above.med`
    color: blue;
  `}
`;

const color = "white";

const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  color: ${color};
  font-size: 2rem;
  border: none;
`;

const CancelButton = styled(Button)`
  background: tomato;
`;

const AppWrapper = styled.div`
  header {
    background: teal;
  }
  ${Button} {
    margin-bottom: 2rem;
  }
`;

const Fake = ({ className }) => (
  <div className>
    <h2>I'm a fake component</h2>
  </div>
);

const StyledFake = styled(Fake)`
  color: red;
`;

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <Button>Save</Button>
        <CancelButton>Cancel</CancelButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppWrapper>
  );
}

export default App;
