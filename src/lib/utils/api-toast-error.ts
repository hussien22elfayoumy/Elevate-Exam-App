import { toast } from '@/hooks/use-toast';

export function APIToastError(apiError: unknown) {
  console.log((apiError as Error).message);
  toast({
    title: 'Uh oh! Something went wrong.',
    description: (apiError as Error).message,
    variant: 'destructive',
  });
}
