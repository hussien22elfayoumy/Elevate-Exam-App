'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SigninFormValues, signinSchema } from '@/lib/schemes/auth.schema';
import { toast } from '@/hooks/use-toast';
import { Link } from '@/i18n/navigation';
import { GenericToastOptions } from '@/lib/constants/toast.constant';
import InputError from '../../_components/input-error';

export default function SigninForm() {
  // Translations
  const t = useTranslations();

  // React hook form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema(t)),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Signin form submit handler
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
        title: t('success'),
        description: t('welcome-message'),
        variant: 'success',
      });

      reset();

      setTimeout(() => (window.location.href = '/'), 1000);
    } catch (err) {
      toast(GenericToastOptions.error((err as Error).message));
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

      {/* Don't have account */}
      <p className="mb-5 me-2 text-end">
        {t('dont-have-account')}{' '}
        <Link href="/signup" className="font-medium text-brand hover:underline">
          {t('sign-up')}
        </Link>
      </p>

      {/* Submit form */}
      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? t('loading') : t('sign-in')}
      </Button>
    </form>
  );
}
