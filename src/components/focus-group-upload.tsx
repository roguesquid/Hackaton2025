"use client";

import { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from '@/hooks/use-toast';

export function FocusGroupUpload() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleValidation = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://n8n.genkit.dev/webhook/focus-group-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        toast({
          title: 'Éxito',
          description: 'El flujo de validación se ha ejecutado correctamente.',
        });
      } else {
        toast({
          title: 'Error',
          description: 'No se pudo ejecutar el flujo de validación.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Ocurrió un error al ejecutar el flujo.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:col-span-1">
      <Card>
        <CardHeader>
          <CardTitle>Flujo de Validación</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleValidation} disabled={loading}>
            {loading ? 'Ejecutando...' : 'Ejecutar flujo de validación'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
