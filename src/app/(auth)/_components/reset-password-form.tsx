'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InputError from './input-error';
import {
  ResetPasswordFormValues,
  resetPasswordSchema,
} from '@/lib/schemas/auth.schema';

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      rePassword: '',
    },
  });

  function onSubmit(values: ResetPasswordFormValues) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div className="mb-5">
        <Input
          className="h-12 rounded-lg"
          type="email"
          id="email"
          placeholder="Email "
          {...register('email')}
        />
        <InputError inputField={errors.email} />
      </div>

      {/* Password */}
      <div className="mb-5">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="password"
          placeholder="Password"
        />
        <InputError inputField={errors.password} />
      </div>

      {/* Confirm Password */}
      <div className="mb-6">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="confirmPassword"
          placeholder="Confirm password "
        />
        <InputError inputField={errors.rePassword} />
      </div>

      <Button variant="brand" size="form">
        Confirm change
      </Button>
    </form>
  );
}
