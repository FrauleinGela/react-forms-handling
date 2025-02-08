import { validateEmail } from '../../common/utils/validation';

export const validateEmailError = (value: string): string => {
  if (validateEmail(value)) {
    return '';
  }
  return 'Email is not valid';
};

export const validateRequired = (value: string): string => {
  if (value) {
    return '';
  }
  return 'This field is required';
};

export const validateOptionsRequired = (
  value: Record<string, boolean>
): string => {
  if (Object.values(value).length > 0 && Object.values(value).some((v) => v)) {
    return '';
  }
  return 'Please, select at least one option';
};
