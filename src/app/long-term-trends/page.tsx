import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getFlavors, formatSlug } from '@/lib/data-service';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default async function LongTermTrendsPage() {
  const flavors = await getFlavors();
  const futureTrends = flavors.filter(flavor => flavor.isLongTerm);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Tendencias a Futuro</h1>
        </div>

        <div
          className="bg-primary/10 border-l-4 border-primary text-primary-foreground/80 p-4 mb-8 rounded-r-lg"
          role="alert"
        >
          <p className="font-bold text-primary">Nota del desarrollador</p>
          <p className="text-foreground">
            Estos sabores son una predicción generada por IA. Conecte su agente
            n8n para obtener análisis de tendencias en tiempo real.
          </p>
        </div>

        <section className="flex flex-col gap-6">
           <h2 className="text-2xl font-bold tracking-tight mb-2">
            Top 5 Sabores Tendencia
          </h2>
          {futureTrends.map((flavor, index) => (
            <Link
              key={index}
              href={`/product/${formatSlug(flavor.flavorConcept)}`}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg group"
            >
              <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary">
                <CardHeader>
                  <div className='flex justify-between items-start'>
                    <div>
                      <CardTitle className="text-xl">#{index + 1} {flavor.flavorConcept}</CardTitle>
                      <CardDescription className="mt-1">{flavor.ficha_DescripcionCorta}</CardDescription>
                    </div>
                     <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-semibold text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver ficha del futuro <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
