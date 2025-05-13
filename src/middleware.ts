import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { getToken } from 'next-auth/jwt';

const authPages = [
  '/signup',
  '/signin',
  '/reset-password',
  '/forgot-password',
  '/verify-code',
];

type MiddlewareFunction = (req: NextRequest) => Promise<NextResponse>;

const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: '/signin',
    },
  }
);

export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join('|')}))?(${authPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isAuthPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isAuthPage) {
    const token = await getToken({ req });
    const redirectURL = new URL('/dashboard', req.nextUrl.origin);

    if (token) return NextResponse.redirect(redirectURL);

    return handleI18nRouting(req);
  } else {
    return (authMiddleware as MiddlewareFunction)(req);
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
