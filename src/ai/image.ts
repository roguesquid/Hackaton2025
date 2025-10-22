import { googleAI } from '@genkit-ai/google-genai';
import { z } from 'zod';
import { ai } from './genkit';

export const generateImage = ai.defineFlow(
  {
    name: 'generateImage',
    inputSchema: z.object({
      productData: z.object({
        ficha_Nombre: z.string(),
        ficha_DescripcionCorta: z.string(),
        ficha_SaborDeGalleta: z.string(),
        ficha_SaborDeRelleno: z.string(),
      }),
    }),
    outputSchema: z.string(),
  },
  async ({
    productData: {
      ficha_Nombre,
      ficha_DescripcionCorta,
      ficha_SaborDeGalleta,
      ficha_SaborDeRelleno,
    },
  }) => {
    const prompt = `Crea un diseño de empaque para un nuevo snack llamado 'Flips'.
Los detalles del nuevo producto son:
Nombre: ${ficha_Nombre}
Descripción Corta: ${ficha_DescripcionCorta}
Sabor de Galleta: ${ficha_SaborDeGalleta}
Sabor de Relleno: ${ficha_SaborDeRelleno}

El empaque debe ser vibrante, moderno y atractivo para adultos jóvenes. Debe mostrar el nombre del producto de forma destacada. Genera una imagen fotorrealista del empaque.`;

    const { media } = await ai.generate({
      model: googleAI.model('imagen-3.0-generate-002'),
      prompt: prompt,
    });

    const generatedImage = media[0];
    if (generatedImage) {
      return generatedImage.url;
    } else {
      throw new Error('No se pudo generar la imagen.');
    }
  }
);
