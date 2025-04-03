'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import InputError from './input-error';

export default function VerifyCodeForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      resetCode: '',
    },
  });

  async function onSubmit(values: { resetCode: string }) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* veriication code */}
      <div className="mb-4">
        <Input
          className="h-12 rounded-lg"
          type="text"
          id="verifyCode"
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

      <Button variant="brand" size="form">
        Verify code
      </Button>
    </form>
  );
}
