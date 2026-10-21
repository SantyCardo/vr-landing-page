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
  lead: 'Prototipo educativo inmersivo para aprender la técnica de insulinización con el teléfono del paciente y un visor de cartón. Cinco módulos guiados en una vivienda virtual, sin conexión a internet.',
  stats: [
    { value: '5', label: 'Módulos de enseñanza' },
    { value: '60', label: 'Pasos narrados con subtítulos' },
    { value: '5', label: 'Exámenes, uno por módulo' },
    { value: '15', label: 'Puntos de teletransporte' },
  ],
};

export const about = {
  title: ['Un recorrido guiado por la técnica,', 'dentro de una vivienda virtual.'],
  lead: 'El paciente se mueve por una casa con cocina, sala, vestíbulo y sala de estudio. Todo se controla con la mirada: no hacen falta mandos ni conexión.',
  note: 'Lo que se enseña, en qué orden, con qué audio y con qué preguntas vive en archivos de datos y no en el código, así que el equipo de salud puede ajustar textos y orden sin programar.',
};

// Demo en video del prototipo. Mientras no haya video se muestra el marcador.
export const demo = {
  title: 'Demo del prototipo',
  placeholder: 'Demo próximamente',
};

export const features = [
  { title: 'Vivienda virtual', kicker: 'Entorno', img: '/img/cocina_general.jpg',
    body: 'Cuatro espacios. La cocina concentra los cinco módulos; nevera, gabinetes y estufa dan el contexto real.' },
  { title: 'Sala de estar', kicker: 'Entorno', img: '/img/sala_estar.webp',
    body: 'Sillones, una alfombra y una pantalla grande en la pared con el árbol de avances («Mi progreso»).' },
  { title: 'Sala de estudio', kicker: 'Entorno', img: '/img/sala_estudio.webp',
    body: 'Una mesa con sillas, pizarra y corcho, junto a la sala de estar.' },
  { title: 'Control por mirada', kicker: 'Interacción', img: '/img/m1_paso1_contexto.jpg',
    body: 'Una retícula y una barra que se llena al mirar. Los botones piden 1.5 s; «Salir», 2.5 s.' },
  { title: 'Teletransporte', kicker: 'Movimiento', img: '/img/teleport_cocina.jpg',
    body: '15 puntos con color por cuarto y viñeta de confort, para moverse sin mareo.' },
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
  extra: 'Tutorial inicial para aprender a usar la mirada, la botonera y el teletransporte.',
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
    { tag: 'La solución', title: 'Un simulador en el celular', body: 'Insulin·VR convierte un teléfono Android y un visor tipo Google Cardboard en un simulador. Se practica en una casa virtual, sin conexión a internet.' },
    { tag: 'El entrenamiento', title: 'Guiado paso a paso', body: 'Cinco módulos con 60 pasos narrados y subtítulos. El paciente se mueve con la mirada y el teletransporte, responde un examen con imágenes al final de cada módulo y ve su avance en un árbol de progreso.' },
    { tag: 'La verificación', title: 'Probado por el equipo y por médicos', body: 'Pruebas internas de caja blanca del equipo y una valoración básica con dos médicos de la fundación clínica. Madurez tecnológica: TRL 3 actual, TRL 4 proyectado.' },
  ],
  screens: [
    { img: '/img/cocina_general.jpg', label: 'Casa virtual' },
    { img: '/img/m1_paso1.jpg', label: 'Paso narrado' },
    { img: '/img/examen_pregunta.png', label: 'Examen por imágenes' },
    { img: '/img/arbol_avances_m1.png', label: 'Árbol de progreso' },
  ],
  chips: hero.stats,
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
  { name: 'Android', role: 'API 26 o superior', icon: 'phone', body: 'Se instala como APK y funciona sin conexión.' },
  { name: 'Interacción por mirada', role: 'Retícula y barra de carga', icon: 'eye', body: 'Selección y teletransporte sin mandos.' },
  { name: 'C# y ScriptableObjects', role: 'Lógica y datos', icon: 'code', body: 'Arquitectura por capas con bus de eventos; contenido separado del código.' },
  { name: 'JSON local', role: 'Persistencia', icon: 'shield', body: 'Progreso en la carpeta privada de la app, con respaldo y sin datos personales.' },
];

export const results = {
  verified: [
    { metric: '36', label: 'Requerimientos', body: 'Clínicos, educativos, funcionales y no funcionales, de dos entrevistas con médicos internistas.' },
    { metric: '35/35', label: 'Pruebas superadas', body: 'Progreso, árbol, teletransporte, exámenes y botonera, ejecutadas en el editor.' },
    { metric: '15', label: 'Defectos corregidos', body: 'Ninguno abierto al cierre de los incrementos.' },
    { metric: 'TRL 3', label: 'Madurez tecnológica', body: 'Nivel actual. Se proyecta TRL 4 al validar el APK en teléfonos Android con visor tipo Cardboard.' },
  ],
  performance: {
    device: 'Samsung Galaxy A56',
    body: 'Un recorrido automático por los cinco módulos y exámenes arrancó a 57 FPS y bajó a unos 30 FPS cuando el teléfono se calentó. El costo está en el render, con cerca de 1.6 millones de triángulos por cuadro; scripts y animaciones ocupan menos de 0.3 ms.',
    img: '/img/perfil_tiempo_cuadro.png',
    devices: [
      { name: 'Samsung Galaxy A56', avg: '—', min: '—' },
      { name: '—', avg: '—', min: '—' },
      { name: '—', avg: '—', min: '—' },
    ],
  },
  // Umbrales propuestos por el equipo (campo `target`); aún sin confirmar. Editar aquí si cambian.
  whitebox: {
    title: 'Pruebas internas de caja blanca',
    body: 'Las hace el equipo y de ellas sale la estadística principal. Cada indicador muestra su umbral de aceptación; los valores se cargan cuando estén medidos.',
    status: 'Pendiente',
    items: [
      { name: 'Aprobación global', what: 'Casos de prueba superados', value: '—', target: '≥ 95 %' },
      { name: 'Casos críticos', what: 'Casos críticos superados', value: '—', target: '100 %' },
      { name: 'Cobertura', what: 'Requerimientos cubiertos (de 36)', value: '—', target: '100 %' },
      { name: 'Defectos críticos abiertos', what: 'Al cierre de las pruebas', value: '—', target: '0' },
      { name: 'FPS medio', what: 'Samsung Galaxy A56 (diseño: 60 FPS)', value: '—', target: '≥ 30' },
      { name: 'Densidad de defectos', what: 'Descriptiva, entre ciclos', value: '—', target: 'Decreciente' },
    ],
  },
  // Valoración básica con dos médicos: descriptiva, sin inferencia estadística.
  validation: {
    title: 'Valoración básica con dos médicos',
    body: 'Los dos médicos de la fundación clínica usan el APK con el visor y responden dos instrumentos. Con n = 2 los datos son descriptivos: puntaje por evaluador, promedio, rango y acuerdo, sin inferencia estadística. Además recomiendan mejoras.',
    status: 'Pendiente',
    limitation: 'Limitación: la muestra es de dos médicos, por lo que los resultados no se generalizan.',
    items: [
      { name: 'SUS', what: 'Usabilidad · 10 ítems, escala 1–5', value: '—', goal: 'Referencia ≥ 70' },
      { name: 'IVC', what: 'Validez del contenido · 10 elementos, relevancia y claridad en escala 1–4', value: '—', goal: 'I-CVI 1.00 (acuerdo 2/2)' },
    ],
    improvements: { label: 'Mejoras recomendadas', value: '—' },
  },
};

export const faq = [
  { q: '¿Qué necesito para usar el prototipo?',
    a: 'Un teléfono Android 8.0 o superior y un visor tipo Google Cardboard. La aplicación se instala como APK y funciona sin conexión a internet.' },
  { q: '¿Cómo se validó el prototipo?',
    a: 'De dos formas. El equipo hizo pruebas internas de caja blanca sobre el funcionamiento y el rendimiento. Además, dos médicos de la fundación clínica usaron el APK con el visor y respondieron las escalas SUS e IVC; con dos evaluadores, los datos se reportan de forma descriptiva y con sus mejoras recomendadas.' },
  { q: '¿El prototipo reemplaza la orientación médica profesional?',
    a: 'No. El prototipo es exclusivamente una herramienta educativa de apoyo. No sustituye la consulta, el diagnóstico ni el tratamiento prescrito por un profesional de salud. Complementa la formación que el paciente recibe del personal médico, reforzando la técnica entre consultas.' },
  { q: '¿Por qué utilizar realidad virtual para enseñar técnicas de insulinización?',
    a: 'La VR permite practicar el procedimiento en un entorno seguro, sin riesgo clínico ni desperdicio de material. El paciente puede equivocarse, repetir y consolidar la técnica antes de aplicarla sobre su propio cuerpo.' },
  { q: '¿Qué ventajas ofrece el aprendizaje inmersivo frente a los métodos tradicionales?',
    a: 'Aprendizaje activo en lugar de pasivo, repetición ilimitada sin presión clínica y retroalimentación inmediata ante errores típicos como la rotación incorrecta, la reutilización de agujas o la vía equivocada.' },
  { q: '¿Cómo se protege la privacidad y los datos del usuario?',
    a: 'Toda la información se almacena localmente en el dispositivo. La aplicación funciona sin conexión: no requiere cuenta ni envía datos a servidores externos, en línea con la Ley 1581 de 2012 sobre datos personales en Colombia.' },
  { q: '¿Qué diferencia al prototipo de otras soluciones?',
    a: 'Combina tres ejes que ninguna solución cubre a la vez: educación específica en insulinización, experiencia inmersiva y hardware de bajo costo. Virti aporta inmersión con equipos costosos; SocialDiabetes e Insulclock son accesibles pero no enseñan la técnica de aplicación.' },
  { q: '¿Qué limitaciones presentan las plataformas existentes?',
    a: 'Cada plataforma cubre solo una parte del problema: Virti requiere hardware costoso, Insulclock no tiene educación inmersiva y SocialDiabetes no enseña la técnica.' },
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
      { href: '#prototipo', label: 'Exámenes' },
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
    { tag: 'Calidad', title: 'Verificado en cada incremento',
      body: '35 pruebas con el resultado esperado y 15 defectos corregidos antes de cerrar cada incremento.',
      items: ['5 niveles de verificación'], practice: null, final: true },
  ],
};
