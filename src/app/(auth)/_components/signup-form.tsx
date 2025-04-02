'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignupFormValues, signupSchame } from '@/lib/schemas/auth.schema';
import InputError from './input-error';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchame),
    mode: 'onBlur',
    defaultValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
  });

  function onSubmit(values: SignupFormValues) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* First name */}
      <div className="mb-5">
        <Input
          autoComplete="username"
          className="h-12 rounded-lg"
          type="text"
          id="username"
          placeholder="User name"
          {...register('username')}
        />
        <InputError inputField={errors.username} />
      </div>

      <div className="mb-5">
        <Input
          autoComplete="name"
          className="h-12 rounded-lg"
          type="text"
          id="firstName"
          placeholder="First Name"
          {...register('firstName')}
        />
        <InputError inputField={errors.firstName} />
      </div>

      {/* Last name */}
      <div className="mb-5">
        <Input
          autoComplete="name"
          className="h-12 rounded-lg"
          type="text"
          id="lastName"
          placeholder="Last Name"
          {...register('lastName')}
        />
        <InputError inputField={errors.lastName} />
      </div>

      {/* Email */}
      <div className="mb-5">
        <Input
          autoComplete="email"
          className="h-12 rounded-lg"
          type="email"
          id="email"
          placeholder="Email "
          {...register('email')}
        />
        <InputError inputField={errors.email} />
      </div>

      {/* Phone number */}
      <div className="mb-5">
        <Input
          autoComplete="tel"
          className="h-12 rounded-lg"
          type="tel"
          id="phone"
          placeholder="Phone number"
          {...register('phone')}
        />
        <InputError inputField={errors.phone} />
      </div>

      {/* Password */}
      <div className="mb-5">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="password"
          placeholder="Password"
          {...register('password')}
        />
        <InputError inputField={errors.password} />
      </div>

      {/* Confirm Password */}
      <div className="mb-3">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="confirmPassword"
          placeholder="Confirm password "
          {...register('rePassword')}
        />
        <InputError inputField={errors.rePassword} />
      </div>

      <p className="mb-5 me-2 text-end">
        Alrady have an account?{' '}
        <Link href="/signin" className="font-medium text-brand">
          Login
        </Link>
      </p>

      <Button variant="brand" size="form">
        Create Account
      </Button>
    </form>
  );
}
