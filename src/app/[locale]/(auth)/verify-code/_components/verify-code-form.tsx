'use client';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { useRouter } from '@/i18n/navigation';
import { GenericToastOptions } from '@/lib/constants/toast.constant';
import { useAuthProvider } from '../../_providers/auth.provider';
import InputError from '../../_components/input-error';
import { forgotPassword, verifyResetCode } from '../../_actions/auth.action';

export default function VerifyCodeForm() {
  // Navigation
  const router = useRouter();

  // Translations
  const t = useTranslations();

  // Context
  const { email } = useAuthProvider();

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

  async function resendOTP() {
    const payload = await forgotPassword({ email: email! });

    if (!payload.success) {
      toast(GenericToastOptions.error(payload.error));
      return;
    }

    toast({
      title: payload.data.message,
      description: payload.data.info,
      variant: 'success',
    });
  }

  // Verify code form submit handler
  async function onSubmit(values: { resetCode: string }) {
    const payload = await verifyResetCode(values);

    if (!payload.success) {
      toast(GenericToastOptions.error(payload.error));
      return;
    }

    toast({
      title: payload.data.status,
      description: 'You can reset your password now',
      variant: 'success',
    });

    router.push('/reset-password');
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
        <button
          type="button"
          onClick={resendOTP}
          className="font-medium text-brand hover:underline"
        >
          {t('resend')}
        </button>
      </p>

      {/* form submit */}
      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? t('loading') : t('verify-code')}
      </Button>
    </form>
  );
}
