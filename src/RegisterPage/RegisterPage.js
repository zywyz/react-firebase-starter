import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import * as actionCreators from '../store/actions/index';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      registerInProgress: false,
      errorMessage: '',
    };
  }

  render() {
    if (this.props.isLogged) {
      return (
        <Redirect to='/u' />
      );
    }

    return (
      <div className="register-page container">
        <Link to='/'>Home</Link>
        <RegisterForm onSubmit={this.handleSubmit} 
          errorMessage={this.state.errorMessage}
          registerInProgress={this.state.registerInProgress}>
        </RegisterForm>
        <Link to='/login'>Login</Link>
      </div>
    );
  }

  handleSubmit = (form) => {
    this.setState({
      errorMessage: '',
    });
    this.startLoading();
    const { email, password } = form;
    this.props.registerWithEmail(email, password)
      .catch(err => {
        this.stopLoading();
        this.setState({
          errorMessage: err.message,
        });
      });
  }

  startLoading = () => {
    this.setState({
      registerInProgress: true,
    });
  }
  
  stopLoading = () => {
    this.setState({
      registerInProgress: false,
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
    registerWithEmail: (email, password) => dispatch(actionCreators.registerWithEmail(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
