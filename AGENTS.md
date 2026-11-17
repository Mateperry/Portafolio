# AGENTS.md — Contrato Operativo del Agente

> **Propósito**: este archivo define cómo debe actuar el agente dentro del proyecto Portafolio de Mateo Castro.  
> **Audiencia**: agentes AI. No está escrito como guía para humanos (para eso está el `README.md`).  
> **Objetivo**: producir cambios correctos, consistentes, mantenibles y seguros, siguiendo arquitectura por features, principios SOLID, flujo Git definido y manejo explícito de errores.
>
> Reglas permanentes resumidas para Kiro: `.kiro/steering/portafolio.md`. Plan de trabajo por fases: `docs/PLAN_KIRO.md`.

---

## Índice

1. [Autoridad y alcance](#1-autoridad-y-alcance)
2. [Rol del agente](#2-rol-del-agente)
3. [Objetivos obligatorios](#3-objetivos-obligatorios)
4. [Contexto técnico del proyecto](#4-contexto-técnico-del-proyecto)
5. [Reglas obligatorias de arquitectura](#5-reglas-obligatorias-de-arquitectura)
6. [Aplicación obligatoria de SOLID](#6-aplicación-obligatoria-de-solid)
7. [Manejo obligatorio de errores](#7-manejo-obligatorio-de-errores)
8. [Reglas de Git y GitHub](#8-reglas-de-git-y-github)
9. [Reglas de commits y Pull Requests](#9-reglas-de-commits-y-pull-requests)
10. [Comportamiento obligatorio del agente](#10-comportamiento-obligatorio-del-agente)
11. [Errores, riesgos y confirmación obligatoria](#11-errores-riesgos-y-confirmación-obligatoria)
12. [Formato obligatorio de salida del agente](#12-formato-obligatorio-de-salida-del-agente)
13. [Checklist obligatorio antes de entregar](#13-checklist-obligatorio-antes-de-entregar)
14. [Acciones prohibidas](#14-acciones-prohibidas)
15. [Criterio de calidad mínimo](#15-criterio-de-calidad-mínimo)

---

## 1. Autoridad y alcance

Este documento es la **fuente principal de verdad para el comportamiento del agente**.

### El agente debe:
- obedecer estas reglas de forma estricta;
- priorizar consistencia del proyecto por encima de preferencias del agente;
- evitar interpretación creativa cuando exista una regla explícita;
- detenerse cuando detecte conflicto, ambigüedad crítica o riesgo alto.

### El agente no debe:
- inventar reglas no definidas;
- inventar contenido personal o profesional (textos de proyectos, URLs de demo, imágenes, titulares, experiencia);
- asumir requisitos no confirmados cuando afecten arquitectura, contratos, datos personales o flujo de despliegue;
- sacrificar mantenibilidad por velocidad.

---

## 2. Rol del agente

El agente actúa como **especialista técnico del proyecto**.

### Perfil esperado del agente
- arquitectura modular por features;
- principios SOLID;
- React moderno (componentes de función, hooks) desacoplado y mantenible;
- React Router 7 (rutas, carga diferida, redirecciones);
- Tailwind CSS con sistema de diseño basado en tokens (CSS variables) y modo claro/oscuro;
- vitromorfismo (glassmorphism) con respaldo accesible;
- funciones serverless en Vercel y validación compartida con zod;
- accesibilidad web (WCAG 2.1 AA) y SEO técnico;
- pruebas con Vitest y Testing Library;
- Git y GitHub con flujo controlado por ramas.

### Enfoque esperado
1. corrección;
2. claridad;
3. mantenibilidad;
4. seguridad del cambio;
5. impacto mínimo y consistente con el proyecto existente.

---

## 3. Objetivos obligatorios

Todo cambio debe buscar simultáneamente:
- mantener código limpio y modular;
- reducir acoplamiento y duplicación (datos de proyectos, tecnologías y perfil en un solo lugar);
- evitar regresiones (URLs existentes, formularios, navegación);
- respetar el flujo Git del proyecto;
- facilitar revisión y mantenimiento futuro;
- incorporar manejo de errores cuando aplique;
- dejar trazabilidad clara del cambio.

---

## 4. Contexto técnico del proyecto

### Producto
Portafolio personal de Mateo Castro con perfil **Desarrollador Full Stack**. Lo revisan reclutadores: debe mostrar en pocos segundos titular, stack por capas, proyectos con backend y calidad de ingeniería.

### Idioma del proyecto
- **Código** (componentes, funciones, variables, archivos): inglés.
- **UI visible al visitante**: español. No hay versión en inglés.
- **Ramas, commits, PR y merges**: `tipo/descripcion-en-español` y `tipo: Descripción en español`.
- Comentarios en español permitidos.

### Tecnologías
- **Frontend**: React 19 + Vite 6 (ESM, `"type": "module"`), React Router 7.
- **Estilos**: Tailwind CSS 3 con tokens del tema (desde la Fase 4).
- **Backend**: función serverless de Vercel `api/contact` con Resend y zod (desde la Fase 6). Antes de eso el formulario usa Formspree.
- **Pruebas**: Vitest + Testing Library (desde la Fase 7a).
- **CI**: GitHub Actions, job `ci` (desde la Fase 2b).
- **Despliegue**: Vercel (`main` = producción; `dev`, `test` y cada PR generan preview).
- **TypeScript**: opcional desde la Fase 3c; si se adopta, todo el código nuevo va en TypeScript.

### Estructura actual (hasta la Fase 3a)

```bash
src/
 ├── App.jsx, main.jsx, index.css
 ├── Components/   # Header, Footer, Contact, modales, ScrollToTop
 ├── Seccion/      # Inicio, Proyectos, Sobremi, Contacto, Creando
 ├── Images/       # imágenes
 └── assets/
```

### Estructura objetivo (Fase 3a)

```bash
src/
 ├── app/                 # App.jsx, routes.jsx
 ├── pages/               # HomePage, AboutPage, ProjectsPage, ProjectDetailPage, ContactPage, NotFoundPage, UnderConstructionPage
 ├── components/
 │   ├── ui/              # Componentes base del sistema de diseño (Button, Card, Modal...)
 │   └── layout/          # Header, Footer, ScrollToTop, ErrorBoundary
 ├── features/
 │   ├── projects/        # ProjectCard, ProjectList, FeaturedProjects, TechBadge
 │   ├── skills/          # SkillsSection
 │   ├── contact/         # ContactForm, useContactForm, contactSchema
 │   └── legal/           # PrivacyPolicyModal, TermsModal
 ├── data/                # projects.js, technologies.js, profile.js
 ├── lib/                 # cn.js, useTheme.js, useModal.js
 ├── assets/images/
 └── styles/              # tokens.css, index.css
api/
 └── contact.js           # función serverless (Fase 6a)
```

Mientras no se ejecute la Fase 3a, el agente respeta la estructura existente y no mueve archivos fuera de la tarea asignada.

---

## 5. Reglas obligatorias de arquitectura

### 5.1 Modularidad obligatoria
Cada dominio vive en `src/features/<dominio>` y expone lo que otros necesitan mediante componentes o hooks. Los datos de contenido (proyectos, tecnologías, perfil) viven solo en `src/data`.

### 5.2 Separación de responsabilidades obligatoria
- presentación (componentes);
- lógica y estado (hooks);
- datos de contenido (`src/data`);
- acceso a red (hooks como `useContactForm`, función `api/contact`);
- estilos (Tailwind con tokens).

### 5.3 Prohibiciones estructurales
El agente **no debe**:
- agregar CSS inline (`style={{}}`) salvo valores calculados imposibles en Tailwind;
- usar colores hex sueltos en componentes desde la Fase 4 (solo tokens; la única excepción es `src/styles/tokens.css`);
- duplicar datos de proyectos, tecnologías o enlaces del perfil;
- crear componentes o funciones gigantes;
- crear archivos innecesarios;
- introducir dependencias injustificadas;
- usar `alert()`, `confirm()` ni `prompt()`;
- agregar scripts inline en `index.html` (única excepción: el script de tema de la Fase 4, documentado).

### 5.4 Ubicación obligatoria de archivos
- Componentes base reutilizables en `src/components/ui`.
- Layout y navegación en `src/components/layout`.
- Lógica y componentes de un dominio en `src/features/<dominio>`.
- Páginas (una por ruta) en `src/pages`.
- Utilidades y hooks genéricos en `src/lib`.
- Contenido en `src/data`.
- Funciones serverless en `api/` en la raíz.

### 5.5 Convención para estilos y diseño
- Tailwind con las clases del tema (`bg-bg`, `text-ink`, `bg-accent`...).
- Clases condicionales con la utilidad `cn` (clsx + tailwind-merge).
- Vidrio (`.glass`, `.glass-strong`): navegación, tarjetas de proyecto y tecnologías, modales, menú móvil, chips y footer.
- Superficie sólida: formularios, texto largo del detalle de proyecto y bloques de código.
- Un solo color de acento (violeta). Sin emojis en títulos. Animaciones de 150–300 ms.
- Respetar `prefers-reduced-motion` y `prefers-reduced-transparency`; respaldo sólido con `@supports not (backdrop-filter: blur(1px))`.
- Contraste mínimo 4,5:1 en claro y oscuro.

### 5.6 Patrón base esperado para React
- Componentes de función con hooks; los hooks siempre antes de cualquier `return`.
- Efectos secundarios (`localStorage`, listeners, scroll) dentro de `useEffect`, con limpieza.
- Estado derivado se calcula, no se duplica en `useState`.
- Actualizaciones de estado inmutables.
- Keys de listas por id o slug, no por índice.

### 5.7 Accesibilidad y SEO
- Un solo `<h1>` por página.
- Foco visible en todo elemento interactivo; no quitar `outline` sin reemplazo.
- Botones con solo ícono llevan `aria-label` en español.
- Un enlace no contiene un botón (`<Link><button>` prohibido).
- Imágenes con `alt` descriptivo; las decorativas con `alt=""`.
- Enlaces externos con `target="_blank" rel="noopener noreferrer"`.

### 5.8 Privacidad
- No se publican edad, dirección, código postal ni municipio exacto.
- No se publican correos o teléfonos distintos a los que Mateo apruebe.

---

## 6. Aplicación obligatoria de SOLID

### 6.1 S — Single Responsibility Principle
Cada componente, hook o función tiene una responsabilidad clara. Un formulario no valida, envía y dibuja todo en un solo bloque: la validación vive en `contactSchema`, el envío en `useContactForm` y la vista en `ContactForm`.

### 6.2 O — Open/Closed Principle
Preferir composición (props, `children`, variantes) sobre lógica rígida. Agregar un proyecto o una tecnología se hace editando `src/data`, sin tocar componentes.

### 6.3 L — Liskov Substitution Principle
Variantes de un componente (`Button` como `<button>`, `Link` o `<a>`; `Card` glass o solid) deben comportarse igual para quien las usa.

### 6.4 I — Interface Segregation Principle
Evitar props o hooks demasiado amplios. Un componente recibe solo lo que usa.

### 6.5 D — Dependency Inversion Principle
Los componentes dependen de hooks (`useTheme`, `useContactForm`) y no de `localStorage`, `fetch` o un proveedor concreto (Formspree, Resend) directamente.

### Regla práctica
SOLID con criterio. No forzar capas o abstracciones artificiales en cambios pequeños.

---

## 7. Manejo obligatorio de errores

### 7.1 El agente debe
- prever fallos razonables (red, respuesta no JSON, variables de entorno faltantes, `localStorage` bloqueado);
- validar entradas en navegador y servidor con el mismo esquema;
- manejar estados nulos, vacíos o inválidos (por ejemplo, un slug de proyecto inexistente muestra la 404);
- mostrar mensajes claros en español al visitante;
- dejar mensajes útiles para diagnóstico técnico (`console.error` solo en desarrollo en el navegador; en el servidor, sí en los logs de Vercel).

### 7.2 El agente no debe
- ignorar errores esperables;
- envolver todo en `try/catch` sin criterio;
- ocultar fallos reales;
- devolver detalles internos o claves en una respuesta HTTP.

### 7.3 En frontend
- estados `idle | sending | success | error` en formularios, con mensaje debajo del botón (`role="status"` para éxito y `role="alert"` para error);
- si la red falla, ofrecer el correo como alternativa;
- `ErrorBoundary` para errores de render (desde la Fase 3b);
- lectura y escritura de `localStorage` con `try/catch` y valor por defecto.

### 7.4 En la función serverless
- validar método (405) y `Content-Type` (415);
- validar el cuerpo con el esquema compartido (400 con errores por campo);
- anti-spam silencioso (honeypot y tiempo mínimo) que responde 200 sin enviar;
- variables de entorno faltantes: 500 con mensaje genérico;
- fallo del proveedor de correo: 502 con mensaje y correo alternativo;
- contenido del visitante tratado como texto plano.

---

## 8. Reglas de Git y GitHub

### 8.1 Estructura de ramas

```bash
main        -> producción (Vercel)
test        -> pruebas QA (preview de Vercel)
dev         -> desarrollo integrado (preview de Vercel)
feature/*   -> nuevas funcionalidades
fix/*       -> correcciones
refactor/*  -> mejoras internas sin cambiar comportamiento
style/*     -> cambios visuales
chore/*     -> mantenimiento, CI, dependencias, limpieza
docs/*      -> documentación
```

### 8.2 Flujo obligatorio

```bash
feature/* · fix/* · refactor/* · style/* · chore/* · docs/*
        ↓  PR (CI en verde)
       dev
        ↓  PR de fase
      test
        ↓  QA aprobado
      main
```

Las tres ramas están protegidas: PR obligatorio, check `ci` obligatorio (desde la Fase 2b), sin force push, sin borrado y sin bypass. Aprobaciones en 0 porque GitHub no permite aprobar el propio PR.

### 8.3 Creación de ramas
Toda rama de trabajo sale de `dev` actualizado. Nombres en minúsculas, español y con guiones. Una rama = un prompt = un PR hacia `dev`.

Ejemplos:

```bash
fix/errores-y-contenido-urgente
style/navegacion-vidrio-y-tema
feature/api-contacto
```

### 8.4 Merges permitidos
- rama de trabajo → `dev`
- `dev` → `test`
- `test` → `main`

### 8.5 Prohibiciones Git
El agente no debe:
- trabajar ni hacer push directo sobre `main` o `test`;
- hacer merge directo a `main` sin pasar por `test`;
- saltarse `dev`;
- hacer force push ni reescribir historial;
- usar `git push` sin nombrar la rama explícitamente;
- proponer eliminación anticipada de ramas de trabajo.

### 8.6 Eliminación de ramas
Una rama de trabajo solo se elimina **después de que su cambio llegó a `main`** (integrada a `dev`, promovida a `test` y luego a `main`). Nunca se eliminan `dev`, `test` ni `main`.

---

## 9. Reglas de commits y Pull Requests

### 9.1 Formato obligatorio de commits

```bash
tipo: Pequeña descripción en español
```

### 9.2 Tipos permitidos

```bash
feat:     nueva funcionalidad
fix:      corrección de error
refactor: mejora interna sin cambiar comportamiento
style:    cambios visuales o de estilos
docs:     documentación
chore:    mantenimiento (CI, dependencias, limpieza)
release:  promoción de fase (dev -> test, test -> main)
```

### 9.3 Ejemplos válidos

```bash
fix: Corregir footer, formularios, 404 y perfil Full Stack
refactor: Reorganizar por features y unificar datos de proyectos
style: Rediseñar navegación y footer con vidrio y selector de tema
feat: Agregar API propia de contacto con validación y anti-spam
release: Fase 1 a QA
```

### 9.4 Pull Requests
Todo PR usa la plantilla `.github/pull_request_template.md`: qué se hizo, por qué, cómo probarlo, riesgos o supuestos y evidencia (capturas antes/después en claro y oscuro, 375 px y 1440 px si hay cambio visual).

### 9.5 Reglas para PR
Un cambio no está listo para merge si:
- no describe impacto;
- no indica cómo validarlo;
- no señala riesgos o supuestos;
- `npm run lint` o `npm run build` (o `npm test` cuando exista) no pasan.

---

## 10. Comportamiento obligatorio del agente

### 10.1 Antes de cambiar código
1. entender la estructura actual;
2. identificar el patrón existente;
3. respetar convenciones ya presentes;
4. detectar dependencias afectadas (por ejemplo, con `grep` antes de borrar);
5. evaluar si el cambio requiere confirmación.

### 10.2 Durante el cambio
- cambios acotados al objetivo de la rama;
- no refactorizar zonas no relacionadas sin justificarlo;
- no introducir complejidad gratuita;
- preservar URLs y comportamiento salvo instrucción explícita.

### 10.3 Después del cambio
- correr `npm run lint` y `npm run build` (y `npm test` cuando exista);
- revisar consistencia estructural, SOLID y manejo de errores;
- detectar efectos secundarios;
- documentar impacto en la salida.

### 10.4 Cuando falte contexto
El agente no inventa (por ejemplo, la URL de demo de un proyecto o el texto de un caso de estudio). Indica la incertidumbre, deja el campo vacío y lo lista en su resumen.

---

## 11. Errores, riesgos y confirmación obligatoria

### 11.1 Si el agente detecta un error
1. notificarlo en la salida;
2. explicar el problema con precisión;
3. indicar impacto o riesgo;
4. proponer una o más formas de proceder;
5. esperar confirmación antes de un cambio sensible.

### 11.2 Casos que requieren confirmación obligatoria
- borrar código, archivos o imágenes no triviales;
- mover o renombrar archivos clave (mapa origen → destino antes de la Fase 3a);
- cambiar textos personales, titular o ubicación;
- cambiar URLs públicas o comportamiento observable;
- alterar el flujo Git o reescribir historial;
- crear cuentas, claves o variables de entorno;
- resolver un error con múltiples caminos válidos;
- eliminar ramas que todavía no llegaron a `main`.

### 11.3 Casos donde puede proceder sin confirmación extra
- corrección localizada;
- mejora de legibilidad sin impacto funcional;
- manejo de errores faltante en un flujo puntual;
- alineación menor con la estructura existente.

---

## 12. Formato obligatorio de salida del agente

```md
## Resultado
- [resumen breve del cambio]

## SOLID aplicado
- [cómo se aplicó cuando corresponda]

## Manejo de errores
- [validaciones, controles o fallbacks agregados o verificados]

## Archivos impactados
- [archivo 1]
- [archivo 2]

## Cómo probarlo
- [pasos en local y en el preview de Vercel]

## Riesgos o hallazgos
- [riesgo, deuda, error detectado o "sin hallazgos críticos"]

## Confirmación requerida
- [sí/no]
- [si aplica, opciones y esperar instrucción]
```

### Regla de transparencia
Si no aplicó un punto, lo indica de forma explícita y breve. No finge verificaciones que no ocurrieron (por ejemplo, "revisado en Safari" si no se abrió Safari).

---

## 13. Checklist obligatorio antes de entregar

- [ ] El código está en inglés (lógica, componentes, archivos).
- [ ] La UI visible al visitante está en español.
- [ ] No se agregó CSS inline sin justificación.
- [ ] No hay colores hex sueltos en componentes (desde la Fase 4).
- [ ] No hay `alert()`, `confirm()` ni `prompt()`.
- [ ] Se respetó la estructura vigente (actual o la de la Fase 3a).
- [ ] No se duplicaron datos ni lógica.
- [ ] Se aplicó SOLID con criterio.
- [ ] Manejo de errores en formularios y datos cuando aplica.
- [ ] Accesibilidad: un h1, foco visible, aria-label, alt.
- [ ] Sin datos personales sensibles.
- [ ] No hay claves en el código; secretos del servidor sin prefijo `VITE_`.
- [ ] `npm run lint` y `npm run build` pasan (y `npm test` cuando exista).
- [ ] El flujo Git respeta `dev -> test -> main`.
- [ ] La salida reporta hallazgos, riesgos y confirmación si corresponde.

---

## 14. Acciones prohibidas

- mezclar idiomas en el código;
- agregar CSS inline sin justificación;
- usar `alert()`, `confirm()` o `prompt()`;
- hacer push directo a `main` o `test`, force push o reescribir historial;
- poner claves o secretos en el código o con prefijo `VITE_`;
- inventar contenido personal, URLs o imágenes;
- publicar datos personales sensibles;
- omitir manejo de errores donde el flujo lo requiera;
- duplicar módulos o datos existentes;
- refactorizar masivamente sin necesidad;
- afirmar que un cambio está listo si detectó un error no resuelto;
- sugerir eliminación de ramas de trabajo antes de que el cambio llegue a `main`.

---

## 15. Criterio de calidad mínimo

Un cambio es aceptable si:
- resuelve el objetivo solicitado;
- respeta arquitectura y modularidad;
- mantiene o mejora legibilidad y accesibilidad;
- incorpora manejo de errores razonable cuando aplica;
- pasa lint y build (y pruebas cuando existan);
- no rompe el flujo Git definido;
- deja trazabilidad clara en la salida del agente.

---

## Regla final

Cuando exista conflicto entre velocidad y calidad estructural, el agente prioriza **corrección, mantenibilidad y seguridad del cambio**. Cuando detecte un error o riesgo relevante, lo **notifica y espera confirmación** antes de un cambio sensible.
