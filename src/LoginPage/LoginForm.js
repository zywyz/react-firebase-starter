import React from 'react';
import { Input } from '../Form';
import { Field, reduxForm } from 'redux-form';
import Button from '../Button/Button';
import * as validation from '../Form/validation';

const LoginForm = (props) => {
  const errorMessage = props.errorMessage ? (
    <div>{props.errorMessage}</div>
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
      <Field
        name="password"
        component={Input}
        type="password"
        placeholder="Password"
        validate={[validation.required, validation.minLength6]}
      />
      { errorMessage }
      <Button isLoading={props.loginInProgress} onClick={this.handleSubmit} className="btn">
        Login
      </Button>
    </form>
  );

};


export default reduxForm({
  form: 'login',
})(LoginForm);