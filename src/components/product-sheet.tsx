import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { productData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const productImage = PlaceHolderImages.find((p) => p.id === 'product_image_1');

export function ProductSheet() {
  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h2 className="text-3xl font-bold text-primary">
              {productData.name}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">Código: {productData.code}</Badge>
              <Badge variant="secondary">Versión: {productData.version}</Badge>
              <Badge variant="outline">Fecha: {productData.date}</Badge>
            </div>
          </div>
          {productImage && (
            <div className="flex-shrink-0">
              <Image
                src={productImage.imageUrl}
                alt={productData.name}
                width={150}
                height={150}
                className="rounded-lg object-cover border-2 border-primary/20 shadow-md"
                data-ai-hint={productImage.imageHint}
              />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <h3 className="font-semibold text-xl mb-4 text-foreground">
              Criterios Sensoriales
            </h3>
            <Accordion type="multiple" defaultValue={['Apariencia', 'Sabor']} className="w-full">
              {productData.sensoryCriteria.map((criterion) => (
                <AccordionItem value={criterion.name} key={criterion.name}>
                  <AccordionTrigger className="font-medium text-base hover:no-underline">
                    {criterion.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      {criterion.descriptors.map((desc) => (
                        <div key={desc.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-muted-foreground">
                              {desc.name}
                            </span>
                            <span className="text-sm font-semibold text-primary">
                              {desc.intensity}/10
                            </span>
                          </div>
                          <Progress
                            value={desc.intensity * 10}
                            className="h-2"
                            aria-label={`Intensidad de ${desc.name}: ${desc.intensity} de 10`}
                          />
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4 text-foreground">
              Balance General
            </h3>
            <div className="space-y-4 pt-2">
              {productData.generalBalance.map((balance) => (
                <div key={balance.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">
                      {balance.name}
                    </span>
                    <span className="text-sm font-semibold text-accent">
                      {balance.value}
                    </span>
                  </div>
                  <Progress
                    value={balance.score * 10}
                    className="h-2 [&>div]:bg-accent"
                    aria-label={`Puntuación de ${balance.name}: ${balance.score} de 10`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
