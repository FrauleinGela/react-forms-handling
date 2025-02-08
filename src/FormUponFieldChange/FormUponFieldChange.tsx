import { Input } from '../common/components/Input/Input';
import { useInput } from '../common/components/hooks/useInput';
import { useSelectOption } from '../common/components/hooks/useSelectOption';
import { useInputWithMultipleOption } from '../common/components/hooks/useInputMultipleOption';
import { FormEvent } from 'react';
import {
  validateEmailError,
  validateOptionsRequired,
  validateRequired,
} from './functions/validations';

export const FormUponFieldChange = () => {
  const {
    value: emailValue,
    error: emailError,
    showError: showEmailError,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    validate: validateEmail,
  } = useInput<string>('', validateEmailError);

  const {
    value: confirmPasswordValue,
    error: confirmPasswordError,
    showError: showConfirmPasswordError,
    handleInputBlur: handleConfirmPasswordBlur,
    handleInputChange: handleConfirmPasswordChange,
    validate: validateConfirmPassword,
  } = useInput<string>('', validateEmailError);

  const {
    value: passwordValue,
    error: passwordError,
    showError: showPasswordError,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    validate: validatePassword,
  } = useInput<string>('', validateRequired);

  const {
    value: firstNameValue,
    error: firstNameError,
    showError: showFirstNameError,
    handleInputBlur: handleFirstNameBlur,
    handleInputChange: handleFirstNameChange,
    validate: validateFirstName,
  } = useInput<string>('', validateRequired);

  const {
    value: lastNameValue,
    error: lastNameError,
    showError: showLastNameError,
    handleInputBlur: handleLastNameBlur,
    handleInputChange: handleLastNameChange,
    validate: validateLastName,
  } = useInput<string>('', validateRequired);

  const {
    value: roleValue,
    error: roleError,
    handleInputChange: handleRoleChange,
    showError: showRoleError,
    validate: validateRole,
  } = useSelectOption<string>('', validateRequired);

  const {
    value: acquisitionValue,
    error: acquisitionError,
    handleOnClick: handleAcquisitionChange,
    validate: validateAcquisition,
    showError: showAcquisitionError,
  } = useInputWithMultipleOption({}, validateOptionsRequired);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validateFirstName() &&
      validateLastName() &&
      validateRole() &&
      validateAcquisition()
    ) {
      console.log('Form is valid');
    }
  };

  return (
    <>
      <h2>Validation of fields upon change and on focus lost</h2>
      <form onSubmit={handleOnSubmit}>
        <Input
          id='email'
          name='email'
          type='email'
          label='Email'
          value={emailValue}
          error={showEmailError ? emailError : ''}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />

        <div className='form-control-row'>
          <Input
            id='password'
            name='password'
            label='Password'
            type='password'
            value={passwordValue}
            error={showPasswordError ? passwordError : ''}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
          <Input
            id='confirm-password'
            name='confirm-password'
            label='Confirm password'
            type='password'
            value={confirmPasswordValue}
            error={showConfirmPasswordError ? confirmPasswordError : ''}
            onChange={handleConfirmPasswordChange}
            onBlur={handleConfirmPasswordBlur}
          />
        </div>

        <div className='form-control-row'>
          <Input
            id='firstName'
            name='firstName'
            label='First name'
            type='text'
            value={firstNameValue}
            error={showFirstNameError ? firstNameError : ''}
            onChange={handleFirstNameChange}
            onBlur={handleFirstNameBlur}
          />
          <Input
            id='lastName'
            name='lastName'
            label='Last name'
            type='text'
            value={lastNameValue}
            error={showLastNameError ? lastNameError : ''}
            onChange={handleLastNameChange}
            onBlur={handleLastNameBlur}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='role'>What describes your role </label>
          <select
            name='role'
            id='role'
            value={roleValue}
            onChange={handleRoleChange}
          >
            <option value=''></option>
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
            <option value='employee'>Employee</option>
          </select>
          {showRoleError && roleError && (
            <div className='form-control-error'>{roleError}</div>
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
              onClick={handleAcquisitionChange}
            />
            <label htmlFor='google'>Google</label>
          </div>
          <div className='form-control'>
            <input
              type='checkbox'
              name='acquisition'
              id='friend'
              value='friend'
              onClick={handleAcquisitionChange}
            />
            <label htmlFor='friend'>By a friend</label>
          </div>
          <div className='form-control'>
            <input
              type='checkbox'
              name='acquisition'
              id='other'
              value='other'
              onClick={handleAcquisitionChange}
            />
            <label htmlFor='other'>Other</label>
          </div>
          {showAcquisitionError && acquisitionError && (
            <div className='form-control-error'>{acquisitionError}</div>
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
