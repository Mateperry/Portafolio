# Portafolio Mateo Castro — Plan de ejecución para Kiro

> Plan completo para que **Kiro** rediseñe y profesionalice el portafolio con perfil **Full Stack**: mismas reglas de trabajo que Crochet Studio (protección de `main`, ramas `main` / `test` / `dev`, una rama = un prompt = un PR), estilo **glassmorphism (vitromorfismo) minimalista**, modo **claro y oscuro**, sitio **solo en español**.
>
> - Repo: https://github.com/Mateperry/Portafolio
> - Estado revisado: solo existe `main` (último commit `2a2a1ea "Correcto correo"`, 25 jul 2025). Revisión hecha el 17 nov 2026.
> - Stack actual: React 19 · Vite 6 · Tailwind 3 · React Router 7 · Formspree · Vercel. JavaScript, sin pruebas ni CI.
> - Stack objetivo: React 19 · Vite · Tailwind 3 con tokens · TypeScript (opcional, Fase 3c) · función serverless en Vercel (`/api/contact`) · Vitest · CI en GitHub Actions.

---

## Índice

1. [Cómo usar este documento](#1-cómo-usar-este-documento)
2. [Preparar el PC y clonar](#2-preparar-el-pc-y-clonar)
3. [Configurar Kiro](#3-configurar-kiro)
4. [Flujo de ramas, protección y PR](#4-flujo-de-ramas-protección-y-pr)
5. [Ciclo de trabajo por cada rama](#5-ciclo-de-trabajo-por-cada-rama)
6. [Diagnóstico: qué se va a arreglar](#6-diagnóstico-qué-se-va-a-arreglar)
7. [Dirección visual: vitromorfismo minimalista](#7-dirección-visual-vitromorfismo-minimalista)
8. [Perfil Full Stack: qué debe demostrar el portafolio](#8-perfil-full-stack-qué-debe-demostrar-el-portafolio)
9. [Fase 0 — Preparación del repo](#fase-0--preparación-del-repo)
10. [Fase 1 — Errores y contenido urgente](#fase-1--errores-y-contenido-urgente)
11. [Fase 2 — Limpieza, imágenes y CI](#fase-2--limpieza-imágenes-y-ci)
12. [Fase 3 — Arquitectura y datos](#fase-3--arquitectura-y-datos)
13. [Fase 4 — Sistema de diseño (puerta de aprobación)](#fase-4--sistema-de-diseño-puerta-de-aprobación)
14. [Fase 5 — Rediseño de pantallas](#fase-5--rediseño-de-pantallas)
15. [Fase 6 — Backend propio (Full Stack)](#fase-6--backend-propio-full-stack)
16. [Fase 7 — SEO, accesibilidad, pruebas y rendimiento](#fase-7--seo-accesibilidad-pruebas-y-rendimiento)
17. [Fase 8 (opcional, más adelante) — Proyectos desde base de datos](#fase-8-opcional-más-adelante--proyectos-desde-base-de-datos)
18. [Checklist de QA por fase](#18-checklist-de-qa-por-fase)
19. [Puntos donde Kiro debe detenerse y preguntar](#19-puntos-donde-kiro-debe-detenerse-y-preguntar)
20. [Problemas comunes](#20-problemas-comunes)

---

## 1. Cómo usar este documento

- Se ejecuta **en orden**: Fase 0 → 1 → 2 → 3 → 4 → (aprobación del estilo) → 5 → 6 → 7. La Fase 8 es opcional.
- Cada fase tiene una o varias **ramas**. Regla: **una rama = un prompt = un PR hacia `dev`**.
- Al cerrar cada fase: PR `dev → test`, QA con la [sección 18](#18-checklist-de-qa-por-fase), luego PR `test → main`.
- Los bloques **"Prompt para Kiro"** se copian completos en el chat de Kiro (modo *Vibe*) o como descripción de un *Spec* (ver 3.3).
- Los bloques **"Comandos"** los ejecutas tú (o Kiro con tu aprobación) en la terminal.
- **Idioma:** todo lo que ve el visitante va en **español** (no habrá versión en inglés). El código (archivos, componentes, funciones, variables) va en inglés, igual que en Crochet Studio, porque es el estándar que esperan los reclutadores. Comentarios en español permitidos.

> Nota: en esta revisión no se pudo correr `npm ci`, `lint` ni `build` (sin acceso al registro npm). La Fase 0 los corre y deja la lista real de errores.

---

## 2. Preparar el PC y clonar

Si ya trabajaste Crochet Studio en este PC, ya tienes Git, Node 20+, GitHub CLI y Kiro. Solo falta:

| Herramienta | Para qué | Verificar |
| --- | --- | --- |
| Vercel CLI | Probar la función `/api/contact` en local (Fase 6) | `vercel --version` |

```bash
npm i -g vercel
vercel login
```

**Comandos (clonar y levantar):**

```bash
git clone https://github.com/Mateperry/Portafolio.git
cd Portafolio
git fetch --all
git branch -a          # hoy solo verás origin/main
npm ci
npm run dev            # http://localhost:5173
npm run lint
npm run build
```

Abre la carpeta `Portafolio` en Kiro (*File → Open Folder*).

---

## 3. Configurar Kiro

### 3.1 Archivos que se agregan en la Fase 0

| Archivo | Para qué |
| --- | --- |
| `docs/PLAN_KIRO.md` | Este plan |
| `AGENTS.md` | Contrato completo del agente (arquitectura, SOLID, errores, Git, salida) |
| `.kiro/steering/portafolio.md` | Reglas permanentes que Kiro lee siempre (`inclusion: always`) |
| `.github/pull_request_template.md` | Plantilla de PR |

Los cuatro vienen listos en este kit. En la Fase 0 se copian tal cual al repo.

### 3.2 Hook opcional de Kiro

En Kiro → *Agent Hooks* puedes crear un hook "al guardar archivos `src/**/*.{js,jsx,ts,tsx}`" con la instrucción: *"Corre npm run lint y reporta solo los errores del archivo guardado"*. No es obligatorio; el CI de la Fase 2 cubre lo mismo en cada PR.

### 3.3 Vibe o Spec

- **Vibe (chat):** ramas pequeñas: 0, 1, 2a, 2b, 5d, 6b.
- **Spec:** ramas grandes: 3a, 3c, 4, 5a, 5b, 5c, 6a, 7a. En Kiro crea un *Spec*, pega el prompt como descripción, revisa `requirements.md`, `design.md` y `tasks.md`, ajústalos y ejecuta las tareas una a una.
- En ambos casos: **revisa cada diff antes de aceptarlo** y rechaza cualquier comando que haga push a `main`/`test`, force push o borre archivos sin que tú lo hayas decidido.

---

## 4. Flujo de ramas, protección y PR

```
feature/* · fix/* · style/* · refactor/* · chore/* · docs/*
        │  PR (CI en verde)
        ▼
       dev   ── integración + preview de Vercel
        │  PR de fase
        ▼
       test  ── QA al cerrar la fase (preview de Vercel)
        │  QA aprobado
        ▼
       main  ── producción en Vercel
```

- **Nombres de rama:** minúsculas, español, guiones. Ej.: `style/navegacion-vidrio`.
- **Commits:** `tipo: Descripción en español`. Tipos: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`. Los PR de promoción usan `release: Fase N a QA` / `release: Fase N a producción`.
- **Merges permitidos:** rama de trabajo → `dev`; `dev` → `test`; `test` → `main`. Nada más.

### 4.1 Protección de ramas en GitHub

GitHub → *Settings* → *Rules* → *Rulesets* → *New branch ruleset* (o *Settings → Branches → Add rule* si usas las reglas clásicas). Crea una regla por rama:

| Regla | `main` | `test` | `dev` |
| --- | --- | --- | --- |
| Require a pull request before merging | Sí | Sí | Sí |
| Required approvals | 0 (ver nota) | 0 (ver nota) | 0 |
| Require status checks to pass → `ci` (después de la Fase 2b) | Sí | Sí | Sí |
| Require branches to be up to date | Sí | Sí | No |
| Block force pushes | Sí | Sí | Sí |
| Restrict deletions | Sí | Sí | Sí |
| Do not allow bypassing / Include administrators | Sí | Sí | Sí |

> **Nota sobre aprobaciones:** el portafolio es un proyecto personal. GitHub **no deja aprobar tu propio PR**, así que con "1 aprobación" te quedarías bloqueado o tendrías que saltarte la regla (lo que anula la protección). Por eso: aprobaciones en 0, pero PR obligatorio + CI obligatorio + sin bypass. Si alguien más va a revisar (un compañero, un mentor), sube `main` y `test` a 1 aprobación.

**Vercel:** *Project → Settings → Git*: *Production Branch* = `main`. `dev`, `test` y cada PR generan *preview* automáticamente.

### 4.2 Plantilla de PR

```markdown
## Qué se hizo
## Por qué
## Cómo probarlo
## Riesgos / supuestos
## Evidencia
<!-- Capturas antes/después en claro y oscuro, móvil (375 px) y escritorio (1440 px) si hay cambio visual -->
```

---

## 5. Ciclo de trabajo por cada rama

```bash
# 1. Partir de dev actualizado
git checkout dev
git pull origin dev

# 2. Crear la rama
git checkout -b <nombre-de-la-rama>

# 3. Pegar el prompt en Kiro, revisar y aceptar los cambios.

# 4. Verificar
npm run lint
npm run build
npm test            # desde la Fase 7a
npm run dev         # probar a mano lo que diga el prompt

# 5. Commit y push
git add -A
git status          # que no vayan .env ni archivos ajenos
git commit -m "tipo: Descripción en español"
git push -u origin <nombre-de-la-rama>

# 6. PR hacia dev
gh pr create --base dev --title "tipo: Descripción" --body-file .github/pull_request_template.md

# 7. Revisar el preview de Vercel, esperar CI en verde y hacer merge a dev.
```

Al **cerrar una fase**:

```bash
gh pr create --base test --head dev --title "release: Fase N a QA"
# QA con la sección 18 en el preview de test, luego:
gh pr create --base main --head test --title "release: Fase N a producción"
```

---

## 6. Diagnóstico: qué se va a arreglar

| Prioridad | Hallazgo | Dónde | Fase |
| --- | --- | --- | --- |
| Alta | El sitio te presenta como **"Desarrollador Front-End"** / "Desarrollador de software"; no hay ningún mensaje Full Stack | `Inicio.jsx`, `Header.jsx` | 1 |
| Alta | Datos personales expuestos en público: edad, ciudad y código postal | `SobreMiInicio.jsx`, `Sobremi.jsx` | 1 |
| Alta | Crochet Studio (tu proyecto más completo: Supabase, RLS, RPC, React Query) **no aparece** en el portafolio | datos de proyectos | 5c / 6b |
| Alta | El footer está invisible (`opacity-0`) hasta llegar al final exacto de la página; en páginas cortas nunca aparece | `Footer.jsx` | 1 |
| Alta | Los datos de los proyectos y el mapa `TECNOLOGIAS` están **copiados en 3 archivos** distintos y ya no coinciden | `ProyectosInicio.jsx`, `Proyectos.jsx`, `Detallesproyectos.jsx` | 3a |
| Media | `alert()` en los dos formularios de contacto (5 llamadas) | `Contacto.jsx`, `Components/Contact.jsx` | 1 |
| Media | Lógica de envío a Formspree duplicada en dos formularios | mismos archivos | 3a |
| Media | IDs de proyecto inconsistentes (`peliculas`, `Deportes`, `Comparadormovil`): mayúsculas en URLs | `Detallesproyectos.jsx` | 3a |
| Media | No hay página 404: cualquier URL inválida muestra una página vacía | `App.jsx` | 1 |
| Media | La página "Creando" habla de "la mejor experiencia en deportes" y enlaza a un portafolio viejo en Framer; usa `<form>` con `type="submit"` para abrir un enlace | `Seccion/Creando.jsx` | 1 |
| Media | Imágenes pesadas: `pcdeports.png` 2,8 MB, `pcpeliculas.png` 2,5 MB, `imagencreando.png` 1,2 MB | `src/Images/` | 2a |
| Media | Sin modo claro/oscuro; fondo fijo `#060912` en `body` | `index.css` | 4 |
| Media | Sin CI, sin pruebas, sin `.env.example`, README es la plantilla de Vite con texto UTF-16 al final | repo | 0, 2b, 7a |
| Baja | Colores hex sueltos (`#252323`, `#181818`, `#1f1f2e`, `#0d0b1f`, `#c1c0c0`, `#111827`...) y mezcla de morado, azul y gris sin sistema | varios | 4, 5 |
| Baja | `src/output.css` (559 líneas) compilado y sin uso | `src/output.css` | 2a |
| Baja | Imágenes sin uso: `Fotoinicio.png`, `movilpeliculas.png`, `proyecto1.avif`, `portafolio2.png`, `src/assets/react.svg`, `public/vite.svg` (verificar con grep) | `src/Images`, `src/assets`, `public` | 2a |
| Baja | Dependencias que el rediseño deja sin uso: `react-scroll` (ya sin uso), `react-parallax-tilt`, `typewriter-effect`, `swiper` | `package.json` | 2a, 5d |
| Baja | CSS de Swiper importado dos veces (`main.jsx` y `Lenguajes.jsx`) | `main.jsx` | 1 |
| Baja | Íconos importados y sin uso (`AiFillGithub`, `AiOutlineTwitter`, `AiFillInstagram`, `FaLinkedinIn`) | `Inicio.jsx` | 1 |
| Baja | Dos `<h1>` por página (logo del header + hero); botón hamburguesa sin `aria-label`; `<Link><button>` anidados | `Header.jsx`, `ProyectosInicio.jsx`, `SobreMiInicio.jsx` | 1, 5 |
| Baja | "© 2025" escrito a mano | `Footer.jsx` | 1 |
| Baja | Sin SEO: sin `meta description`, sin Open Graph, sin `robots.txt` ni `sitemap.xml` | `index.html` | 7b |
| Baja | Carpetas en español y con mayúscula (`Seccion`, `Components`, `Images`); código en español | `src/` | 3a |

Lo que ya está bien: rutas con React Router y `vercel.json` para recargas, `ScrollToTop`, `lang="es"`, formulario con estado de envío, enlaces externos con `rel="noopener noreferrer"`, foto en AVIF.

---

## 7. Dirección visual: vitromorfismo minimalista

**Decisión:** minimalismo frío y técnico con **vidrio esmerilado** sobre un fondo con 2–3 manchas de color muy difuminadas (el vidrio necesita algo detrás para notarse). A diferencia de Crochet Studio, aquí no hay fotos coloridas compitiendo, así que el vidrio se puede usar en más lugares, pero con disciplina:

| Va en vidrio | Va sólido |
| --- | --- |
| Navegación flotante (píldora centrada arriba) | Formularios (legibilidad de lo que escribes) |
| Tarjetas de proyecto y de tecnologías | Texto largo del detalle de proyecto |
| Modales y menú móvil | Bloques de código |
| Chips de tecnologías y filtros | |
| Footer | |

Principios: mucho espacio en blanco, **un solo color de acento** (violeta, que conserva la identidad morada actual), bordes de 1 px semitransparentes, radios generosos, sombras casi invisibles, sin emojis en títulos, animaciones cortas (150–300 ms) de aparición y nada más. Todo respeta `prefers-reduced-motion` y `prefers-reduced-transparency`.

### 7.1 Paleta "Cristal violeta"

Contraste calculado con la fórmula WCAG 2.1 (mínimo 4,5:1 para texto normal):

| Token | Claro | Oscuro | Uso | Contraste sobre `bg` (claro / oscuro) |
| --- | --- | --- | --- | --- |
| `--color-bg` | `#F6F7FB` | `#0A0C14` | Fondo | — |
| `--color-surface` | `#FFFFFF` | `#12151F` | Superficies sólidas | — |
| `--color-surface-muted` | `#EEF0F6` | `#1A1E2B` | Inputs, bloques de código | — |
| `--color-ink` | `#0F1222` | `#E8EAF2` | Texto principal | 17,4:1 / 16,3:1 |
| `--color-ink-muted` | `#4B5368` | `#9AA1B5` | Texto secundario | 7,2:1 / 7,6:1 |
| `--color-line` | `#E3E6EE` | `#262B3A` | Bordes sólidos | — |
| `--color-accent` | `#5B3FD6` | `#A28BFA` | Botón principal, enlace, activo | 6,3:1 / 7,1:1 |
| `--color-accent-ink` | `#FFFFFF` | `#0A0C14` | Texto encima del acento | 6,7:1 / 7,1:1 |
| `--color-accent-soft` | `#ECE8FD` | `#221B45` | Fondos de badge, hover | — |
| `--color-cyan` | `#0E7490` | `#5ED3EA` | Acento secundario (backend, datos) | 5,0:1 / 11,1:1 |
| `--color-success` | `#166534` | `#4ADE80` | Formulario enviado, "uso a diario" | ≥ 6:1 / 11,2:1 |
| `--color-danger` | `#B42318` | `#F97066` | Errores de formulario | 6,1:1 / 7,0:1 |
| `--glass-bg` | `rgba(255,255,255,0.55)` | `rgba(18,21,31,0.55)` | Fondo del vidrio | — |
| `--glass-border` | `rgba(255,255,255,0.65)` | `rgba(255,255,255,0.08)` | Borde del vidrio | — |
| `--glass-highlight` | `rgba(255,255,255,0.9)` | `rgba(255,255,255,0.06)` | Línea de brillo superior (inset) | — |
| `--glass-blur` | `18px` | `18px` | `backdrop-filter` | — |
| `--blob-1` / `--blob-2` / `--blob-3` | violeta / cian / rosa al 25 % | mismos al 18 % | Manchas del fondo | — |

Tipografía: **Geist** (títulos y texto, 400/500/600/700) + **Geist Mono** (etiquetas técnicas, chips, fragmentos de código). Ambas en Google Fonts. Radios 12 / 16 / 24 px. Espaciado en múltiplos de 4.

> Si la paleta no convence, en la Fase 4 se cambian **solo los valores de los tokens**; ningún componente usa colores directos.

---

## 8. Perfil Full Stack: qué debe demostrar el portafolio

Un reclutador que busca Full Stack revisa en 30 segundos: titular, stack por capas, proyectos con backend y código limpio. El plan cubre cada punto:

| Qué busca el reclutador | Cómo lo resuelve el plan | Fase |
| --- | --- | --- |
| Titular claro | "Desarrollador Full Stack · React, Node.js y bases de datos" | 1, 5b |
| Stack por capas, no lista plana | Tecnologías agrupadas en Frontend, Backend, Bases de datos, Herramientas, con nivel honesto: *Uso a diario* / *En proyectos* / *Aprendiendo* (reemplaza "Próximo" / "Aprendido") | 3a, 5b |
| Proyectos con backend real | Crochet Studio (Supabase, RLS, RPC, Auth, Storage) y el Comparador (Node + MySQL) primero, con etiqueta "Full Stack" | 5c, 6b |
| Proyectos contados como caso de estudio | Detalle con: problema, solución, arquitectura (diagrama simple), retos, stack, enlaces a demo y código | 5c |
| Que el propio portafolio tenga backend | Función serverless `/api/contact` con validación compartida front/back, protección anti-spam y pruebas | 6a |
| Calidad de ingeniería visible | CI, pruebas, TypeScript, arquitectura por features, README profesional, Lighthouse ≥ 95 | 2b, 3, 7 |

---

## Fase 0 — Preparación del repo

**Objetivo:** ramas creadas y protegidas, reglas para Kiro, README útil y diagnóstico real de lint/build.

**Lista cuando:** existen `dev` y `test` apuntando al mismo commit que `main`; las tres ramas están protegidas; existen `AGENTS.md`, `.kiro/steering/portafolio.md`, `docs/PLAN_KIRO.md` y `.github/pull_request_template.md`; un desarrollador nuevo levanta el proyecto solo con el README.

### 0.1 Crear y proteger las ramas (lo haces tú, una vez)

**Comandos:**

```bash
git checkout main
git pull origin main
git checkout -b dev
git push -u origin dev
git checkout -b test
git push -u origin test
git checkout dev
```

Luego en GitHub configura la protección de `main`, `test` y `dev` según la [sección 4.1](#41-protección-de-ramas-en-github) (el check `ci` se marca como requerido después de la Fase 2b, porque todavía no existe). En Vercel confirma *Production Branch* = `main`.

### 0.2 Rama `docs/plan-agents-y-readme`

Antes de pegar el prompt, copia a la rama los 4 archivos del kit: `docs/PLAN_KIRO.md`, `AGENTS.md`, `.kiro/steering/portafolio.md`, `.github/pull_request_template.md`.

**Prompt para Kiro:**

```text
Estás en el repo Portafolio (React 19 + Vite 6 + Tailwind 3 + React Router 7, desplegado en Vercel). Ya estás en la rama docs/plan-agents-y-readme creada desde dev. Ya copié AGENTS.md, .kiro/steering/portafolio.md, docs/PLAN_KIRO.md y .github/pull_request_template.md: léelos y síguelos; no los modifiques.

Tareas:
1. Reemplaza README.md (hoy es la plantilla de Vite y tiene texto UTF-16 al final; guárdalo en UTF-8) por uno en español: qué es el portafolio, stack, requisitos (Node 20+), cómo instalar y correr, variables de entorno, scripts, estructura de carpetas actual y objetivo (ver AGENTS.md), flujo de ramas main/test/dev con protección, cómo desplegar en Vercel. Enlaza a docs/PLAN_KIRO.md y AGENTS.md.
2. Crea .env.example vacío por ahora con un comentario: "# Las variables se agregan en la Fase 6 (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL). Nunca uses el prefijo VITE_ para secretos."
3. Verifica que .gitignore incluya .env, .env.local y .vercel.
4. Corre npm ci, npm run lint y npm run build. NO arregles nada de src/: lista cada error y warning (archivo, línea, regla) en tu resumen para usarlos en la Fase 1.

No toques nada dentro de src/. Entrega el resumen con el formato de salida de AGENTS.md.
```

**Commit:** `docs: Agregar plan de Kiro, AGENTS, reglas y README`

**Cierre de fase:** PR a `dev` → PR `dev → test` → PR `test → main`. Así las tres ramas quedan con las reglas desde el inicio.

---

## Fase 1 — Errores y contenido urgente

**Rama:** `fix/errores-y-contenido-urgente`

**Lista cuando:** el sitio dice "Full Stack"; no hay edad ni código postal visibles; el footer se ve siempre; una URL inválida muestra la página 404; no hay `alert()`; `lint` y `build` pasan.

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Estás en la rama fix/errores-y-contenido-urgente (desde dev). Cambios acotados, SIN reorganizar carpetas ni rediseñar (eso es la Fase 3 y la Fase 5).

1. Perfil: en src/Seccion/Inicio/Inicio.jsx cambia "Desarrollador Front-End" por "Desarrollador Full Stack" y en src/Components/Header.jsx cambia "Desarrollador de software" por "Desarrollador Full Stack". En el Typewriter usa: "React y TypeScript", "Node.js y Express", "Supabase y PostgreSQL", "MySQL y MongoDB".
2. Privacidad: en src/Seccion/Inicio/SobreMiInicio.jsx y src/Seccion/Sobremi/Sobremi.jsx quita la edad, el código postal y el municipio exacto. Deja como ubicación solo "Cundinamarca, Colombia · Disponible remoto o híbrido" si existe un campo de ubicación. Muéstrame el texto final en el resumen.
3. Footer (src/Components/Footer.jsx): quita la lógica de scroll que lo oculta; debe verse siempre. El año sale de new Date().getFullYear(). Agrega un estilo de foco visible a los botones (quita focus:outline-none).
4. Formularios: reemplaza los 5 alert() de src/Seccion/Contacto/Contacto.jsx y src/Components/Contact.jsx por un mensaje en pantalla debajo del botón (role="status" para éxito y role="alert" para error), en español. Si response.json() falla, muestra un mensaje genérico; no rompas el flujo.
5. 404: crea src/Seccion/NotFound.jsx (título "Página no encontrada", texto corto y enlace "Volver al inicio") y regístralo como <Route path="*">. En Detallesproyectos.jsx, cuando el proyecto no exista, muestra el mismo componente.
6. src/Seccion/Creando.jsx: quita el texto de "deportes" y el enlace al portafolio de Framer. Texto: "Esta sección está en construcción" + enlace "Volver al inicio". Quita el <form> y usa un Link.
7. Header: agrega aria-label="Abrir menú" y aria-label="Cerrar menú" a los botones del menú móvil; el nombre del logo pasa de <h1> a <span> o <p> (el único h1 de cada página es el título principal). Cierra el menú móvil con la tecla Escape.
8. Enlaces anidados: reemplaza los <Link><button>...</button></Link> de ProyectosInicio.jsx y SobreMiInicio.jsx por un solo <Link> con las mismas clases. Agrega target="_blank" rel="noopener noreferrer" al enlace del CV en SobreMiInicio.jsx.
9. Limpieza mínima: quita imports sin uso en Inicio.jsx (AiFillGithub, AiOutlineTwitter, AiFillInstagram, FaLinkedinIn, React si no se usa) y el import duplicado del CSS de Swiper en main.jsx (déjalo solo en Lenguajes.jsx). Cambia el alt="avatar" por alt="Foto de Mateo Castro".
10. Corrige los errores de lint de la Fase 0 que estén en los archivos tocados.

Verifica con npm run lint y npm run build. En el resumen explica cómo comprobar cada punto en el preview de Vercel.
```

**Prueba manual:** abrir `/cualquier-cosa` → 404; abrir `/proyecto/no-existe` → 404; enviar el formulario con internet desactivado (DevTools → Offline) → mensaje en pantalla; el footer se ve en `/contacto`.

**Commit:** `fix: Corregir footer, formularios, 404 y perfil Full Stack`

**Cierre de fase:** PR `dev → test`, QA, PR `test → main`.

---

## Fase 2 — Limpieza, imágenes y CI

Dos ramas. Orden: **2b → 2a** (así el CI ya valida la limpieza).

**Lista cuando:** cada PR muestra el check `ci` en verde; el check es obligatorio en las tres ramas; ninguna imagen pesa más de 300 KB; no hay archivos ni dependencias sin uso.

### 2b — `chore/ci-lint-build`

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama chore/ci-lint-build desde dev.

1. Crea .github/workflows/ci.yml con un job llamado "ci" que corra en pull_request hacia dev, test y main, y en push a dev:
   - runs-on ubuntu-latest, actions/checkout@v4, actions/setup-node@v4 con node-version-file .nvmrc y cache npm.
   - npm ci, npm run lint, npm run build.
   - Deja comentado el paso "npm test" con la nota "se activa en la Fase 7a".
2. Agrega "engines": { "node": ">=20" } en package.json y un archivo .nvmrc con 20.
3. Documenta en el README que el check "ci" debe estar en verde para hacer merge.
```

**Después del merge (tú):** en GitHub marca el check `ci` como requerido en las reglas de `dev`, `test` y `main`.

**Commit:** `chore: Agregar CI de lint y build`

### 2a — `chore/limpieza-y-optimizacion-imagenes`

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama chore/limpieza-y-optimizacion-imagenes desde dev.

1. Busca con grep en todo el repo referencias a: src/output.css, Fotoinicio, movilpeliculas, proyecto1, portafolio2, react.svg, vite.svg, portafolio.png y al paquete react-scroll. Muéstrame la lista de lo que NO se usa y ESPERA mi confirmación antes de borrar.
2. Con mi confirmación: elimina esos archivos y desinstala react-scroll (npm uninstall).
3. Crea scripts/optimize-images.mjs usando sharp (devDependency): recibe carpeta de entrada y de salida por argumentos; por cada imagen genera <nombre>.webp de máximo 1600 px de ancho y calidad 80. Se corre a mano, no en el build. Agrega el script "images:optimize" en package.json.
4. Corre el script sobre src/Images y reemplaza en los componentes las importaciones de pcdeports.png, pcpeliculas.png, pccomparador.png e imagencreando.png por sus versiones .webp. Borra los PNG originales solo después de verificar que el build pasa y las imágenes se ven. Reporta peso antes/después de cada una.
5. Agrega loading="lazy" y decoding="async" a todas las imágenes que no estén en la primera pantalla, y width/height para evitar saltos de diseño.
6. Documenta en el README cómo optimizar imágenes nuevas.

NO reescribas el historial de Git.
```

**Commit:** `chore: Eliminar archivos sin uso y optimizar imágenes`

**Cierre de fase:** PR `dev → test`, QA, PR `test → main`.

---

## Fase 3 — Arquitectura y datos

Ramas: **3a → 3b → 3c**. No cambia nada visible.

**Lista cuando:** los proyectos y tecnologías existen en un solo lugar; la estructura de carpetas es la de AGENTS.md; el código está en inglés; (si se hace 3c) el proyecto compila con TypeScript estricto.

### 3a — `refactor/estructura-por-features` (usar Spec)

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama refactor/estructura-por-features desde dev. NO cambies cómo se ve el sitio: el resultado visual debe ser idéntico.

Objetivo: estructura por features, una sola fuente de datos y código en inglés.

1. Antes de mover nada, entrégame el mapa archivo origen → archivo destino y ESPERA mi confirmación. Estructura destino:
   src/
    ├── app/                 App.jsx, routes.jsx
    ├── pages/               HomePage, AboutPage, ProjectsPage, ProjectDetailPage, ContactPage, NotFoundPage, UnderConstructionPage
    ├── components/ui/       (vacío por ahora; se llena en la Fase 4)
    ├── components/layout/   Header, Footer, ScrollToTop, Modal
    ├── features/projects/   ProjectCard, ProjectList, FeaturedProjects, TechBadge
    ├── features/skills/     SkillsSection
    ├── features/contact/    ContactForm, useContactForm, contactSchema (validación)
    ├── features/legal/      PrivacyPolicyModal, TermsModal
    ├── data/                projects.js, technologies.js, profile.js
    ├── lib/                 cn.js (clsx + tailwind-merge), slugify si hace falta
    ├── assets/images/       imágenes (antes src/Images)
    └── styles/              index.css
2. src/data/technologies.js: un solo registro { key, label, icon, category: "frontend" | "backend" | "database" | "tools", level: "daily" | "projects" | "learning" }. Las etiquetas visibles en español ("Uso a diario", "En proyectos", "Aprendiendo") salen de un mapa LEVEL_LABELS en el mismo archivo. Los colores de marca de los íconos se quitan aquí (en la Fase 5 los íconos usan el color del tema).
3. src/data/projects.js: un solo arreglo { slug, title, summary, description: string[], highlights: string[], stack: string[] (keys de technologies), kind: "fullstack" | "frontend", image, demoUrl, repoUrl, videoUrl?, docsUrl?, featured: boolean }. Slugs en minúscula con guiones: "peliculas", "deportes", "comparador-moviles". Une la información de los 3 archivos actuales sin perder textos (usa la versión más completa de cada uno).
4. Compatibilidad de URLs: /proyecto/Deportes y /proyecto/Comparadormovil deben seguir funcionando. Crea un mapa LEGACY_SLUGS en projects.js y en ProjectDetailPage redirige con <Navigate replace> al slug nuevo.
5. src/data/profile.js: nombre, titular, resumen, correo, enlaces (GitHub, LinkedIn si existe, CV). Header, Inicio, Sobre mí y Contacto leen de aquí (hoy el enlace del CV está repetido en 4 lugares).
6. features/contact: un solo hook useContactForm({ endpoint }) con estados idle | sending | success | error y validación previa con contactSchema (nombre 2–80, correo válido, mensaje 10–2000). Lo usan la página de Contacto y el modal de contacto; elimina la lógica duplicada.
7. Instala clsx y tailwind-merge (justificado: utilidad cn para clases condicionales, igual que Crochet Studio).
8. Componentes, archivos, funciones y variables en inglés. Textos visibles en español sin cambios.

Verifica con npm run lint y npm run build y revisa a mano que cada página se ve igual que antes.
```

**Commit:** `refactor: Reorganizar por features y unificar datos de proyectos`

### 3b — `refactor/rutas-y-carga-diferida`

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama refactor/rutas-y-carga-diferida desde dev.

1. En src/app/routes.jsx carga las páginas con React.lazy + Suspense (excepto HomePage). El fallback es un esqueleto simple con el mismo alto que el header y un bloque de contenido, sin spinners de librerías.
2. Agrega un ErrorBoundary en src/components/layout/ErrorBoundary.jsx que muestre "Algo salió mal" con un botón "Volver al inicio" y registre el error con console.error solo en desarrollo (import.meta.env.DEV).
3. Mueve el estado de los 3 modales del footer de App.jsx a un hook useModal() reutilizable en src/lib/useModal.js (abrir, cerrar, isOpen). App.jsx no debe tener lógica de modales.
```

**Commit:** `refactor: Carga diferida de páginas y manejo de errores de render`

### 3c — `refactor/migrar-a-typescript` (usar Spec) — opcional, recomendado

> Recomendado para el perfil Full Stack: la mayoría de ofertas piden TypeScript. Si prefieres no hacerlo ahora, salta esta rama; el resto del plan funciona igual en JavaScript.

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama refactor/migrar-a-typescript desde dev. Sin cambios visuales ni de comportamiento.

1. Instala typescript, @types/node y typescript-eslint. Crea tsconfig.json (strict: true, jsx: react-jsx, moduleResolution: bundler, noEmit) y tsconfig.node.json para vite.config.ts.
2. Migra archivo por archivo de .js/.jsx a .ts/.tsx empezando por src/data y src/lib, luego features, components y pages. Tipos en src/data/types.ts: Project, Technology, TechCategory, TechLevel, Profile.
3. Prohibido usar "any" salvo en un único lugar justificado con comentario.
4. Actualiza eslint.config.js con typescript-eslint y agrega el script "typecheck": "tsc --noEmit". Agrega npm run typecheck al CI.
5. Actualiza AGENTS.md y el steering: el código nuevo va en TypeScript.
```

**Commit:** `refactor: Migrar el proyecto a TypeScript`

**Cierre de fase:** PR `dev → test`, QA (el sitio se ve idéntico), PR `test → main`.

---

## Fase 4 — Sistema de diseño (puerta de aprobación)

**Rama:** `feature/sistema-de-diseno` (usar Spec). No cambia ninguna pantalla existente.

**Lista cuando:** apruebas `/style-guide` en celular y escritorio, en claro y oscuro; todos los textos cumplen 4,5:1; el vidrio se nota sin perder legibilidad; no hay parpadeo de tema al recargar.

**Puerta de decisión:** si la paleta o el vidrio no convencen, se cambian **solo los valores de los tokens** en esta rama. No se pasa a la Fase 5 sin tu aprobación escrita en el PR.

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama feature/sistema-de-diseno desde dev. NO modifiques pantallas existentes.

Dirección: vitromorfismo (glassmorphism) minimalista. Fondo con 3 manchas de gradiente muy difuminadas; vidrio en navegación, tarjetas, modales, chips y footer; formularios y texto largo sólidos. Un solo acento violeta. Mucho espacio en blanco.

1. src/styles/tokens.css con variables en :root (claro) y [data-theme="dark"], más @media (prefers-color-scheme: dark) aplicado a :root:not([data-theme="light"]). Valores exactos de la sección 7.1 de docs/PLAN_KIRO.md. Colores como canales RGB (ej. --color-accent: 91 63 214) para que Tailwind soporte opacidad (bg-accent/20). Radios --radius-sm 12px, --radius-md 16px, --radius-lg 24px; sombras --shadow-sm y --shadow-md muy suaves.
2. Fondo: en src/styles/index.css, body usa bg-bg text-ink y un body::before fijo con 3 radial-gradient (--blob-1, --blob-2, --blob-3) a gran tamaño, sin imágenes ni JS. Quita el background-color #060912.
3. tailwind.config.js: theme.extend.colors (bg, surface, surface-muted, ink, ink-muted, line, accent, accent-ink, accent-soft, cyan, success, danger) con rgb(var(--x) / <alpha-value>); borderRadius y boxShadow desde los tokens; fontFamily sans ['Geist', 'system-ui', 'sans-serif'] y mono ['Geist Mono', 'ui-monospace', 'monospace']; darkMode: ['selector', '[data-theme="dark"]'].
4. index.html: carga Geist (400, 500, 600, 700) y Geist Mono (400, 500) desde Google Fonts con display=swap y preconnect. Agrega <meta name="color-scheme" content="light dark">.
5. Sin parpadeo de tema: en index.html, antes del script de React, un script inline pequeño que lee localStorage "theme" dentro de try/catch y pone data-theme en <html>. Es la ÚNICA excepción permitida de script inline; documéntala con un comentario.
6. Utilidades en @layer components:
   - .glass: background var(--glass-bg); border 1px solid var(--glass-border); box-shadow inset 0 1px 0 var(--glass-highlight), var(--shadow-sm); backdrop-filter y -webkit-backdrop-filter blur(var(--glass-blur)) saturate(160%).
   - .glass-strong: igual con más opacidad (para menú móvil y modales).
   - Respaldo sólido con @supports not (backdrop-filter: blur(1px)) y con @media (prefers-reduced-transparency: reduce).
7. Componentes en src/components/ui (accesibles, foco visible con anillo del acento, sin hex):
   Button (variants primary / secondary / ghost; sizes sm / md; estado loading; puede renderizar como Link o <a> con prop "as" o "href"), Card (variant glass | solid), Badge (neutral / accent / cyan / success), Chip (para tecnologías, con ícono opcional y fuente mono), Input, Textarea (label, mensaje de error y aria-describedby), Modal (vidrio, cierre con Escape y clic fuera, foco atrapado, devuelve el foco al cerrar), Section (contenedor con título, subtítulo y espaciado estándar), Skeleton, ThemeToggle (claro / oscuro / sistema, guarda en localStorage con try/catch, ícono sol/luna, aria-label en español).
8. Hook useTheme en src/lib/useTheme.js que exponga theme, resolvedTheme y setTheme, y escuche cambios de prefers-color-scheme cuando el modo es "sistema".
9. Página /style-guide (registrada solo si import.meta.env.DEV) que muestre: muestras de color con su contraste calculado, escala tipográfica, todos los componentes en claro y oscuro, una cuadrícula de 3 tarjetas de proyecto reales de src/data/projects con una barra de navegación de vidrio fija encima, y un formulario de ejemplo.
10. En el resumen, pasos para revisar /style-guide en 375 px y 1440 px, claro y oscuro, en Chrome y Safari (Safari necesita -webkit-backdrop-filter).
```

**Validación (tú):** abre `/style-guide` en local en celular real y en escritorio. Aprueba o pide ajustes de tokens. Escribe la decisión en el PR.

**Commit:** `feat: Agregar sistema de diseño con vidrio y tema claro/oscuro`

**Cierre de fase:** PR `dev → test`, QA, PR `test → main` (no cambia nada visible para el visitante).

---

## Fase 5 — Rediseño de pantallas

Ramas: **5a → 5b → 5c → 5d** (en ese orden). Todas usan solo tokens y componentes de `src/components/ui`.

**Lista cuando:** cero hex sueltos en `src/`; claro y oscuro legibles en todas las páginas; navegación usable con teclado; Lighthouse móvil Accesibilidad ≥ 95 en el preview.

### 5a — `style/navegacion-vidrio-y-tema` (usar Spec)

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama style/navegacion-vidrio-y-tema desde dev, con el sistema de diseño de la Fase 4 integrado. Solo tokens y componentes de src/components/ui.

1. Header: barra flotante tipo píldora centrada (max-w-5xl, margen superior, .glass, rounded-full), fija arriba. Izquierda: monograma "MC" + "Mateo Castro" (oculto el nombre en móvil). Centro: Inicio, Proyectos, Sobre mí, Contacto con indicador activo sutil (fondo accent-soft). Derecha: ThemeToggle, ícono de GitHub (con aria-label) y Button primary "CV".
2. Menú móvil: botón con aria-expanded y aria-controls; panel .glass-strong que baja desde la barra (no lateral), con los mismos enlaces, cierre con Escape, clic fuera y al navegar; foco atrapado mientras está abierto.
3. Al hacer scroll más de 16 px, la barra aumenta un poco su opacidad (clase condicional con cn, sin estilos inline).
4. Footer: .glass, una línea con © año, enlaces a Política de privacidad, Términos y Contacto (abren los modales nuevos basados en Modal de ui), y los íconos sociales de profile.js.
5. Modales legales y de contacto migrados al Modal de ui.
6. Enlace "Saltar al contenido" visible al recibir foco, que lleva a <main id="contenido">.
```

**Commit:** `style: Rediseñar navegación y footer con vidrio y selector de tema`

### 5b — `style/inicio-minimalista` (usar Spec)

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama style/inicio-minimalista desde dev. Solo tokens y componentes de ui. Datos desde src/data.

1. Hero: a la izquierda, etiqueta mono pequeña "Disponible para trabajar" con punto verde (success), h1 "Mateo Castro", subtítulo "Desarrollador Full Stack" en text-accent, una frase de valor de máximo 2 líneas (desde profile.js) y dos botones: primary "Ver proyectos" (→ /proyectos) y secondary "Contactarme" (→ /contacto). A la derecha, la foto en una Card glass con radio grande. Sin Typewriter ni Tilt.
2. Sección "Stack" (reemplaza "Lenguajes y Tecnologías"): 4 columnas glass (Frontend, Backend, Bases de datos, Herramientas) en escritorio y acordeón o lista en móvil; cada tecnología es un Chip con ícono en color del tema y el nivel como Badge (Uso a diario / En proyectos / Aprendiendo). Sin Swiper. Sin el texto "@Mateo Castro" repetido.
3. Sección "Proyectos destacados": los proyectos con featured=true en una cuadrícula de Cards glass (imagen arriba, Badge "Full Stack" o "Frontend", título, resumen, chips del stack, enlaces "Ver caso" y "Código"). Botón "Ver todos los proyectos".
4. Sección "Sobre mí" corta: 3–4 líneas desde profile.js y enlace "Conocer más".
5. Animación: aparición suave (opacity + translateY 8px, 250 ms) al entrar en pantalla, solo si no hay prefers-reduced-motion.
6. Quita del Inicio cualquier color hex y cualquier emoji en títulos.
```

**Commit:** `style: Rediseñar la página de inicio`

### 5c — `style/proyectos-como-caso-de-estudio` (usar Spec)

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama style/proyectos-como-caso-de-estudio desde dev.

1. ProjectsPage: título, filtro con Chips (Todos / Full Stack / Frontend) que actualiza ?tipo= en la URL, cuadrícula de ProjectCard (la misma de Inicio). Estado vacío en español si un filtro no tiene proyectos.
2. Amplía el modelo de src/data/projects con campos opcionales: problem, solution, architecture (lista de capas, ej. ["React (Vercel)", "API REST Node/Express", "MySQL"]), challenges (string[]), role. Si un proyecto no los tiene, esa sección no se muestra (no inventes contenido: deja los campos vacíos y lístalos en el resumen para que yo los complete).
3. ProjectDetailPage como caso de estudio: encabezado (Badge de tipo, título, resumen, botones "Ver demo" y "Ver código"), imagen en Card glass, y secciones "El problema", "La solución", "Arquitectura" (diagrama simple hecho con divs y flechas: cajas glass conectadas, sin librerías), "Retos", "Stack" (chips) y video si existe (miniatura que carga el iframe de YouTube solo al hacer clic, con youtube-nocookie.com). Texto largo en superficie sólida.
4. Navegación al final: "Proyecto anterior / siguiente".
5. Orden de proyectos: Full Stack primero.
```

**Commit:** `style: Rediseñar proyectos como casos de estudio`

### 5d — `style/sobre-mi-contacto-y-limpieza`

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama style/sobre-mi-contacto-y-limpieza desde dev.

1. AboutPage: bloque de presentación (foto + texto de profile.js), "Formación" (línea de tiempo simple), "Qué estoy aprendiendo", "Intereses". Sin datos personales sensibles.
2. ContactPage: formulario en Card sólida con Input/Textarea de ui, validación en vivo al salir del campo, mensajes de error en español, botón con estado loading y mensaje de éxito/error con role="status"/"alert". Al lado, tarjeta glass con correo (enlace mailto), GitHub, LinkedIn y CV.
3. NotFoundPage y UnderConstructionPage con el nuevo estilo.
4. Limpieza: con grep confirma que typewriter-effect, react-parallax-tilt y swiper ya no se usan y desinstálalos. Migra framer-motion a "motion" (import desde "motion/react") como en Crochet Studio, o elimínalo si ya no se usa. Confirma con grep que no queda ningún hex (#xxxxxx) en src/ fuera de styles/tokens.css.
5. Reporta el tamaño del bundle (salida de npm run build) antes y después.
```

**Commit:** `style: Rediseñar sobre mí y contacto y quitar dependencias sin uso`

**Cierre de fase:** PR `dev → test`, QA completo en claro y oscuro, PR `test → main`.

---

## Fase 6 — Backend propio (Full Stack)

Ramas: **6a → 6b**.

**Lista cuando:** el formulario envía a `/api/contact` (tu propio endpoint) y llega el correo; la validación es la misma en navegador y servidor; los secretos solo están en Vercel; Crochet Studio aparece como proyecto destacado.

### 6a — `feature/api-contacto` (usar Spec)

> **Antes de empezar (tú):** crea una cuenta en https://resend.com (plan gratis), genera una API key y guárdala. Para pruebas puedes enviar desde `onboarding@resend.dev` a tu propio correo.

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama feature/api-contacto desde dev.

Objetivo: reemplazar Formspree por una función serverless propia en Vercel.

1. Instala zod (justificado: un solo esquema de validación compartido entre navegador y servidor) y resend.
2. Reescribe src/features/contact/contactSchema con zod: name (2–80), email (email válido, máx 120), message (10–2000), website (honeypot: debe venir vacío), startedAt (número: timestamp de cuando se abrió el formulario).
3. Crea api/contact.js (o .ts si se hizo la Fase 3c) en la raíz del repo, con el formato de funciones de Vercel (export default async function handler(req, res)):
   - Solo acepta POST (405 en otro caso) y Content-Type application/json (415).
   - Valida con el mismo contactSchema importado por ruta relativa. Si falla: 400 con { ok: false, errors: { campo: "mensaje en español" } }.
   - Anti-spam: si website no está vacío o el envío llega menos de 3 segundos después de startedAt, responde 200 { ok: true } sin enviar nada (no dar pistas al bot).
   - Envía el correo con Resend usando process.env.RESEND_API_KEY, CONTACT_TO_EMAIL y CONTACT_FROM_EMAIL. Reply-To = correo del visitante. Escapa el contenido (texto plano, no HTML del usuario).
   - Si falta alguna variable de entorno: 500 con mensaje genérico al usuario y console.error con el detalle técnico.
   - Si Resend falla: 502 { ok: false, message: "No pudimos enviar tu mensaje. Escríbeme directo a <correo>." }.
   - Nunca devuelvas detalles internos ni la API key en la respuesta.
4. vercel.json: cambia el rewrite para que NO capture /api: { "source": "/((?!api/).*)", "destination": "/index.html" }.
5. useContactForm: envía JSON a /api/contact, agrega el campo honeypot oculto (visualmente oculto y con tabIndex -1, aria-hidden, autocomplete off) y startedAt. Muestra los errores por campo que devuelva el servidor. Si la red falla, muestra el correo como alternativa.
6. .env.example: RESEND_API_KEY=, CONTACT_TO_EMAIL=, CONTACT_FROM_EMAIL=. Sin prefijo VITE_ (con VITE_ quedarían expuestas en el navegador).
7. README: cómo probar en local con "vercel dev" (npm run dev no sirve /api), cómo configurar las 3 variables en Vercel → Settings → Environment Variables para Production y Preview, y diagrama simple del flujo navegador → /api/contact → Resend → correo.
8. Quita la URL de Formspree del código.

NO agregues la API key al repo. En el resumen, lista exactamente qué variables debo crear en Vercel.
```

**Después del merge (tú):** en Vercel → *Settings → Environment Variables*, crea `RESEND_API_KEY`, `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL` para *Preview* y *Production*. Haz un envío de prueba en el preview de `dev`.

**Commit:** `feat: Agregar API propia de contacto con validación y anti-spam`

### 6b — `feature/agregar-crochet-studio-y-contenido`

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama feature/agregar-crochet-studio-y-contenido desde dev.

1. Agrega Crochet Studio a src/data/projects como primer proyecto destacado (kind "fullstack"):
   - Resumen: tienda online de amigurumis con catálogo por categorías, carrito y panel de administración.
   - Stack: React 19, Vite, Tailwind CSS, React Query, Supabase (PostgreSQL, Auth, Storage, RLS, funciones RPC), Vercel. Agrega a technologies.js las que falten (supabase, postgresql, react-query, vercel, typescript, zod).
   - Arquitectura: ["React + React Query (Vercel)", "Supabase Auth", "PostgreSQL con RLS y funciones RPC", "Supabase Storage"].
   - repoUrl: https://github.com/Mateperry/CrochetStudio
   - demoUrl e imagen: PREGÚNTAME; no los inventes. Mientras tanto deja demoUrl vacío (el botón "Ver demo" no se muestra si está vacío) y usa un placeholder neutro.
2. Agrega el propio portafolio como proyecto (kind "fullstack"): React, Tailwind, API serverless en Vercel, Resend, zod, Vitest, CI. repoUrl https://github.com/Mateperry/Portafolio.
3. Revisa los textos de problem / solution / challenges que quedaron vacíos en la Fase 5c y propón un borrador para cada proyecto basado SOLO en la información del repo. Márcalos como borrador en el resumen para que yo los apruebe.
4. Actualiza el titular y resumen de profile.js para resaltar el perfil Full Stack (te propongo uno, yo lo apruebo).
```

**Commit:** `feat: Agregar Crochet Studio y casos de estudio Full Stack`

**Cierre de fase:** PR `dev → test`, QA (incluye envío real del formulario en el preview de `test`), PR `test → main`.

---

## Fase 7 — SEO, accesibilidad, pruebas y rendimiento

Ramas: **7a → 7b → 7c**.

**Lista cuando:** CI corre lint, build y pruebas; Lighthouse móvil ≥ 95 en Accesibilidad, Buenas prácticas y SEO, y ≥ 90 en Rendimiento; al compartir el enlace en WhatsApp/LinkedIn se ve una tarjeta con imagen.

### 7a — `chore/pruebas-unitarias` (usar Spec)

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama chore/pruebas-unitarias desde dev.

1. Instala vitest, @testing-library/react, @testing-library/user-event, @testing-library/jest-dom y jsdom. Configura vitest en vite.config (environment jsdom, setupFiles). Scripts "test" y "test:watch".
2. Pruebas:
   - contactSchema: casos válidos e inválidos de cada campo y honeypot.
   - api/contact: 405, 415, 400 con errores por campo, honeypot y envío rápido devuelven 200 sin enviar, falta de variables → 500, fallo de Resend → 502, éxito → 200 (mock de resend).
   - useContactForm / ContactForm: muestra errores, estado loading, éxito y error de red.
   - data: todos los proyectos tienen slug único, todas las keys de stack existen en technologies, LEGACY_SLUGS apunta a slugs existentes.
   - ProjectDetailPage: slug válido, slug viejo redirige, slug inexistente muestra 404.
   - useTheme / ThemeToggle: cambia data-theme y sobrevive a localStorage que lanza error.
3. Activa npm test en .github/workflows/ci.yml.
```

**Commit:** `chore: Agregar pruebas unitarias y correrlas en CI`

### 7b — `feature/seo-y-accesibilidad`

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama feature/seo-y-accesibilidad desde dev.

1. Título y descripción por página con <title> y <meta> dentro de los componentes (React 19 los eleva al <head>). Formato: "<Página> · Mateo Castro | Desarrollador Full Stack".
2. Open Graph y Twitter card genéricos en index.html (og:image de 1200×630 en public/og.png: genérala como página HTML simple con el estilo del sitio y captúrala, o pídeme la imagen). En el detalle de proyecto, título, resumen e imagen del proyecto.
3. Datos estructurados JSON-LD tipo Person en index.html (nombre, jobTitle "Desarrollador Full Stack", url, sameAs con GitHub y LinkedIn).
4. public/robots.txt y public/sitemap.xml estático con todas las rutas públicas y los slugs de proyectos (dominio actual de Vercel; documenta dónde cambiarlo).
5. Agrega eslint-plugin-jsx-a11y al lint y corrige lo que reporte.
6. Revisa con axe (extensión del navegador) todas las páginas en claro y oscuro y corrige contraste, labels, orden de foco y textos alternativos.
```

**Commit:** `feat: Agregar SEO, datos estructurados y mejoras de accesibilidad`

### 7c — `chore/rendimiento-y-medicion`

**Prompt para Kiro:**

```text
Sigue .kiro/steering/portafolio.md. Rama chore/rendimiento-y-medicion desde dev.

1. Corre Lighthouse móvil en el preview de dev (Inicio, Proyectos, un detalle, Contacto) y reporta los 4 puntajes antes.
2. Corrige lo que baje de 90: imagen del hero con fetchpriority="high" y tamaño correcto, preload de la fuente principal, imágenes responsive con srcset (genera tamaños 640 y 1280 con el script de imágenes), reduce el blur del vidrio en móvil si afecta el rendimiento (por ejemplo, --glass-blur 12px bajo 640 px).
3. Agrega @vercel/analytics y @vercel/speed-insights (justificado: medir visitas y Core Web Vitals reales sin cookies). Actívalos en Vercel.
4. Reporta los puntajes después.
```

**Commit:** `chore: Mejorar rendimiento y agregar medición`

**Cierre de fase:** PR `dev → test`, QA completo, PR `test → main`.

---

## Fase 8 (opcional, más adelante) — Proyectos desde base de datos

Cuando termines lo anterior y quieras demostrar más backend, se puede pasar `src/data/projects` a **Supabase** (ya lo dominas por Crochet Studio): tabla `projects` con RLS (lectura pública, escritura solo admin), panel `/admin` con login, React Query en el front y migraciones en `supabase/migrations`. Se planifica aparte cuando llegues aquí; no lo empieces antes de cerrar la Fase 7.

---

## 18. Checklist de QA por fase

Se corre en el preview de `test` antes de pasar a `main`:

- [ ] CI en verde (lint, build; typecheck desde 3c; pruebas desde 7a)
- [ ] Revisado en móvil (375 px) y escritorio (1440 px)
- [ ] Modo claro, oscuro y "sistema" sin textos ilegibles; sin parpadeo al recargar (desde la Fase 4)
- [ ] El vidrio se ve en Chrome y Safari, y hay respaldo sólido si se desactiva la transparencia
- [ ] Recargar una URL interna (`/proyectos`, `/proyecto/peliculas`) carga bien
- [ ] `/proyecto/Deportes` redirige a `/proyecto/deportes` (desde la Fase 3a)
- [ ] Una URL inválida muestra la 404
- [ ] Menú móvil: abre, cierra con Escape y clic fuera, se navega con teclado
- [ ] Formulario: errores por campo, envío exitoso con mensaje en pantalla, error de red con correo alternativo; el correo llega (desde la Fase 6a)
- [ ] Enlaces de GitHub, demo y CV abren en pestaña nueva
- [ ] No hay datos personales sensibles en el sitio
- [ ] Consola del navegador sin errores
- [ ] Capturas antes/después en el PR si hubo cambio visual

---

## 19. Puntos donde Kiro debe detenerse y preguntar

| Fase | Momento | Quién decide |
| --- | --- | --- |
| 0 | Crear `dev` y `test` y configurar la protección | Tú (a mano) |
| 1 | Texto final de ubicación y datos personales | Tú |
| 2a | Antes de borrar archivos y PNG originales | Tú |
| 3a | Mapa de archivos origen → destino | Tú |
| 3c | Hacer o saltar la migración a TypeScript | Tú |
| 4 | Aprobar paleta, vidrio y tipografía en `/style-guide` | Tú |
| 5c | Textos de problema / solución / retos de cada proyecto | Tú |
| 6a | Crear la cuenta de Resend y las variables en Vercel | Tú |
| 6b | URL de demo e imagen de Crochet Studio; titular final | Tú |
| 7b | Imagen para compartir (og.png) | Tú |
| Siempre | Cualquier push a `main`/`test`, force push o reescritura de historial | Prohibido para Kiro |

---

## 20. Problemas comunes

| Síntoma | Causa probable | Solución |
| --- | --- | --- |
| No puedo hacer merge de mi propio PR | La regla pide 1 aprobación | Pon aprobaciones en 0 (ver 4.1); el PR y el CI siguen siendo obligatorios |
| El PR no se puede mergear aunque el código está bien | Check `ci` en rojo o rama desactualizada | Abre el detalle del check; actualiza con `git pull origin dev` en tu rama |
| `/api/contact` da 404 en local | `npm run dev` (Vite) no sirve funciones | Usa `vercel dev` |
| `/api/contact` devuelve el HTML del sitio en Vercel | El rewrite de `vercel.json` captura `/api` | Usa `"source": "/((?!api/).*)"` (Fase 6a) |
| El correo no llega | Variables faltantes en *Preview* o remitente no verificado | Revisa las 3 variables en Vercel para Preview y Production; en pruebas usa `onboarding@resend.dev` |
| El vidrio no se ve en Safari | Falta `-webkit-backdrop-filter` | Ya va en `.glass`; revisa que no lo borró el linter |
| La página parpadea en blanco al recargar en oscuro | Falta el script de tema en `index.html` | Fase 4, punto 5 |
| `npm ci` falla por versión | Node viejo | Usa Node 20+ (`node -v`) |
| Kiro quiere hacer push a `main` | No leyó el steering | Rechaza el comando y recuérdale `.kiro/steering/portafolio.md` |
| Conflictos al hacer merge en la Fase 3 | Ramas creadas antes de integrar 3a | En tu rama: `git fetch origin && git merge origin/dev`, resuelve y haz push normal (sin rebase ni force push) |
