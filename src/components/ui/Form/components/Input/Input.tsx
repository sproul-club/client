'use client';

import { forwardRef, useId, useRef, useState } from 'react';
import classes from '../../../../../utils/classes';
import styles from './Input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, className, ...inputProps }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const potentialNewId = useId();
  inputProps.id ||= potentialNewId;

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <div className={classes(styles.container, className)}>
      {label ? (
        <label
          htmlFor={inputProps.id}
          className={classes(isFocused ? styles.focused : null)}
        >
          {label}
        </label>
      ) : null}
      <input
        {...inputProps}
        className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}
