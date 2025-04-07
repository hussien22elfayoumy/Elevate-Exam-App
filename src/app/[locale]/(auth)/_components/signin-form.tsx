'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SigninFormValues, signinSchema } from '@/lib/schemas/auth.schema';
import InputError from './input-error';
import { toast } from '@/hooks/use-toast';
import { APIToastError } from '@/lib/utils/api-toast-error';
import { Link } from '@/i18n/navigation';

export default function SigninForm() {
  const t = useTranslations();

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
      APIToastError(err);
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
          placeholder={t('email')}
          fieldError={errors.email}
          {...register('email')}
        />
        <InputError inputField={errors.email} />
      </div>

      <Link
        href="/forgot-password"
        className="mb-2 me-2 block text-end text-sm text-brand"
      >
        {t('forgot-password')}
      </Link>

      {/* Password */}
      <div className="mb-3">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="password"
          placeholder={t('password')}
          fieldError={errors.email}
          {...register('password')}
        />
        <InputError inputField={errors.password} />
      </div>

      <p className="mb-5 me-2 text-end">
        {t('dont-have-account')}{' '}
        <Link href="/signup" className="font-medium text-brand hover:underline">
          {t('sign-up')}
        </Link>
      </p>
      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? t('loading') : t('sign-in')}
      </Button>
    </form>
  );
}
