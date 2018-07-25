import React, { Component } from 'react';
import Navbar from './home/Navbar';
import Auth from './auth/Auth';
import Splash from './home/Splash';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '',
      sessionUser: ""
    }
  }

  logout = () => {
    this.setState({
      sessionToken: "",
    });
    localStorage.clear();
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
    const user = localStorage.getItem('user');
    if (user && !this.state.sessionUser) {
      this.setState({ sessionUser: user});
    }
  }

  setSessionState = (token, id) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', id);
    this.setState({ sessionToken: token});
    this.setState({ sessionUser: id});

  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return(
        <Switch>
          <Route path='/' exact>
          <Splash sessionToken={this.state.sessionToken} sessionUser={this.state.sessionUser}/>
          </Route>
        </Switch>
      )
    }else{
      return(
        <Route path="/auth" >
          <Auth setToken={this.setSessionState}/>
        </Route>
      )
    }
  }

  render() {
    return (
      <Router>
      <div id="main">
        <Navbar clickLogout={this.logout} />
        {this.protectedViews()}
      </div>
      </Router>
    );
  }
}

export default App;
