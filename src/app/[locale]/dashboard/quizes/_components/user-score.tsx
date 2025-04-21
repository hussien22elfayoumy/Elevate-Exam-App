'use client';

import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { cn } from '@/lib/utils/cn';

const chartConfig = {
  answers: {
    label: 'answers',
  },
  correct: {
    label: 'correct',
    color: 'rgba(var(--chart-correct))',
  },
  wrong: {
    label: 'wrong',
    color: 'rgba(var(--chart-wrong))',
  },
} satisfies ChartConfig;

type UserScoreProps = {
  userScoreRatio: {
    correct: number;
    wrong: number;
  };
};

export default function UserScore({ userScoreRatio }: UserScoreProps) {
  // chart Data
  const chartData = [
    {
      type: 'correct',
      answers: userScoreRatio?.correct || 0,
      fill: 'var(--color-correct)',
    },
    {
      type: 'wrong',
      answers: userScoreRatio?.wrong || 0,
      fill: 'var(--color-wrong)',
    },
  ];

  // calc the avg correct answers
  const avgAnswers = Math.round(
    (userScoreRatio.correct / (userScoreRatio.correct + userScoreRatio.wrong)) *
      100
  );

  return (
    <Card className="flex flex-col border-none bg-transparent shadow-none">
      {/* Card haeder */}
      <CardHeader className="items-center pb-0">
        <CardTitle>Your Score</CardTitle>
      </CardHeader>
      <div className="flex items-center justify-center pb-0 pe-12">
        {/* Card Content */}
        <CardContent className="pb-0">
          <ChartContainer
            config={chartConfig}
            className="aspect-square h-[160px]"
          >
            {/* Pie Chart */}
            <PieChart>
              {/* Tooltipe on mouse hover */}
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    className="border-my-grey-100 bg-my-grey-50 font-medium text-my-grey-800"
                  />
                }
              />
              {/* The pit itself */}
              <Pie
                data={chartData}
                dataKey="answers"
                nameKey="type"
                innerRadius={43}
                strokeWidth={5}
                paddingAngle={
                  userScoreRatio.wrong === 0 || userScoreRatio.correct === 0
                    ? 0
                    : 8
                }
                cornerRadius={8}
                startAngle={-180}
                outerRadius={48}
              >
                {/* the label inside the pie chart */}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-my-grey-700 text-lg font-semibold"
                          >
                            {avgAnswers}%
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        {/* Card footer */}
        <CardFooter className="flex flex-col gap-1 p-0">
          {/* get correct answers and wrong ones */}
          {chartData.map((chart) => (
            <div
              key={chart.type}
              className={cn(
                `flex items-center font-semibold capitalize`,
                chart.type === 'correct'
                  ? 'text-chart-correct'
                  : 'text-chart-wrong'
              )}
            >
              <span className="w-20">{chart.type}</span>
              <span
                className={cn(
                  `flex size-7 items-center justify-center rounded-full border`,
                  chart.type === 'correct'
                    ? 'border-chart-correct'
                    : 'border-chart-wrong'
                )}
              >
                {chart.answers}
              </span>
            </div>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
}
