'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  forgotPassowrdSchema,
  ForgotPasswordFormValues,
} from '@/lib/schemas/auth.schema';
import InputError from './input-error';

export default function ForgotPasswordForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPassowrdSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: ForgotPasswordFormValues) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div className="mb-4">
        <Input
          className="h-12 rounded-lg"
          type="email"
          id="email"
          placeholder="Email "
          {...register('email')}
        />

        <InputError inputField={errors.email} />
      </div>

      <p className="mb-5 me-2 text-end">
        Remeber your password?{' '}
        <Link href="/signin" className="font-medium text-brand">
          Login
        </Link>
      </p>
      <Button variant="brand" size="form">
        Reset Password
      </Button>
    </form>
  );
}
