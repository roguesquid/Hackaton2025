"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { marketingData } from '@/lib/data';

const campaignChartConfig = {
  conversions: {
    label: 'Conversiones',
    color: 'hsl(var(--chart-1))',
  },
};

const channelChartConfig = {
  'Redes Sociales': { label: 'Redes Sociales', color: 'hsl(var(--chart-1))' },
  'Búsqueda Orgánica': { label: 'Búsqueda Orgánica', color: 'hsl(var(--chart-2))' },
  'Email Marketing': { label: 'Email Marketing', color: 'hsl(var(--chart-3))' },
  'Referidos': { label: 'Referidos', color: 'hsl(var(--chart-4))' },
};


export function MarketingCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Rendimiento de Campaña</CardTitle>
          <CardDescription>Conversiones por campaña en el último trimestre</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={campaignChartConfig}
            className="h-[300px] w-full"
          >
            <ResponsiveContainer>
              <BarChart data={marketingData.campaignPerformance} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar
                  dataKey="conversions"
                  fill="var(--color-conversions)"
                  radius={4}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Distribución de Canales</CardTitle>
          <CardDescription>Fuentes de adquisición de nuevos clientes</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={channelChartConfig}
            className="mx-auto aspect-square max-h-[300px]"
          >
            <ResponsiveContainer>
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={marketingData.channelDistribution}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  strokeWidth={5}
                >
                   {marketingData.channelDistribution.map((entry) => (
                    <Cell key={entry.name} fill={`var(--color-${entry.name.replace(/ /g, '-')})`} />
                  ))}
                </Pie>
                 <ChartLegend
                  content={<ChartLegendContent nameKey="name" />}
                  className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
