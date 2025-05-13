declare type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

declare type RouteProps = {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { locale: string };
};

declare type ErrorProps = {
  error: Error;
  reset: () => void;
};
