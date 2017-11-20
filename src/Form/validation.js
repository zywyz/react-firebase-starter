// import { isEmail } from 'validator';

export const required = value => (value ? undefined : 'Required');

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

export const minLength6 = value =>
  value.length < 6 ? 'At least 6 characters needed' : undefined;

// export const email = (value) => {
//   if (!isEmail(value)) {
//     return <span className="form-error is-visible">{value} is not a valid email.</span>;
//   }
// };

// export const isEqual = (value, props, components) => {
//   const bothUsed = components.password[0].isUsed && components.confirm[0].isUsed;
//   const bothChanged = components.password[0].isChanged && components.confirm[0].isChanged;

//   if (bothChanged && bothUsed && components.password[0].value !== components.confirm[0].value) {
//     return <span className="form-error is-visible">Passwords are not equal.</span>;
//   }
// };