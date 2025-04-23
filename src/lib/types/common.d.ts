declare type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

declare type ErrorProps = {
  error: Error;
  reset: () => void;
};
