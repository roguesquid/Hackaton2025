import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { topFlavors } from '@/lib/data';
import { Flame, Citrus, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ICONS: { [key: string]: React.ReactNode } = {
  'Spicy Fire': <Flame className="h-6 w-6 text-primary" />,
  'Lemon Zest': <Citrus className="h-6 w-6 text-primary" />,
  'Cheese Supreme': <Sparkles className="h-6 w-6 text-primary" />,
};

export function TopFlavors() {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        Top 3 Sabores de Flips
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {topFlavors.map((flavor) => (
          <Link
            key={flavor.rank}
            href={`/product/${flavor.slug}`}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg group"
          >
            <Card
              className="h-full flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">{flavor.name}</CardTitle>
                  {ICONS[flavor.name]}
                </CardHeader>
                <CardContent>
                  <div className="text-6xl font-bold text-primary">#{flavor.rank}</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {flavor.description}
                  </p>
                </CardContent>
              </div>
              <CardContent>
                <div className="text-sm font-semibold text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver ficha <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
