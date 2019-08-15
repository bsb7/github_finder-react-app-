import React, {Component, Fragment} from 'react';
// import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class  App extends Component {

  state = {
    users: [],
    loading: false,
  }

  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   this.setState({
  //     loading: true
  //   })
  //   const res = await axios.get(`https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}`);
  //   console.log(res.data);
  //   this.setState({
  //     users: res.data, loading:false,
  //   })
  // }

  searchUsers = async text =>{
    this.setState({loading:true});
    console.log(text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    console.log(res.data);
    this.setState({
      users: res.data.items, loading:false,
    })

  }

  // clear users from state
  clearUsers= () => this.setState({users:[], loading:false});

  render(){

    const {users, loading} = this.state; 

  return (
    <Router>
      <div className="App">
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Switch>
            <Route path='/' exact render={props=>(
              <Fragment>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false}/>
                <Users loading={loading} users={users} />
              </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
