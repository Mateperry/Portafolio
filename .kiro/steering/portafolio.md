---
inclusion: always
---

# Reglas del proyecto Portafolio

## Contexto
- Portafolio personal de Mateo Castro con perfil Full Stack. React 19 + Vite 6 + Tailwind 3 + React Router 7. Despliegue en Vercel.
- El plan completo está en docs/PLAN_KIRO.md. Ejecuta SOLO la rama/tarea que se te pida.
- El contrato completo del agente está en AGENTS.md.

## Idioma
- Código, nombres de archivos, componentes, funciones y variables: inglés.
- Textos visibles al visitante: español (no hay versión en inglés).
- Ramas, commits y PR: español con prefijo de tipo. Comentarios en español permitidos.

## Git
- Ramas: main (producción), test (QA), dev (integración), feature/*, fix/*, refactor/*, style/*, chore/*, docs/*.
- Toda rama nueva sale de dev actualizado. Una rama = un prompt = un PR hacia dev.
- Nunca trabajes ni hagas push sobre main o test. Merges permitidos: rama -> dev, dev -> test, test -> main.
- Commits: "tipo: Descripción en español". Tipos: feat, fix, refactor, style, docs, chore. Promociones: "release: Fase N a QA" / "release: Fase N a producción".
- No borres ramas hasta que el cambio llegue a main.
- No hagas force push ni reescribas historial.

## Código
- Componentes pequeños con una sola responsabilidad. Sin duplicar lógica ni datos (proyectos, tecnologías y perfil viven en un solo lugar desde la Fase 3a).
- Sin CSS inline (style={{}}) salvo valores calculados imposibles en Tailwind.
- Desde la Fase 4: prohibido usar colores hex sueltos en componentes; solo tokens del tema (src/styles/tokens.css).
- Vidrio (.glass) en navegación, tarjetas, modales, chips y footer. Formularios, texto largo y código en superficie sólida.
- Respeta prefers-reduced-motion y prefers-reduced-transparency.
- Accesibilidad: un solo h1 por página, foco visible, aria-label en botones con solo ícono, nada de <Link><button> anidados.
- Manejo de errores en formularios y datos: estado de carga, éxito y error con mensaje en español en pantalla.
- Nunca uses alert(), confirm() ni prompt().
- No agregues dependencias sin justificarlo en el resumen.
- No toques archivos fuera del alcance de la tarea.

## Privacidad y secretos
- No publiques edad, dirección, código postal ni municipio exacto.
- Nunca pongas claves en el código. Los secretos del servidor (RESEND_API_KEY, etc.) van sin prefijo VITE_ y solo en Vercel.

## Antes de terminar cada tarea
1. Corre npm run lint y npm run build (y npm test cuando exista). Deben pasar.
2. Entrega este resumen:
   - Qué hiciste
   - Archivos impactados
   - Manejo de errores agregado o verificado
   - Cómo probarlo (local y preview de Vercel)
   - Riesgos o hallazgos
   - ¿Necesitas confirmación? (sí/no)

## Detente y pregunta antes de
- Borrar código, archivos o imágenes; mover o renombrar archivos clave.
- Cambiar textos personales (ubicación, titular, datos de proyectos) o inventar contenido (URLs de demo, imágenes, casos de estudio).
- Reescribir historial de Git o cualquier push a main/test.
- Cualquier decisión con varios caminos válidos.
