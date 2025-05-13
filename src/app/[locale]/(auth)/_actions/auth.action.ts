'use server';

import { JSON_HEADER } from '@/lib/constants/api.constant';
import {
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
  SignupFormValues,
} from '@/lib/schemes/auth.schema';
import { apiRequest } from '@/lib/utils/api-request';

//NOTE: Signup function
export async function signup(values: SignupFormValues) {
  return await apiRequest<LoginResponse>({
    endpoint: 'auth/signup',
    method: 'POST',
    headers: {
      ...JSON_HEADER,
    },
    body: JSON.stringify(values),
  });
}

// NOTE: Forgot Password function
export async function forgotPassword(values: ForgotPasswordFormValues) {
  return await apiRequest<ForgotPasswordResponse>({
    endpoint: 'auth/forgotPassword',
    method: 'POST',
    headers: {
      ...JSON_HEADER,
    },
    body: JSON.stringify(values),
  });
}

// NOTE: Verify code function
export async function verifyResetCode(values: { resetCode: string }) {
  return await apiRequest<VerifyResetCodeResponse>({
    endpoint: 'auth/verifyResetCode',
    method: 'POST',
    headers: {
      ...JSON_HEADER,
    },
    body: JSON.stringify(values),
  });
}

// NOTE: Verify code function
export async function resetPassword(
  values: ResetPasswordFormValues & { email: string }
) {
  return await apiRequest<ResetPasswordResponse>({
    endpoint: 'auth/resetPassword',
    method: 'PUT',
    headers: {
      ...JSON_HEADER,
    },
    body: JSON.stringify({
      email: values.email,
      newPassword: values.password,
    }),
  });
}
