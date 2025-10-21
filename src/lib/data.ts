// TODO: Replace with data from n8n agent.

export const topFlavors = [
  {
    rank: 1,
    name: 'Spicy Fire',
    slug: 'spicy-fire',
    description: 'El favorito por su toque picante y audaz.',
  },
  {
    rank: 2,
    name: 'Lemon Zest',
    slug: 'lemon-zest',
    description: 'Refrescante sabor cítrico que conquista paladares.',
  },
  {
    rank: 3,
    name: 'Cheese Supreme',
    slug: 'cheese-supreme',
    description: 'Un clásico cremoso y lleno de sabor a queso.',
  },
];

export const marketingData = {
  summary: {
    newCustomers: 1250,
    newCustomersChange: 15.2,
    revenue: 45231.89,
    revenueChange: 8.5,
    conversionRate: 2.3,
    conversionRateChange: 1.2,
    costPerAcquisition: 32.5,
    costPerAcquisitionChange: -5.0,
  },
  campaignPerformance: [
    { name: 'Verano Explosivo', conversions: 400 },
    { name: 'Reto Flips', conversions: 300 },
    { name: 'Sabor del Mes', conversions: 200 },
    { name: 'Vuelta a Clases', conversions: 278 },
    { name: 'Navidad Crujiente', conversions: 189 },
  ],
  channelDistribution: [
    { name: 'Redes Sociales', value: 45 },
    { name: 'Búsqueda Orgánica', value: 25 },
    { name: 'Email Marketing', value: 15 },
    { name: 'Referidos', value: 15 },
  ],
};

export const trendsData = [
  { year: '2020', sales: 2400, marketShare: 12 },
  { year: '2021', sales: 1398, marketShare: 15 },
  { year: '2022', sales: 9800, marketShare: 18 },
  { year: '2023', sales: 3908, marketShare: 22 },
  { year: '2024', sales: 4800, marketShare: 25 },
];

export const productDetails: { [key: string]: any } = {
  'spicy-fire': {
    name: 'Spicy Fire',
    saborGalleta: 'Maíz y ají',
    saborRelleno: 'Queso picante',
    presentacion: '220gr',
    salidaProduccion: 2022,
    estatus: 'Activo en mercado',
    observacion: 'Producto enfocado en público joven y audaz.',
    criteriosSensoriales: [
      { criterio: 'Apariencia', descriptores: 'Almohadas rectangulares, color rojizo anaranjado.' },
      { criterio: 'Color', descriptores: 'Galleta con motas rojas de especias.' },
      { criterio: 'Olor', descriptores: 'Intenso a especias, ají y queso.' },
      { criterio: 'Sabor', descriptores: 'Picante, salado, con notas a queso cheddar.' },
      { criterio: 'Textura', descriptores: 'Extra crujiente, porosa.' },
      { criterio: 'Sensación Residual', descriptores: 'Picor persistente y agradable.' },
    ],
  },
  'lemon-zest': {
    name: 'Lemon Zest',
    saborGalleta: 'Vainilla y limón',
    saborRelleno: 'Crema de limón',
    presentacion: '200gr',
    salidaProduccion: 2021,
    estatus: 'Activo en mercado',
    observacion: 'Ideal para postres y meriendas refrescantes.',
    criteriosSensoriales: [
      { criterio: 'Apariencia', descriptores: 'Almohadas rectangulares, color claro.' },
      { criterio: 'Color', descriptores: 'Galleta dorada, relleno blanco.' },
      { criterio: 'Olor', descriptores: 'Cítrico, a galleta recién horneada.' },
      { criterio: 'Sabor', descriptores: 'Dulce y ácido, balance perfecto de limón.' },
      { criterio: 'Textura', descriptores: 'Crujiente por fuera, relleno cremoso.' },
      { criterio: 'Sensación Residual', descriptores: 'Refrescante, limpio en el paladar.' },
    ],
  },
  'cheese-supreme': {
    name: 'Cheese Supreme',
    saborGalleta: 'Tradicional',
    saborRelleno: 'Mezcla de quesos',
    presentacion: '220gr',
    salidaProduccion: 2018,
    estatus: 'Activo en mercado',
    observacion: 'Un clásico de la marca, amado por todos.',
    criteriosSensoriales: [
      { criterio: 'Apariencia', descriptores: 'Proporción homogénea de galleta y relleno.' },
      { criterio: 'Color', descriptores: 'Galleta marrón claro, relleno anaranjado.' },
      { criterio: 'Olor', descriptores: 'Intenso a queso, notas lácteas.' },
      { criterio: 'Sabor', descriptores: 'Salado, umami, a queso maduro.' },
      { criterio: 'Textura', descriptores: 'Crujiente, se deshace en la boca.' },
      { criterio: 'Sensación Residual', descriptores: 'Sabor a queso prolongado.' },
    ],
  },
  'default': {
    saborGalleta: 'Tradicional',
    saborRelleno: 'Chocolate',
    presentacion: '220gr',
    salidaProduccion: 1995,
    estatus: 'Activo en mercado',
    observacion: 'Producto con posicionamiento en el mercado',
    criteriosSensoriales: [
      { criterio: 'Apariencia', descriptores: 'Almohadas rectangulares, porosa. Proporción homogénea de galleta y relleno.' },
      { criterio: 'Color', descriptores: 'Galleta marrón claro.' },
      { criterio: 'Olor', descriptores: 'A cereal. A dulce. A chocolate' },
      { criterio: 'Sabor', descriptores: 'A chocolate. A cereal. A dulce. A avena. A arroz. A trigo' },
      { criterio: 'Textura', descriptores: 'Crujiente. Porosa. Tostada. Suave' },
      { criterio: 'Sensación Residual', descriptores: 'A Dulce. A chocolate. A cereal.' },
    ],
  }
};
