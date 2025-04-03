'use server';

import { JSON_HEADER } from '@/lib/constants/api.constant';
import { SignupFormValues } from '@/lib/schemas/auth.schema';

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
