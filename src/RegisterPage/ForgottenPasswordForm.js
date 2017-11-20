import React from 'react';
import { Input } from '../Form';
import { Field, reduxForm } from 'redux-form';
import Button from '../Button/Button';
import * as validation from '../Form/validation';

const RegisterForm = (props) => {
  const errorMessage = props.errorMessage ? (
    <div className="error-message">{props.errorMessage}</div>
  ) : null;

  return (
    <form onSubmit={props.handleSubmit} noValidate>
      <Field
        name="email"
        component={Input}
        type="email"
        placeholder="Email"
        validate={[validation.required, validation.email]}
      />
      { errorMessage }
      <Button isLoading={props.requestInProgress} onClick={this.handleSubmit} className="btn">
        Reset password
      </Button>
    </form>
  );

};


export default reduxForm({
  form: 'register', // a unique identifier for this form
})(RegisterForm);