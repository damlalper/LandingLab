import React, { forwardRef } from 'react';
import './Input.scss';

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
  className?: string;
  ariaLabel?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      label,
      placeholder,
      value,
      onChange,
      onBlur,
      error,
      disabled = false,
      required = false,
      name,
      id,
      autoComplete,
      className = '',
      ariaLabel,
    },
    ref
  ) => {
    const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    const inputClassNames = [
      'input__field',
      hasError ? 'input__field--error' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="input">
        {label && (
          <label htmlFor={inputId} className="input__label">
            {label}
            {required && <span className="input__required"> *</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          className={inputClassNames}
          aria-label={ariaLabel || label}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
        />
        {error && (
          <span id={`${inputId}-error`} className="input__error" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
