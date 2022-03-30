import React from 'react'
import './App.css';
import Home from './Home';
import SignUp from './SignUp';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (

    //BEM
    <div className="App">
        <Router>
          
          <Switch>
          <Route path="/" component={SignUp} exact />
            <Route path="/search" component={SearchPage} />
          <Route path="/home">
          <Home />
          </Route>
          </Switch>

         </Router>
    </div>
  );
}

export default App;
