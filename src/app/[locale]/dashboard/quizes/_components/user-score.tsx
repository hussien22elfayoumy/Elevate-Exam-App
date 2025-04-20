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

  const avgAnswers = Math.round(
    (userScoreRatio.correct / (userScoreRatio.correct + userScoreRatio.wrong)) *
      100
  );

  return (
    <Card className="flex flex-col border-none bg-transparent shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>Your Score</CardTitle>
      </CardHeader>
      <div className="flex items-center justify-center pb-0 pe-12">
        <CardContent className="pb-0">
          <ChartContainer
            config={chartConfig}
            className="aspect-square h-[160px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    className="border-my-grey-100 bg-my-grey-50 font-medium text-my-grey-800"
                  />
                }
              />
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
                            className="text-lg font-semibold"
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
        <CardFooter className="flex flex-col gap-1 p-0">
          {chartData.map((chart) => (
            <div
              key={chart.type}
              className={`text-chart-${chart.type} flex items-center font-semibold`}
            >
              <span className="w-20">{chart.type}</span>
              <span
                className={`border-chart-${chart.type} flex size-7 items-center justify-center rounded-full border`}
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
