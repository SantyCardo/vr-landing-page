// Contenido de la landing. Versión 2: presentación del prototipo funcional (octubre de 2026).

export const nav = [
  { href: '#problema', label: 'Problema' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#prototipo', label: 'Prototipo' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#cronograma', label: 'Cronograma' },
  { href: '#equipo', label: 'Equipo' },
];

export const hero = {
  eyebrow: 'Proyecto de grado · UNAB · Prototipo funcional',
  lead: 'Prototipo educativo inmersivo para aprender la técnica de insulinización con el teléfono del paciente y un visor de cartón. Cinco módulos guiados en una vivienda virtual, sin conexión a internet.',
  stats: [
    { value: '5', label: 'Módulos de enseñanza' },
    { value: '60', label: 'Pasos narrados con subtítulos' },
    { value: '5', label: 'Exámenes, uno por módulo' },
    { value: '13', label: 'Puntos de teletransporte' },
  ],
};

export const about = {
  title: ['Un recorrido guiado por la técnica,', 'dentro de una vivienda virtual.'],
  lead: 'El paciente se mueve por una casa con cocina, sala, vestíbulo y sala de estudio. Todo se controla con la mirada: no hacen falta mandos ni conexión.',
  note: 'Lo que se enseña, en qué orden, con qué audio y con qué preguntas vive en archivos de datos y no en el código, así que el equipo de salud puede ajustar textos y orden sin programar.',
};

export const features = [
  { title: 'Vivienda virtual', kicker: 'Entorno', img: '/img/cocina_general.jpg',
    body: 'Cuatro espacios. La cocina concentra los cinco módulos; nevera, gabinetes y estufa dan el contexto real.' },
  { title: 'Control por mirada', kicker: 'Interacción', img: '/img/m1_paso1_contexto.jpg',
    body: 'Una retícula y una barra que se llena al mirar. Los botones piden 1.5 s; «Salir», 2.5 s.' },
  { title: 'Teletransporte', kicker: 'Movimiento', img: '/img/teleport_cocina.jpg',
    body: '13 puntos con color por cuarto y viñeta de confort, para moverse sin mareo.' },
  { title: 'Pasos narrados', kicker: 'Contenido', img: '/img/m1_paso1.jpg',
    body: 'Cada paso une animación 3D, narración y subtítulos sincronizados con el audio.' },
  { title: 'Exámenes', kicker: 'Evaluación', img: '/img/examen_respuesta.png',
    body: 'Uno por módulo. El resultado se muestra con color y con texto para quien distingue mal los colores.' },
  { title: 'Árbol de avances', kicker: 'Progreso', img: '/img/arbol_avances_m1.png',
    body: 'Cada módulo y paso aparece como hecho, disponible o bloqueado. El progreso se guarda en el teléfono.' },
];

export const modules = {
  lead: 'Cada módulo se desbloquea al completar el anterior y termina con su examen; se aprueba con el 60 % o más.',
  items: [
    { id: 'M1', title: 'Extracción e inspección', steps: 17, body: 'Sacar la insulina de la nevera y explorar cinco cajas de insulina.' },
    { id: 'M2', title: 'Preparación e higiene', steps: 17, body: 'Preparar el lapicero y las manos antes de la aplicación.' },
    { id: 'M3', title: 'Mapeo, rotación y asepsia', steps: 10, body: 'Zonas de inyección y rotación con el método de las manecillas del reloj.' },
    { id: 'M4', title: 'Técnica de inyección', steps: 10, body: 'Aplicación paso a paso con el lapicero SoloStar.' },
    { id: 'M5', title: 'Desecho seguro y conservación', steps: 6, body: 'Desechar la aguja y conservar la insulina después de usarla.' },
  ],
  pending: 'Tutorial de uso del visor: en desarrollo.',
};

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

export const timeline = {
  lead: 'Actualizado al 18 de octubre de 2026, semana 10 de 18.',
  phases: [
    { label: 'Fase 1', title: 'Planeación y diseño', weeks: 'Semanas 1–4', status: 'Terminada',
      items: [['Revisión del anteproyecto y requisitos', 'Hecho'], ['Arquitectura y guion pedagógico', 'Hecho']] },
    { label: 'Fase 2', title: 'Desarrollo del prototipo', weeks: 'Semanas 4–10', status: 'En curso',
      items: [['Modelado 3D de la vivienda', 'Hecho'], ['Módulos, exámenes, mapa y árbol de avances', 'Hecho'],
        ['Pruebas en el teléfono con el visor', 'En curso'], ['Preguntas definitivas con audio', 'En curso']] },
    { label: 'Fase 3', title: 'Validación con expertos', weeks: 'Semanas 9–11', status: 'Próxima',
      items: [['Protocolo, consentimientos e instrumentos', 'En curso'], ['Prueba en vivo con médicos', '21 oct.'], ['Análisis de datos', '22 oct.']] },
    { label: 'Fase 4', title: 'Presentación y cierre', weeks: 'Semanas 11–18', status: 'Próxima',
      items: [['Presentación en IngenioTIC', '26 oct.'], ['Tutorial, puntuaciones y pulido visual', 'Nov.'], ['Documento final y sustentación', 'Dic.']] },
  ],
};

export const methodology = [
  { title: 'Iterativo e incremental', body: 'Nueve incrementos entre el 11 de septiembre y el 1 de octubre de 2026, desde el primer módulo hasta el curso completo.', tag: '9 incrementos' },
  { title: 'Ciclo PHVA', body: 'Planear, hacer, verificar y actuar, aplicado al proyecto completo y a cada incremento.', tag: 'Calidad' },
  { title: 'Fases PMBOK', body: 'Fases de la guía PMBOK adaptadas a la escala de un proyecto de grado.', tag: 'Gestión' },
  { title: 'Kanban', body: 'Tablero en Trello con tareas por hacer, en progreso y terminadas; código en Git y GitHub.', tag: 'Seguimiento' },
];

export const stack = [
  { name: 'Unity 2022.3 LTS', role: 'Motor · Universal Render Pipeline', icon: 'cube', body: 'Escenas, animaciones y lógica del prototipo.' },
  { name: 'Google Cardboard XR', role: 'Realidad virtual · 3 DOF', icon: 'cardboard', body: 'Complemento oficial para visores de cartón.' },
  { name: 'Android', role: 'API 26 o superior', icon: 'phone', body: 'Se instala como APK y funciona sin conexión.' },
  { name: 'Interacción por mirada', role: 'Retícula y barra de carga', icon: 'eye', body: 'Selección y teletransporte sin mandos.' },
  { name: 'C# y ScriptableObjects', role: 'Lógica y datos', icon: 'code', body: 'Arquitectura por capas con bus de eventos; contenido separado del código.' },
  { name: 'JSON local', role: 'Persistencia', icon: 'shield', body: 'Progreso en la carpeta privada de la app, con respaldo y sin datos personales.' },
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

export const results = {
  verified: [
    { metric: '36', label: 'Requerimientos', body: 'Clínicos, educativos, funcionales y no funcionales, de dos entrevistas con médicos internistas.' },
    { metric: '35/35', label: 'Pruebas superadas', body: 'Progreso, árbol, teletransporte, exámenes y botonera, ejecutadas en el editor.' },
    { metric: '15', label: 'Defectos corregidos', body: 'Ninguno abierto al cierre de los incrementos.' },
    { metric: 'TRL 3', label: 'Madurez tecnológica', body: 'Prueba de concepto. La meta es TRL 4 con el APK validado en teléfonos.' },
  ],
  performance: {
    device: 'Samsung Galaxy A56',
    body: 'Un recorrido automático por los cinco módulos y exámenes arrancó a 57 FPS y bajó a unos 30 FPS cuando el teléfono se calentó. El costo está en el render, con cerca de 1.6 millones de triángulos por cuadro; scripts y animaciones ocupan menos de 0.3 ms.',
    img: '/img/perfil_tiempo_cuadro.png',
    pending: ['Equipo 2', 'Equipo 3', 'Equipo 4'],
  },
  validation: {
    date: 'Prueba en vivo con médicos · 21 de octubre de 2026',
    items: [
      { name: 'SUS', what: 'Usabilidad', goal: '≥ 70 / 100' },
      { name: 'IVC', what: 'Validez del contenido', goal: '≥ 0.80' },
      { name: 'Likert', what: 'Experiencia inmersiva', goal: '≥ 4.0 / 5' },
    ],
  },
};

export const faq = [
  { q: '¿Qué necesito para usar el prototipo?',
    a: 'Un teléfono Android 8.0 o superior y un visor tipo Google Cardboard. La aplicación se instala como APK y funciona sin conexión a internet.' },
  { q: '¿Cuándo se valida con médicos?',
    a: 'La prueba en vivo es el 21 de octubre de 2026. Cada médico usa el APK con el visor y luego responde las escalas SUS, IVC y Likert.' },
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
    { init: 'BL', name: 'Brayan Steven León Martínez', role: 'Líder de desarrollo', sub: 'Arquitectura, sistemas en C#, progreso, exámenes y pruebas' },
    { init: 'SC', name: 'Santiago Cardona Prada', role: 'Contenido 3D, audio y documentación', sub: 'Modelos, escenario, animaciones, shaders y landing' },
    { init: 'LP', name: 'Leonardo Stiven Pardo Niño', role: 'Director', sub: 'Rumbo del proyecto y decisiones de alcance' },
  ],
  institutions: [
    { label: 'Universidad', name: 'UNAB', sub: 'Ingeniería de Sistemas · Bucaramanga' },
    { label: 'Asesoría temática', name: 'Dra. Ana María Ospina Galeano', sub: 'Médica internista · Fundación Clínica' },
    { label: 'Asesoría temática', name: 'Dr. Jaime Gómez', sub: 'Médico internista · Fundación Clínica' },
  ],
};
