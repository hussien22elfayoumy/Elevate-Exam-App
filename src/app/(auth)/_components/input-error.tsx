import React from 'react';
import { FieldError } from 'react-hook-form';

type InputErrorProps = {
  inputField: FieldError | undefined;
};

export default function InputError({ inputField }: InputErrorProps) {
  return (
    <>
      {inputField && (
        <p className="mt-1 px-1 text-sm text-red-500">{inputField.message}</p>
      )}
    </>
  );
}
