import type { useTranslations } from 'next-intl';
import z from 'zod';

// NOTE email schema
const emailSchema = (t: ReturnType<typeof useTranslations>) =>
  z
    .string()
    .min(1, t('required', { input: t('email') }))
    .email()
    .toLowerCase()
    .trim();

// NOTE password schema
const passwordSchema = (t: ReturnType<typeof useTranslations>) =>
  z
    .string()
    .min(1, t('required', { input: t('password') }))
    .min(8, t('contain-8-chars'))
    .regex(/[A-Z]/, t('contain-one-upper'))
    .regex(/[a-z]/, t('contain-one-lower'))
    .regex(/[0-9]/, t('contain-one-number'))
    .regex(/[^a-zA-Z0-9]/, t('contain-one-special'))
    .trim();

// NOTE phone schema
const phoneSchema = (t: ReturnType<typeof useTranslations>) =>
  z
    .string()
    .min(1, t('required', { input: t('phone-number') }))
    .regex(/^01/, 'Phone number must start with 01')
    .regex(/^01[0125]/, 'The third digit must be 0, 1, 2, or 5')
    .regex(/^01[0125][0-9]{8}$/, 'Phone number must have 11 digits in total');

// NOTE rePassword validation
const rePasswordSchema = z.string();

const PasswordsRefinement = (t: ReturnType<typeof useTranslations>) => ({
  message: t('passwords-dont-match'),
  path: ['rePassword'],
});

// NOTE Signup form schema
export const signupSchame = (t: ReturnType<typeof useTranslations>) =>
  z
    .object({
      username: z
        .string()
        .min(3, t('least-3-chars', { input: t('user-name') }))
        .max(50, t('most-50-chars', { input: t('user-name') }))
        .trim(),
      firstName: z
        .string()
        .min(3, t('least-3-chars', { input: t('first-name') }))
        .max(50, t('most-50-chars', { input: t('first-name') }))
        .trim(),
      lastName: z
        .string()
        .min(3, t('least-3-chars', { input: t('last-name') }))
        .max(50, t('most-50-chars', { input: t('last-name') }))
        .trim(),
      email: emailSchema(t),
      phone: phoneSchema(t),
      password: passwordSchema(t),
      rePassword: rePasswordSchema,
    })
    .refine(
      (values) => values.password === values.rePassword,
      PasswordsRefinement(t)
    );

export type SignupFormValues = z.infer<ReturnType<typeof signupSchame>>;

// NOTE Signin form schema
export const signinSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    email: emailSchema(t),
    password: z.string().min(1, t('required', { input: t('password') })),
  });

export type SigninFormValues = z.infer<ReturnType<typeof signinSchema>>;

// NOTE Forgot password form schema
export const forgotPassowrdSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    email: emailSchema(t),
  });

export type ForgotPasswordFormValues = z.infer<
  ReturnType<typeof forgotPassowrdSchema>
>;

// NOTE Reset password form schema
export const resetPasswordSchema = (t: ReturnType<typeof useTranslations>) =>
  z
    .object({
      password: passwordSchema(t),
      rePassword: rePasswordSchema,
    })
    .refine(
      (values) => values.password === values.rePassword,
      PasswordsRefinement(t)
    );

export type ResetPasswordFormValues = z.infer<
  ReturnType<typeof resetPasswordSchema>
>;
