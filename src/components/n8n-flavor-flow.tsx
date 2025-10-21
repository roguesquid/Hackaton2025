"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Upload } from 'lucide-react';

// Simulated data for flavors
const initialFlavors = [
    { rank: 1, name: 'Spicy Fire', slug: 'spicy-fire', description: 'El favorito por su toque picante y audaz.' },
    { rank: 2, name: 'Lemon Zest', slug: 'lemon-zest', description: 'Refrescante sabor cítrico que conquista paladares.' },
    { rank: 3, name: 'Cheese Supreme', slug: 'cheese-supreme', description: 'Un clásico cremoso y lleno de sabor a queso.' },
];

const finalFlavors = [
    { rank: 1, name: 'Choco-Avellana Cósmica', slug: 'choco-avellana-cosmica', description: 'La combinación celestial que dominará el universo del sabor.' },
    { rank: 2, name: 'Vainilla Lunar', slug: 'vainilla-lunar', description: 'Una vainilla etérea con un toque de misterio espacial.' },
    { rank: 3, name: 'Lemon Zest', slug: 'lemon-zest', description: 'Se mantiene por su popularidad en las pruebas.' },
];


export function N8nFlavorFlow({ onFlavorsUpdate }: { onFlavorsUpdate: (flavors: any[]) => void }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const { toast } = useToast();

    const handleGetV1Flavors = async () => {
        setIsLoading(true);
        // Simulate API call to n8n webhook
        try {
            // Replace with your actual n8n webhook URL
            // await fetch('YOUR_N8N_WEBHOOK_URL_V1', { method: 'POST' });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

            onFlavorsUpdate(initialFlavors);
            toast({
                title: '¡Sabores V1 recibidos!',
                description: 'Los sabores propuestos se muestran a continuación.',
            });
            setCurrentStep(2);
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error al solicitar sabores V1',
                description: 'No se pudo conectar con el webhook de n8n.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target.files?.[0];
        if (uploadedFile && uploadedFile.type === 'application/json') {
            setFile(uploadedFile);
             toast({
                title: 'Archivo cargado',
                description: `${uploadedFile.name} listo para ser enviado.`,
            });
            setCurrentStep(3);
        } else {
            toast({
                variant: 'destructive',
                title: 'Archivo inválido',
                description: 'Por favor, selecciona un archivo JSON.',
            });
        }
    };
    
    const handleSendValidationData = async () => {
        if (!file) return;

        setIsLoading(true);
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const validationData = JSON.parse(e.target?.result as string);

                // Simulate sending data to n8n and receiving V2 flavors
                // Replace with your actual n8n webhook URL
                /*
                const response = await fetch('YOUR_N8N_WEBHOOK_URL_V2', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(validationData),
                });
                const newFlavors = await response.json();
                */
                await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
                
                onFlavorsUpdate(finalFlavors);
                toast({
                    title: '¡Sabores V2 recibidos!',
                    description: 'Los sabores definitivos se han actualizado.',
                });
                setCurrentStep(4); // Flow completed
            } catch (error) {
                 toast({
                    variant: 'destructive',
                    title: 'Error al procesar los datos',
                    description: 'Ocurrió un problema al enviar o recibir los datos de n8n.',
                });
            } finally {
                setIsLoading(false);
            }
        };
        reader.readAsText(file);
    };


    return (
        <Card>
            <CardHeader>
                <CardTitle>Flujo de Validación de Sabores con n8n</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center h-10 w-10 rounded-full font-bold text-lg ${currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>1</div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">Solicitar Top Sabores V1</h3>
                        <p className="text-sm text-muted-foreground">
                            Obtén la primera versión de sabores desde tu agente n8n.
                        </p>
                    </div>
                    <Button onClick={handleGetV1Flavors} disabled={isLoading || currentStep !== 1}>
                        {isLoading && currentStep === 1 ? <Loader2 className="animate-spin" /> : 'Solicitar'}
                    </Button>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center h-10 w-10 rounded-full font-bold text-lg ${currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>2</div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">Cargar JSON de validación</h3>
                        <p className="text-sm text-muted-foreground">
                            Sube el archivo JSON con los resultados de tu focus group.
                        </p>
                    </div>
                     <Button asChild variant="outline" disabled={currentStep !== 2}>
                        <label htmlFor="json-upload" className="cursor-pointer">
                           <Upload className="mr-2 h-4 w-4" />
                            Cargar Archivo
                        </label>
                    </Button>
                    <input
                        id="json-upload"
                        type="file"
                        accept=".json"
                        onChange={handleFileUpload}
                        disabled={currentStep !== 2}
                        className="sr-only"
                    />
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4">
                     <div className={`flex items-center justify-center h-10 w-10 rounded-full font-bold text-lg ${currentStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>3</div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">Obtener Top Sabores V2 (Definitivos)</h3>
                        <p className="text-sm text-muted-foreground">
                           Envía los datos de validación a n8n y recibe la lista final de sabores.
                        </p>
                    </div>
                    <Button onClick={handleSendValidationData} disabled={isLoading || currentStep !== 3}>
                         {isLoading && currentStep === 3 ? <Loader2 className="animate-spin" /> : 'Obtener Sabores V2'}
                    </Button>
                </div>

                 {currentStep === 4 && (
                    <div className="text-center text-green-600 font-semibold p-4 bg-green-100 rounded-md">
                        ¡Flujo completado! Los sabores definitivos se muestran a continuación.
                    </div>
                )}
            </CardContent>
        </Card>
    );
}