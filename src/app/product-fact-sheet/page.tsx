import { Header } from '@/components/header';
import { ProductSheet } from '@/components/product-sheet';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductFactSheetPage() {
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
          <h1 className="text-3xl font-bold">Ficha de Producto</h1>
        </div>

        <div
          className="bg-primary/10 border-l-4 border-primary text-primary-foreground/80 p-4 mb-8 rounded-r-lg"
          role="alert"
        >
          <p className="font-bold text-primary">Nota del desarrollador</p>
          <p className="text-foreground">
            Los datos mostrados son de ejemplo. Conecte aquí el agente de n8n
            para obtener datos en tiempo real.
          </p>
        </div>

        <ProductSheet />
      </main>
    </div>
  );
}
