import React from 'react';
import './App.css';
import { StartPage } from './pages/StartPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PreparePage } from './pages/PreparePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StartPage}></Route>
          <Route exact path="/prepare" component={PreparePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
