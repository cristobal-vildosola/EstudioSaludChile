const top10GES = [
  { enfermedad: 'Cáncer cervicouterino', casos: 2488837 },
  { enfermedad: 'Urgencia odontológica ambulatoria', casos: 1194378 },
  { enfermedad: 'Infección respiratoria aguda', casos: 1015415 },
  { enfermedad: 'Vicios de refracción', casos: 721367 },
  { enfermedad: 'Hipertensión', casos: 600374 },
  { enfermedad: 'Salud oral integral de la embarazada', casos: 563907 },
  { enfermedad: 'Salud oral', casos: 469135 },
  { enfermedad: 'Diabetes mellitus tipo 2', casos: 427928 },
  { enfermedad: 'Displasia luxante de caderas', casos: 407770 },
  { enfermedad: 'Infarto agudo del miocardio', casos: 369041 },
];

const top10noGES = [
  { enfermedad: 'Oftalmología', casos: 1449906 },
  { enfermedad: 'Otorrinolaringología', casos: 558132 },
  { enfermedad: 'Ginecología', casos: 468460 },
  { enfermedad: 'Traumatología y ortopedia', casos: 466808 },
  { enfermedad: 'Cirugía general', casos: 457067 },
  { enfermedad: 'Dermatología', casos: 349404 },
  { enfermedad: 'Medicina interna', casos: 340295 },
  { enfermedad: 'Rehabilitación oral', casos: 326230 },
  { enfermedad: 'Endodoncia', casos: 316324 },
  { enfermedad: 'Neurología adulto', casos: 287793 },
];

const horasCaso = [
  { enfermedad: 'Cáncer cervicouterino', horas: 10, especialidad: 'obstetricia y ginecología' },
  { enfermedad: 'Oftalmología', horas: 10, especialidad: 'oftalmología' },
  { enfermedad: 'Urgencia odontológica ambulatoria', horas: 10, especialidad: 'ortodoncia y ortopedia dento maxilofacial' },
  { enfermedad: 'Infección respiratoria aguda', horas: 10, especialidad: '' },
  { enfermedad: 'Vicios de refracción', horas: 10, especialidad: 'oftalmología' },
  { enfermedad: 'Hipertensión', horas: 10, especialidad: '' },
  { enfermedad: 'Salud oral integral de la embarazada', horas: 10, especialidad: 'ortodoncia y ortopedia dento maxilofacial' },
  { enfermedad: 'Otorrinolaringología', horas: 10, especialidad: 'otorrinolaringología' },
  { enfermedad: 'Salud oral', horas: 10, especialidad: 'ortodoncia y ortopedia dento maxilofacial' },
  { enfermedad: 'Ginecología', horas: 10, especialidad: 'obstetricia y ginecología' },
  { enfermedad: 'Traumatología y ortopedia', horas: 10, especialidad: 'traumatología y ortopedia' },
  { enfermedad: 'Cirugía general', horas: 10, especialidad: 'CIRUJANO' },
  { enfermedad: 'Diabetes mellitus tipo 2', horas: 10, especialidad: 'diabetología' },
  { enfermedad: 'Displasia luxante de caderas', horas: 10, especialidad: '' },
  { enfermedad: 'Infarto agudo del miocardio', horas: 10, especialidad: '' },
  { enfermedad: 'Dermatología', horas: 10, especialidad: 'dermatología' },
  { enfermedad: 'Medicina interna', horas: 10, especialidad: 'MEDICINA INTERNA' },
  { enfermedad: 'Rehabilitación oral', horas: 10, especialidad: 'ortodoncia y ortopedia dento maxilofacial' },
  { enfermedad: 'Endodoncia', horas: 10, especialidad: 'ortodoncia y ortopedia dento maxilofacial' },
  { enfermedad: 'Neurología adulto', horas: 10, especialidad: 'neurología adultos' },
];

const horasDisponibles = [
  { especialidad: 'obstetricia y ginecología', horas: 18216986, pedidas: 0 },
  { especialidad: 'oftalmología', horas: 4054578, pedidas: 0 },
  { especialidad: 'ortodoncia y ortopedia dento maxilofacial', horas: 2146130, pedidas: 0 },
  { especialidad: 'otorrinolaringología', horas: 3098156, pedidas: 0 },
  { especialidad: 'traumatología y ortopedia', horas: 12975332, pedidas: 0 },
  { especialidad: 'CIRUJANO', horas: 0, pedidas: 0 },
  { especialidad: 'diabetología', horas: 853640, pedidas: 0 },
  { especialidad: 'MEDICINA INTERNA', horas: 31695672, pedidas: 0 },
  { especialidad: 'neurología adultos', horas: 6343840, pedidas: 0 },
];


const casos = {};
top10GES.forEach((e) => {
  casos[e.enfermedad] = e.casos;
});
top10noGES.forEach((e) => {
  casos[e.enfermedad] = e.casos;
});

const horasEspecialidad = {};
horasCaso.forEach((e) => {
  const prev = horasEspecialidad[e.especialidad] || 0;
  horasEspecialidad[e.especialidad] = prev + e.horas * casos[e.enfermedad];
});

const horasPedidasDisponibles = horasDisponibles.map(
  e => ({
    especialidad: e.especialidad,
    disponibles: e.horas,
    pedidas: horasEspecialidad[e.especialidad],
  }),
);

export {
  top10GES, top10noGES, horasPedidasDisponibles,
};
