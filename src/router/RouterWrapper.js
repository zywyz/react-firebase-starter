import React from 'react';
import { connect } from 'react-redux';

const Wrapper = ({ children, isLoginStatusFetched, isLogged, isVerified }) => {
  if (!isLoginStatusFetched) {
    return (
      <div className="container">
        <h1>[LOADER] Waiting for login status...</h1>
      </div>
    );
  }
  if (isLogged && !isVerified) {
    return (
      <div className="container">
        <div>We've sent you an email. Check it to confirm and go back to start using app.</div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      {children}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoginStatusFetched: state.user.isLoginStatusFetched,
    isVerified: state.user.isVerified,
    isLogged: state.user.isLogged,
  };
}

export default connect(mapStateToProps)(Wrapper);