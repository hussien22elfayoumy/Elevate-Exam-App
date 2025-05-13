import { toast } from '@/hooks/use-toast';

export const GenericToastOptions = {
  error: (message: string) => ({
    title: 'Uh oh! Something went wrong.',
    description: message,
    variant: 'destructive',
  }),
  delete: (message: string) => ({
    title: 'Successfully deleted!',
    description: message,
    variant: 'success',
  }),
  // ...rest of possible options
} satisfies Record<string, (message: string) => Parameters<typeof toast>[0]>;
