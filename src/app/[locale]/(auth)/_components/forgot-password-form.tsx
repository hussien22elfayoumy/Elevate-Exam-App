'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  forgotPassowrdSchema,
  ForgotPasswordFormValues,
} from '@/lib/schemas/auth.schema';
import { APIToastError } from '@/lib/utils/api-toast-error';
import InputError from './input-error';
import { forgotPassword } from '../_actions/auth.action';
import { toast } from '@/hooks/use-toast';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ForgotPasswordForm() {
  const t = useTranslations();

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

  const router = useRouter();

  async function onSubmit(values: ForgotPasswordFormValues) {
    try {
      const data = await forgotPassword(values);

      toast({
        title: data.message,
        description: data.info,
        variant: 'success',
      });

      router.push('/verify-code');
    } catch (err) {
      APIToastError(err);
    }
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

      <p className="mb-5 me-2 text-end">
        {t('remember-password')}{' '}
        <Link href="/signin" className="font-medium text-brand hover:underline">
          {t('sign-in')}
        </Link>
      </p>

      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? t('loading') : t('reset-password')}
      </Button>
    </form>
  );
}
