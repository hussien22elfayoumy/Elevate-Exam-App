'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InputError from './input-error';
import {
  ResetPasswordFormValues,
  resetPasswordSchema,
} from '@/lib/schemes/auth.schema';
import { resetPassword } from '../_actions/auth.action';
import { toast } from '@/hooks/use-toast';
import { useRouter } from '@/i18n/navigation';
import { GenericToastOptions } from '@/lib/constants/toast.constant';

export default function ResetPasswordForm() {
  // Navigation
  const router = useRouter();

  // Translations
  const t = useTranslations();

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema(t)),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      rePassword: '',
    },
  });

  // Reset password form submit handler
  async function onSubmit(values: ResetPasswordFormValues) {
    const { payload, error } = await resetPassword(values);

    if (error) {
      toast(GenericToastOptions.error(error.message));
      return;
    }

    toast({
      title: payload.message,
      description: 'Password resetted, you can login in now',
      variant: 'success',
    });

    router.push('/signin');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? t('loading') : t('reset-password')}
      </Button>
    </form>
  );
}
