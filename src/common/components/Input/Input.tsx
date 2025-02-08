import { AllHTMLAttributes } from 'react';

export const Input = ({
  id,
  label,
  error,
  ...props
}: {
  id: string;
  label: string;
  error: string;
} & AllHTMLAttributes<HTMLElement>) => {
  return (
    <div className='form-control'>
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} />
      {error && <div className='form-control-error'>{error}</div>}
    </div>
  );
};
