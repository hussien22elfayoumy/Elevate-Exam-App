import { DefaultSession, User } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession`, and received as a prop on the `SessionProvider` React Context.
   */
  interface User {
    token: string;
    user: APIUser;
  }

  interface Session {
    accessToken: string;
    user: User['user'] & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken: string;
    user: User['user'];
  }
}
