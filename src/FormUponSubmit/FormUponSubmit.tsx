import { FormEvent, useState } from 'react';
import { ISignUp } from '../common/models/signUp';
import { validateEmail } from '../common/utils/validation';

export const FormUponSubmit = () => {
  const [formValuesValidity, setFormValuesValidity] = useState<{
    [key in keyof ISignUp]: boolean;
  }>({
    email: true,
    password: true,
    confirmPassword: true,
    firstName: true,
    lastName: true,
    role: true,
    acquisition: true,
  });

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData: FormData = new FormData(form);
    const formValues: ISignUp = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirm-password') as string,
      firstName: formData.get('first-name') as string,
      lastName: formData.get('last-name') as string,
      role: formData.get('role') as string,
      acquisition: formData.getAll('acquisition') as string[],
    };

    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      role,
      acquisition,
    } = formValues;

    const formValidity = {
      email: !!email && validateEmail(email),
      password: !!password,
      confirmPassword:
        !password || (!!password && confirmPassword === password),
      firstName: !!firstName,
      lastName: !!lastName,
      role: !!role,
      acquisition: acquisition.length > 0,
    };

    const valid = Object.values(formValidity).every((value) => value);
    if (!valid) {
      setFormValuesValidity(formValidity);
    }
    console.log('sending form values to server ', formValues);
  };

  return (
    <>
      <h2>Validation of fields upon submit</h2>
      <form onSubmit={handleOnSubmit}>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
          {!formValuesValidity.email && (
            <div className='form-control-error'>Email is not valid</div>
          )}
        </div>
        <div className='form-control-row'>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
            {!formValuesValidity.password && (
              <div className='form-control-error'>Password is not valid</div>
            )}
          </div>
          <div className='form-control'>
            <label htmlFor='confirm-password'>Password</label>
            <input
              type='password'
              name='confirm-password'
              id='confirm-password'
            />
            {!formValuesValidity.confirmPassword && (
              <div className='form-control-error'>Should match password</div>
            )}
          </div>
        </div>
        <div className='form-control-row'>
          <div className='form-control'>
            <label htmlFor='first-name'>First name</label>
            <input type='text' name='first-name' id='first-name' />
            {!formValuesValidity.firstName && (
              <div className='form-control-error'>First name is not valid</div>
            )}
          </div>
          <div className='form-control'>
            <label htmlFor='last-name'>Last name</label>
            <input type='text' name='last-name' id='last-name' />
            {!formValuesValidity.lastName && (
              <div className='form-control-error'>Last name is not valid</div>
            )}
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='role'>What describes your role </label>
          <select name='role' id='role'>
            <option value=''></option>
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
            <option value='employee'>Employee</option>
          </select>
          {!formValuesValidity.role && (
            <div className='form-control-error'>Please select a role</div>
          )}
        </div>
        <fieldset>
          <legend>How did you find us?</legend>
          <div className='form-control'>
            <input
              type='checkbox'
              name='acquisition'
              id='google'
              value='google'
            />
            <label htmlFor='google'>Google</label>
          </div>
          <div className='form-control'>
            <input
              type='checkbox'
              name='acquisition'
              id='friend'
              value='friend'
            />
            <label htmlFor='friend'>By a friend</label>
          </div>
          <div className='form-control'>
            <input
              type='checkbox'
              name='acquisition'
              id='other'
              value='other'
            />
            <label htmlFor='other'>Other</label>
          </div>
          {!formValuesValidity.acquisition && (
            <div className='form-control-error'>
              Please select an acquisition
            </div>
          )}
        </fieldset>
        <div className='form-actions'>
          <button type='reset' className='button button-flat'>
            Reset
          </button>
          <button type='submit' className='button'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
