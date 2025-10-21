
"use client";

import { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { useToast } from '@/hooks/use-toast';

export function FocusGroupUpload() {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast({
        title: 'Error',
        description: 'Por favor, selecciona un archivo.',
        variant: 'destructive',
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      if (event.target?.result) {
        try {
          const fileContent = JSON.parse(event.target.result as string);
          // TODO: Replace with your n8n webhook URL
          const webhookUrl = 'https://n8n.developassion.com/webhook/focus-group-test';
          
          const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fileContent),
          });

          if (response.ok) {
            const result = await response.json();
            toast({
              title: 'Éxito',
              description: 'Los datos del focus group se han enviado correctamente.',
            });
            console.log('N8N response:', result);
          } else {
            toast({
              title: 'Error',
              description: 'No se pudieron enviar los datos.',
              variant: 'destructive',
            });
          }
        } catch (error) {
          toast({
            title: 'Error',
            description: 'El archivo no es un JSON válido.',
            variant: 'destructive',
          });
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cargar Datos de Focus Group</CardTitle>
        <CardDescription>
          Sube el archivo JSON con los resultados de la prueba del focus group para obtener la versión 2 de los sabores.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input type="file" accept=".json" onChange={handleFileChange} />
        <Button onClick={handleSubmit}>Enviar a n8n</Button>
      </CardContent>
    </Card>
  );
}
