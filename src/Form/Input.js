import React from 'react';

class Input extends React.Component {
  handleChange = ({ target }) => {
    this.props.input.onChange(target.value.replace(',', '.'));
  };

  render() {
    const { value } = this.props.input;
    const { touched, error } = this.props.meta;
    const errorMessage = touched && error ? <span className="error-message">{error}</span> : null;
    return (
      <div className="input-container">
        <input
          type={this.props.type}
          onChange={this.handleChange}
          value={value}
          className={touched && error ? 'error' : ''}
          placeholder={this.props.placeholder}
        />
        { errorMessage }
      </div>
    );
  }
}

export { Input };