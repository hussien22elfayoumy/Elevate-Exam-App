'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SigninFormValues, signinSchema } from '@/lib/schemas/auth.schema';
import InputError from './input-error';
import { toast } from '@/hooks/use-toast';

export default function SigninForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: SigninFormValues) {
    try {
      const res = await signIn('credentials', {
        callbackUrl: '/',
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (!res?.ok) {
        throw new Error(res?.error || 'Something went Wrong');
      }

      toast({
        title: 'Success',
        description: 'Welcome to Elevate enjoy',
        variant: 'success',
      });

      reset();

      setTimeout(() => (window.location.href = '/'), 1000);
    } catch (err) {
      console.log('Signin Error:', (err as Error).message);
      toast({
        title: 'Uh oh! Something went wrong.',
        description: (err as Error).message,
        variant: 'destructive',
      });
    }
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
          fieldError={errors.email}
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
          fieldError={errors.email}
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
      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? 'loading...' : 'Sign in'}
      </Button>
    </form>
  );
}
