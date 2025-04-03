declare type APIUser = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
  isVerified: boolean;
};

declare type LoginResponse = {
  token: string;
  user: APIUser;
};

declare type ForgotPasswordResponse = {
  info: string;
};

declare type VerifyResetCodeResponse = {
  status: string;
};
