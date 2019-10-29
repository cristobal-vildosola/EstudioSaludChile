const top20GES = [
  { enfermedad: 'Cáncer cervicouterino', casos: 2488837, Qx: true },
  { enfermedad: 'Urgencia odontológica ambulatoria', casos: 1194378, Qx: true },
  { enfermedad: 'Infección respiratoria aguda', casos: 1015415, Qx: false },
  { enfermedad: 'Vicios de refracción', casos: 721367, Qx: true },
  { enfermedad: 'Hipertensión', casos: 600374, Qx: false },
  { enfermedad: 'Salud oral integral de la embarazada', casos: 563907, Qx: false },
  { enfermedad: 'Salud oral', casos: 469135, Qx: false },
  { enfermedad: 'Diabetes mellitus tipo 2', casos: 427928, Qx: false },
  { enfermedad: 'Displasia luxante de caderas', casos: 407770, Qx: false },
  { enfermedad: 'Infarto agudo del miocardio', casos: 369041, Qx: true },
  { enfermedad: 'Hipotiroidismo en personas de 15 años y más', casos: 344500, Qx: false },
  { enfermedad: 'Artrosis de cadera y/o rodilla leve o moderada', casos: 257082, Qx: true },
  { enfermedad: 'Cataratas', casos: 250414, Qx: true },
  { enfermedad: 'Vih/Sida', casos: 240188, Qx: false },
  { enfermedad: 'Analgesia del parto', casos: 233770, Qx: true },
  { enfermedad: 'Depresión', casos: 223467, Qx: false },
  { enfermedad: 'Órtesis', casos: 218543, Qx: false },
  { enfermedad: 'Retinopatía diabética', casos: 110384, Qx: true },
  { enfermedad: 'Accidente cerebrovascular', casos: 110325, Qx: true },
  { enfermedad: 'Colecistectomía preventiva', casos: 89170, Qx: true },
];

const top10GESQx = top20GES.filter(e => e.Qx);
const top10GESnoQx = top20GES.filter(e => !e.Qx);

const top10noGES = [
  { enfermedad: 'Oftalmología', casos: 1449906, Qx: true },
  { enfermedad: 'Otorrinolaringología', casos: 558132, Qx: true },
  { enfermedad: 'Ginecología', casos: 468460, Qx: true },
  { enfermedad: 'Traumatología y ortopedia', casos: 466808, Qx: true },
  { enfermedad: 'Cirugía general', casos: 457067, Qx: true },
  { enfermedad: 'Dermatología', casos: 349404, Qx: true },
  { enfermedad: 'Medicina interna', casos: 340295, Qx: true },
  { enfermedad: 'Rehabilitación oral', casos: 326230, Qx: true },
  { enfermedad: 'Endodoncia', casos: 316324, Qx: true },
  { enfermedad: 'Neurología adulto', casos: 287793, Qx: true },
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
  { enfermedad: 'Cirugía general', horas: 10, especialidad: 'cirujano' },
  { enfermedad: 'Diabetes mellitus tipo 2', horas: 10, especialidad: 'diabetología' },
  { enfermedad: 'Displasia luxante de caderas', horas: 10, especialidad: '' },
  { enfermedad: 'Infarto agudo del miocardio', horas: 10, especialidad: '' },
  { enfermedad: 'Dermatología', horas: 10, especialidad: 'dermatología' },
  { enfermedad: 'Medicina interna', horas: 10, especialidad: 'medicina interna' },
  { enfermedad: 'Rehabilitación oral', horas: 10, especialidad: 'ortodoncia y ortopedia dento maxilofacial' },
  { enfermedad: 'Endodoncia', horas: 10, especialidad: 'ortodoncia y ortopedia dento maxilofacial' },
  { enfermedad: 'Neurología adulto', horas: 10, especialidad: 'neurología adultos' },
];

const horasDisponibles = [
  { especialidad: 'obstetricia y ginecología', horas: 18216986 },
  { especialidad: 'oftalmología', horas: 4054578 },
  { especialidad: 'ortodoncia y ortopedia dento maxilofacial', horas: 2146130 },
  { especialidad: 'otorrinolaringología', horas: 3098156 },
  { especialidad: 'traumatología y ortopedia', horas: 12975332 },
  { especialidad: 'cirujano', horas: 21672820 },
  { especialidad: 'diabetología', horas: 853640 },
  { especialidad: 'medicina interna', horas: 31695672 },
  { especialidad: 'neurología adultos', horas: 6343840 },
];


const casos = {};
top20GES.forEach((e) => {
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
  top20GES, top10GESQx, top10GESnoQx, top10noGES, horasPedidasDisponibles,
};
