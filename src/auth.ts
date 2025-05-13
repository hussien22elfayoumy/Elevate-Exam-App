import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { apiRequest } from './lib/utils/api-request';
import { JSON_HEADER } from './lib/constants/api.constant';

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
          headers: {
            ...JSON_HEADER,
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        if (!payload.success) throw new Error(payload.error);

        return {
          id: payload.data.user._id,
          user: payload.data.user,
          token: payload.data.token,
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

      return session;
    },
  },
};
