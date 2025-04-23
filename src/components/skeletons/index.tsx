import { cn } from '@/lib/utils/cn';
import { Skeleton } from '../ui/skeleton';

export function Circle({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) {
  return (
    <Skeleton {...props} className={cn('size-8 rounded-full', className)} />
  );
}

export function Square({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) {
  return <Skeleton {...props} className={cn('rounded-lg', className)} />;
}

export function Bar({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) {
  return (
    <Skeleton {...props} className={cn('h-8 min-w-12 rounded-lg', className)} />
  );
}
