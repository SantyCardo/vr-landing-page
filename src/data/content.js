// Contenido de la landing. Versión 2: presentación del prototipo funcional (octubre de 2026).

// Fotos del problema: Unsplash (licencia gratuita), convertidas a WebP.
import imgVia from '../assets/problema/via.webp';
import imgRotacion from '../assets/problema/rotacion.webp';
import imgAlmacenamiento from '../assets/problema/almacenamiento.webp';
import imgAnsiedad from '../assets/problema/ansiedad.webp';
// Fondo de la pregunta: «Lost In Reality», Matthew Kwong (Unsplash, licencia gratuita).
import imgPregunta from '../assets/pregunta/cardboard.webp';
import imgPreguntaMovil from '../assets/pregunta/cardboard-mobile.webp';
// Objetivos específicos: Vitaly Gariev, Kelly Sikkema y Nappy (Unsplash, licencia gratuita).
import imgObjRequerimientos from '../assets/objetivos/requerimientos.webp';
import imgObjDiseno from '../assets/objetivos/diseno.webp';
import imgObjValidacion from '../assets/objetivos/validacion.webp';
// Fases de la metodología: airfocus, Towfiqu barbhuiya, Arnold Francisca, Eden Constantino y ThisisEngineering (Unsplash, licencia gratuita).
import imgFaseInicio from '../assets/metodologia/inicio.webp';
import imgFasePlanificacion from '../assets/metodologia/planificacion.webp';
import imgFaseEjecucion from '../assets/metodologia/ejecucion.webp';
import imgFaseMonitoreo from '../assets/metodologia/monitoreo.webp';
import imgFaseCierre from '../assets/metodologia/cierre.webp';
// Fotos del equipo: aportadas por el equipo del proyecto.
import imgBrayan from '../assets/equipo/brayan.webp';
import imgSantiago from '../assets/equipo/santiago.webp';
import imgLeonardo from '../assets/equipo/leonardo.webp';
import imgFundacion from '../assets/equipo/fundacion.webp';
import imgUnab from '../assets/equipo/unab.webp';

export const nav = [
  { href: '#problema', label: 'Problema' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#arquitectura', label: 'Arquitectura' },
  { href: '#prototipo', label: 'Prototipo' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#equipo', label: 'Equipo' },
];

export const hero = {
  cta: 'Ver el demo',
  eyebrow: 'Proyecto de grado · UNAB · Prototipo funcional',
  lead: 'Prototipo educativo inmersivo para aprender la técnica de insulinización con el teléfono del paciente y un visor de cartón. Cinco módulos guiados en una vivienda virtual, controlados solo con la mirada.',
  stats: [
    { value: '5', label: 'Módulos guiados, de la nevera al desecho de la aguja' },
    { value: '11', label: 'Dispositivos Android probados' },
    { value: '74,2', label: 'De usabilidad (SUS, referencia de 70)' },
    { value: '1,00', label: 'De validez de contenido según dos médicos (I-CVI)' },
  ],
};

export const about = {
  title: ['Un recorrido guiado por la técnica,', 'dentro de una vivienda virtual.'],
  lead: 'El paciente se mueve por una casa con cocina, sala, vestíbulo y sala de estudio. Todo se controla con la mirada: no hacen falta mandos.',
  note: 'Lo que se enseña, en qué orden, con qué audio y con qué preguntas vive en archivos de datos y no en el código, así que el equipo de salud puede ajustar textos y orden sin programar.',
};

// Demo en video del prototipo. Mientras no haya video se muestra el marcador.
export const demo = {
  title: 'Demo del prototipo',
  youtubeId: 'PWgCH3McjRU',
};

export const features = [
  { title: 'Vivienda virtual', kicker: 'Entorno', img: '/img/capturas/cocina_general.webp',
    body: 'Cuatro espacios. La cocina concentra los cinco módulos; nevera, gabinetes y estufa dan el contexto real.' },
  { title: 'Sala de estar', kicker: 'Entorno', img: '/img/sala_estar.webp',
    body: 'Sillones, una alfombra, estanterías y una pantalla grande en la pared.' },
  { title: 'Sala de estudio', kicker: 'Entorno', img: '/img/sala_estudio.webp',
    body: 'Una mesa con sillas, cuadros y estanterías para repasar lo aprendido.' },
  { title: 'Intro y tutorial', kicker: 'Inicio', img: '/img/capturas/tutorial_estacion_inicio.webp',
    body: 'Una introducción de unos 13 segundos y un tutorial de 10 pasos en 4 estaciones enseñan a usar la mirada y el teletransporte.' },
  { title: 'Control por mirada', kicker: 'Interacción', img: '/img/capturas/tutorial_t4_lecciones.webp',
    body: 'Una retícula y una barra que se llena al mirar. Los botones y las opciones piden 1,5 s; «Salir» y los teletransportes, 2,5 s.' },
  { title: 'Teletransporte', kicker: 'Movimiento', img: '/img/capturas/teleport_cocina.webp',
    body: '17 puntos (13 en la Cocina y 4 en el tutorial) con color por cuarto y viñeta de confort, para moverse sin mareo.' },
  { title: 'Barra de partes', kicker: 'Contenido', img: '/img/capturas/m1_c11_nevera_barra.webp',
    body: 'Cada módulo tiene 5 partes narradas. Una barra muestra en cuál se va y permite repetir o finalizar.' },
  { title: 'Examen general', kicker: 'Evaluación', img: '/img/capturas/examen_respuesta_correcta.webp',
    body: 'Un solo examen de 10 preguntas, que se aprueba con 60 % o más. La respuesta se marca con color y con texto.' },
  { title: 'Árbol de avances', kicker: 'Progreso', img: '/img/capturas/modal_mi_progreso.webp',
    body: 'Cada módulo y paso aparece como hecho, disponible o bloqueado, con el examen general al final. El progreso se guarda en el teléfono.' },
];

export const modules = {
  map: { img: '/img/capturas/plano_cocina_sala_cenital.webp', alt: 'Vista superior de la cocina y la sala de la vivienda virtual' },
  lead: 'Cada módulo tiene 5 partes, con una barra que muestra en cuál se va. Hay un único examen general de 10 preguntas.',
  items: [
    { id: 'M1', title: 'Extracción e inspección', parts: 5, body: 'Sacar la insulina de la nevera y explorar cinco cajas de insulina.' },
    { id: 'M2', title: 'Preparación e higiene', parts: 5, body: 'Preparar el lapicero y las manos antes de la aplicación.' },
    { id: 'M3', title: 'Mapeo, rotación y asepsia', parts: 5, body: 'Zonas de inyección y rotación con el método de las manecillas del reloj.' },
    { id: 'M4', title: 'Técnica de inyección', parts: 5, body: 'Aplicación paso a paso con el lapicero SoloStar.' },
    { id: 'M5', title: 'Desecho seguro y conservación', parts: 5, body: 'Desechar la aguja y conservar la insulina después de usarla.' },
  ],
  extra: 'Tutorial de 10 pasos para aprender a usar la mirada, la botonera y el teletransporte.',
};

// Cifras tomadas del documento del proyecto (planteamiento del problema), con su fuente.
export const stats = [
  { value: '830M', label: 'Personas con diabetes en el mundo en 2022',
    source: 'OMS, 2024', url: 'https://www.who.int/es/news-room/fact-sheets/detail/diabetes' },
  { value: '8,4 %', label: 'De la población adulta de Colombia vive con diabetes',
    source: 'FID, 2024', url: 'https://idf.org/es/our-network/regions-and-members/south-and-central-america/members/colombia/' },
  { value: '2.186.861', label: 'Casos registrados en Colombia al 31 de agosto de 2024',
    source: 'Cuenta de Alto Costo, 2024', url: 'https://cuentadealtocosto.org/noticias/dia-mundial-de-la-diabetes-2024/' },
  { value: '40,3 %', label: 'De los pacientes tuvo medición de hemoglobina glucosilada en 2023',
    source: 'Cuenta de Alto Costo, 2024', url: 'https://cuentadealtocosto.org/noticias/dia-mundial-de-la-diabetes-2024/' },
];

export const problem = {
  title: ['El problema.', 'Errores que comprometen la salud.'],
  lead: 'La formación insuficiente en técnica de insulinización genera errores clínicos que comprometen la salud del paciente y su calidad de vida.',
  errors: [
    { source: 'López Sauras et al., 2025', title: 'Reutilización de agujas', img: imgVia, alt: 'Hombre aplicándose insulina con lapicero en el muslo',
      body: 'La inyección repetida con una técnica incorrecta produce lipodistrofias, relacionadas con la reutilización de agujas.' },
    { source: 'López Sauras et al., 2025 · Klonoff et al., 2025', title: 'Sitios sin rotar', img: imgRotacion, alt: 'Persona inyectándose insulina en el abdomen',
      body: 'No rotar los sitios de inyección produce lipohipertrofia y afecta el control metabólico.' },
    { source: 'Diagnóstico con médicos internistas, 2026', title: 'Almacenamiento incorrecto', img: imgAlmacenamiento, alt: 'Nevera abierta en una cocina a oscuras',
      body: 'Los médicos reportaron confusión entre refrigerar y congelar la insulina; un mal almacenamiento desperdicia el medicamento.' },
    { source: 'Diagnóstico con médicos internistas, 2026', title: 'Formación insuficiente', img: imgAnsiedad, alt: 'Mujer preocupada con la cabeza entre las manos',
      body: 'La educación llega a una minoría de los pacientes, en una sola sesión de unos veinte minutos y sin verificar la comprensión. Aparecen el miedo y la inseguridad.' },
  ],
  quote: 'Las estrategias convencionales no garantizan comprensión adecuada ni reducción del miedo al procedimiento.',
};

export const justification = {
  title: ['Innovación tecnológica', 'al servicio de la salud pública.'],
  lead: 'Transformar la educación en insulinización a través de la inmersión, el acceso y la evidencia clínica.',
  part1: 'El problema en cifras',
  steps: [
    'La diabetes mellitus es un problema de salud mundial. Enseñar bien la técnica de insulinización es una forma concreta de acompañar a quienes la viven.',
    'En Colombia, una parte importante de la población adulta vive con diabetes mellitus. Una educación clara en la técnica importa en el día a día.',
    'Cada caso registrado es una persona que puede necesitar aprender a aplicar la insulina con seguridad, y no solo en una única sesión.',
    'Menos de la mitad de los pacientes tuvo medición de hemoglobina glucosilada, el examen que orienta el control del tratamiento. La educación es un apoyo para ese seguimiento.',
  ],
  goals: [
    { title: 'Desarrollo de software educativo', body: 'Software para mejorar el bienestar.' },
    { title: 'Implementación de técnicas de cuidado', body: 'Enseñar cuidado, almacenamiento y aplicación.' },
    { title: 'Acceso constante al software', body: 'Priorizar el acceso para poblaciones de riesgo.' },
  ],
  pillars: [
    { tag: 'Problema', icon: 'search', title: 'Brecha clínica', body: 'En Colombia, cerca del 8,4 % de la población adulta vive con diabetes mellitus (FID, 2024). Errores como la reutilización de agujas o la falta de rotación provocan lipohipertrofia y afectan el control glucémico.' },
    { tag: 'Innovación', icon: 'cube', title: 'Convergencia tecnológica', body: 'Software educativo inmersivo que fortalece la formación, mitiga la desinformación y prioriza el acceso para poblaciones de riesgo.' },
    { tag: 'Formación', icon: 'code', title: 'Aplicación en sistemas', body: 'Diseño de software, interacción humano-computador y prototipado inmersivo con enfoque social para educación en salud.' },
  ],
};

export const solution = {
  eyebrow: 'La solución',
  title: ['Un simulador de realidad virtual', 'para practicar la técnica.'],
  steps: [
    { tag: 'El problema', title: 'Se enseña poco y sin verificar', body: 'La educación llega a una minoría de los pacientes, en una sola sesión de unos veinte minutos y sin verificar la comprensión.' },
    { tag: 'La solución', title: 'Un simulador en el celular', body: 'Insulin·VR convierte un teléfono Android y un visor tipo Google Cardboard en un simulador. Se practica en una casa virtual.' },
    { tag: 'El entrenamiento', title: 'Guiado paso a paso', body: 'Cinco módulos de cinco partes cada uno, con narración, subtítulos y una barra que muestra en cuál se va. El paciente se mueve con la mirada y el teletransporte, responde un examen general de 10 preguntas y ve su avance en un árbol de progreso.' },
    { tag: 'La verificación', title: 'Probado por el equipo y por médicos', body: 'Pruebas internas de caja blanca del equipo y una valoración básica con dos médicos de la fundación clínica. Madurez tecnológica: TRL 3 actual, TRL 4 proyectado.' },
  ],
  screens: [
    { img: '/img/capturas/cocina_general.webp', label: 'Casa virtual' },
    { img: '/img/capturas/m1_c11_nevera_barra.webp', label: 'Barra de partes' },
    { img: '/img/capturas/examen_respuesta_correcta.webp', label: 'Examen general' },
    { img: '/img/capturas/modal_mi_progreso.webp', label: 'Árbol de progreso' },
  ],
  chips: [
    { value: '5', label: 'Módulos de enseñanza' },
    { value: '5', label: 'Partes por módulo, con barra de partes' },
    { value: '10', label: 'Preguntas en un examen general' },
    { value: '17', label: 'Puntos de teletransporte' },
  ],
  // Capturas que rotan en la pantalla del celular dentro del visor (diseño actual).
  phoneScreens: [
    '/img/capturas/cocina_general.webp',
    '/img/capturas/tutorial_estacion_inicio.webp',
    '/img/capturas/m1_c11_nevera_barra.webp',
    '/img/capturas/examen_respuesta_correcta.webp',
    '/img/capturas/modal_mi_progreso.webp',
  ],
};

export const question = {
  text: '¿Cómo se puede desarrollar una herramienta educativa inmersiva e interactiva que ayude a fortalecer la correcta técnica de insulinización y el adecuado almacenamiento de la insulina en pacientes con diabetes mellitus?',
  img: imgPregunta,
  imgMobile: imgPreguntaMovil,
};

export const objectives = {
  general: 'Desarrollar un prototipo de herramienta educativa inmersiva e interactiva, basada en requerimientos clínicos, procedimientos y almacenamiento de la insulinización, para el fortalecimiento de la técnica de aplicación en pacientes adultos con diabetes mellitus.',
  specific: [
    { title: 'Identificar requerimientos', img: imgObjRequerimientos, pos: '78% center', alt: 'Médica entrevistando a un paciente en el consultorio', body: 'Identificar los requerimientos clínicos, educativos, funcionales y no funcionales del procedimiento de insulinización, mediante revisión documental y consulta a profesionales de salud.' },
    { title: 'Diseñar el prototipo', img: imgObjDiseno, alt: 'Mano dibujando el boceto de una interfaz', body: 'Diseñar el prototipo educativo integrando componentes interactivos de las etapas del procedimiento, orientado al entrenamiento práctico y seguro del usuario.' },
    { title: 'Validar el prototipo', img: imgObjValidacion, alt: 'Dos profesionales de la salud revisando una tableta', body: 'Validar el prototipo mediante pruebas internas de caja blanca, orientadas a la verificación del funcionamiento y del rendimiento, y una valoración básica con dos médicos de la fundación clínica, centrada en su satisfacción y en las mejoras requeridas.' },
  ],
};

export const methodology = {
  lead: 'El proyecto se gestionó con las fases del PMBOK y el ciclo PHVA, y el prototipo se desarrolló por incrementos cortos y verificables.',
  phases: [
    { title: 'Inicio', img: imgFaseInicio, alt: 'Dos personas planeando un proyecto con notas adhesivas',
      body: 'Se definieron el problema, los objetivos, el alcance y los entregables.', deliverable: 'Anteproyecto aprobado' },
    { title: 'Planificación', img: imgFasePlanificacion, alt: 'Calendario con chinchetas rojas',
      body: 'Se armó el cronograma de 18 semanas, la estructura del trabajo y la matriz de riesgos.', deliverable: 'Cronograma y matriz de riesgos' },
    { title: 'Ejecución', img: imgFaseEjecucion, alt: 'Portátil con código en pantalla',
      body: 'Se desarrolló el prototipo por incrementos, cada uno completo y verificable.', deliverable: 'Prototipo funcional y documentación técnica' },
    { title: 'Monitoreo y control', img: imgFaseMonitoreo, alt: 'Notas adhesivas «por hacer, en curso, hecho»',
      body: 'Se siguió el avance con bitácoras y pruebas en cada incremento.', deliverable: 'Bitácoras y registro de defectos' },
    { title: 'Cierre', img: imgFaseCierre, alt: 'Profesional presentando frente a una pantalla',
      body: 'Se hicieron pruebas internas de caja blanca y una valoración básica con dos médicos, se aplicaron los ajustes y se entregó el documento final.', deliverable: 'APK verificado, documento final y sustentación' },
  ],
  phva: [
    { title: 'Planear', body: 'Diagnóstico, requerimientos clínicos y técnicos, estudio de alternativas y cronograma.' },
    { title: 'Hacer', body: 'Desarrollo del prototipo por incrementos e integración de los módulos.' },
    { title: 'Verificar', body: 'Pruebas técnicas en cada incremento, pruebas internas de caja blanca y valoración básica con dos médicos.' },
    { title: 'Actuar', body: 'Ajustes según la validación, documentación y cierre del proyecto.' },
  ],
};

export const stack = [
  { name: 'Unity 2022.3 LTS', role: 'Motor · Universal Render Pipeline', icon: 'cube', body: 'Escenas, animaciones y lógica del prototipo.' },
  { name: 'Google Cardboard XR', role: 'Realidad virtual · 3 DOF', icon: 'cardboard', body: 'Complemento oficial para visores de cartón.' },
  { name: 'Android', role: 'API 26 o superior', icon: 'phone', body: 'Se instala como APK.' },
  { name: 'Interacción por mirada', role: 'Retícula y barra de carga', icon: 'eye', body: 'Selección y teletransporte sin mandos.' },
  { name: 'C# y ScriptableObjects', role: 'Lógica y datos', icon: 'code', body: 'Arquitectura por capas con bus de eventos; contenido separado del código.' },
  { name: 'JSON local', role: 'Persistencia', icon: 'shield', body: 'Progreso en la carpeta privada de la app, con respaldo y sin datos personales.' },
];

// Resultados de la prueba de caja blanca (28 de octubre de 2026) y de la valoración de expertos (21 a 26 de octubre).
// Cada cifra aparece una sola vez, en el bloque que la explica. No agregar cifras que no estén en el informe.
export const results = {
  lead: 'Lo que mostraron las pruebas, contado como las preguntas que suele hacer el público.',

  // 0) Franja de impacto.
  impact: {
    items: [
      { value: '11', label: 'dispositivos Android probados' },
      { value: '8 de 11', label: 'superan 30 FPS' },
      { value: '95 de 109', label: 'casos aprobados' },
      { value: '74,2', label: 'de usabilidad (SUS)' },
    ],
    context: 'Prueba del 28 de octubre de 2026 con la versión 0.6.3 del APK, y valoración de expertos del 21 al 26 de octubre.',
  },

  // 1) Rendimiento por dispositivo. fps = FPS medio del recorrido; cocina = FPS medio en la Cocina.
  devices: {
    tag: '1/5 Rendimiento',
    question: '¿Funciona en dispositivos reales?',
    answer: '8 de 11 superan el mínimo; ninguno sostiene los 60. Los tres que no llegan usan GPU Mali.',
    max: 60,
    min: { value: 30, label: 'mínimo para VR cómoda' },
    goal: { value: 60, label: 'meta de diseño' },
    items: [
      { model: 'Samsung S938U1', gpu: 'Adreno 830', ram: '11 GB', android: '17', fps: 59.68, cocina: 59.65 },
      { model: 'Xiaomi 25053PC47G', gpu: 'Adreno 825', ram: '11 GB', android: '16', fps: 58.79, cocina: 58.64 },
      { model: 'Honor LGN-NX3', gpu: 'Adreno 619', ram: '11 GB', android: '16', fps: 55.44, cocina: 53.91 },
      { model: 'TECNO KJ5', gpu: 'Mali-G52', ram: '8 GB', android: '13', fps: 37.86, cocina: 33.81 },
      { model: 'Samsung A566E', gpu: 'Xclipse 540', ram: '7 GB', android: '16', fps: 36.99, cocina: 34.42, note: 'versión 0.6.2' },
      { model: 'OPPO CPH2743', gpu: 'Adreno 710', ram: '11 GB', android: '16', fps: 35.63, cocina: 32.78 },
      { model: 'Moto g(20)', gpu: 'Mali-G52', ram: '3,5 GB', android: '11', fps: 34.00, cocina: 26.64 },
      { model: 'Moto g56 5G', gpu: 'PowerVR', ram: '8 GB', android: '16', fps: 31.97, cocina: 28.73 },
      { model: 'Lenovo TB350FU', gpu: 'Mali-G57', ram: '6 GB', android: '14', fps: 29.62, cocina: 27.77 },
      { model: 'vivo V2109', gpu: 'Mali-G52', ram: '8 GB', android: '13', fps: 19.46, cocina: 17.30 },
      { model: 'Huawei STK-LX3', gpu: 'Mali-G51', ram: '3,5 GB', android: '10', fps: 10.23, cocina: 9.66 },
    ],
  },

  // 2) Mediana de FPS por escena (escala 0 a 60).
  scenes: {
    tag: '2/5 Escenas',
    question: '¿Dónde le cuesta más?',
    min: { value: 30, label: '30' },
    answer: 'La Cocina, la escena con más objetos, es la más exigente: baja de 30 FPS en 5 de 11 dispositivos.',
    max: 60,
    items: [
      { name: 'Intro', median: 59.0, img: '/img/capturas/intro_titulo.webp' },
      { name: 'Tutorial', median: 46.5, img: '/img/capturas/tutorial_estacion_inicio.webp' },
      { name: 'Cocina', median: 32.8, img: '/img/capturas/cocina_general.webp' },
    ],
    unit: 'FPS (mediana)',
  },

  // 3) Casos de prueba.
  tests: {
    tag: '3/5 Pruebas',
    question: '¿Pasó las pruebas?',
    total: 109,
    passed: 95,
    legend: '95 aprobados de 109',
    // Barra de aprobados frente a la meta, y los 14 no aprobados agrupados por causa.
    pass: { value: '95', label: 'de 109 casos aprobados', pct: '87,2 %', goal: 95, goalLabel: 'Meta: 95 %' },
    failuresTitle: 'Los 14 no aprobados',
    failures: [
      { n: '11', text: 'Evento de fin de curso registrado más de una vez: es un error del registro y no afecta al usuario.' },
      { n: '3', text: 'Rendimiento por debajo de 30 FPS en tres equipos con GPU Mali.' },
    ],
    badges: [
      { value: '100 %', label: 'de los casos críticos' },
      { value: '0', label: 'cierres inesperados' },
    ],
    honest: 'La meta era 95 %; quedó en 87,2 %.',
    temperature: { title: 'Aumento de temperatura en la sesión', scale: 12, min: 0.6, max: 10.0, text: 'La temperatura subió entre 0,6 y 10,0 °C en 10 dispositivos.' },
  },

  // 4) Valoración de expertos (sin nombres).
  experts: {
    tag: '4/5 Expertos',
    question: '¿Qué opinan los médicos?',
    sus: {
      value: 74.2,
      reference: 70,
      referenceLabel: '70 = aceptable',
      label: 'Usabilidad (SUS, de 0 a 100)',
      evaluators: [
        { value: 77.5, who: 'Médico' },
        { value: 75.0, who: 'Médico' },
        { value: 70.0, who: 'Evaluador no médico' },
      ],
    },
    cvi: {
      items: 10,
      labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'E1', 'E2', 'E3', 'E4', 'E5'],
      legend: 'M = módulo, E = evaluación del módulo, versión anterior al rediseño.',
      text: 'Los 2 médicos aprobaron los 10 contenidos (I-CVI 1,00 = acuerdo total).',
    },
    note: 'Valoración sobre la versión anterior al rediseño.',
  },

  // 5) Lo que falta y estado de los requerimientos.
  pending: {
    tag: '5/5 Pendientes',
    question: '¿Qué falta?',
    items: [
      { icon: 'cube', title: 'Aligerar la escena de la Cocina' },
      { icon: 'phone', title: 'Probar en Android 8 y 9' },
      { icon: 'heart', title: 'Validar la versión nueva con médicos y pacientes' },
    ],
    reqsTitle: 'Estado de los requerimientos evaluados',
    reqsToggle: 'Ver requerimientos',
    reqInfo: {
      'RF-01': ['Módulos educativos', 'Los cinco temas de la técnica, de la preparación al desecho.'],
      'RF-02': ['Navegación por mirada', 'Todo se controla mirando, sin mandos.'],
      'RF-04': ['Evaluación', 'Preguntas con retroalimentación que desbloquean el avance.'],
      'RF-05': ['Historial local', 'El progreso se guarda en el teléfono.'],
      'RF-07': ['Distribución por APK', 'Se instala como aplicación Android.'],
      'RF-09': ['Controles por mirada', 'El anillo que se llena antes de activar.'],
      'RE-04': ['Verificación del aprendizaje', 'Comprobar que se entendió, no solo que se vio.'],
      'RE-05': ['Retroalimentación inmediata', 'Muestra el error y la acción correcta.'],
      'RE-06': ['Repetición sin presión', 'Repetir módulos sin límite.'],
      'RE-09': ['Registro de desempeño', 'Avance por módulo para el equipo de salud.'],
      'RNF-02': ['Rendimiento', 'Meta de 60 FPS.'],
      'RNF-03': ['Tamaño del APK', 'Menos de 300 MB.'],
      'RNF-04': ['Hardware', 'Android 8 o superior y visor de cartón.'],
      'RNF-05': ['Accesibilidad visual', 'Texto legible y buen contraste.'],
      'RNF-06': ['Privacidad', 'No recopila datos personales.'],
      'RNF-07': ['Usabilidad', 'Escala SUS con referencia de 70.'],
      'RNF-08': ['Validez de contenido', 'Acuerdo de los médicos (I-CVI).'],
    },
    reqs: [
      { state: 'Cumplen', tone: 'ok', items: ['RF-01', 'RF-02', 'RF-07', 'RE-04', 'RE-05', 'RE-06', 'RNF-03'] },
      { state: 'Parciales', tone: 'warn', items: ['RF-04', 'RF-05', 'RF-09', 'RE-09', 'RNF-04', 'RNF-05 (solo Cocina)', 'RNF-06'] },
      { state: 'No cumple', tone: 'no', items: ['RNF-02 (rendimiento)'] },
      { state: 'Referencia alcanzada', tone: 'accent', items: ['RNF-07', 'RNF-08'] },
    ],
  },

  // Gráficos técnicos animados (datos en src/data/charts.js, generados de los CSV de la prueba).
  source: 'Elaboración propia (2026)',
  chartsTitle: 'Gráficos técnicos',
  charts: [
    { id: 'devices', title: 'FPS medio por dispositivo',
      caption: 'Ocho de once dispositivos superan los 30 FPS; ninguno sostiene los 60.',
      alt: 'Barras horizontales con el FPS medio de cada uno de los 11 dispositivos, con líneas en 30 y 60 FPS' },
    { id: 'scenes', title: 'FPS por escena y dispositivo',
      caption: 'La Cocina es la escena más lenta en los 11 dispositivos.',
      alt: 'FPS medio de la Intro, el Tutorial y la Cocina en cada uno de los 11 dispositivos' },
    { id: 'series', title: 'FPS en el tiempo',
      caption: 'Mejor sesión (Samsung S938U1), intermedia (OPPO CPH2743) y peor (Huawei STK-LX3); promedio cada 10 s.',
      alt: 'FPS a lo largo de la sesión en la mejor, una intermedia y la peor sesión' },
  ],
};

export const faq = [
  { cat: 'Requisitos', tag: 'HARDWARE', read: '20s', related: [7, 3],
    q: '¿Qué necesito para usar el prototipo?',
    a: 'Un teléfono Android 8.0 o superior y un visor tipo Google Cardboard. La aplicación se instala como APK.' },
  { cat: 'Validación', tag: 'CLÍNICO', read: '40s', related: [2, 6],
    q: '¿Cómo se validó el prototipo?',
    a: 'De dos formas. El equipo hizo pruebas internas de caja blanca sobre el funcionamiento y el rendimiento. Además, dos médicos de la fundación clínica usaron el APK con el visor y respondieron las escalas SUS e IVC; con dos evaluadores, los datos se reportan de forma descriptiva y con sus mejoras recomendadas.' },
  { cat: 'Ámbito', tag: 'CLÍNICO', read: '35s', related: [3, 1],
    q: '¿El prototipo reemplaza la orientación médica profesional?',
    a: 'No. El prototipo es exclusivamente una herramienta educativa de apoyo. No sustituye la consulta, el diagnóstico ni el tratamiento prescrito por un profesional de salud. Complementa la formación que el paciente recibe del personal médico, reforzando la técnica entre consultas.' },
  { cat: 'Pedagogía', tag: 'VR', read: '30s', related: [4, 2],
    q: '¿Por qué utilizar realidad virtual para enseñar técnicas de insulinización?',
    a: 'La VR permite practicar el procedimiento en un entorno seguro, sin riesgo clínico ni desperdicio de material. El paciente puede equivocarse, repetir y consolidar la técnica antes de aplicarla sobre su propio cuerpo.' },
  { cat: 'Beneficios', tag: 'PEDAGOGÍA', read: '30s', related: [3, 6],
    q: '¿Qué ventajas ofrece el aprendizaje inmersivo frente a los métodos tradicionales?',
    a: 'Aprendizaje activo en lugar de pasivo, repetición ilimitada sin presión clínica y retroalimentación inmediata ante errores típicos como la rotación incorrecta, la reutilización de agujas o la vía equivocada.' },
  { cat: 'Privacidad', tag: 'PRIVACIDAD', read: '30s', related: [0, 1],
    q: '¿Cómo se protege la privacidad y los datos del usuario?',
    a: 'El progreso se guarda localmente en el dispositivo y la aplicación no requiere cuenta.' },
  { cat: 'Diferenciación', tag: 'EDGE', read: '40s', related: [7, 3],
    q: '¿Qué diferencia al prototipo de otras soluciones?',
    a: 'Combina tres ejes que ninguna solución cubre a la vez: educación específica en insulinización, experiencia inmersiva y hardware de bajo costo. Virti aporta inmersión con equipos costosos; SocialDiabetes e Insulclock son accesibles pero no enseñan la técnica de aplicación.' },
  { cat: 'Mercado', tag: 'LÍMITES', read: '30s', related: [6, 3],
    q: '¿Qué limitaciones presentan las plataformas existentes?',
    a: 'Cada plataforma cubre solo una parte del problema: Virti requiere hardware costoso, Insulclock no tiene educación inmersiva y SocialDiabetes no enseña la técnica.',
    table: [['Virti', 'Hardware costoso'], ['Insulclock', 'Sin educación inmersiva'], ['SocialDiabetes', 'No enseña la técnica']] },
];

export const team = {
  lead: 'Proyecto de grado de Ingeniería de Sistemas de la UNAB, con la asesoría clínica de médicos internistas de la Fundación Clínica.',
  members: [
    { name: 'Brayan Steven León Martinez', role: 'Líder de desarrollo', img: imgBrayan, pos: '40% 25%', alt: 'Retrato de Brayan Steven León Martinez',
      body: 'Dirigió el desarrollo: arquitectura por capas, sistemas en C#, progreso, exámenes, teletransporte y las pruebas de cada incremento.' },
    { name: 'Santiago Cardona Prada', role: 'Contenido 3D y audio', img: imgSantiago, pos: '50% 25%', alt: 'Retrato de Santiago Cardona Prada',
      body: 'Creó los modelos 3D, el escenario de la vivienda, las animaciones y los shaders, y apoyó el audio, la documentación y la landing.' },
    { name: 'Leonardo Stiven Pardo Niño', role: 'Director', img: imgLeonardo, pos: '50% 30%', alt: 'Retrato de Leonardo Stiven Pardo Niño',
      body: 'Orientó el rumbo del proyecto, revisó cada incremento y aprobó las decisiones de alcance.' },
    { name: 'Dra. Ana María Ospina Galeano', role: 'Asesora clínica', img: imgFundacion, pos: '30% 50%', alt: 'Edificio de la Fundación Clínica',
      body: 'Médica internista. Validó el contenido clínico: los requerimientos, la técnica de aplicación, el guion de las narraciones y las preguntas de los exámenes.' },
    { name: 'Dr. Jaime Gómez', role: 'Asesor clínico', img: imgFundacion, pos: '70% 50%', alt: 'Edificio de la Fundación Clínica',
      body: 'Médico internista. Validó el contenido clínico: los requerimientos, la técnica de aplicación, el guion de las narraciones y las preguntas de los exámenes.' },
  ],
  institutions: [
    { name: 'UNAB', role: 'Universidad', img: imgUnab, pos: '60% 40%', alt: 'Campus de la Universidad Autónoma de Bucaramanga',
      body: 'Universidad Autónoma de Bucaramanga. Programa de Ingeniería de Sistemas, donde se desarrolló el proyecto de grado.' },
    { name: 'Fundación Clínica', role: 'Aliado clínico', img: imgFundacion, pos: '50% 50%', alt: 'Edificio de la Fundación Clínica',
      body: 'Institución de los asesores temáticos; aportó la asesoría y la validación del contenido clínico.' },
  ],
};

export const footer = {
  wordmark: 'INSULIN·VR',
  tagline: 'Prototipo educativo inmersivo para aprender la técnica de insulinización con el teléfono del paciente y un visor de cartón.',
  copyright: ['© 2026 Insulin·VR · UNAB.', 'Proyecto de grado, Ingeniería de Sistemas.'],
  columns: [
    { title: 'Enlaces', links: nav },
    { title: 'Módulos', links: [
      ...modules.items.map((m) => ({ href: '#modulos', label: m.title })),
      { href: '#prototipo', label: 'Examen general' },
      { href: '#prototipo', label: 'Árbol de avances' },
    ] },
    { title: 'Proyecto', links: [
      { href: '#resultados', label: 'Resultados' },
      { href: '#resultados', label: 'Validación con expertos' },
      { href: '#faq', label: 'Preguntas frecuentes' },
      { label: 'Universidad Autónoma de Bucaramanga' },
    ] },
  ],
};

export const architecture = {
  lead: 'Cinco capas, cada una con una sola tarea. Se leen de arriba, lo que hace el paciente, hacia abajo, el contenido clínico.',
  layers: [
    { tag: 'Entrada e interacción', title: 'Lo que hace el paciente',
      body: 'El paciente usa solo la mirada: mira un botón o un punto de la casa y una barra se llena para confirmar.',
      items: ['Retícula por mirada', 'Botonera de pasos', 'Teletransporte'],
      practice: 'Interacción sin mandos: menos curva de aprendizaje para adultos sin experiencia en realidad virtual.' },
    { tag: 'Bus de eventos · GlobalEvents', title: 'Mensajero interno',
      body: 'Cada acción se anuncia como un mensaje y la escuchan solo las partes que la necesitan.',
      items: ['Eventos de flujo', 'Eventos de interacción', 'Eventos de progreso'],
      practice: 'Patrón observador: agregar el sistema de progreso no obligó a modificar los demás.' },
    { tag: 'Lógica · sistemas', title: 'Reglas del curso',
      body: 'Decide qué paso sigue, reproduce la narración, califica los exámenes y guarda el avance.',
      items: ['ModuleControlSystem', 'NarrationPlaybackSystem', 'ProgressSystem'],
      practice: 'Guardado seguro: copia de respaldo ante cortes de batería y almacenamiento detrás de una interfaz.' },
    { tag: 'Vinculación con la escena · binders', title: 'Escenario 3D',
      body: 'Conecta cada paso con su objeto, animación o pantalla dentro de la vivienda virtual.',
      items: ['Binders', 'AnimationTarget', 'QuizBoardView'],
      practice: 'Separación de responsabilidades: la lógica no depende de cómo está armada la escena.' },
    { tag: 'Datos · ScriptableObjects', title: 'Contenido clínico',
      body: 'Textos, orden, audios y preguntas viven como datos: el equipo de salud puede ajustarlos sin programar.',
      items: ['ModuleDataSO', 'StepDataSO', 'NarrationDataSO'],
      practice: 'Contenido como datos: pasar de uno a cinco módulos no exigió reescribir los sistemas.' },
    { tag: 'Calidad', title: 'Verificado con una prueba de caja blanca',
      body: 'Prueba en 11 dispositivos Android el 28 de octubre de 2026: 109 casos ejecutados y 95 aprobados (87,2 %), con el 100 % de los casos críticos aprobados y 0 excepciones. No se alcanzó el umbral del 95 %. Defectos abiertos conocidos:',
      items: ['Aviso de texturas multisample, en 6 de 11 sesiones', 'Instrumento de medición: memoria inicial en 0,00 MB y tiempo de GPU en µs', 'Evento de fin de curso registrado de 5 a 8 veces por sesión'], practice: null, final: true },
  ],
};

// Diagramas del sistema. Las lecturas salen de los propios diagramas; no agregar datos que no estén en ellos.
export const diagrams = {
  title: 'Recorrido entre escenas',
  source: 'Elaboración propia (2026)',
  caption: 'Desde la Intro se va al Tutorial o directo a la Cocina; la Cocina vuelve a la Intro por el teletransporte de la sala.',
  alt: 'Diagrama: Intro, Tutorial y Cocina con sus conexiones',
  // Escenas y conexiones del diagrama (mismo contenido que el diagrama de la tesis).
  nodes: [
    { id: 'intro', name: 'Intro', detail: 'Animación y elección' },
    { id: 'tutorial', name: 'Tutorial', detail: '10 pasos' },
    { id: 'cocina', name: 'Cocina', detail: '5 módulos y examen' },
  ],
  edges: [
    { from: 'intro', to: 'tutorial', label: 'Tutorial' },
    { from: 'tutorial', to: 'cocina', label: 'Salida' },
    { from: 'intro', to: 'cocina', label: 'Enseñanza' },
    { from: 'cocina', to: 'intro', label: 'Teletransporte de la sala' },
  ],
};
