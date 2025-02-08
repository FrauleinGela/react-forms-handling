import { ChangeEvent, useState } from 'react';

export const useInput = <T>(
  initialValue: T,
  validationErrorFn: (value: T) => string
) => {
  const [value, setValue] = useState<T>(initialValue);
  const [showError, setShowError] = useState<boolean>(false);
  const error = validationErrorFn(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
    setShowError(false);
  };

  const handleInputBlur = () => {
    setShowError(true);
  };

  const validate = () => {
    setShowError(true);
    return error;
  };

  return {
    value,
    handleInputChange,
    handleInputBlur,
    validate,
    showError,
    error,
  };
};
