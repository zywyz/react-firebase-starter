import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SubPage from '../SubPage/SubPage';

class App extends Component {
  render() {
    if (!this.props.isLogged) {
      return (
        <Redirect to='/' />
      );
    }
    
    return (
      <div className="app">
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path='/u' component={HomePage} />
            <Route path='/u/subpage' component={SubPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.user.isLogged,
  };
}

export default connect(mapStateToProps)(App);
