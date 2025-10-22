import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { BarChart3, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  {
    href: '/long-term-trends',
    title: 'Tendencias a futuras',
    description: 'Muestra los sabores que serán tendencia en el futuro.',
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
  },
];

export function NavMenu() {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        Módulos de Análisis
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {navItems.map((item) => (
          <Link href={item.href} key={item.title} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
            <Card className="h-full flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-primary">
              <CardHeader>
                <div className="mb-4">{item.icon}</div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="mt-1">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
