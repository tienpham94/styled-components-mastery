import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Card } from './elements';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <main>
          <Card>
            <h2>Card Heading</h2>
            <Card.Button modifiers="cancel">Say Hello</Card.Button>
            <Card.Button>Say Hello</Card.Button>
          </Card>
          {/* <Button modifiers="cancel">Say Hello</Button>
          <Button modifiers="small">Say Hello</Button>
          <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button> */}
        </main>
      </div>
    );
  }
}

export default App;
