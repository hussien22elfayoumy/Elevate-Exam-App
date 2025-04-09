import Image from 'next/image';

export default function DiplomaCard() {
  return (
    <figure className="relative h-[300px] w-full overflow-hidden rounded-xl">
      <Image
        src="/assets/test.jpg"
        fill
        className="object-cover"
        alt="Auth image"
      />
      <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-brand/20 p-4 text-center text-white backdrop-blur-sm">
        <p>hello again</p>
      </figcaption>
    </figure>
  );
}
