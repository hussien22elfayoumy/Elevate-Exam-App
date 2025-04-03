'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignupFormValues, signupSchame } from '@/lib/schemas/auth.schema';
import { signup } from '../_actions/auth.action';
import { toast } from '@/hooks/use-toast';
import InputError from './input-error';
import { APIToastError } from '@/lib/utils/api-toast-error';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
  const router = useRouter();

  async function onSubmit(values: SignupFormValues) {
    try {
      const data = await signup(values);
      console.log(data);

      toast({
        title: 'Account created Successfully',
        description: 'Please login now',
        variant: 'success',
      });
      router.push('/signin');
    } catch (err) {
      APIToastError(err);
    }
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
          fieldError={errors.username}
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
          fieldError={errors.firstName}
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
          fieldError={errors.lastName}
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
          fieldError={errors.email}
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
          fieldError={errors.phone}
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
          fieldError={errors.password}
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
          fieldError={errors.rePassword}
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

      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>
    </form>
  );
}
