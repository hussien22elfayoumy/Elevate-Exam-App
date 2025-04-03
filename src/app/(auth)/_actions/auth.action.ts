'use server';

import { JSON_HEADER } from '@/lib/constants/api.constant';
import {
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
  SignupFormValues,
} from '@/lib/schemas/auth.schema';

//NOTE: Signup function
export async function signup(values: SignupFormValues) {
  try {
    const res = await fetch(`${process.env.API}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { ...JSON_HEADER },
    });

    const data: APIResponse<LoginResponse> = await res.json();

    if (!res.ok || 'code' in data) {
      throw new Error(data.message || 'Something went wrong, try again later');
    }

    return data;
  } catch (err) {
    console.log((err as Error).message);
    throw err;
  }
}

// NOTE: Forgot Password function
export async function forgotPassword(values: ForgotPasswordFormValues) {
  try {
    const res = await fetch(`${process.env.API}/auth/forgotPassword`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { ...JSON_HEADER },
    });

    const data: APIResponse<ForgotPasswordResponse> = await res.json();

    if (!res.ok || 'code' in data) {
      throw new Error(data.message || 'Something went wrong, try again later');
    }

    return data;
  } catch (err) {
    console.log((err as Error).message);
    throw err;
  }
}

// NOTE: Verify code function
export async function verifyResetCode(values: { resetCode: string }) {
  try {
    const res = await fetch(`${process.env.API}/auth/verifyResetCode`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { ...JSON_HEADER },
    });

    const data: APIResponse<VerifyResetCodeResponse> = await res.json();

    if (!res.ok || 'code' in data) {
      throw new Error(data.message || 'Something went wrong, try again later');
    }

    return data;
  } catch (err) {
    console.log((err as Error).message);
    throw err;
  }
}

// NOTE: Verify code function
export async function resetPassword(values: ResetPasswordFormValues) {
  try {
    const res = await fetch(`${process.env.API}/auth/resetPassword`, {
      method: 'PUT',
      body: JSON.stringify({
        email: values.email,
        newPassword: values.password,
      }),
      headers: { ...JSON_HEADER },
    });

    const data: APIResponse<ResetPasswordResponse> = await res.json();

    if (!res.ok || 'code' in data) {
      throw new Error(data.message || 'Something went wrong, try again later');
    }

    return data;
  } catch (err) {
    console.log((err as Error).message);
    throw err;
  }
}
