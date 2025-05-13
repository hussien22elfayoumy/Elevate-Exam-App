'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  forgotPassowrdSchema,
  ForgotPasswordFormValues,
} from '@/lib/schemes/auth.schema';
import InputError from '../../_components/input-error';
import { forgotPassword } from '../../_actions/auth.action';
import { toast } from '@/hooks/use-toast';
import { Link } from '@/i18n/navigation';
import { GenericToastOptions } from '@/lib/constants/toast.constant';
import { useAuthProvider } from '../../_providers/auth.provider';

export default function ForgotPasswordForm() {
  // Translations
  const t = useTranslations();

  // Navigation
  const router = useRouter();

  // Context
  const { setEmail } = useAuthProvider();

  // React hook Form
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPassowrdSchema(t)),
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });

  // Forgot password form submit handler
  async function onSubmit(values: ForgotPasswordFormValues) {
    const payload = await forgotPassword(values);

    if (!payload.success) {
      toast(GenericToastOptions.error(payload.error));
      return;
    }

    toast({
      title: payload.data.message,
      description: payload.data.info,
      variant: 'success',
    });

    // Save submittion email
    setEmail(values.email);

    router.push('/verify-code');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div className="mb-4">
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
      {/* Remeber your password redirect */}
      <p className="mb-5 me-2 text-end">
        {t('remember-password')}{' '}
        <Link href="/signin" className="font-medium text-brand hover:underline">
          {t('sign-in')}
        </Link>
      </p>
      {/* Submit form */}
      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? t('loading') : t('reset-password')}
      </Button>
    </form>
  );
}
