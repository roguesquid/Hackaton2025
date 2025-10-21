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
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

export function ProductSheet({ productData }: { productData: any }) {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <InfoItem label="Sabor galleta" value={productData.saborGalleta} />
            <InfoItem label="Sabor relleno" value={productData.saborRelleno} />
            <InfoItem label="Presentación" value={productData.presentacion} />
            <InfoItem
              label="Salida a producción"
              value={productData.salidaProduccion}
            />
            <InfoItem label="Estatus" value={productData.estatus} />
          </div>
          <div className="mt-6">
            <InfoItem label="Observación" value={productData.observacion} />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Criterios Sensoriales</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Criterios Sensoriales</TableHead>
                <TableHead>Descriptores o Notas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productData.criteriosSensoriales.map((item: any) => (
                <TableRow key={item.criterio}>
                  <TableCell className="font-medium">{item.criterio}</TableCell>
                  <TableCell>{item.descriptores}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
