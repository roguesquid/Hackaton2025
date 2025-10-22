
const API_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzjh_r8XSbqmc7sF65zDqmeGmIQglKREPxOjClwhHQfIzC-SMLtEnd66OJ3Ll5Y_fwDmg/exec';

export interface Flavor {
  isLongTerm: boolean;
  flavorConcept: string;
  marketing_targetAudienceFit: string;
  marketing_consumerLanguage: string;
  marketing_keySellingPoints: string;
  marketing_competitiveAngle: string;
  marketing_packagingConcept: string;
  ficha_Nombre: string;
  ficha_DescripcionCorta: string;
  ficha_SaborDeGalleta: string;
  ficha_SaborDeRelleno: string;
  ficha_Presentacion: string;
  sensorial_Apariencia: string;
  sensorial_Color: string;
  sensorial_Olor: string;
  sensorial_Sabor: string;
  sensorial_Textura: string;
}

export async function getFlavors(): Promise<Flavor[]> {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching flavors:', error);
    return []; // Return empty array on error
  }
}

export function formatSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}
