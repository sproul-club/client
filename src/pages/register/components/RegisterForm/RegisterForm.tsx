import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface RegisterForm_Props {
  onSubmit: (data: any) => void;
}

const RegisterForm = ({ onSubmit }: RegisterForm_Props) => {
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
        type="text"
        {...register("firstName", {
          required: true,
        })}
      />
      <input
        type="text"
        {...register("lastName", {
          required: true,
        })}
      />
      <input
        type="email"
        {...register("email", {
          required: true,
        })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
