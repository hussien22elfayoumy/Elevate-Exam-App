'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function AuthWelcome() {
  const pathName = usePathname();
  console.log(pathName);
  let imgSrc = '';
  switch (pathName) {
    case '/signup': {
      imgSrc = 'assets/signup.svg';
      break;
    }
    case '/forgot-password': {
      imgSrc = 'assets/forgot-password.svg';
      break;
    }
    case '/verify-code': {
      imgSrc = 'assets/verify-code.svg';
      break;
    }
    case '/reset-password': {
      imgSrc = 'assets/forgot-password.svg';
      break;
    }
    default:
      imgSrc = 'assets/login.svg';
  }

  return (
    <div className="flex h-full flex-col items-center justify-between">
      {pathName === '/signin' || pathName === '/signup' ? (
        <header className="self-start">
          <h1 className="text-3xl font-bold tracking-wider md:text-4xl lg:text-5xl">
            Welcome To <br />
            <span className="text-brand-dark">Elevate</span>
          </h1>
          <p className="mt-5 text-lg font-medium">
            The Ultimate Programming Quiz Platform.
          </p>
        </header>
      ) : (
        <h1 className="text-3xl font-bold leading-[130%] tracking-wider text-brand-dark md:text-4xl lg:text-5xl">
          Elevate
        </h1>
      )}
      <div className="h-2/3">
        <img src={imgSrc} className="h-full w-full" alt="nice" />
      </div>
    </div>
  );
}
