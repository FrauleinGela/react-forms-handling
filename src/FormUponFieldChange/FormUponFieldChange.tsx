import { validateEmail } from '../common/utils/validation';
import { Input } from '../common/components/Input/Input';
import { useState } from 'react';

export const FormUponFieldChange = () => {
  const [email, setEmail] = useState('');
  const [emailDidEdit, setEmailDidEdit] = useState(false);
  const [emailHasError, setEmailHasError] = useState(false);

  const handleInputChange = (value: string) => {
    setEmail(value);
    setEmailDidEdit(false);
  };

  const handleInputBlur = () => {
    setEmailDidEdit(true);
    setEmailHasError(!validateEmail(email));
  };

  const handleOnSubmit = () => {};

  return (
    <>
      <h2>Validation of fields upon change and on focus lost</h2>
      <form onSubmit={handleOnSubmit}>
        <Input
          id='email'
          name='email'
          type='email'
          label='Email'
          error={emailDidEdit && emailHasError ? 'Email is not valid' : ''}
          onChange={(event) => handleInputChange((event.target as HTMLInputElement).value)}
          onBlur={handleInputBlur}
        />

        <div className='form-control-row'>
          <Input
            id='password'
            name='password'
            label='Password'
            type='password'
            error=''
          />
          <Input
            id='confirm-password'
            name='confirm-password'
            label='Confirm password'
            type='password'
            error=''
          />
        </div>

        <div className='form-control-row'>
          <Input
            id='firstName'
            name='firstName'
            label='First name'
            type='text'
            error=''
          />
          <Input
            id='lastName'
            name='lastName'
            label='Last name'
            type='text'
            error=''
          />
        </div>

        <div className='form-control'>
          <label htmlFor='role'>What describes your role </label>
          <select name='role' id='role'>
            <option value=''></option>
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
            <option value='employee'>Employee</option>
          </select>
          {/* {!formValuesValidity.role && (
            <div className='form-control-error'>Please select a role</div>
          )} */}
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
          {/* {!formValuesValidity.acquisition && (
            <div className='form-control-error'>
              Please select an acquisition
            </div>
          )} */}
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
