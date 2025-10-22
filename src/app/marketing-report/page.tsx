import { Header } from '@/components/header';
import { MarketingCharts } from '@/components/marketing-charts';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { marketingData } from '@/lib/data';
import {
  ArrowLeft,
  Download,
  Users,
  DollarSign,
  Target,
  BadgePercent,
} from 'lucide-react';
import Link from 'next/link';

export default function MarketingReportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Volver</span>
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Reporte de Marketing</h1>
          </div>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Descargar Reporte
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Nuevos Clientes
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {marketingData.summary.newCustomers.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                +{marketingData.summary.newCustomersChange}% vs mes anterior
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${marketingData.summary.revenue.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                +{marketingData.summary.revenueChange}% vs mes anterior
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tasa de Conversión
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {marketingData.summary.conversionRate}%
              </div>
              <p className="text-xs text-muted-foreground">
                +{marketingData.summary.conversionRateChange}% vs mes anterior
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Costo por Adquisición
              </CardTitle>
              <BadgePercent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${marketingData.summary.costPerAcquisition.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {marketingData.summary.costPerAcquisitionChange}% vs mes anterior
              </p>
            </CardContent>
          </Card>
        </div>

        <MarketingCharts />
      </main>
    </div>
  );
}