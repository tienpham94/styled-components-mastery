import React from "react";
import styled, { css } from "styled-components";
import logo from "./logo.svg";
import GlobalStyle from "./Global";
import { Heading, Button, CancelButton } from "./elements";

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
        <CancelButton top="100">Cancel</CancelButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
