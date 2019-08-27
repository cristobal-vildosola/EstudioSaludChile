const licenciasRegion = [
  { id: 'CL-AP', value: 137918 },
  { id: 'CL-TA', value: 234227 },
  { id: 'CL-AN', value: 321617 },
  { id: 'CL-AT', value: 211313 },
  { id: 'CL-CO', value: 469537 },
  { id: 'CL-VS', value: 1397742 },
  { id: 'CL-RM', value: 6380566 },
  { id: 'CL-LI', value: 819574 },
  { id: 'CL-ML', value: 669585 },
  { id: 'CL-BI', value: 1591698 },
  { id: 'CL-AR', value: 599248 },
  { id: 'CL-LR', value: 229687 },
  { id: 'CL-LL', value: 571986 },
  { id: 'CL-AI', value: 70436 },
  { id: 'CL-MA', value: 156937 },
];

const licenciasSexo = [
  { id: 2, value: 10408382, name: 'Mujeres' },
  { id: 1, value: 3563475, name: 'Hombres' },
];

const licenciasTipo = [
  { tipo: 'CURATIVA COMUN', value: 12670218 },
  { tipo: 'MATERNAL', value: 1264353 },
  { tipo: 'LABORAL', value: 96634 },
];

const licenciasTipoDosglose = [
  { tipo: 'CURATIVA COMUN', subtipo: 'ENFERMEDAD O ACCIDENTE NO DEL TRABAJO', value: 12127341 },
  { tipo: 'CURATIVA COMUN', subtipo: 'PRORROGA MEDICINA PREVENTIVA', value: 1663 },
  { tipo: 'CURATIVA COMUN', subtipo: 'PATOLOGIAS DEL EMBARAZO', value: 541214 },
  { tipo: 'MATERNAL', subtipo: 'LICENCIA MATERNAL', value: 705736 },
  { tipo: 'MATERNAL', subtipo: 'ENFERMEDAD GRAVE HIJO MENOR DE 1 AÑO', value: 558617 },
  { tipo: 'LABORAL', subtipo: 'ACCIDENTE DEL TRABAJO', value: 84189 },
  { tipo: 'LABORAL', subtipo: 'ENFERMEDAD PROFESIONAL', value: 12445 },
];

export {
  licenciasRegion, licenciasSexo, licenciasTipo, licenciasTipoDosglose,
};
