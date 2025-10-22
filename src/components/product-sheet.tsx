import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function InfoItem({ label, value }: { label: string; value: string | number }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

export function ProductSheet({ productData }: { productData: any }) {

  const criteriosSensoriales = [
    { criterio: 'Apariencia', descriptores: productData.sensorial_Apariencia },
    { criterio: 'Color', descriptores: productData.sensorial_Color },
    { criterio: 'Olor', descriptores: productData.sensorial_Olor },
    { criterio: 'Sabor', descriptores: productData.sensorial_Sabor },
    { criterio: 'Textura', descriptores: productData.sensorial_Textura }
  ].filter(item => item.descriptores);

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Ficha Técnica</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <InfoItem label="Nombre" value={productData.ficha_Nombre} />
            <InfoItem label="Descripción Corta" value={productData.ficha_DescripcionCorta} />
            <InfoItem label="Sabor de Galleta" value={productData.ficha_SaborDeGalleta} />
            <InfoItem label="Sabor de Relleno" value={productData.ficha_SaborDeRelleno} />
            <InfoItem label="Presentación" value={"Por definir"} />
          </div>
        </CardContent>
      </Card>

      {criteriosSensoriales.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Criterios Sensoriales</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Criterio</TableHead>
                  <TableHead>Descriptores</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {criteriosSensoriales.map((item) => (
                  <TableRow key={item.criterio}>
                    <TableCell className="font-medium">{item.criterio}</TableCell>
                    <TableCell>{item.descriptores}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Marketing</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <InfoItem label="Target Audience Fit" value={productData.marketing_targetAudienceFit} />
                <InfoItem label="Consumer Language" value={productData.marketing_consumerLanguage} />
                <InfoItem label="Key Selling Points" value={productData.marketing_keySellingPoints} />
                <InfoItem label="Competitive Angle" value={productData.marketing_competitiveAngle} />
                <InfoItem label="Packaging Concept" value={productData.marketing_packagingConcept} />
            </div>
        </CardContent>
      </Card>

      
    </div>
  );
}
