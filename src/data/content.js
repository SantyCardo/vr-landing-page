// Contenido de la landing (versión 1, anteproyecto). Se actualizará con la información del prototipo.

export const nav = [
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#problema', label: 'Problema' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#alcance', label: 'Alcance' },
  { href: '#cronograma', label: 'Cronograma' },
  { href: '#tecnologia', label: 'Tecnología' },
  { href: '#equipo', label: 'Equipo' },
];

export const hero = {
  eyebrow: 'Anteproyecto de grado · UNAB',
  lead: 'Prototipo educativo inmersivo para el fortalecimiento de la técnica de aplicación de insulina en pacientes adultos con diabetes tipo II.',
  stats: [
    { value: 'USD 8', label: 'Costo del visor Google Cardboard' },
    { value: '100%', label: 'Funciona sin conexión' },
    { value: '6', label: 'Mecánicas del prototipo' },
    { value: '18', label: 'Semanas de trabajo' },
  ],
};

export const about = {
  title: ['Acerca del', 'proyecto.'],
  paragraphs: [
    'El proyecto propone un prototipo funcional de herramienta educativa inmersiva e interactiva mediante Realidad Virtual y Google Cardboard para enseñar la técnica de insulinización y el almacenamiento correcto de insulina a pacientes adultos con diabetes tipo 2 en Bucaramanga.',
    'Este prototipo ocupa la intersección de tres dimensiones que ninguna solución existente cubre simultáneamente: educación en insulinización, experiencia inmersiva y accesibilidad local sin internet.',
  ],
};

export const mechanics = [
  { title: 'Core Loop', kicker: 'Mecánica nuclear', img: '/img/m1_paso1.jpg',
    body: 'Observar la técnica, ensamblar la aguja, inyectar, desechar la aguja y almacenar la insulina respetando la cadena de frío.' },
  { title: 'Mecánica Gaze', kicker: 'Input', img: '/img/teleport_mantener.jpg',
    body: 'Selección por mirada con temporizador visual circular, sin controles externos.' },
  { title: 'Flujo educativo', kicker: 'Pedagogía', img: '/img/m1_paso1_contexto.jpg',
    body: 'Lecciones modulares de 15 a 20 minutos basadas en microaprendizaje.' },
  { title: 'Arquitectura técnica', kicker: 'Plataforma', img: '/img/cocina_general.jpg',
    body: 'Unity 2022.3 LTS, APK Android nativo, interacción 3DOF y ejecución 100 % offline.' },
  { title: 'Feedback clínico', kicker: 'Validación', img: '/img/examen_pregunta.png',
    body: 'Panel de médicos expertos con SUS para usabilidad, Likert para la experiencia e IVC para el contenido.' },
  { title: 'Accesibilidad', kicker: 'Inclusión', img: '/img/botonera_situaciones.jpg',
    body: 'Texto sobredimensionado, contraste WCAG AA, voz opcional y sin dependencia de internet.' },
];

export const problem = {
  title: ['El problema.', 'Errores que comprometen la salud.'],
  lead: 'La formación insuficiente en técnica de insulinización genera errores clínicos que comprometen la salud del paciente y su calidad de vida.',
  errors: [
    { level: 'Crítico', title: 'Vía incorrecta', icon: 'syringe',
      body: 'La administración IV accidental causa hipoglucemia severa. La vía IM genera variabilidad glucémica impredecible.' },
    { level: 'Alto', title: 'No rotar sitios', icon: 'rotate',
      body: '98.3 % de quienes reutilizan agujas presentan lipohipertrofia, reduciendo la absorción de insulina hasta en un 25 %.' },
    { level: 'Alto', title: 'Almacenamiento incorrecto', icon: 'fridge',
      body: 'Congelar, guardar destapada o usar insulina vencida desnaturaliza la molécula y elimina su eficacia terapéutica.' },
    { level: 'Medio', title: 'Ansiedad del paciente', icon: 'heart',
      body: '36 % de pacientes con diabetes reportan ansiedad; 63 % teme el desarrollo de complicaciones. El miedo reduce la adherencia.' },
  ],
  quote: 'Las estrategias convencionales no garantizan comprensión adecuada ni reducción del miedo al procedimiento.',
};

export const justification = {
  title: ['Innovación tecnológica', 'al servicio de la salud pública.'],
  lead: 'Transformar la educación en insulinización a través de la inmersión, el acceso y la evidencia clínica.',
  from: 'Mala educación en insulinización',
  to: 'Mejor cumplimiento del tratamiento',
  goals: [
    { title: 'Desarrollo de software educativo', body: 'Software para mejorar el bienestar.' },
    { title: 'Implementación de técnicas de cuidado', body: 'Enseñar cuidado, almacenamiento y aplicación.' },
    { title: 'Acceso constante al software', body: 'Priorizar el acceso para poblaciones de riesgo.' },
  ],
  pillars: [
    { title: 'Brecha clínica', body: 'En Colombia, ~8.4 % de la población adulta vive con diabetes (FID, 2024). Errores como la reutilización de agujas o la falta de rotación provocan lipohipertrofia y afectan el control glucémico.' },
    { title: 'Convergencia tecnológica', body: 'Software educativo inmersivo que fortalece la formación, mitiga la desinformación y prioriza el acceso para poblaciones de riesgo.' },
    { title: 'Aplicación en sistemas', body: 'Diseño de software, interacción humano-computador y prototipado inmersivo con enfoque social para educación en salud.' },
  ],
};

export const question = '¿Cómo se puede desarrollar una herramienta educativa inmersiva e interactiva que ayude a fortalecer la correcta técnica de insulinización y el adecuado almacenamiento de la insulina en pacientes con diabetes?';

export const objectives = {
  general: 'Desarrollar un prototipo de herramienta educativa inmersiva e interactiva, basada en requerimientos clínicos, procedimientos y almacenamiento de la insulinización, para el fortalecimiento de la técnica de aplicación en pacientes adultos con diabetes tipo II.',
  specific: [
    { title: 'Identificar requerimientos', body: 'Identificar los requerimientos clínicos, educativos, funcionales y no funcionales del procedimiento de insulinización, mediante revisión documental y consulta a profesionales de salud.' },
    { title: 'Diseñar el prototipo', body: 'Diseñar el prototipo educativo integrando componentes interactivos de las etapas del procedimiento, orientado al entrenamiento práctico y seguro del usuario.' },
    { title: 'Validar con expertos', body: 'Validar el prototipo con expertos del área, como médicos de la fundación clínica, para verificar que el procedimiento esté correctamente explicado.' },
  ],
};

export const scope = {
  title: ['Alcance y delimitación', 'del prototipo.'],
  lead: 'Siete etapas modulares organizadas en tres fases: lo que entra al MVP, lo que se posterga y los hitos que validan el avance.',
  stages: [
    { phase: 'Preparación', title: 'Preparación del dispositivo', body: 'Configurar visor VR y dispositivo móvil. Calibración inicial.' },
    { phase: 'Preparación', title: 'Selección de zona', body: 'Elegir y rotar sitios anatómicos de inyección.' },
    { phase: 'Práctica', title: 'Técnica de inyección', body: 'Aprender y practicar la técnica correcta paso a paso.' },
    { phase: 'Práctica', title: 'Almacenamiento de insulina', body: 'Condiciones adecuadas de cadena de frío y conservación.' },
    { phase: 'Práctica', title: 'Desecho de elementos', body: 'Manejo seguro de agujas, lancetas y residuos cortopunzantes.' },
    { phase: 'Validación', title: 'Evaluación', body: 'Cuestionarios SUS/Likert para medir comprensión.' },
    { phase: 'Validación', title: 'Validación clínica', body: 'Personal de salud revisa la herramienta con IVC.' },
  ],
  includes: [
    'App Android con Google Cardboard', 'Navegación por mirada con temporizador', 'Animaciones 3D, narración y subtítulos',
    'Menú, historial y resumen de sesiones', 'Evaluación por módulo (SUS/Likert)', 'Almacenamiento 100 % local',
    'Validación por profesionales de salud (IVC)',
  ],
  excludes: [
    'Interacción física o simulación háptica', 'Integración con historia clínica', 'Pruebas directas con pacientes',
    'Sincronización entre dispositivos', 'Modelos 3D fotorrealistas',
  ],
};

export const timeline = [
  { label: 'Fase 1', title: 'Requerimientos', weeks: 'Semanas 1–5',
    desc: 'Levantamiento de requerimientos clínicos, educativos, funcionales y no funcionales.',
    items: [
      ['Revisión de literatura clínica y pedagógica sobre insulinización y sus errores.', 'S1–2'],
      ['Entrevistas con profesionales de la Fundación Clínica.', 'S2–3'],
      ['Construcción de la propuesta final a desarrollar.', 'S3–4'],
      ['Definición de controles del prototipo por mirada.', 'S4–5'],
    ],
    deliverable: 'Documento formal de requerimientos.' },
  { label: 'Fase 2', title: 'Desarrollo', weeks: 'Semanas 4–15',
    desc: 'Construcción técnica del prototipo en Unity con Google Cardboard.',
    items: [
      ['Construcción del Game Design Document (GDD).', 'S4–6'],
      ['Modelado 3D de escenarios y elementos clínicos.', 'S6–9'],
      ['Sistema de mirada y temporizador visual.', 'S7–10'],
      ['Animaciones, audio guiado y subtítulos.', 'S10–13'],
      ['Sistema de evaluación por módulos.', 'S13–15'],
    ],
    deliverable: 'APK Android funcional con escenas inmersivas y evaluación integrada.' },
  { label: 'Fase 3', title: 'Validación', weeks: 'Semanas 15–18',
    desc: 'Validación clínica y técnica con expertos de la FOSUNAB.',
    items: [
      ['Pruebas técnicas y QA en el dispositivo objetivo.', 'S15–16'],
      ['Validación clínica con SUS, Likert e IVC (≥ 0.80).', 'S16–17'],
      ['Iteración final y entrega del prototipo validado.', 'S17–18'],
    ],
    deliverable: 'Informe de validación clínica y prototipo final aprobado.' },
];

export const methodology = [
  { title: 'Planeación clínica', body: 'Requerimientos médicos, educativos y de UX junto a profesionales de salud.', deliverable: 'Investigación clínica' },
  { title: 'Diseño GDD + UX', body: 'Game Design Document, navegación por mirada, arquitectura de interacción y flujo inmersivo.', deliverable: 'Game Design Document' },
  { title: 'Desarrollo en Unity', body: 'Implementación con Unity, Google Cardboard, audio guiado, escenas 3D y sistema de mirada.', deliverable: 'Prototipo Unity' },
  { title: 'Validación y testing', body: 'Pruebas técnicas y evaluación clínica con Likert, SUS e IVC (≥ 0.80).', deliverable: 'Evaluación clínica' },
];

export const stack = [
  { name: 'Unity', role: 'Motor 3D', icon: 'cube', body: 'Escena VR, interacción y sistema de mirada. Pipeline URP para móviles.' },
  { name: 'Google Cardboard', role: 'Visor VR', icon: 'cardboard', body: 'Visor de bajo costo compatible con smartphones Android.' },
  { name: 'Android APK', role: 'Distribución', icon: 'phone', body: 'Build nativa que corre sin conexión, instalable sin tienda.' },
  { name: 'Interacción por mirada', role: 'Input', icon: 'eye', body: 'Selección con temporizador y retroalimentación radial, sin mandos.' },
  { name: 'Blender', role: 'Modelado 3D', icon: 'shape', body: 'Modelado del lapicero, escenarios y animaciones de la técnica.' },
  { name: 'C#', role: 'Lógica', icon: 'code', body: 'Lógica de los pasos clínicos y arquitectura modular.' },
];

export const legal = [
  { title: 'Protección de datos', tag: 'Privacidad', body: 'Datos almacenados localmente, sin transferencia a terceros.' },
  { title: 'Accesibilidad', tag: 'WCAG 2.1', body: 'Subtítulos y navegación simple para baja alfabetización digital.' },
  { title: 'Uso educativo', tag: 'Ámbito', body: 'Complemento de la práctica clínica; no reemplaza la orientación médica.' },
  { title: 'Calidad del software', tag: 'ISO 25010', body: 'Prioridad en usabilidad y experiencia de usuario.' },
  { title: 'Acceso tecnológico', tag: 'Bajo costo', body: 'Hardware económico para contextos con recursos limitados.' },
];

export const stateOfArt = {
  criteria: ['Educación inmersiva', 'Accesibilidad local', 'Bajo costo', 'Educación en insulinización'],
  rows: [
    { name: 'Virti', tag: 'VR · Health training', values: ['Sí', 'No', 'No', 'No'] },
    { name: 'SocialDiabetes', tag: 'Mobile · DM', values: ['No', 'Sí', 'Sí', 'No'] },
    { name: 'Insulclock', tag: 'Device + App', values: ['No', 'Sí', 'Sí', 'Parcial'] },
    { name: 'Prototipo propuesto', tag: 'Insulin-VR · UNAB', values: ['Sí', 'Sí', 'Sí', 'Sí'], highlight: true },
  ],
  note: 'Actualmente no existe una solución que combine educación en insulinización, realidad virtual inmersiva y accesibilidad mediante hardware de bajo costo en una misma plataforma.',
};

export const references = [
  { title: 'Lands End', studio: 'ustwo · Gaze VR', body: 'Interacción por mirada y exploración inmersiva sin controles.' },
  { title: 'Detroit: Become Human', studio: 'Quantic Dream', body: 'Navegación visual y diseño futurista.' },
  { title: 'Job Simulator', studio: 'Owlchemy · VR', body: 'Aprendizaje interactivo accesible.' },
  { title: 'Keep Talking and Nobody Explodes', studio: 'Steel Crate', body: 'Instrucciones secuenciales y claridad procedural.' },
];

export const results = [
  { title: 'Mejor comprensión del procedimiento', metric: '+45%', label: 'Retención esperada',
    body: 'Aprendizaje paso a paso mediante simulación inmersiva, sin riesgo real.' },
  { title: 'Reducción de errores técnicos', metric: '−38%', label: 'Errores típicos',
    body: 'Menos lipohipertrofia, mala rotación, reutilización de agujas y vía incorrecta.' },
  { title: 'Mayor adherencia terapéutica', metric: '+52%', label: 'Adherencia a 6 meses',
    body: 'Más confianza y autonomía al iniciar la insulinoterapia.' },
  { title: 'Accesibilidad educativa', metric: 'USD 8', label: 'Costo del hardware',
    body: 'Formación inmersiva con smartphones Android y Google Cardboard.' },
];

export const faq = [
  { q: '¿El prototipo reemplaza la orientación médica profesional?',
    a: 'No. El prototipo es exclusivamente una herramienta educativa de apoyo. No sustituye la consulta, el diagnóstico ni el tratamiento prescrito por un profesional de salud. Complementa la formación que el paciente recibe del personal médico, reforzando la técnica entre consultas.' },
  { q: '¿Por qué utilizar realidad virtual para enseñar técnicas de insulinización?',
    a: 'La VR permite practicar el procedimiento en un entorno seguro, sin riesgo clínico ni desperdicio de material. El paciente puede equivocarse, repetir y consolidar la técnica antes de aplicarla sobre su propio cuerpo.' },
  { q: '¿Qué ventajas ofrece el aprendizaje inmersivo frente a los métodos tradicionales?',
    a: 'Aprendizaje activo en lugar de pasivo, repetición ilimitada sin presión clínica y retroalimentación inmediata ante errores típicos como la rotación incorrecta, la reutilización de agujas o la vía equivocada.' },
  { q: '¿Cómo se protege la privacidad y los datos del usuario?',
    a: 'Toda la información se almacena localmente en el dispositivo. La aplicación funciona sin conexión: no requiere cuenta ni envía datos a servidores externos, en línea con la Ley 1581 de 2012 sobre datos personales en Colombia.' },
  { q: '¿Qué elementos diferencian al prototipo frente al estado del arte?',
    a: 'Combina tres ejes que ninguna solución cubre a la vez: educación específica en insulinización, experiencia inmersiva y hardware de bajo costo. Virti aporta inmersión con equipos costosos; SocialDiabetes e Insulclock son accesibles pero no enseñan la técnica de aplicación.' },
  { q: '¿Qué limitaciones presentan las plataformas existentes?',
    a: 'Cada plataforma cubre solo una parte del problema: Virti requiere hardware costoso, Insulclock no tiene educación inmersiva y SocialDiabetes no enseña la técnica.' },
];

export const team = {
  members: [
    { init: 'BL', name: 'Brayan Steven León Martínez', role: 'Co-investigador', sub: 'Ingeniería de Sistemas, UNAB' },
    { init: 'SC', name: 'Santiago Cardona Prada', role: 'Co-investigador', sub: 'Ingeniería de Sistemas, UNAB' },
    { init: 'LP', name: 'Leonardo Stiven Pardo Niño', role: 'Director', sub: 'Proyecto de Grado' },
  ],
  institutions: [
    { label: 'Universidad', name: 'UNAB', sub: 'Universidad Autónoma de Bucaramanga' },
    { label: 'Asesoría temática', name: 'FOSUNAB', sub: 'Fundación Clínica FOSUNAB' },
    { label: 'Validación clínica', name: 'Fundación Clínica UNAB', sub: 'Bucaramanga, Colombia' },
  ],
};
