'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  forgotPassowrdSchema,
  ForgotPasswordFormValues,
} from '@/lib/schemas/auth.schema';
import InputError from './input-error';
import { forgotPassword } from '../_actions/auth.action';
import { toast } from '@/hooks/use-toast';

export default function ForgotPasswordForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPassowrdSchema),
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
      console.log((err as Error).message);
      toast({
        title: 'Uh oh! Something went wrong.',
        description: (err as Error).message,
        variant: 'destructive',
      });
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
          placeholder="Email "
          fieldError={errors.email}
          {...register('email')}
        />

        <InputError inputField={errors.email} />
      </div>

      <p className="mb-5 me-2 text-end">
        Remeber your password?{' '}
        <Link href="/signin" className="font-medium text-brand">
          Login
        </Link>
      </p>

      <Button disabled={isSubmitting} variant="brand" size="form">
        {isSubmitting ? 'Sending code...' : 'Reset Password'}
      </Button>
    </form>
  );
}
