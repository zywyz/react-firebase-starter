import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import './LoginPage.css';
import LoginForm from './LoginForm';

class LoginPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInProgress: false, 
      email: '',
    };
  }

  render() {
    if (this.props.isLogged) {
      return (
        <Redirect to='/u' />
      );
    }

    return (
      <div className="login-page">
        <div className="container">
          <Link to='/'>Home</Link>
          <LoginForm onSubmit={this.handleSubmit} 
            errorMessage={this.state.errorMessage}
            loginInProgress={this.state.loginInProgress}>
          </LoginForm>
          <Link to='/forgotten-password'>Forgotten password?</Link>
          <Link to='/register'>Register</Link>
        </div>
      </div>
    );
  }

  handleSubmit = (form) => {
    this.setState({
      errorMessage: '',
    });
    this.startLoading();

    this.props.loginWithEmail(form.email, form.password)
      // .then(res => {
      //   console.log('after login', res);
      // })
      .catch(err => {
        this.stopLoading();
        this.setState({
          errorMessage: err.message,
        });
      });
  }

  startLoading = () => {
    this.setState({
      loginInProgress: true,
    });
  }
  
  stopLoading = () => {
    this.setState({
      loginInProgress: false,
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.user.isLogged,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loginWithEmail: (email, password) => dispatch(actionCreators.loginWithEmail(email, password)),
  };
}

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPageView);

export default LoginPage;
