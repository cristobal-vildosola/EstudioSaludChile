const tiempoEspera = [
  {
    id: 'CL-AP', serv: 'Arica', media: 403.2, mediana: 125, atenciones: 159951,
  },
  {
    id: 'CL-TA', serv: 'Iquique', media: 663.9, mediana: 661, atenciones: 68560,
  },
  {
    id: 'CL-AN', serv: 'Antofagasta', media: 444, mediana: 235, atenciones: 224275,
  },
  {
    id: 'CL-AT', serv: 'Atacama', media: 407, mediana: 223, atenciones: 122574,
  },
  {
    id: 'CL-CO', serv: 'Coquimbo', media: 543, mediana: 320, atenciones: 489008,
  },
  {
    id: 'CL-VS', serv: 'Aconcagua', media: 296, mediana: 60, atenciones: 239342,
  },
  {
    id: 'CL-VS', serv: 'Valparaíso San Antonio', media: 548, mediana: 380, atenciones: 319209,
  },
  {
    id: 'CL-VS', serv: 'Viña del Mar Quillota', media: 651, mediana: 482, atenciones: 381869,
  },
  {
    id: 'CL-RM', serv: 'Metropolitano Central', media: 371, mediana: 133, atenciones: 388185,
  },
  {
    id: 'CL-RM', serv: 'Metropolitano Norte', media: 512, mediana: 190, atenciones: 406813,
  },
  {
    id: 'CL-RM', serv: 'Metropolitano Occidente', media: 302, mediana: 99, atenciones: 547882,
  },
  {
    id: 'CL-RM', serv: 'Metropolitano Oriente', media: 333, mediana: 89, atenciones: 423555,
  },
  {
    id: 'CL-RM', serv: 'Metropolitano Sur', media: 459, mediana: 254, atenciones: 464302,
  },
  {
    id: 'CL-RM', serv: 'Metropolitano Sur Oriente', media: 360, mediana: 62, atenciones: 723701,
  },
  {
    id: 'CL-LI', serv: "Libertador B. O'Higgins", media: 457, mediana: 273, atenciones: 388851,
  },
  {
    id: 'CL-ML', serv: 'Del Maule', media: 429, mediana: 202, atenciones: 528381,
  },
  {
    id: 'CL-BI', serv: 'Arauco', media: 303.2, mediana: 145, atenciones: 159293,
  },
  {
    id: 'CL-BI', serv: 'Biobío', media: 554, mediana: 569, atenciones: 259053,
  },
  {
    id: 'CL-BI', serv: 'Concepción', media: 243, mediana: 75, atenciones: 513787,
  },
  {
    id: 'CL-BI', serv: 'Ñuble', media: 364, mediana: 147, atenciones: 375615,
  },
  {
    id: 'CL-BI', serv: 'Talcahuano', media: 244, mediana: 105, atenciones: 294923,
  },
  {
    id: 'CL-AR', serv: 'Araucanía Norte', media: 495.5, mediana: 377, atenciones: 185691,
  },
  {
    id: 'CL-AR', serv: 'Araucanía Sur', media: 417, mediana: 141, atenciones: 564918,
  },
  {
    id: 'CL-LR', serv: 'Valdivia', media: 733, mediana: 905, atenciones: 222280,
  },
  {
    id: 'CL-LL', serv: 'Chiloé', media: 435.3, mediana: 245, atenciones: 119996,
  },
  {
    id: 'CL-LL', serv: 'Del Reloncaví', media: 613.4, mediana: 520, atenciones: 234977,
  },
  {
    id: 'CL-LL', serv: 'Osorno', media: 402.3, mediana: 384, atenciones: 207996,
  },
  {
    id: 'CL-AI', serv: 'Aisén', media: 161.2, mediana: 69, atenciones: 132281,
  },
  {
    id: 'CL-MA', serv: 'Magallanes', media: 363, mediana: 177, atenciones: 154426,
  },
];

const comunaServicio = [
  { codigo: 13101, comuna: 'Santiago', serv: 'Metropolitano Central' },
  { codigo: 13102, comuna: 'Cerrillos', serv: 'Metropolitano Central' },
  { codigo: 13103, comuna: 'Cerro Navia', serv: 'Metropolitano Occidente' },
  { codigo: 13104, comuna: 'Conchalí', serv: 'Metropolitano Norte' },
  { codigo: 13105, comuna: 'El Bosque', serv: 'Metropolitano Sur' },
  { codigo: 13106, comuna: 'Estación Central', serv: 'Metropolitano Central' },
  { codigo: 13107, comuna: 'Huechuraba', serv: 'Metropolitano Norte' },
  { codigo: 13108, comuna: 'Independencia', serv: 'Metropolitano Norte' },
  { codigo: 13109, comuna: 'La Cisterna', serv: 'Metropolitano Sur' },
  { codigo: 13110, comuna: 'La Florida', serv: 'Metropolitano Sur Oriente' },
  { codigo: 13111, comuna: 'La Granja', serv: 'Metropolitano Sur Oriente' },
  { codigo: 13112, comuna: 'La Pintana', serv: 'Metropolitano Sur Oriente' },
  { codigo: 13113, comuna: 'La Reina', serv: 'Metropolitano Oriente' },
  { codigo: 13114, comuna: 'Las Condes', serv: 'Metropolitano Oriente' },
  { codigo: 13115, comuna: 'Lo Barnechea', serv: 'Metropolitano Oriente' },
  { codigo: 13116, comuna: 'Lo Espejo', serv: 'Metropolitano Sur' },
  { codigo: 13117, comuna: 'Lo Prado', serv: 'Metropolitano Occidente' },
  { codigo: 13118, comuna: 'Macul', serv: 'Metropolitano Oriente' },
  { codigo: 13119, comuna: 'Maipú', serv: 'Metropolitano Central' },
  { codigo: 13120, comuna: 'Ñuñoa', serv: 'Metropolitano Oriente' },
  { codigo: 13121, comuna: 'Pedro Aguirre Cerda', serv: 'Metropolitano Sur' },
  { codigo: 13122, comuna: 'Peñalolén', serv: 'Metropolitano Oriente' },
  { codigo: 13123, comuna: 'Providencia', serv: 'Metropolitano Oriente' },
  { codigo: 13124, comuna: 'Pudahuel', serv: 'Metropolitano Occidente' },
  { codigo: 13125, comuna: 'Quilicura', serv: 'Metropolitano Norte' },
  { codigo: 13126, comuna: 'Quinta Normal', serv: 'Metropolitano Occidente' },
  { codigo: 13127, comuna: 'Recoleta', serv: 'Metropolitano Norte' },
  { codigo: 13128, comuna: 'Renca', serv: 'Metropolitano Occidente' },
  { codigo: 13129, comuna: 'San Joaquín', serv: 'Metropolitano Sur' },
  { codigo: 13130, comuna: 'San Miguel', serv: 'Metropolitano Sur' },
  { codigo: 13131, comuna: 'San Ramón', serv: 'Metropolitano Sur Oriente' },
  { codigo: 13132, comuna: 'Vitacura', serv: 'Metropolitano Oriente' },
  { codigo: 13201, comuna: 'Puente Alto', serv: 'Metropolitano Sur Oriente' },
  { codigo: 13202, comuna: 'Pirque', serv: 'Metropolitano Sur Oriente' },
  { codigo: 13203, comuna: 'San José de Maipo', serv: 'Metropolitano Sur Oriente' },
  { codigo: 13301, comuna: 'Colina', serv: 'Metropolitano Norte' },
  { codigo: 13302, comuna: 'Lampa', serv: 'Metropolitano Norte' },
  { codigo: 13303, comuna: 'Tiltil', serv: 'Metropolitano Norte' },
  { codigo: 13401, comuna: 'San Bernardo', serv: 'Metropolitano Sur' },
  { codigo: 13402, comuna: 'Buin', serv: 'Metropolitano Sur' },
  { codigo: 13403, comuna: 'Calera de Tango', serv: 'Metropolitano Sur' },
  { codigo: 13404, comuna: 'Paine', serv: 'Metropolitano Sur' },
  { codigo: 13501, comuna: 'Melipilla', serv: 'Metropolitano Occidente' },
  { codigo: 13502, comuna: 'Alhué', serv: 'Metropolitano Occidente' },
  { codigo: 13503, comuna: 'Curacaví', serv: 'Metropolitano Occidente' },
  { codigo: 13504, comuna: 'María Pinto', serv: 'Metropolitano Occidente' },
  { codigo: 13505, comuna: 'San Pedro', serv: 'Metropolitano Occidente' },
  { codigo: 13601, comuna: 'Talagante', serv: 'Metropolitano Occidente' },
  { codigo: 13602, comuna: 'El Monte', serv: 'Metropolitano Occidente' },
  { codigo: 13603, comuna: 'Isla de Maipo', serv: 'Metropolitano Occidente' },
  { codigo: 13604, comuna: 'Padre Hurtado', serv: 'Metropolitano Occidente' },
  { codigo: 13605, comuna: 'Peñaflor', serv: 'Metropolitano Occidente' },
];

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

  tiempoEsperaRegion.push({ id, media, medianas: servsText });
});

const servDatos = {};
tiempoEspera.forEach((e) => {
  servDatos[e.serv] = { media: e.media, mediana: e.mediana };
});
const tiempoEsperaComunasRM = comunaServicio.map(
  e => ({
    id: e.codigo,
    comuna: e.comuna,
    serv: e.serv,
    media: servDatos[e.serv].media,
    mediana: servDatos[e.serv].mediana,
  }),
);

export {
  tiempoEsperaRegion, ofertaPor100Especialidad, tiempoEsperaComunasRM,
};
