import { Header } from '@/components/header';
import { ProductSheet } from '@/components/product-sheet';
import { Button } from '@/components/ui/button';
import { getFlavors, formatSlug } from '@/lib/data-service';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductFactSheetPage({
  params,
}: {
  params: { slug: string };
}) {
  const flavors = await getFlavors();
  const productData = flavors.find(flavor => formatSlug(flavor.flavorConcept) === params.slug);

  if (!productData) {
    notFound();
  }

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
          <h1 className="text-3xl font-bold">Ficha del producto: {productData.flavorConcept}</h1>
        </div>

        <ProductSheet productData={productData} />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const flavors = await getFlavors();
  return flavors.map((flavor) => ({
    slug: formatSlug(flavor.flavorConcept),
  }));
}
