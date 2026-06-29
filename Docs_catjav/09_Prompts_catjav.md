# Prompts usados en el informe

## fase 1: instrucciones para empezar a trabajar

1.- explicame el uso de https://www.first.org/cvss/calculator/3.1 y cuales serian el paso a paso para poder encontrar el puntaje de cvss para un SQLI, XSS y de command inyection que se uso el DVWA basico

2.- explicame los Clasificación de la Información (CIA Triada) para la compañia ficticia mercadosur la cual como rubro E-commerce / retail online y los Datos que custodia el portal son Compras, tarjetas y direcciones de despacho. explica el nivel de cada parte de la triada para cada dato y escribelo en formato markdown para visual studio code

3.- necesito en formato markdown donde se explique que es la Matriz de riesgo (prob × impacto) + mapa de calor y demostrar como afectan estos a las calculaciones que se hicieron anteriormente

4.- Describe en formato markdown cual seria la Mejora tecnológica y plan de recuperación (DR) para la empresa mercadosur. a Cada caso dame 3 mejoras que se podrian usar y explicalos en un detalle simple y que no exceda las 50 palabras cada uno


## Fase 2: Ingreso de los Markdown a los JavaScript

### Prompt 1: Resumen de la empresa

**Objetivo:** Crear un componente React capaz de leer el archivo `01_resumen_catjav.md` y utilizarlo posteriormente en `App.jsx`.

> Tengo este markdown en la carpeta `C:\auditoria_catjav\Docs_catjav\01_resumen_catjav.md`...
>
> Necesito que el documento lo pueda leer `C:\auditoria_catjav\src\components\01_Resumen.jsx` para después ser usado en `C:\auditoria_catjav\src\App.jsx`.

---

### Prompt 2: SQL Injection

**Objetivo:** Mostrar el contenido del archivo Markdown junto con una imagen demostrativa del ataque.

> Tengo este markdown en la carpeta `C:\auditoria_catjav\Docs_catjav\02_SQLI_catjav.md`...
>
> Necesito que el documento lo pueda leer `02_InyeccionSQL.jsx` para después ser usado en `App.jsx`.
>
> También debe implementarse la imagen `sqli_catjav.PNG` y que pueda ser visible por el usuario al ver la página.

---

### Prompt 3: Cross-Site Scripting (XSS)

**Objetivo:** Cargar el informe del ataque XSS e incorporar la captura de evidencia.

> Tengo este markdown en la carpeta `C:\auditoria_catjav\Docs_catjav\03_XSS_catjav.md`...
>
> Necesito que el documento lo pueda leer `03_XSS.jsx` para después ser usado en `App.jsx`.
>
> También debe implementarse la imagen `xss_catjav.PNG` y que pueda ser visible por el usuario.

---

### Prompt 4: Command Injection

**Objetivo:** Crear el componente React para mostrar el informe del ataque Command Injection.

> Necesito el componente `C:\auditoria_catjav\src\components\04_Comandos.jsx` que cargue el archivo Markdown correspondiente y permita mostrar posteriormente la evidencia del ataque.

---

### Prompt 5: Clasificación de Activos

**Objetivo:** Mostrar el contenido del archivo `05_Activos_catjav.md` en React.

> Tengo este markdown en la carpeta `C:\auditoria_catjav\Docs_catjav\05_Activos_catjav.md`.
>
> Necesito que el documento lo pueda leer `05_Activos.jsx` para después ser usado en `App.jsx`.

---

### Prompt 6: Matriz de Riesgo

**Objetivo:** Mostrar la matriz de riesgos desarrollada en Markdown dentro del sitio web.

> Tengo este markdown en la carpeta `C:\auditoria_catjav\Docs_catjav\06_Matriz_catjav.md`.
>
> Necesito que el documento lo pueda leer `06_Matriz.jsx` para después ser usado en `App.jsx`.

---

### Prompt 7: Controles de Seguridad

**Objetivo:** Crear el componente React para visualizar el documento de controles de seguridad.

> Tengo este markdown en la carpeta `C:\auditoria_catjav\Docs_catjav\07_Controles_catjav.md`.
>
> Necesito que el documento lo pueda leer `07_controles.jsx` para después ser usado en `App.jsx`.

---

### Prompt 8: Plan de Recuperación

**Objetivo:** Incorporar el documento de recuperación y continuidad del negocio.

> Tengo este markdown en la carpeta `C:\auditoria_catjav\Docs_catjav\08_Recuperacion_catjav.md`.
>
> Necesito que el documento lo pueda leer `08_Recuperacion.jsx` para después ser usado en `App.jsx`.

---

### Prompt 9: Registro de Prompts

**Objetivo:** Mostrar el documento que recopila los prompts utilizados durante el proyecto.

> Tengo este markdown en la carpeta `C:\auditoria_catjav\Docs_catjav\09_Prompts_catjav.md`.
>
> Necesito que el documento lo pueda leer `09_prompt.jsx` para después ser usado en `App.jsx`.

---

### Prompt 10: Integración de todos los componentes

**Objetivo:** Integrar todos los componentes creados dentro de una única aplicación React.

> ¿Puedes crear en `App.jsx` donde estén todos los `.jsx` como me mostraste?

---

### Prompt 11: Diseño profesional

**Objetivo:** Rediseñar completamente la interfaz para que tenga apariencia de una auditoría profesional.

> Necesito que se vea profesional como la página de referencia utilizando el esquema de colores:
>
> - `#08415C`
> - `#CC2936`
> - `#EBBAB9`
> - `#388697`
> - `#B5FFE1`
>
> Utilizando `App.css` y `App.jsx` usando el JavaScript anterior como base.

---

### Prompt 12: Visualización de tablas Markdown

**Objetivo:** Permitir que las tablas escritas en los archivos Markdown se rendericen correctamente dentro de React.

> Necesito que las tablas que se usan en los markdown sean visibles en `App.jsx`.

---

## Resultado de la Fase 2

Durante esta fase se logró:

- Crear un componente React independiente para cada documento Markdown.
- Renderizar el contenido utilizando `ReactMarkdown`.
- Incorporar imágenes de evidencia para las vulnerabilidades SQL Injection, XSS y Command Injection.
- Integrar todos los componentes dentro de `App.jsx`.
- Diseñar una interfaz con apariencia profesional mediante `App.css`.
- Habilitar el soporte para tablas Markdown utilizando `remark-gfm`.
- Mantener una estructura modular que facilita la incorporación de nuevas secciones al informe de auditoría.

