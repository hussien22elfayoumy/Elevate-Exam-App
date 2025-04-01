import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [],
  callbacks: {},
  secret: process.env.NEXTAUTH_SECRET,
};
