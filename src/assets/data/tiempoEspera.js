const tiempoEspera = [
  {
    id: 'CL-AP', serv: 'Servicio de Salud Arica', media: 403.2, mediana: 125,
  },
  {
    id: 'CL-TA', serv: 'Servicio de Salud Iquique', media: 663.9, mediana: 661,
  },
  {
    id: 'CL-AN', serv: 'Servicio de Salud Antofagasta', media: 444, mediana: 235,
  },
  {
    id: 'CL-AT', serv: 'Servicio de Salud Atacama', media: 407, mediana: 223,
  },
  {
    id: 'CL-CO', serv: 'Servicio de Salud Coquimbo', media: 543, mediana: 320,
  },
  {
    id: 'CL-VS', serv: 'Servicio de Salud Valparaíso San Antonio', media: 548, mediana: 380,
  },
  {
    id: 'CL-VS', serv: 'Servicio de Salud Viña del Mar Quillota', media: 651, mediana: 482,
  },
  {
    id: 'CL-VS', serv: 'Servicio de Salud Aconcagua', media: 296, mediana: 60,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Norte', media: 512, mediana: 190,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Occidente', media: 302, mediana: 99,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Central', media: 371, mediana: 133,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Oriente', media: 333, mediana: 89,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Sur', media: 459, mediana: 254,
  },
  {
    id: 'CL-RM', serv: 'Servicio de Salud Metropolitano Sur Oriente', media: 360, mediana: 62,
  },
  {
    id: 'CL-LI', serv: "Servicio de Salud Del Libertador B.O'Higgins", media: 457, mediana: 273,
  },
  {
    id: 'CL-ML', serv: 'Servicio de Salud Del Maule', media: 429, mediana: 202,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Ñuble', media: 364, mediana: 147,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Concepción', media: 243, mediana: 75,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Talcahuano', media: 244, mediana: 105,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Biobío', media: 554, mediana: 569,
  },
  {
    id: 'CL-BI', serv: 'Servicio de Salud Arauco', media: 303.2, mediana: 145,
  },
  {
    id: 'CL-AR', serv: 'Servicio de Salud Araucanía Norte', media: 495.5, mediana: 377,
  },
  {
    id: 'CL-AR', serv: 'Servicio de Salud Araucanía Sur', media: 417, mediana: 141,
  },
  {
    id: 'CL-LR', serv: 'Servicio de Salud Valdivia', media: 733, mediana: 905,
  },
  {
    id: 'CL-LL', serv: 'Servicio de Salud Osorno', media: 402.3, mediana: 384,
  },
  {
    id: 'CL-LL', serv: 'Servicio de Salud Del Reloncaví', media: 613.4, mediana: 520,
  },
  {
    id: 'CL-LL', serv: 'Servicio de Salud Chiloé', media: 435.3, mediana: 245,
  },
  {
    id: 'CL-AI', serv: 'Servicio de Salud Aisén', media: 161.2, mediana: 69,
  },
  {
    id: 'CL-MA', serv: 'Servicio de Salud Magallanes', media: 363, mediana: 177,
  },
];

const regionServs = {};
const regionMedias = {};
tiempoEspera.forEach((e) => {
  const servs = regionServs[e.id] || [];
  servs.push({ serv: e.serv, mediana: e.mediana });
  regionServs[e.id] = servs;

  const medias = regionMedias[e.id] || [];
  medias.push(e.media);
  regionMedias[e.id] = medias;
});

const tiempoEsperaRegion = [];
Object.entries(regionServs).forEach(([id, servs]) => {
  const media = regionMedias[id].reduce((acc, c) => acc + c, 0) / regionMedias[id].length;
  const servsText = servs.reduce((acc, current) => `${acc}\n${current.serv}: ${current.mediana}`, '');
  tiempoEsperaRegion.push({ id, value: media, medianas: servsText });
});

export default tiempoEsperaRegion;
