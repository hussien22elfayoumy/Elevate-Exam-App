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

type Metadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
};
// Subjects api types
declare type Subject = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};

declare type SubjectsResponse = {
  metadata: Metadata;
  subjects: Subject[];
};

// Quizes api types
declare type Quiz = {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
};

declare type QuizsResponse = {
  metadata: Metadata;
  exams: Quiz[];
};

// Question api types
type Answer = {
  answer: string;
  key: string;
};

type Question = {
  answers: Answer[];
  type: 'single_choice' | 'multiple_choice';
  _id: string;
  question: string;
  correct: string;
  subject: Subject;
  exam: Quiz;
  createdAt: string;
};

declare type QuestionsResponse = {
  metadata: Metadata;
  questions: Question[];
};
