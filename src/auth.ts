import { NextAuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { JSON_HEADER } from '@/lib/constants/api.constant';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/signin',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch(`${process.env.API}/auth/signin`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            ...JSON_HEADER,
          },
        });
        const payload: APIResponse<LoginResponse> = await res.json();

        if (!res.ok || 'code' in payload) {
          throw new Error(payload.message || 'Something went wrong');
        }

        return {
          id: payload.user._id,
          user: payload.user,
          token: payload.token,
        };
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.accessToken = user.token;
        token.user = user.user;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user = token?.user;
      session.accessToken = token?.accessToken;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
