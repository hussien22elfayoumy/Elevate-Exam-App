import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils/cn';

export default function Search({
  className,
  placeholder = 'Search quiz',
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn('h-14 rounded-xl shadow-lg shadow-my-grey-150', className)}
      placeholder={placeholder}
    />
  );
}
