type SuccessfullResponse<T> = {
  message: 'success';
} & T;

type ErrorResponse = {
  message: string;
  code: number;
};

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;

declare type APIRequestOptions = {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: object;
  headers?: HeadersInit | undefined;
};
