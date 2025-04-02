'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FieldValues, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

export default function SigninForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: FieldValues) {
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
