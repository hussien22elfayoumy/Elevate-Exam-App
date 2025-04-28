import 'server-only';
import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export async function getAccessToken() {
  const cookieName =
    cookies().get('next-auth.session-token') ||
    cookies().get('__Secure-next-auth.session-token');

  const incodedToken = cookieName?.value;

  const decodedToken = await decode({
    token: incodedToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  if (!decodedToken) throw new Error('Cant get access token');

  return decodedToken.accessToken;
}
