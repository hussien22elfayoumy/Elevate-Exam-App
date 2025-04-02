type SuccessfullResponse<T> = {
  message: 'success';
} & T;

type ErrorResponse = {
  message: string;
  code: number;
};

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;
