import z from 'zod';

// NOTE Signup form schema
export const signupSchame = z
  .object({
    username: z
      .string()
      .min(3, 'User name must be at least 3 characters')
      .max(50, 'User name must be at most 50 characters')
      .trim(),
    firstName: z
      .string()
      .min(3, 'First name must be at least 3 characters')
      .max(50, 'First name must be at most 50 characters')
      .trim(),
    lastName: z
      .string()
      .min(3, 'Last name must be at least 3 characters')
      .max(50, 'Last name must be at most 50 characters')
      .trim(),
    email: z.string().min(1, 'Email is required').email().toLowerCase().trim(),
    phone: z
      .string()
      .min(1, 'Phone is required')
      .regex(/^01/, 'Phone number must start with 01')
      .regex(/^01[0125]/, 'The third digit must be 0, 1, 2, or 5')
      .regex(/^01[0125][0-9]{8}$/, 'Phone number must have 11 digits in total'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[^a-zA-Z0-9]/,
        'Password must contain at least one special character'
      )
      .trim(),
    rePassword: z.string(),
  })
  .refine((values) => values.password === values.rePassword, {
    message: "Passworn doesn't match",
    path: ['rePassword'],
  });

export type SignupFormValues = z.infer<typeof signupSchame>;

// NOTE Signin form schema
export const signinSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

export type SigninFormValues = z.infer<typeof signinSchema>;

// NOTE Forgot password form schema
export const forgotPassowrdSchema = z.object({
  email: z.string().min(1, 'Email is required').email().toLowerCase().trim(),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPassowrdSchema>;

// NOTE Reset password form schema

export const resetPasswordSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email().toLowerCase().trim(),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[^a-zA-Z0-9]/,
        'Password must contain at least one special character'
      )
      .trim(),
    rePassword: z.string(),
  })
  .refine((values) => values.password === values.rePassword, {
    message: "Passworn doesn't match",
    path: ['rePassword'],
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
