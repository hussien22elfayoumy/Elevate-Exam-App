'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ResetPasswordFormValues,
  resetPasswordSchema,
} from '@/lib/schemes/auth.schema';
import { toast } from '@/hooks/use-toast';
import { Link, useRouter } from '@/i18n/navigation';
import { GenericToastOptions } from '@/lib/constants/toast.constant';
import { resetPassword } from '../../_actions/auth.action';
import InputError from '../../_components/input-error';
import { useAuthProvider } from '../../_providers/auth.provider';

export default function ResetPasswordForm() {
  // Navigation
  const router = useRouter();

  // Translations
  const t = useTranslations();

  // Context
  const { email } = useAuthProvider();

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema(t)),
    mode: 'onBlur',
    defaultValues: {
      password: '',
      rePassword: '',
    },
    disabled: !email,
  });

  // Reset password form submit handler
  async function onSubmit(values: ResetPasswordFormValues) {
    const payload = await resetPassword({
      ...values,
      email: email!,
    });

    if (!payload.success) {
      toast(GenericToastOptions.error(payload.error));
      return;
    }

    toast({
      title: payload.data.message,
      description: 'Password resetted, you can login in now',
      variant: 'success',
    });

    router.push('/signin');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <div className="mb-6">
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

      {/* Submit form */}
      {email ? (
        <Button disabled={isSubmitting} variant="brand" size="form">
          {isSubmitting ? t('loading') : t('reset-password')}
        </Button>
      ) : (
        <p className="text-red-600 dark:text-red-400">
          Please start the reset password flow from{' '}
          <Link href="/forgot-password" className="underline">
            the beginning
          </Link>
          .
        </p>
      )}
    </form>
  );
}
