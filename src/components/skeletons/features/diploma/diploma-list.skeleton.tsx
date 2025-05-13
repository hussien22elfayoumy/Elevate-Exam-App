import { Square } from '../..';

export default function DiplomasSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Square key={i} className="relative h-[300px] w-full">
          <Square className="absolute inset-x-4 bottom-4 h-16" />
        </Square>
      ))}
    </div>
  );
}
