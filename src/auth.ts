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
        const { payload, error } = await apiRequest<LoginResponse>({
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

        if (error) throw new Error(error.message);

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

      return session;
    },
  },
};
