'use client';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InputError from './input-error';
import { verifyResetCode } from '../_actions/auth.action';
import { toast } from '@/hooks/use-toast';
import { APIToastError } from '@/lib/utils/api-toast-error';
import { Link, useRouter } from '@/i18n/navigation';

export default function VerifyCodeForm() {
  // Navigation
  const router = useRouter();

  // Translations
  const t = useTranslations();

  // React Hook Form
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      resetCode: '',
    },
  });

  // Verify code form submit handler
  async function onSubmit(values: { resetCode: string }) {
    try {
      const data = await verifyResetCode(values);

      toast({
        title: data.status,
        description: 'You can reset your password now',
        variant: 'success',
      });

      router.push('/reset-password');
    } catch (err) {
      APIToastError(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* veriication code */}
      <div className="mb-4">
        <Input
          className="h-12 rounded-lg"
          type="text"
          id="verifyCode"
          fieldError={errors.resetCode}
          placeholder={t('verify-code')}
          {...register('resetCode', {
            required: t('required', { input: t('verify-code') }),
          })}
        />

        <InputError inputField={errors.resetCode} />
      </div>

      {/* Didn't receive code */}
      <p className="mb-5 me-2 text-end">
        {t('didnt-receive-code')}{' '}
        <Link
          href="/forgot-password"
          className="font-medium text-brand hover:underline"
        >
          {t('resend')}
        </Link>
      </p>

      {/* form submit */}
      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? t('loading') : t('verify-code')}
      </Button>
    </form>
  );
}
