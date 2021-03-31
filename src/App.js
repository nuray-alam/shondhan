import './App.css';
import Header from './components/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Blood from './components/Blood/Blood';
import Missing from './components/Missing/Missing';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/blood_donors'>
            <Blood></Blood>
          </Route>
          <Route exact path='/missing_post'>
            <Missing></Missing>
          </Route>
          <Route path='*'>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
