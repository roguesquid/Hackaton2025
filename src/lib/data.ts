// TODO: Replace with data from n8n agent.

export const topFlavors = [
  {
    rank: 1,
    name: 'Spicy Fire',
    description: 'El favorito por su toque picante y audaz.',
  },
  {
    rank: 2,
    name: 'Lemon Zest',
    description: 'Refrescante sabor cítrico que conquista paladares.',
  },
  {
    rank: 3,
    name: 'Cheese Supreme',
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

export const productData = {
  name: 'Flips Sabor Chocolate Avellana',
  code: 'FL-CH-AV-01',
  version: 'v2.3',
  date: '2024-07-26',
  sensoryCriteria: [
    {
      name: 'Apariencia',
      descriptors: [
        { name: 'Color Uniforme', intensity: 8 },
        { name: 'Forma Regular', intensity: 9 },
        { name: 'Cobertura Completa', intensity: 7 },
      ],
    },
    {
      name: 'Aroma',
      descriptors: [
        { name: 'Chocolate Intenso', intensity: 9 },
        { name: 'Nota de Avellana', intensity: 8 },
        { name: 'Dulce', intensity: 7 },
      ],
    },
    {
      name: 'Sabor',
      descriptors: [
        { name: 'Equilibrio Dulce/Cacao', intensity: 8 },
        { name: 'Postgusto a Avellana', intensity: 9 },
      ],
    },
    {
      name: 'Textura',
      descriptors: [
        { name: 'Crujiente', intensity: 10 },
        { name: 'Disolución en Boca', intensity: 7 },
      ],
    },
  ],
  generalBalance: [
    { name: 'Dulzor', value: 'Alto', score: 8 },
    { name: 'Salado', value: 'Bajo', score: 2 },
    { name: 'Acidez', value: 'Nula', score: 1 },
    { name: 'Amargor (Cacao)', value: 'Medio', score: 5 },
  ],
};
