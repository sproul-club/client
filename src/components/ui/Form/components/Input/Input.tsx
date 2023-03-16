'use client';

import { Ref, useId, useState } from 'react';
import classes from '../../../../../utils/classes';
import styles from './Input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  ref?: Ref<HTMLInputElement> | null;
}

export default function Input({ label, className, ref, ...inputProps }: Props) {
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
        ref={ref}
      />
    </div>
  );
}
