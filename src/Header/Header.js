import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/index';
import './header.css';
import logo from './logo.svg';

const Header = (props) =>  (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" style={{ width: 64 }} />
    <h1><Link to="/u">MyAppTitle</Link></h1>
    <Link to="/u/subpage">Subpage</Link>
    <button onClick={props.logout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout()),
  }
}

export default connect(null, mapDispatchToProps)(Header);
