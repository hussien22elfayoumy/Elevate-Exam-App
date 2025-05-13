import 'server-only';
import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export async function getAccessToken() {
  const cookieName =
    cookies().get('next-auth.session-token') ||
    cookies().get('__Secure-next-auth.session-token');

  const incodedToken = cookieName?.value;

  try {
    const decodedToken = await decode({
      token: incodedToken,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    if (!decodedToken) throw new Error('Token not found!');

    return decodedToken.accessToken;
  } catch (error) {
    void error;

    return null;
  }
}
