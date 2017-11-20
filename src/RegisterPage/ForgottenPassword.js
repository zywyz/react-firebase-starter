import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ForgottenPasswordForm from './ForgottenPasswordForm';
import * as actionCreators from '../store/actions/index';

class ForgottenPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      requestInProgress: false,
      errorMessage: '',
      emailSuccessfullySent: false,
    };
  }

  render() {
    if (this.props.isLogged) {
      return (
        <Redirect to='/u' />
      );
    }

    if (this.state.emailSuccessfullySent) {
      return (
        <div className="forgotten-password-page container">
          Email has been sent.
        </div>
      );
    }

    return (
      <div className="forgotten-password-page container">
        <h1>Forgotten Password?</h1>
        <ForgottenPasswordForm 
          onSubmit={this.handleSubmit} 
          errorMessage={this.state.errorMessage}
          requestInProgress={this.state.requestInProgress}
        />
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  }

  handleSubmit = ({ email }) => {
    this.setState({
      errorMessage: '',
    });
    this.startLoading();
    this.props.sendPasswordResetEmail(email)
      .then(() => {
        this.setState({
          emailSuccessfullySent: true,
        });
        console.log('succes in component');
      })
      .catch(err => {
        this.stopLoading();
        this.setState({
          errorMessage: err.message,
        });
      });
  }

  startLoading = () => {
    this.setState({
      requestInProgress: true,
    });
  }
  
  stopLoading = () => {
    this.setState({
      requestInProgress: false,
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
    sendPasswordResetEmail: (email) => dispatch(actionCreators.sendPasswordResetEmail(email)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgottenPasswordPage);
