'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InputError from './input-error';
import { verifyResetCode } from '../_actions/auth.action';
import { toast } from '@/hooks/use-toast';
import { APIToastError } from '@/lib/utils/api-toast-error';
import { Link } from '@/i18n/navigation';

export default function VerifyCodeForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      resetCode: '',
    },
  });

  const router = useRouter();

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
          placeholder="Verify code"
          {...register('resetCode', {
            required: 'Reset Code is required',
          })}
        />

        <InputError inputField={errors.resetCode} />
      </div>

      <p className="mb-5 me-2 text-end">
        Didn't receive a code?{' '}
        <Link href="/forgot-password" className="font-medium text-brand">
          Resend.
        </Link>
      </p>

      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? 'Verifing code...' : 'Verify code'}
      </Button>
    </form>
  );
}
