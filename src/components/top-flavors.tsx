import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getFlavors, formatSlug } from '@/lib/data-service';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export async function TopFlavors() {
  const flavors = await getFlavors();
  const topFlavors = flavors.filter(flavor => !flavor.isLongTerm).slice(0, 3);

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        Top 3 Sabores de Flips
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {topFlavors.map((flavor, index) => (
          <Link
            key={index}
            href={`/product/${formatSlug(flavor.ficha_DescripcionCorta)}`}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg group"
          >
            <Card
              className="h-full flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">{flavor.ficha_DescripcionCorta}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-6xl font-bold text-primary">#{index + 1}</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {flavor.ficha_DescripcionCorta}
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