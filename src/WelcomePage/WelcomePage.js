import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './WelcomePage.css';

const WelcomePage = (props) => {
  if (props.isLogged) {
    return (
      <Redirect to='/u' />
    );
  }

  return (
    <div className="welcome-page">
      <div className="container">
        <h1>Welcome...</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate venenatis tincidunt. Sed id aliquam augue, congue lobortis felis.
        </p>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.user.isLogged,
  };
}

export default connect(mapStateToProps)(WelcomePage);
