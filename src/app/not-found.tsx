import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function NotFound() {
  return (
    <html>
      <body>
        <main className="flex h-screen w-full flex-col items-center justify-center gap-5 px-10">
          {/* Title */}
          <h1 className="text-xl font-medium">
            The page you looking for is not found.
          </h1>

          {/* Image */}
          <div className="relative h-1/2 w-full">
            <Image
              src="/assets/not-found.svg"
              alt="Not found Image"
              fill
              className="object-fill"
              priority
            />
          </div>

          {/* Homepage button */}
          <Link
            href="/"
            className="flex items-center gap-1 font-medium text-brand underline-offset-4 hover:underline"
          >
            &larr; Return Home
          </Link>
        </main>
      </body>
    </html>
  );
}
