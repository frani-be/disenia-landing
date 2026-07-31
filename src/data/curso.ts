export interface Clase {
  num: string;
  fecha: string;
  titulo: string;
  unidad: number;
}

export interface Objetivo {
  nombre: string;
  desc: string;
}

export interface Tool {
  name: string;
  logo: string;
  cat: string;
  url: string;
}

export interface BibItem {
  autor: string;
  anio: string;
  titulo: string;
  editorial: string;
  resumen: string;
  url: string;
}

export interface ConductaItem {
  num: string;
  titulo: string;
  desc: string;
}

export interface EticaItem {
  num: string;
  titulo: string;
  desc: string;
}

export const clases: Clase[] = [
  { num: "01", fecha: "Martes 11 ago 2026", titulo: "Introducción al curso: ecosistema de la IA generativa, acuerdos y cronograma", unidad: 0 },
  { num: "02", fecha: "Martes 18 ago 2026", titulo: "Prompt engineering: el lenguaje para hablar con máquinas", unidad: 1 },
  { num: "03", fecha: "Martes 25 ago 2026", titulo: "Generación de imagen: modelos, arquitecturas, consistencia y sistemas visuales", unidad: 1 },
  { num: "04", fecha: "Martes 01 sep 2026", titulo: "Branding con IA: identidad, naming y voz de marca", unidad: 1 },
  { num: "05", fecha: "Martes 08 sep 2026", titulo: "Video, movimiento y audio generativo", unidad: 1 },
  { num: "06", fecha: "Martes 22 sep 2026", titulo: "Pipelines creativos I: automatización y flujos de trabajo", unidad: 1 },
  { num: "07", fecha: "Martes 29 sep 2026", titulo: "Pipelines creativos II: proyecto integrador Unidad 1", unidad: 1 },
  { num: "08", fecha: "Martes 06 oct 2026", titulo: "Futuros posibles: ética, autoría y sesgos algorítmicos", unidad: 2 },
  { num: "09", fecha: "Martes 13 oct 2026", titulo: "Futuros posibles: impacto laboral, desinformación y regulación", unidad: 2 },
  { num: "10", fecha: "Martes 20 oct 2026", titulo: "Introducción a UX/UI con IA: investigación y síntesis", unidad: 3 },
  { num: "11", fecha: "Martes 27 oct 2026", titulo: "Wireframing y arquitectura de información con IA", unidad: 3 },
  { num: "12", fecha: "Martes 03 nov 2026", titulo: "Diseño de interfaz de alta fidelidad con IA", unidad: 3 },
  { num: "13", fecha: "Martes 10 nov 2026", titulo: "Desarrollo web no-code: Webflow, Framer, interacción y animación", unidad: 3 },
  { num: "14", fecha: "Martes 17 nov 2026", titulo: "Integración de IA en interfaces: chatbots y asistentes", unidad: 3 },
  { num: "15", fecha: "Martes 24 nov 2026", titulo: "Pipeline completo UX/UI/Web: del brief al producto publicado", unidad: 3 },
  { num: "16", fecha: "Martes 01 dic 2026", titulo: "Presentación final: proyectos y cierre del curso", unidad: 4 },
];

export const objetivos: Objetivo[] = [
  {
    nombre: "Dominar herramientas de IA generativa",
    desc: "Configurar y operar con fluidez las principales plataformas de IA generativa disponibles en 2026, comprendiendo sus parámetros técnicos, capacidades y limitaciones desde una perspectiva de diseño.",
  },
  {
    nombre: "Diseñar pipelines creativos",
    desc: "Construir flujos de trabajo automatizados que encadenen múltiples modelos de IA para producir resultados visuales, audiovisuales y de interfaz coherentes con objetivos comunicacionales reales.",
  },
  {
    nombre: "Producir identidades visuales con IA",
    desc: "Desarrollar sistemas de identidad visual completos: imagen, tipografía, paleta y voz de marca, utilizando IA generativa como herramienta central del proceso creativo.",
  },
  {
    nombre: "Diseñar y publicar interfaces con IA",
    desc: "Completar el pipeline UX/UI desde la investigación de usuarios hasta el sitio web publicado, integrando herramientas de IA en cada etapa: research, wireframing, diseño visual y desarrollo no-code.",
  },
  {
    nombre: "Ejercer pensamiento crítico sobre la IA",
    desc: "Analizar los dilemas éticos, culturales y económicos de la IA generativa: sesgos algorítmicos, autoría, impacto laboral, desinformación; y articular una posición fundamentada como diseñador responsable.",
  },
  {
    nombre: "Actuar como orquestador, no como ejecutor",
    desc: "Desarrollar la capacidad de delegar ejecución técnica a sistemas de IA mientras se retiene el criterio estético, estratégico y ético del proceso de diseño. El diseñador que completa este curso dirige sistemas; no los opera manualmente.",
  },
];

export const tools: Tool[] = [
  { name: "ChatGPT",       logo: "/programs_isotypes/chatgpt.svg",       cat: "LLMs",      url: "https://chatgpt.com" },
  { name: "Claude",        logo: "/programs_isotypes/claude.svg",         cat: "LLMs",      url: "https://claude.ai" },
  { name: "Gemini",        logo: "/programs_isotypes/gemini.svg",         cat: "LLMs",      url: "https://gemini.google.com" },
  { name: "Ideogram",      logo: "/programs_isotypes/ideogram.svg",       cat: "Imagen",    url: "https://ideogram.ai" },
  { name: "Flux",          logo: "/programs_isotypes/flux.svg",           cat: "Imagen",    url: "https://huggingface.co/black-forest-labs" },
  { name: "Adobe Firefly", logo: "/programs_isotypes/adobe_firefly.svg",  cat: "Imagen",    url: "https://firefly.adobe.com" },
  { name: "Runway",        logo: "/programs_isotypes/runway.svg",         cat: "Video",     url: "https://runwayml.com" },
  { name: "Kling AI",      logo: "/programs_isotypes/kling_ai.svg",       cat: "Video",     url: "https://klingai.com" },
  { name: "Pika",          logo: "/programs_isotypes/pika.svg",           cat: "Video",     url: "https://pika.art" },
  { name: "Suno",          logo: "/programs_isotypes/suno.svg",           cat: "Audio",     url: "https://suno.com" },
  { name: "ElevenLabs",    logo: "/programs_isotypes/elevenlabs.svg",     cat: "Audio",     url: "https://elevenlabs.io" },
  { name: "Figma",         logo: "/programs_isotypes/figma.svg",          cat: "Diseño",    url: "https://figma.com" },
  { name: "Uizard",        logo: "/programs_isotypes/uizard.svg",         cat: "Diseño",    url: "https://uizard.io" },
  { name: "Canva AI",      logo: "/programs_isotypes/canva_ai.svg",       cat: "Diseño",    url: "https://canva.com" },
  { name: "Framer",        logo: "/programs_isotypes/framer.svg",         cat: "Web",       url: "https://framer.com" },
  { name: "Webflow",       logo: "/programs_isotypes/webflow.svg",        cat: "Web",       url: "https://webflow.com" },
  { name: "n8n",           logo: "/programs_isotypes/n8n.svg",            cat: "Automat.",  url: "https://n8n.io" },
  { name: "Make",          logo: "/programs_isotypes/make.svg",           cat: "Automat.",  url: "https://make.com" },
  { name: "Chatbase",      logo: "/programs_isotypes/chatbase.svg",       cat: "Chatbots",  url: "https://chatbase.co" },
  { name: "Tidio",         logo: "/programs_isotypes/tidio.svg",          cat: "Chatbots",  url: "https://tidio.com" },
  { name: "Maze",          logo: "/programs_isotypes/maze.svg",           cat: "UX",        url: "https://maze.co" },
  { name: "Hotjar",        logo: "/programs_isotypes/hotjar.svg",         cat: "UX",        url: "https://hotjar.com" },
];

export const biblioMinima: BibItem[] = [
  {
    autor: "Bridle, J.",
    anio: "2024",
    titulo: "Modos de existir: Más allá de la inteligencia humana",
    editorial: "Galaxia Gutenberg",
    resumen: "Explora cómo la inteligencia no es exclusivamente humana y qué implica para el futuro de la tecnología y la vida.",
    url: "https://www.galaxiagutenberg.com/libros/modos-de-existir/",
  },
  {
    autor: "Mollick, E.",
    anio: "2024",
    titulo: "Cointeligencia: Vivir y trabajar con la IA",
    editorial: "Conecta",
    resumen: "Guía práctica de cómo colaborar con IA en el trabajo real, sin romantizarla ni tenerle miedo.",
    url: "https://www.penguinlibros.com/es/humanidades/329459-libro-cointeligencia-9788413445717",
  },
  {
    autor: "Maeda, J.",
    anio: "2019",
    titulo: "How to Speak Machine",
    editorial: "Portfolio",
    resumen: "Pensamiento computacional para no programadores. Indispensable para diseñadores que quieran entender código.",
    url: "https://www.maedastudio.com/how-to-speak-machine",
  },
];

export const biblioRecomendada: BibItem[] = [
  {
    autor: "Goodman, E.",
    anio: "2023",
    titulo: "Designing with AI",
    editorial: "O'Reilly Media",
    resumen: "Manual técnico sobre cómo integrar IA en procesos reales de diseño UX, branding e interfaces.",
    url: "https://www.oreilly.com/library/view/designing-with-ai/",
  },
  {
    autor: "Bento, R.",
    anio: "2023",
    titulo: "The Art of AI Prompt Engineering",
    editorial: "Independently Published",
    resumen: "Referencia técnica para construir prompts efectivos para texto e imagen en distintos modelos de IA.",
    url: "https://www.amazon.com/dp/B0CNQJ4PTF",
  },
  {
    autor: "Scolari, C.",
    anio: "2018",
    titulo: "Las leyes de la interfaz",
    editorial: "Gedisa",
    resumen: "Teoría de la evolución de las interfaces digitales. Base conceptual de la Unidad 3 del curso.",
    url: "https://www.gedisa.com/articulo.aspx?idArt=9462",
  },
  {
    autor: "Manovich, L.",
    anio: "2013",
    titulo: "El lenguaje de los nuevos medios de comunicación",
    editorial: "Paidós",
    resumen: "El libro fundacional del estudio de los nuevos medios. Esencial para entender el software como cultura.",
    url: "https://archive.org/details/manovich-el-lenguaje-de-los-nuevos-medios",
  },
];

export const conductaItems: ConductaItem[] = [
  {
    num: "01",
    titulo: "Respeto sin excepción",
    desc: "Este espacio es seguro para todas las personas, independientemente de su sexo, género, orientación sexual, identidad de género, religión, etnia, nacionalidad, condición socioeconómica, edad o discapacidad. No se tolera ninguna forma de discriminación, acoso, burla ni exclusión, sea directa o encubierta, en clase o en los canales del curso.",
  },
  {
    num: "02",
    titulo: "Escucha activa",
    desc: "Cuando alguien habla, se escucha. Las intervenciones se respetan aunque no se compartan. El desacuerdo es bienvenido si es respetuoso y fundamentado. Interrumpir, ridiculizar o minimizar la opinión de un compañero no es aceptable.",
  },
  {
    num: "03",
    titulo: "Entregas a tiempo",
    desc: "Los plazos existen para que el curso funcione como sistema. Una entrega atrasada afecta la planificación de la profesora y, en trabajo grupal, a tus compañeros. Ante una dificultad real, la comunicación anticipada es siempre mejor que el silencio. Escribir con 12 horas de anticipación es diferente a escribir después de vencido el plazo.",
  },
  {
    num: "04",
    titulo: "Uso honesto de IA",
    desc: "El curso enseña a trabajar con IA, no a esconderse detrás de ella. Presentar output de IA como trabajo propio sin documentar el proceso no es aprendizaje: es trampa. Toda entrega debe incluir una reflexión sobre las decisiones tomadas y el proceso seguido. La IA es la herramienta; el criterio sigue siendo tuyo.",
  },
  {
    num: "05",
    titulo: "Presencia y participación",
    desc: "Las clases son presenciales y tienen un componente de reflexión crítica que requiere que estés. Llegar tarde de manera reiterada o estar en el teléfono mientras alguien expone es una falta de respeto hacia quien habla. La participación vale un 10% de la nota final y se evalúa de manera continua.",
  },
  {
    num: "06",
    titulo: "Crítica constructiva",
    desc: 'El feedback entre pares es parte del proceso. Criticar un trabajo no es criticar a la persona. Las observaciones deben ser específicas, útiles y respetuosas. "No me gusta" no es feedback. "La jerarquía visual no es clara porque los tamaños son muy similares" sí lo es.',
  },
  {
    num: "07",
    titulo: "Canales y tiempos de respuesta",
    desc: "Toda la comunicación del curso, consultas incluidas, se realiza a través de Canvas (cursos.canvas.uc.cl). El mail personal se usa solo para asuntos administrativos puntuales. Las consultas se responden en horario hábil (lunes a jueves 10:00-18:00, viernes 10:00-14:00). Mensajes enviados fuera de ese horario se responderán el siguiente día hábil. Se espera el mismo respeto hacia los tiempos de la profesora que ella tiene hacia los de los estudiantes.",
  },
  {
    num: "08",
    titulo: "Difícil, no imposible",
    desc: "Este curso tiene un nivel técnico exigente. Si algo no se entiende, la responsabilidad es preguntar, no callarse y desconectarse. No existe pregunta tonta en un campo donde las herramientas cambian cada semana. La vulnerabilidad intelectual es un acto de valentía, no de debilidad.",
  },
];

export const eticaItems: EticaItem[] = [
  {
    num: "01",
    titulo: "Transparencia total",
    desc: "Si usaste IA para generar, editar, investigar o proponer algo, indícalo. Documentar el proceso no resta valor al trabajo: lo hace más sólido y permite evaluar qué decisiones fueron tuyas y cuáles fueron mediadas por la máquina.",
  },
  {
    num: "02",
    titulo: "Autoría consciente",
    desc: "La IA puede producir imágenes, textos o interfaces, pero la responsabilidad creativa, ética y legal sigue siendo humana. No publiques contenido generado por IA como si fuera enteramente obra propia sin revisar, curar y asumir su sentido.",
  },
  {
    num: "03",
    titulo: "Revisión de sesgos",
    desc: "Los modelos replican sesgos presentes en sus datos de entrenamiento. Antes de aprobar un resultado, pregúntate: ¿este contenido refuerza estereotipos? ¿Excluye a alguien? ¿Representa con justicia? El diseñador interviene, no delega el juicio crítico.",
  },
  {
    num: "04",
    titulo: "Privacidad y datos",
    desc: "No ingreses a herramientas de IA información personal sensible de terceros, datos confidenciales de clientes ni contenido que no esté autorizado para compartirse. Lo conveniente no siempre es lo correcto.",
  },
  {
    num: "05",
    titulo: "Impacto laboral y ambiental",
    desc: "Usa la IA de forma que amplíe capacidades humanas sin deshumanizar el trabajo. Considera también el costo computacional y energético de generar contenido masivamente: no todo prompt necesita ser ejecutado.",
  },
  {
    num: "06",
    titulo: "Veracidad y desinformación",
    desc: "La IA genera información plausible, no siempre verdadera. Revisa fuentes, datos y citas antes de presentar cualquier contenido como factual. El diseñador también es responsable de lo que circula.",
  },
];
