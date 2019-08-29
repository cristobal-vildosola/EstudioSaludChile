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
  { tipo: 'Curativa comun', value: 12670218 },
  { tipo: 'Maternal', value: 1264353 },
  { tipo: 'Laboral', value: 96634 },
];

const licenciasTipoDesglose = [
  { tipo: 'Curativa comun', subtipo: 'Enfermedad o accidente no del trabajo', value: 12127341 },
  { tipo: 'Curativa comun', subtipo: 'Prorroga medicina preventiva', value: 1663 },
  { tipo: 'Curativa comun', subtipo: 'Patologias del embarazo', value: 541214 },
  { tipo: 'Maternal', subtipo: 'Licencia maternal', value: 705736 },
  { tipo: 'Maternal', subtipo: 'Enfermedad grave hijo menor de 1 año', value: 558617 },
  { tipo: 'Laboral', subtipo: 'Accidente del trabajo', value: 84189 },
  { tipo: 'Laboral', subtipo: 'Enfermedad profesional', value: 12445 },
];

export {
  licenciasRegion, licenciasSexo, licenciasTipo, licenciasTipoDesglose,
};
