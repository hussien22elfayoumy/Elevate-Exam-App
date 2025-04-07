'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignupFormValues, signupSchame } from '@/lib/schemas/auth.schema';
import { signup } from '../_actions/auth.action';
import { toast } from '@/hooks/use-toast';
import InputError from './input-error';
import { APIToastError } from '@/lib/utils/api-toast-error';
import { Link, useRouter } from '@/i18n/navigation';

export default function SignupForm() {
  const t = useTranslations();

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
          placeholder={t('user-name')}
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
          placeholder={t('first-name')}
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
          placeholder={t('last-name')}
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
          placeholder={t('email')}
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
          type="text"
          id="phone"
          placeholder={t('phone-number')}
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
          placeholder={t('password')}
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
          placeholder={t('confirm-password')}
          fieldError={errors.rePassword}
          {...register('rePassword')}
        />
        <InputError inputField={errors.rePassword} />
      </div>

      <p className="mb-5 me-2 text-end">
        {t('have-account')}{' '}
        <Link href="/signin" className="font-medium text-brand hover:underline">
          {t('sign-in')}
        </Link>
      </p>

      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? t('loading') : t('sign-up')}
      </Button>
    </form>
  );
}
