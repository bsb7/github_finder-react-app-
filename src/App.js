import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

const App = () => {

  return (
    <GithubState>
      <AlertState>        
        <Router>
          <div className="App">
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route path='/' exact component={ Home }/>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
  
}

export default App;
