import React from "react";

import GlobalStyle from "./Global";
import Header from "./layouts/Header";
import { Button } from "./elements";

function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Button>Jello</Button>
    </div>
  );
}

export default App;
