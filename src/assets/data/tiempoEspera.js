const tiempoEspera = [
  {
    id: 'CL-AP', serv: 'Servicio de Salud Arica', media: 403.2, mediana: 125, atenciones: 159951,
  },
  {
    id: 'CL-TA', serv: 'Servicio de Salud Iquique', media: 663.9, mediana: 661, atenciones: 68560,
  },
  {
    id: 'CL-AN', serv: 'Servicio de Salud Antofagasta', media: 444, mediana: 235, atenciones: 224275,
  },
  {
    id: 'CL-AT', serv: 'Servicio de Salud Atacama', media: 407, mediana: 223, atenciones: 122574,
  },
  {
    id: 'CL-CO', serv: 'Servicio de Salud Coquimbo', media: 543, mediana: 320, atenciones: 489008,
  },
  {
    id: 'CL-VS', serv: 'Servicio de Salud Aconcagua', media: 296, mediana: 60, atenciones: 239342,
  },
  {
    id: 'CL-VS', serv: 'Servicio de Salud Valparaíso San Antonio', media: 548, mediana: 380, atenciones: 319209,
  },
  {
    id: 'CL-VS', serv: 'Servicio de Salud Viña del Mar Quillota', media: 651, mediana: 482, atenciones: 381869,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Central', media: 371, mediana: 133, atenciones: 388185,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Norte', media: 512, mediana: 190, atenciones: 406813,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Occidente', media: 302, mediana: 99, atenciones: 547882,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Oriente', media: 333, mediana: 89, atenciones: 423555,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Sur', media: 459, mediana: 254, atenciones: 464302,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Sur Oriente', media: 360, mediana: 62, atenciones: 723701,
  },
  {
    id: 'CL-LI', serv: "Servicio de Salud Del Libertador B.O'Higgins", media: 457, mediana: 273, atenciones: 388851,
  },
  {
    id: 'CL-ML', serv: 'Servicio de Salud Del Maule', media: 429, mediana: 202, atenciones: 528381,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Arauco', media: 303.2, mediana: 145, atenciones: 159293,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Biobío', media: 554, mediana: 569, atenciones: 259053,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Concepción', media: 243, mediana: 75, atenciones: 513787,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Ñuble', media: 364, mediana: 147, atenciones: 375615,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Talcahuano', media: 244, mediana: 105, atenciones: 294923,
  },
  {
    id: 'CL-AR', serv: 'Servicio de Salud Araucanía Norte', media: 495.5, mediana: 377, atenciones: 185691,
  },
  {
    id: 'CL-AR', serv: 'Servicio de Salud Araucanía Sur', media: 417, mediana: 141, atenciones: 564918,
  },
  {
    id: 'CL-LR', serv: 'Servicio de Salud Valdivia', media: 733, mediana: 905, atenciones: 222280,
  },
  {
    id: 'CL-LL', serv: 'Servicio de Salud Chiloé', media: 435.3, mediana: 245, atenciones: 119996,
  },
  {
    id: 'CL-LL', serv: 'Servicio de Salud Del Reloncaví', media: 613.4, mediana: 520, atenciones: 234977,
  },
  {
    id: 'CL-LL', serv: 'Servicio de Salud Osorno', media: 402.3, mediana: 384, atenciones: 207996,
  },
  {
    id: 'CL-AI', serv: 'Servicio de Salud Aisén', media: 161.2, mediana: 69, atenciones: 132281,
  },
  {
    id: 'CL-MA', serv: 'Servicio de Salud Magallanes', media: 363, mediana: 177, atenciones: 154426,
  },
];

const regionServs = {};
const regionMedias = {};
const regionAtenciones = {};

tiempoEspera.forEach((e) => {
  const servs = regionServs[e.id] || [];
  servs.push({ serv: e.serv, mediana: e.mediana });
  regionServs[e.id] = servs;

  const medias = regionMedias[e.id] || [];
  medias.push(e.media * e.atenciones);
  regionMedias[e.id] = medias;

  regionAtenciones[e.id] = (regionAtenciones[e.id] || 0) + e.atenciones;
});

const tiempoEsperaRegion = [];
Object.entries(regionServs).forEach(([id, servs]) => {
  const media = regionMedias[id].reduce((acc, c) => acc + c, 0) / regionAtenciones[id];

  const servsText = servs.reduce((acc, current) => `${acc}\n${current.serv}: ${current.mediana}`, '');

  tiempoEsperaRegion.push({ id, value: media, medianas: servsText });
});

const ofertaPor100Especialidad = [
  { especialidad: 'Obestreticia y ginecología', ofertaPor100: 58 },
  { especialidad: 'Neurocirugía', ofertaPor100: 9 },
  { especialidad: 'Traumatología y ortopedia', ofertaPor100: 6 },
  { especialidad: 'Urología', ofertaPor100: 14 },
  { especialidad: 'Oftalmología', ofertaPor100: 20 },
  { especialidad: 'Dermatología', ofertaPor100: 18 },
  { especialidad: 'Ottorinolaringología', ofertaPor100: 6 },
  { especialidad: 'Cirugía cardiovascular', ofertaPor100: 1 },
  { especialidad: 'Cirugía de cabeza, cuello y maxilofacial', ofertaPor100: 0.2 },
  { especialidad: 'Cirugía plástica y reparadora', ofertaPor100: 0.2 },
];

export {
  tiempoEsperaRegion, ofertaPor100Especialidad,
};
