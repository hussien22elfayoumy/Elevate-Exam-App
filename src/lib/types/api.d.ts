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

// Subjects api types
declare type Subject = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};

type Metadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
};

declare type SubjectsResponse = {
  metadata: Metadata;
  subjects: Subject[];
};
