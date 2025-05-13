import { Square } from '../..';

export default function QuizesSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="relative flex items-center gap-4 rounded-lg p-4"
        >
          {/* Image Placeholder */}
          <Square className="absolute inset-0 z-0" />
          <Square className="relative size-[80px] rounded-md" />

          {/* Title & Question Count */}
          <div className="flex-1 space-y-2">
            <Square className="h-5 w-3/4 rounded" />
            <Square className="h-4 w-1/3 rounded" />
          </div>

          {/* Duration & Button */}
          <div className="space-y-2 text-right">
            <Square className="h-4 w-16 rounded" />
            <Square className="h-8 w-20 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
