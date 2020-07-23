import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Homepage from './Homepage';
import Tables from './Tables';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Tables} />
        <Route path="/home" exact render={() => <Homepage lang="pt" />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
