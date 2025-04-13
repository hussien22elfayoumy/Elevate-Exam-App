import Image from 'next/image';

type SubjectCardProps = {
  subject: Subject;
};

export default function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <figure className="relative h-[280px] w-full overflow-hidden rounded-xl">
      <Image
        src={subject.icon}
        fill
        className="object-cover"
        alt="Auth image"
        sizes="35vw"
      />
      <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-brand/60 p-4 text-center text-white backdrop-blur-sm">
        <p className="font-medium tracking-wider">{subject.name}</p>
      </figcaption>
    </figure>
  );
}
