import { NextAuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { JSON_HEADER } from '@/lib/constants/api.constant';
import { apiRequest } from './lib/utils/api-request';

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
        const payload = await apiRequest<LoginResponse>({
          endpoint: 'auth/signin',
          method: 'POST',
          body: {
            email: credentials?.email,
            password: credentials?.password,
          },
        });

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
