import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { FaFlag, FaBolt, FaCircleCheck } from 'react-icons/fa6';

const userStats = [
  {
    title: '27',
    subTitle: 'Quiz Passed',
    icon: FaFlag,
  },
  {
    title: '13 min',
    subTitle: 'Fastest Time',
    icon: FaBolt,
  },
  {
    title: '200',
    subTitle: 'correct Answers',
    icon: FaCircleCheck,
  },
];

export default function UserStats() {
  return (
    <>
      <div className="relative size-[220px] overflow-hidden rounded-xl">
        <Image
          src="/assets/test.jpg"
          fill
          alt="html image"
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-semibold text-brand">Hussien Elfayoumy</h1>
        <p className="pt-1 font-medium text-my-grey-500">Frontend Developer</p>
        <div className="progress pt-5">
          <Progress value={25} />
        </div>

        <div className="status mt-8 flex items-center gap-10 text-my-grey-500">
          {userStats.map((state) => (
            <div key={state.subTitle} className="flex items-center gap-2">
              <state.icon className="size-14 rounded-xl bg-my-grey-50 p-3 text-brand shadow-sm" />
              <div>
                <p className="text-2xl font-semibold">{state.title}</p>
                <p className="text-sm">{state.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
