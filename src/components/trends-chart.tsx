"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { trendsData } from '@/lib/data';

const chartConfig = {
  sales: {
    label: 'Ventas (unidades)',
    color: 'hsl(var(--chart-1))',
  },
  marketShare: {
    label: 'Cuota de Mercado (%)',
    color: 'hsl(var(--chart-2))',
  },
};

export function TrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventas y Cuota de Mercado (2020-2024)</CardTitle>
        <CardDescription>
          Análisis de tendencias de los últimos 5 años.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <ResponsiveContainer>
            <LineChart
              data={trendsData}
              margin={{
                top: 5,
                right: 20,
                left: 10,
                bottom: 5,
              }}
              accessibilityLayer
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="year"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                yAxisId="left"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value}%`}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="sales"
                stroke="var(--color-sales)"
                strokeWidth={2}
                dot={{
                  fill: 'var(--color-sales)',
                }}
                activeDot={{
                  r: 6,
                }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="marketShare"
                stroke="var(--color-marketShare)"
                strokeWidth={2}
                dot={{
                  fill: 'var(--color-marketShare)',
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
