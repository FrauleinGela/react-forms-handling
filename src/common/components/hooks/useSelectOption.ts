import { ChangeEvent, useState } from 'react';

export const useSelectOption = <T>(
  initialValue: T,
  validationErrorFn: (value: T) => string
) => {
  const [value, setValue] = useState<T>(initialValue);
  const [showError, setShowError] = useState<boolean>(false);

  const error = validationErrorFn(value);

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as T;
    setValue(newValue);
    setShowError(true);
  };

  const validate = () => {
    const error = validationErrorFn(value);
    setShowError(true);
    return error;
  }

  return {
    value,
    error,
    handleInputChange,
    validate,
    showError,
  };
};
