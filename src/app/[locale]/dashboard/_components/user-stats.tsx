import Image from 'next/image';
import { FaBolt, FaCircleCheck, FaFlag } from 'react-icons/fa6';

import { authOptions } from '@/auth';
import { Progress } from '@/components/ui/progress';
import { getServerSession } from 'next-auth';

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

export default async function UserStats() {
  // Variables
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl md:size-[220px]">
        {/* User Image */}
        <Image
          src="/assets/test.jpg"
          fill
          alt="html image"
          className="object-cover"
          sizes="35vw"
        />
      </div>

      <div className="flex-1">
        {/* User Name */}
        <h1 className="text-3xl font-semibold capitalize text-brand">{`${session?.user.firstName} ${session?.user.lastName}`}</h1>

        {/* User Job */}
        <p className="pt-1 font-medium text-my-grey-500">
          {session?.user.username}
        </p>

        {/* Progress so far */}
        <div className="progress pt-5">
          <Progress value={25} className="" />
        </div>

        {/* User stats and numbers */}
        <div className="status mt-8 flex flex-wrap items-center gap-10 text-my-grey-500">
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
