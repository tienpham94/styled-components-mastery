import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Card, Button } from './elements';

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBDE61'
  }
};

const themeTwo = {
  colors: {
    primary: '#524763',
    secondary: '#82D8D8'
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <GlobalStyle />
          <main>
            <Button>Say Hello</Button>
            <ThemeProvider theme={themeTwo}>
              <Card>
                <h2>Card Heading</h2>
                <Card.Button modifiers="cancel">Say Hello</Card.Button>
                <Card.Button>Say Hello</Card.Button>
              </Card>
            </ThemeProvider>
            {/* <Button modifiers="cancel">Say Hello</Button>
            <Button modifiers="small">Say Hello</Button>
            <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button> */}
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
