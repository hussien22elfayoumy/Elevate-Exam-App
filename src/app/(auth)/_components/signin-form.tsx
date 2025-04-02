'use client';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SigninFormValues, signinSchema } from '@/lib/schemas/auth.schema';
import InputError from './input-error';

export default function SigninForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: SigninFormValues) {
    console.log(values);
    const res = await signIn('credentials', {
      callbackUrl: '/',
      redirect: false,
      email: values.email,
      password: values.password,
    });

    console.log(res);

    console.log('22222');
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div className="mb-3">
        <Input
          className="h-12 rounded-lg"
          type="email"
          id="email"
          placeholder="Email "
          {...register('email')}
        />
        <InputError inputField={errors.email} />
      </div>

      <Link
        href="/forgot-password"
        className="mb-2 me-2 block text-end text-sm text-brand"
      >
        Forgot your password?
      </Link>

      {/* Password */}
      <div className="mb-3">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="password"
          placeholder="Password"
          {...register('password')}
        />
        <InputError inputField={errors.password} />
      </div>

      <p className="mb-5 me-2 text-end">
        Don't have an account?{' '}
        <Link href="/signup" className="font-medium text-brand">
          Signup
        </Link>
      </p>
      <Button variant="brand" size="form">
        Sign in
      </Button>
    </form>
  );
}
