'use server';

import {
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
  SignupFormValues,
} from '@/lib/schemas/auth.schema';
import { apiRequest } from '@/lib/utils/api-request';

//NOTE: Signup function
export async function signup(values: SignupFormValues) {
  return await apiRequest<LoginResponse>({
    endpoint: 'auth/signup',
    method: 'POST',
    body: values,
  });
}

// NOTE: Forgot Password function
export async function forgotPassword(values: ForgotPasswordFormValues) {
  return await apiRequest<ForgotPasswordResponse>({
    endpoint: 'auth/forgotPassword',
    method: 'POST',
    body: values,
  });
}

// NOTE: Verify code function
export async function verifyResetCode(values: { resetCode: string }) {
  return await apiRequest<VerifyResetCodeResponse>({
    endpoint: 'auth/verifyResetCode',
    method: 'POST',
    body: values,
  });
}

// NOTE: Verify code function
export async function resetPassword(values: ResetPasswordFormValues) {
  return await apiRequest<ResetPasswordResponse>({
    endpoint: 'auth/resetPassword',
    method: 'PUT',
    body: {
      email: values.email,
      newPassword: values.password,
    },
  });
}
