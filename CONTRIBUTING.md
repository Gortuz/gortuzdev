# Guía de commits

Esta guía define cómo se hacen los commits en **gortuz.dev** para que el historial sea limpio, legible y fácil de revertir. Aplica a personas y a agentes de IA por igual.

Los hooks de `.githooks/` revisan automáticamente lo esencial (formato del mensaje, archivos prohibidos y que el sitio compile). Esta guía explica el resto.

## 1. Configuración (una vez por máquina)

```sh
pnpm install            # el script "prepare" activa los hooks
# o, manualmente:
git config core.hooksPath .githooks
```

Comprueba que están activos con `git config core.hooksPath` (debe responder `.githooks`).

## 2. Formato del mensaje

Usamos [Conventional Commits](https://www.conventionalcommits.org/). **Los mensajes se escriben en inglés.**

```
<type>(<scope>): <summary>

<body opcional: el porqué, no el qué>

<footer opcional>
```

Reglas del título (la primera línea):

- En inglés, en **imperativo** y en minúsculas: `add`, `fix`, `remove`, no `added` ni `fixes`.
- Máximo **72 caracteres** y sin punto final.
- Describe el cambio para quien visita o mantiene el sitio, no el archivo que tocaste.

### Tipos

| Tipo | Cuándo |
|---|---|
| `feat` | Algo nuevo que se ve o se usa: una sección, un hover, el modo oscuro, contenido nuevo. |
| `fix` | Corrige algo roto: un desborde, un error de responsive, un dato incorrecto. |
| `refactor` | Cambia el código sin cambiar lo que se ve ni cómo funciona. |
| `perf` | Mejora el rendimiento (carga, imágenes, fuentes). |
| `style` | Solo formato del código (espacios, orden). **No** es para cambios visuales: esos son `feat` o `fix`. |
| `docs` | Documentación: README, esta guía, `PRODUCT.md`, `DESIGN.md`. |
| `build` | Dependencias, `package.json`, `astro.config.mjs`, configuración de compilación. |
| `chore` | Mantenimiento que no toca el sitio: `.gitignore`, hooks, configuración del repo. |
| `revert` | Revierte un commit anterior. |

### Scopes

Usa el área del sitio que cambia. Si un cambio toca varias, elige la principal o separa el commit.

`header` · `hero` · `work` · `profile` · `contact` · `footer` · `logo` · `theme` · `i18n` · `content` · `styles` · `layout` · `design-system` · `deps` · `repo`

### Cuerpo y pie

- El **cuerpo** explica el *porqué* y lo que no es obvio. Separa el título con una línea en blanco y corta las líneas a ~72 caracteres. Las viñetas están bien.
- `BREAKING CHANGE: ...` en el pie si algo deja de funcionar como antes (por ejemplo, cambian las URLs).
- **Sin líneas `Co-Authored-By:` de herramientas de IA.** El autor de los commits es Alan. Los agentes que ayudan no se agregan como coautores, ni en commits ni en descripciones de PR.

### Ejemplos

```
feat(hero): replace project metrics with developer strengths
fix(contact): keep heading inside the column on phones
feat(theme): add dark mode with saved preference
fix(content): correct UTN Móvil dates to match the CV
build(deps): add simple-icons for the stack list
docs(design-system): document profile hover states
```

Mal:

```
cambios                                  ← sin tipo, sin contexto, en español
fix: Fixed stuff.                        ← pasado, vago, con punto
feat(hero,work,contact): lots of updates ← demasiadas cosas juntas
```

## 3. Qué va en cada commit

- **Un commit = un cambio lógico.** Si el título necesita "and", probablemente son dos commits.
- El sitio **debe compilar en cada commit** (el hook ejecuta `pnpm build`).
- **Contenido bilingüe:** si cambias un texto en español, cambia también el inglés en el mismo commit (`src/data/content.ts`).
- **Cambios de sistema visual** (colores, tipografía, componentes nuevos): actualiza `DESIGN.md` y `.impeccable/design.json` en el mismo commit o en uno `docs(design-system)` inmediatamente después.

## 4. Lista de verificación antes de commitear

1. `pnpm build` termina sin errores.
2. Revisaste `/` (español) y `/en/` (inglés).
3. Revisaste tema claro y oscuro, y el ancho de un teléfono (~375 px).
4. Todo dato del sitio sale del CV: nada inventado (métricas, clientes, certificaciones).
5. `git diff --staged` solo contiene lo que describe el mensaje.
6. No subes nada de la lista de abajo.

## 5. Nunca se commitea

El hook `pre-commit` bloquea estos archivos. Si alguno aparece en `git status`, revisa `.gitignore`.

- `CV_*.md`: tu CV tiene datos personales (teléfono). Es la fuente de verdad del contenido, pero vive solo en tu máquina.
- `.env`, `.env.*`: credenciales.
- `.agents/`: skills locales de herramientas de IA.
- `.impeccable/config.local.json`, `.impeccable/hook.cache.json`, `.impeccable/live/sessions/`, `.impeccable/live/annotations/`, `.impeccable/live/roots.json`: estado local de las herramientas de diseño.
- `dist/`, `.astro/`, `node_modules/`: se generan solos.

Sí se commitea de `.impeccable/`: `design.json`, `surfaces/` y `live/config.json`.

## 6. Ramas y pull requests

- `main` siempre debe estar publicable. No se commitea directo en `main`.
- Crea una rama por tarea: `<type>/<descripcion-corta>`, por ejemplo `feat/dark-mode` o `fix/mobile-contact`.
- Une la rama a `main` con un pull request. El título del PR sigue el mismo formato que un commit.
- Antes de abrir el PR, revisa el historial (`git log --oneline main..`): que cada commit cuente un paso claro.

## 7. Corregir errores

- Último commit, aún sin subir: `git commit --amend` (mensaje) o `git add <archivo> && git commit --amend --no-edit` (contenido).
- Ya subido: no reescribas la historia compartida; haz un commit nuevo `fix(...)` o `revert`.
- Subiste un dato personal por error: avisa antes de seguir. Hay que limpiarlo del historial, no basta con borrarlo en un commit nuevo.
