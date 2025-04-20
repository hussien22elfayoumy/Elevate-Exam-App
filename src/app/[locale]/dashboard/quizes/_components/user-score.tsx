'use client';

import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { type: 'correct', answers: 18, fill: 'var(--color-correct)' },
  { type: 'wrong', answers: 2, fill: 'var(--color-wrong)' },
];

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

export default function UserScore() {
  const avgAnswers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.answers, 0);
  }, []);

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
                paddingAngle={10}
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
                            83%
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
          <div className="text-chart-correct flex items-center font-semibold">
            <span className="w-20">Correct</span>
            <span className="border-chart-correct flex size-7 items-center justify-center rounded-full border">
              1
            </span>
          </div>

          <div className="text-chart-wrong flex items-center font-semibold">
            <span className="w-20">Wrong</span>
            <span className="border-chart-wrong flex size-7 items-center justify-center rounded-full border">
              1
            </span>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
