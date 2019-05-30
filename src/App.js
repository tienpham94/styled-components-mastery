import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button, CancelButton } from './elements';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <Button>Say Hello</Button>
        <Button type="cancel">Say Hello</Button>
        <CancelButton>Don't Say Hello</CancelButton>
        <Button size="small">Say Hello</Button>
        <CancelButton size="small">Don't Say Hello</CancelButton>
      </div>
    );
  }
}

export default App;
