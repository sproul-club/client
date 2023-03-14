import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../../../../hooks/useLocalStorage";

interface LoginForm_Props {
  onSubmit: (data: any) => void;
}

const LoginForm = ({ onSubmit }: LoginForm_Props) => {
  const [awaitingVerification, setAwaitingVerification] = useLocalStorage(
    "awaitingVerification",
    false
  );

  const formFields = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formFields;

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit((data) => {
      // View data on submission
      onSubmit(data);
    })(e).catch((error) => {
      console.log(error);
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="email"
        {...register("email", {
          required: true,
        })}
      />
      {awaitingVerification && (
        <input
          type="text"
          {...register("verificationCode", {
            required: true,
          })}
        />
      )}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
