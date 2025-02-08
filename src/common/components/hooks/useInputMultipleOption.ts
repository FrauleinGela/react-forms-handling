import { MouseEvent, useState } from 'react';

export const useInputWithMultipleOption = (
  initialValue: Record<string, boolean>,
  validationErrorFn: (value: Record<string, boolean>) => string
) => {
  const [value, setValue] = useState(initialValue);
  const [showError, setShowError] = useState(false);

  const error = validationErrorFn(value);

  const handleOnClick = (event: MouseEvent<HTMLInputElement>) => {
    const { id, checked } = event.target as HTMLInputElement;

    setValue((prev) => {
      const newValue = {
        ...prev,
        [id]: checked,
      };

      return newValue;
    });
    setShowError(true);
  };

  const validate = () => {
    const error = validationErrorFn(value);
    setShowError(true);
    return error;
  };

  return {
    value,
    error,
    handleOnClick,
    validate,
    showError,
  };
};
