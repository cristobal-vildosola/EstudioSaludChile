const establecimientos = [
  {
    longitud: -70.312948, latitud: -18.482478, nombre: 'Hospital Dr. Juan Noé Crevanni (Arica)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 7, comuna: 15101, camas: 313,
  },
  {
    longitud: -70.138931, latitud: -20.214354, nombre: 'Hospital Dr. Ernesto Torres Galdames (Iquique)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 9, comuna: 1101, camas: 418,
  },
  {
    longitud: -70.193236, latitud: -22.088382, nombre: 'Hospital Dr. Marcos Macuada (Tocopilla)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 2301, camas: 40,
  },
  {
    longitud: -68.918257, latitud: -22.445201, nombre: 'Hospital Dr. Carlos Cisternas (Calama)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 4, comuna: 2201, camas: 141,
  },
  {
    longitud: -70.379095, latitud: -23.569147, nombre: 'Centro Asistencial Norte (CAN)', tipo: 'Centro de Referencia de Salud', nivel: 'Secundario', quirofanos: 1, comuna: 2101, camas: 0,
  },
  {
    longitud: -70.378789, latitud: -23.569837, nombre: 'Centro Oncológico Ambulatorio', tipo: 'Consultorio de Diagnóstico y Tratamiento', nivel: 'Secundario', quirofanos: 1, comuna: 2101, camas: 0,
  },
  {
    longitud: -70.396441, latitud: -23.659826, nombre: 'Hospital Dr. Leonardo Guzmán (Antofagasta)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 10, comuna: 2101, camas: 531,
  },
  {
    longitud: -70.481211, latitud: -25.408169, nombre: 'Hospital 21 de Mayo (Taltal)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 2104, camas: 40,
  },
  {
    longitud: -70.617306, latitud: -26.347153, nombre: 'Hospital Dr. Jerónimo Méndez Arancibia (Chañaral)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 3201, camas: 38,
  },
  {
    longitud: -70.052331, latitud: -26.392456, nombre: 'Hospital Dr. Florencio Vargas (Diego de Almagro)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 3202, camas: 26,
  },
  {
    longitud: -109.421012, latitud: -27.150245, nombre: 'Hospital Hanga Roa (Isla De Pascua)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 5201, camas: 18,
  },
  {
    longitud: -70.322127, latitud: -27.373352, nombre: 'Hospital San José del Carmen (Copiapó)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 3101, camas: 298,
  },
  {
    longitud: -71.216511, latitud: -28.463524, nombre: 'Hospital Dr. Manuel Magalhaes Medling (Huasco)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 3304, camas: 15,
  },
  {
    longitud: -70.782512, latitud: -28.574949, nombre: 'Hospital Provincial del Huasco Monseñor Fernando Ariztía Ruiz (Vallenar)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 4, comuna: 3301, camas: 114,
  },
  {
    longitud: -71.249732, latitud: -29.908191, nombre: 'Hospital San Juan de Dios (La Serena)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 7, comuna: 4101, camas: 284,
  },
  {
    longitud: -71.336153, latitud: -29.967689, nombre: 'Hospital San Pablo (Coquimbo)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 7, comuna: 4102, camas: 288,
  },
  {
    longitud: -70.712492, latitud: -30.029346, nombre: 'Hospital San Juan de Dios (Vicuña)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 4106, camas: 30,
  },
  {
    longitud: -71.200031, latitud: -30.599614, nombre: 'Hospital Dr. Antonio Tirado Lanas (Ovalle)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 4301, camas: 191,
  },
  {
    longitud: -71.007933, latitud: -31.175494, nombre: 'Hospital San Juan de Dios (Combarbalá)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 4302, camas: 20,
  },
  {
    longitud: -71.173672, latitud: -31.63473, nombre: 'Hospital Dr. Humberto Elorza Cortés (Illapel)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 4201, camas: 54,
  },
  {
    longitud: -70.962957, latitud: -31.776383, nombre: 'Hospital de Salamanca', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 4204, camas: 19,
  },
  {
    longitud: -71.067794, latitud: -32.428287, nombre: 'Hospital Dr. Víctor Hugo Moll (Cabildo)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 5402, camas: 21,
  },
  {
    longitud: -71.237975, latitud: -32.45048, nombre: 'Hospital San Agustín (La Ligua)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 5401, camas: 59,
  },
  {
    longitud: -70.708992, latitud: -32.74977, nombre: 'Hospital de San Camilo (San Felipe)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 6, comuna: 5701, camas: 234,
  },
  {
    longitud: -71.531509, latitud: -32.778843, nombre: 'Hospital Adriana Cousiño (Quintero)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 5107, camas: 31,
  },
  {
    longitud: -70.59643, latitud: -32.829664, nombre: 'Hospital San Juan de Dios (Los Andes)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 5301, camas: 168,
  },
  {
    longitud: -71.257745, latitud: -32.87993, nombre: 'Hospital San Martín (Quillota)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 5501, camas: 215,
  },
  {
    longitud: -71.541725, latitud: -33.0294, nombre: 'Hospital Dr. Gustavo Fricke (Viña del Mar)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 13, comuna: 5109, camas: 443,
  },
  {
    longitud: -71.611098, latitud: -33.050258, nombre: 'Hospital Carlos Van Buren (Valparaíso)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 16, comuna: 5101, camas: 524,
  },
  {
    longitud: -71.433257, latitud: -33.050905, nombre: 'Hospital de Quilpué', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 4, comuna: 5801, camas: 149,
  },
  {
    longitud: -71.58962, latitud: -33.05679, nombre: 'Hospital Dr. Eduardo Pereira Ramírez (Valparaíso)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 6, comuna: 5101, camas: 194,
  },
  {
    longitud: -71.146244, latitud: -33.409257, nombre: 'Hospital de Curacaví', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 13503, camas: 18,
  },
  {
    longitud: -70.696103, latitud: -33.415057, nombre: 'Hospital Dr. Félix Bulnes Cerda (Santiago, Quinta Normal)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 9, comuna: 13126, camas: 356,
  },
  {
    longitud: -70.655086, latitud: -33.415335, nombre: 'Hospital Clínico de Niños Dr. Roberto del Río (Santiago, Independencia)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 6, comuna: 13108, camas: 209,
  },
  {
    longitud: -70.653318, latitud: -33.416586, nombre: 'Complejo Hospitalario San José (Santiago, Independencia)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 20, comuna: 13108, camas: 541,
  },
  {
    longitud: -70.652105, latitud: -33.418128, nombre: 'Instituto Nacional del Cáncer Dr. Caupolicán Pardo Correa (Santiago, Recoleta)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 13108, camas: 83,
  },
  {
    longitud: -70.615846, latitud: -33.430592, nombre: 'Hospital de Niños Dr. Luis Calvo Mackenna (Santiago, Providencia)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 9, comuna: 13123, camas: 186,
  },
  {
    longitud: -70.658488, latitud: -33.43481, nombre: 'Instituto Traumatológico Dr. Teodoro Gebauer', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 4, comuna: 13101, camas: 104,
  },
  {
    longitud: -70.624493, latitud: -33.43664, nombre: 'Hospital Del Salvador (Santiago, Providencia)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 14, comuna: 13123, camas: 388,
  },
  {
    longitud: -70.622448, latitud: -33.436888, nombre: 'Instituto de Neurocirugía Dr. Alfonso Asenjo', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 13123, camas: 100,
  },
  {
    longitud: -70.621882, latitud: -33.437988, nombre: 'Instituto Nacional de Enfermedades Respiratorias y Cirugía Torácica', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 4, comuna: 13123, camas: 162,
  },
  {
    longitud: -70.679188, latitud: -33.442394, nombre: 'Hospital San Juan de Dios (Santiago, Santiago)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 20, comuna: 13101, camas: 576,
  },
  {
    longitud: -70.638693, latitud: -33.443676, nombre: 'Hospital de Urgencia Asistencia Pública Dr. Alejandro del Río', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 13101, camas: 249,
  },
  {
    longitud: -70.740976, latitud: -33.445369, nombre: 'Centro de Referencia de Salud Salvador Allende', tipo: 'Centro de Referencia de Salud', nivel: 'Secundario', quirofanos: 2, comuna: 13124, camas: 0,
  },
  {
    longitud: -70.64232, latitud: -33.460498, nombre: 'Hospital Clínico San Borja', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 17, comuna: 13101, camas: 549,
  },
  {
    longitud: -70.648129, latitud: -33.484761, nombre: 'Hospital Dr. Exequiel González Cortés (Santiago, San Miguel)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 13130, camas: 168,
  },
  {
    longitud: -70.644439, latitud: -33.485147, nombre: 'Hospital Barros Luco Trudeau (Santiago, San Miguel)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 26, comuna: 13130, camas: 715,
  },
  {
    longitud: -70.579232, latitud: -33.500951, nombre: 'Centro de Referencia de Salud Cordillera Oriente', tipo: 'Centro de Referencia de Salud', nivel: 'Secundario', quirofanos: 1, comuna: 13122, camas: 0,
  },
  {
    longitud: -70.579408, latitud: -33.501328, nombre: 'Hospital Dr. Luis Tisné B. (Santiago, Peñalolén)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 11, comuna: 13122, camas: 319,
  },
  {
    longitud: -70.774248, latitud: -33.508212, nombre: 'Hospital Clínico Metropolitano El Carmen Doctor Luis Valentín Ferrada', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 11, comuna: 13119, camas: 403,
  },
  {
    longitud: -70.771857, latitud: -33.508774, nombre: 'Centro de Referencia de Salud de Maipú', tipo: 'Centro de Referencia de Salud', nivel: 'Secundario', quirofanos: 2, comuna: 13119, camas: 24,
  },
  {
    longitud: -70.599148, latitud: -33.514161, nombre: 'Hospital Clínico Metropolitano La Florida Dra. Eloisa Díaz Inzunza', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 16, comuna: 13110, camas: 391,
  },
  {
    longitud: -70.634483, latitud: -33.553577, nombre: 'Hospital Padre Alberto Hurtado (San Ramón)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 13, comuna: 13131, camas: 417,
  },
  {
    longitud: -70.581781, latitud: -33.577251, nombre: 'Complejo Hospitalario Dr. Sótero del Río (Santiago, Puente Alto)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 28, comuna: 13201, camas: 754,
  },
  {
    longitud: -70.676793, latitud: -33.58435, nombre: 'Hospital El Pino (Santiago, San Bernardo)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 6, comuna: 13401, camas: 291,
  },
  {
    longitud: -70.675094, latitud: -33.584748, nombre: 'Centro de Referencia de Salud El Pino', tipo: 'Centro de Referencia de Salud', nivel: 'Secundario', quirofanos: 3, comuna: 13401, camas: 0,
  },
  {
    longitud: -71.608623, latitud: -33.588809, nombre: 'Hospital Claudio Vicuña ( San Antonio)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 4, comuna: 5601, camas: 164,
  },
  {
    longitud: -70.697393, latitud: -33.592835, nombre: 'Hospital Parroquial (San Bernardo) (D)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 6, comuna: 13401, camas: 155,
  },
  {
    longitud: -70.904125, latitud: -33.61001, nombre: 'Hospital de Peñaflor', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 13605, camas: 40,
  },
  {
    longitud: -70.598737, latitud: -33.614166, nombre: 'Centro de Referencia de Salud Hospital Provincia Cordillera', tipo: 'Centro de Referencia de Salud', nivel: 'Secundario', quirofanos: 2, comuna: 13201, camas: 0,
  },
  {
    longitud: -70.920339, latitud: -33.66801, nombre: 'Hospital Adalberto Steeger (Talagante)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 13601, camas: 120,
  },
  {
    longitud: -71.214668, latitud: -33.69526, nombre: 'Hospital San José (Melipilla)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 4, comuna: 13501, camas: 134,
  },
  {
    longitud: -70.739547, latitud: -33.734263, nombre: 'Hospital San Luis (Buin)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 13402, camas: 102,
  },
  {
    longitud: -70.741937, latitud: -34.164489, nombre: 'Hospital Regional de Rancagua', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 15, comuna: 6101, camas: 536,
  },
  {
    longitud: -70.853259, latitud: -34.411325, nombre: 'Hospital Dr. Ricardo Valenzuela Sáez (Rengo)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 6115, camas: 104,
  },
  {
    longitud: -70.992563, latitud: -34.575908, nombre: 'Hospital San Juan de Dios (San Fernando)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 6301, camas: 179,
  },
  {
    longitud: -71.35723, latitud: -34.634422, nombre: 'Hospital de Santa Cruz', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 6310, camas: 85,
  },
  {
    longitud: -71.23577, latitud: -34.989789, nombre: 'Hospital San Juan de Dios (Curicó)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 9, comuna: 7301, camas: 285,
  },
  {
    longitud: -72.402702, latitud: -35.339432, nombre: 'Hospital de Constitución', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 7102, camas: 75,
  },
  {
    longitud: -71.646373, latitud: -35.426896, nombre: 'Hospital Dr. César Garavagno Burotto (Talca)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 23, comuna: 7101, camas: 577,
  },
  {
    longitud: -71.737445, latitud: -35.590724, nombre: 'Hospital Dr. Abel Fuentealba Lagos de San Javier', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 7406, camas: 66,
  },
  {
    longitud: -72.531446, latitud: -35.739564, nombre: 'Hospital Dr. Benjamín Pedreros (Chanco)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 7202, camas: 25,
  },
  {
    longitud: -71.590991, latitud: -35.844282, nombre: 'Hospital Presidente Carlos Ibáñez del Campo (Linares)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 7401, camas: 272,
  },
  {
    longitud: -72.32527, latitud: -35.963105, nombre: 'Hospital San Juan de Dios (Cauquenes)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 7201, camas: 121,
  },
  {
    longitud: -71.814027, latitud: -36.141982, nombre: 'Hospital San José (Parral)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 7404, camas: 102,
  },
  {
    longitud: -72.546763, latitud: -36.286678, nombre: 'Hospital Comunitario de Salud Familiar de Quirihue', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 8414, camas: 57,
  },
  {
    longitud: -71.959831, latitud: -36.429931, nombre: 'Hospital de San Carlos', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 8416, camas: 116,
  },
  {
    longitud: -72.092671, latitud: -36.608831, nombre: 'Hospital Clínico Herminda Martín (Chillán)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 11, comuna: 8401, camas: 466,
  },
  {
    longitud: -72.954554, latitud: -36.613323, nombre: 'Hospital de Tomé', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 8111, camas: 109,
  },
  {
    longitud: -72.975452, latitud: -36.719574, nombre: 'Hospital Penco', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 8107, camas: 61,
  },
  {
    longitud: -72.296417, latitud: -36.739712, nombre: 'Hospital Comunitario de Salud Familiar de Bulnes', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 8402, camas: 54,
  },
  {
    longitud: -73.108694, latitud: -36.740101, nombre: 'Hospital Las Higueras (Talcahuano)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 10, comuna: 8110, camas: 418,
  },
  {
    longitud: -73.038988, latitud: -36.824334, nombre: 'Hospital Clínico Regional Dr. Guillermo Grant Benavente (Concepción)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 23, comuna: 8101, camas: 894,
  },
  {
    longitud: -73.036682, latitud: -36.824886, nombre: 'Hospital Traumatológico (Concepción)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 7, comuna: 8101, camas: 119,
  },
  {
    longitud: -72.034874, latitud: -36.898017, nombre: 'Hospital Comunitario de Salud Familiar de El Carmen', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 8407, camas: 27,
  },
  {
    longitud: -73.135861, latitud: -37.028242, nombre: 'Hospital San José (Coronel)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 8102, camas: 146,
  },
  {
    longitud: -73.155535, latitud: -37.09019, nombre: 'Hospital de Lota', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 4, comuna: 8106, camas: 112,
  },
  {
    longitud: -72.023846, latitud: -37.121823, nombre: 'Hospital Comunitario de Salud Familiar Pedro Morales Campos (Yungay)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 8421, camas: 47,
  },
  {
    longitud: -73.317625, latitud: -37.250717, nombre: 'Hospital San Vicente (Arauco)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 8202, camas: 63,
  },
  {
    longitud: -72.346903, latitud: -37.47365, nombre: 'Complejo Asistencial Dr. Víctor Ríos Ruiz (Los Ángeles)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 11, comuna: 8301, camas: 524,
  },
  {
    longitud: -73.348238, latitud: -37.473676, nombre: 'Hospital Provincial Dr. Rafael Avaría (Curanilahue)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 8205, camas: 102,
  },
  {
    longitud: -72.705669, latitud: -37.794444, nombre: 'Hospital Dr. Mauricio Heyermann (Angol)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 9201, camas: 184,
  },
  {
    longitud: -72.340159, latitud: -38.233942, nombre: 'Hospital San José de Victoria', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 5, comuna: 9211, camas: 176,
  },
  {
    longitud: -72.418384, latitud: -38.537076, nombre: 'Hospital Dr. Abraham Godoy (Lautaro)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 9108, camas: 72,
  },
  {
    longitud: -72.599238, latitud: -38.736532, nombre: 'Hospital Dr. Hernán Henríquez Aravena (Temuco)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 14, comuna: 9101, camas: 704,
  },
  {
    longitud: -72.958314, latitud: -38.740329, nombre: 'Hospital Intercultural de Nueva Imperial', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 9111, camas: 85,
  },
  {
    longitud: -72.643501, latitud: -38.989944, nombre: 'Hospital de Pitrufquén', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 9114, camas: 73,
  },
  {
    longitud: -72.226793, latitud: -39.2777, nombre: 'Hospital de Villarrica', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 9120, camas: 73,
  },
  {
    longitud: -71.97429, latitud: -39.278833, nombre: 'Hospital San Francisco (Pucón)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 9115, camas: 69,
  },
  {
    longitud: -73.240138, latitud: -39.831807, nombre: 'Hospital Clínico Regional (Valdivia)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 12, comuna: 14101, camas: 505,
  },
  {
    longitud: -73.076009, latitud: -40.284563, nombre: 'Hospital Juan Morey (La Unión)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 14201, camas: 114,
  },
  {
    longitud: -72.95047, latitud: -40.334842, nombre: 'Hospital de Río Bueno', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 14204, camas: 63,
  },
  {
    longitud: -73.127785, latitud: -40.5883, nombre: 'Hospital Base San José de Osorno', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 10, comuna: 10301, camas: 378,
  },
  {
    longitud: -73.153883, latitud: -40.913644, nombre: 'Hospital de Purranque', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 10303, camas: 40,
  },
  {
    longitud: -72.957342, latitud: -41.44855, nombre: 'Hospital de Puerto Montt', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 17, comuna: 10101, camas: 528,
  },
  {
    longitud: -73.598474, latitud: -41.616851, nombre: 'Hospital de Maullín', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 10108, camas: 32,
  },
  {
    longitud: -73.823832, latitud: -41.86523, nombre: 'Hospital de Ancud', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 10202, camas: 72,
  },
  {
    longitud: -73.494599, latitud: -42.469562, nombre: 'Hospital Comunitario de Achao', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 10210, camas: 22,
  },
  {
    longitud: -73.76933, latitud: -42.477043, nombre: 'Hospital de Castro', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 3, comuna: 10201, camas: 129,
  },
  {
    longitud: -73.617061, latitud: -43.115089, nombre: 'Hospital de Quellón', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 10208, camas: 36,
  },
  {
    longitud: -71.808068, latitud: -43.617898, nombre: 'Hospital de Palena', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 10404, camas: 10,
  },
  {
    longitud: -72.683815, latitud: -45.408518, nombre: 'Hospital de Puerto Aysén', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 2, comuna: 11201, camas: 47,
  },
  {
    longitud: -72.073423, latitud: -45.568399, nombre: 'Hospital Regional (Coihaique)', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 4, comuna: 11101, camas: 160,
  },
  {
    longitud: -71.725104, latitud: -46.541656, nombre: 'Hospital Dr. Leopoldo Ortega R. (Chile Chico)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 11401, camas: 8,
  },
  {
    longitud: -72.506046, latitud: -51.730327, nombre: 'Hospital Dr. Augusto Essmann Burgos ( Natales)', tipo: 'Establecimiento Mediana Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 12401, camas: 56,
  },
  {
    longitud: -70.896232, latitud: -53.12215, nombre: 'Hospital Clínico de Magallanes Dr. Lautaro Navarro Avaria', tipo: 'Establecimiento Alta Complejidad', nivel: 'Terciario', quirofanos: 10, comuna: 12101, camas: 325,
  },
  {
    longitud: -70.358384, latitud: -53.298162, nombre: 'Hospital Dr. Marco Antonio Chamorro ( Porvenir)', tipo: 'Establecimiento Baja Complejidad', nivel: 'Terciario', quirofanos: 1, comuna: 12301, camas: 17,
  },
];

// sort in ascending order
establecimientos.sort((a, b) => (a.quirofanos - b.quirofanos));

const poblacionFonasa = [
  {
    id: 'CL-AP', poblacionFonasa: 170138, qx: 7, qx_por_100000: 4.11,
  }, {
    id: 'CL-TA', poblacionFonasa: 255648, qx: 9, qx_por_100000: 3.52,
  }, {
    id: 'CL-AN', poblacionFonasa: 425217, qx: 18, qx_por_100000: 4.23,
  }, {
    id: 'CL-AT', poblacionFonasa: 243857, qx: 14, qx_por_100000: 5.74,
  }, {
    id: 'CL-CO', poblacionFonasa: 639173, qx: 24, qx_por_100000: 3.75,
  }, {
    id: 'CL-VS', poblacionFonasa: 1433738, qx: 47, qx_por_100000: 3.28,
  }, {
    id: 'CL-RM', poblacionFonasa: 5140381, qx: 250, qx_por_100000: 4.86,
  }, {
    id: 'CL-LI', poblacionFonasa: 754941, qx: 45, qx_por_100000: 5.96,
  }, {
    id: 'CL-ML', poblacionFonasa: 887330, qx: 47, qx_por_100000: 5.30,
  }, {
    id: 'CL-BI', poblacionFonasa: 1732606, qx: 84, qx_por_100000: 4.85,
  }, {
    id: 'CL-AR', poblacionFonasa: 824215, qx: 33, qx_por_100000: 4.00,
  }, {
    id: 'CL-LR', poblacionFonasa: 301929, qx: 24, qx_por_100000: 7.95,
  }, {
    id: 'CL-LL', poblacionFonasa: 720035, qx: 37, qx_por_100000: 5.14,
  }, {
    id: 'CL-AI', poblacionFonasa: 87382, qx: 7, qx_por_100000: 8.01,
  }, {
    id: 'CL-MA', poblacionFonasa: 126697, qx: 12, qx_por_100000: 9.47,
  },
];

const estanciaPrVsUr = [
  {
    hospital: 108100, estanciaUr: 2, nUr: 63, estanciaPr: 2, nPr: 219,
  },
  {
    hospital: 112101, estanciaUr: 2, nUr: 136, estanciaPr: 1, nPr: 83,
  },
  {
    hospital: 114101, estanciaUr: 2, nUr: 201, estanciaPr: 1, nPr: 195,
  },
  {
    hospital: 114105, estanciaUr: 2, nUr: 65, estanciaPr: 1, nPr: 37,
  },
  {
    hospital: 116105, estanciaUr: 2, nUr: 78, estanciaPr: 2, nPr: 118,
  },
  {
    hospital: 116108, estanciaUr: 2, nUr: 77, estanciaPr: 1, nPr: 175,
  },
  {
    hospital: 119100, estanciaUr: 2, nUr: 64, estanciaPr: 1, nPr: 158,
  },
  {
    hospital: 122100, estanciaUr: 2, nUr: 48, estanciaPr: 2, nPr: 32,
  },
  {
    hospital: 123100, estanciaUr: 2, nUr: 125, estanciaPr: 2, nPr: 132,
  },
  {
    hospital: 107100, estanciaUr: 3, nUr: 70, estanciaPr: 2, nPr: 30,
  },
  {
    hospital: 111101, estanciaUr: 3, nUr: 153, estanciaPr: 1, nPr: 38,
  },
  {
    hospital: 115100, estanciaUr: 3, nUr: 47, estanciaPr: 1, nPr: 43,
  },
  {
    hospital: 116100, estanciaUr: 3, nUr: 138, estanciaPr: 1, nPr: 183,
  },
  {
    hospital: 117101, estanciaUr: 3, nUr: 297, estanciaPr: 1, nPr: 230,
  },
  {
    hospital: 121109, estanciaUr: 3, nUr: 71, estanciaPr: 1, nPr: 56,
  },
  {
    hospital: 124105, estanciaUr: 3.5, nUr: 96, estanciaPr: 1, nPr: 92,
  },
  {
    hospital: 104103, estanciaUr: 4, nUr: 66, estanciaPr: 1, nPr: 95,
  },
  {
    hospital: 110100, estanciaUr: 4, nUr: 172, estanciaPr: 1, nPr: 120,
  },
  {
    hospital: 115107, estanciaUr: 4, nUr: 55, estanciaPr: 1, nPr: 138,
  },
  {
    hospital: 118100, estanciaUr: 4, nUr: 193, estanciaPr: 1, nPr: 96,
  },
  {
    hospital: 120101, estanciaUr: 4, nUr: 183, estanciaPr: 1, nPr: 185,
  },
  {
    hospital: 126100, estanciaUr: 4, nUr: 85, estanciaPr: 1, nPr: 79,
  },
  {
    hospital: 105101, estanciaUr: 5, nUr: 66, estanciaPr: 1, nPr: 48,
  },
  {
    hospital: 105102, estanciaUr: 5, nUr: 50, estanciaPr: 1, nPr: 61,
  },
  {
    hospital: 106103, estanciaUr: 5, nUr: 101, estanciaPr: 1, nPr: 33,
  },
  {
    hospital: 113180, estanciaUr: 5, nUr: 83, estanciaPr: 1, nPr: 90,
  },
  {
    hospital: 129100, estanciaUr: 5, nUr: 49, estanciaPr: 1, nPr: 121,
  },
  {
    hospital: 103100, estanciaUr: 5.5, nUr: 38, estanciaPr: 2, nPr: 34,
  },
  {
    hospital: 101100, estanciaUr: 6, nUr: 94, estanciaPr: 1, nPr: 152,
  },
  {
    hospital: 102100, estanciaUr: 6, nUr: 212, estanciaPr: 1, nPr: 30,
  },
  {
    hospital: 108101, estanciaUr: 6, nUr: 61, estanciaPr: 1, nPr: 147,
  },
  {
    hospital: 103101, estanciaUr: 8, nUr: 34, estanciaPr: 1, nPr: 69,
  },
  {
    hospital: 106102, estanciaUr: 8, nUr: 31, estanciaPr: 2, nPr: 119,
  },
  {
    hospital: 107101, estanciaUr: 8, nUr: 92, estanciaPr: 1, nPr: 85,
  },
  {
    hospital: 104100, estanciaUr: 10.5, nUr: 66, estanciaPr: 1, nPr: 66,
  },
  {
    hospital: 105100, estanciaUr: 11, nUr: 40, estanciaPr: 1, nPr: 136,
  },
  {
    hospital: 109100, estanciaUr: 11, nUr: 175, estanciaPr: 1, nPr: 137,
  },
  {
    hospital: 113100, estanciaUr: 11, nUr: 141, estanciaPr: 1, nPr: 89,
  },
];

export {
  establecimientos, poblacionFonasa, estanciaPrVsUr,
};
