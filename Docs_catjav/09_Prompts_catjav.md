# Prompts usados en el informe

---

## Fase 1: Instrucciones para empezar a trabajar

### Prompt 1: Uso de CVSS 3.1

**Objetivo:** Explicar el uso del calculador CVSS 3.1 y su aplicación en vulnerabilidades del laboratorio DVWA.

> Explicame el uso de https://www.first.org/cvss/calculator/3.1 y cuales serian el paso a paso para poder encontrar el puntaje de CVSS para un SQLI, XSS y de command inyection que se uso el DVWA basico.

---

### Prompt 2: Triada CIA

**Objetivo:** Aplicar la clasificación de la información (Confidencialidad, Integridad y Disponibilidad) a la empresa ficticia MercadoSur.

> Explicame la Clasificación de la Información (CIA Triada) para la compañia ficticia mercadosur la cual es un E-commerce / retail online. Los datos son compras, tarjetas y direcciones de despacho.

---

### Prompt 3: Matriz de riesgo

**Objetivo:** Desarrollar una matriz de riesgo (probabilidad × impacto) con mapa de calor y su relación con vulnerabilidades previas.

> Necesito en formato markdown donde se explique la Matriz de riesgo (prob × impacto) + mapa de calor y demostrar como afectan estos a las calculaciones que se hicieron anteriormente.

---

### Prompt 4: Mejora tecnológica y DRP

**Objetivo:** Proponer mejoras tecnológicas y plan de recuperación ante desastres (DRP) para la empresa MercadoSur.

> Describe en formato markdown cual seria la Mejora tecnológica y plan de recuperación (DR) para la empresa mercadosur. A cada caso dame 3 mejoras con explicación simple menor a 50 palabras.

---

---

## Fase 2: Ingreso de los Markdown a los JavaScript

### Prompt 5: Resumen de la empresa

**Objetivo:** Crear un componente React para leer el archivo `01_resumen_catjav.md`.

> Tengo este markdown en la carpeta `C:\auditoria_catjav\Docs_catjav\01_resumen_catjav.md`...
> Necesito que el documento lo pueda leer `01_Resumen.jsx` para después ser usado en `App.jsx`.

---

### Prompt 6: SQL Injection

**Objetivo:** Mostrar Markdown e imagen del ataque SQL Injection.

> Tengo este markdown en la carpeta `02_SQLI_catjav.md`...
> Necesito que el documento lo pueda leer `02_InyeccionSQL.jsx`.
> También debe implementarse la imagen `sqli_catjav.PNG`.

---

### Prompt 7: Cross-Site Scripting (XSS)

**Objetivo:** Renderizar informe XSS con evidencia visual.

> Tengo este markdown en la carpeta `03_XSS_catjav.md`...
> Necesito que el documento lo pueda leer `03_XSS.jsx`.
> También debe implementarse la imagen `xss_catjav.PNG`.

---

### Prompt 8: Command Injection

**Objetivo:** Crear componente para mostrar vulnerabilidad Command Injection.

> Necesito el componente `04_Comandos.jsx` que cargue el Markdown correspondiente y permita mostrar evidencia del ataque.

---

### Prompt 9: Clasificación de activos

**Objetivo:** Renderizar activos de la empresa en React.

> Tengo este markdown en la carpeta `05_Activos_catjav.md`...
> Necesito que el documento lo pueda leer `05_Activos.jsx`.

---

### Prompt 10: Matriz de riesgo

**Objetivo:** Mostrar matriz de riesgos en la aplicación.

> Tengo este markdown en la carpeta `06_Matriz_catjav.md`...
> Necesito que el documento lo pueda leer `06_Matriz.jsx`.

---

### Prompt 11: Controles de seguridad

**Objetivo:** Visualizar controles de seguridad en React.

> Tengo este markdown en la carpeta `07_Controles_catjav.md`...
> Necesito que el documento lo pueda leer `07_controles.jsx`.

---

### Prompt 12: Plan de recuperación

**Objetivo:** Mostrar plan de recuperación y continuidad.

> Tengo este markdown en la carpeta `08_Recuperacion_catjav.md`...
> Necesito que el documento lo pueda leer `08_Recuperacion.jsx`.

---

### Prompt 13: Registro de prompts

**Objetivo:** Mostrar registro de prompts utilizados.

> Tengo este markdown en la carpeta `09_Prompts_catjav.md`...
> Necesito que el documento lo pueda leer `09_prompt.jsx`.

---

### Prompt 14: Integración en App.jsx

**Objetivo:** Unificar todos los componentes en una sola aplicación React.

> ¿Puedes crear en `App.jsx` donde estén todos los `.jsx` como me mostraste?

---

### Prompt 15: Diseño profesional

**Objetivo:** Aplicar diseño tipo dashboard de auditoría con paleta de colores.

> Necesito que se vea profesional como la página de referencia usando:
> #08415C, #CC2936, #EBBAB9, #388697, #B5FFE1
> usando App.css y App.jsx.

---

### Prompt 16: Visualización de tablas Markdown

**Objetivo:** Permitir renderizado correcto de tablas en Markdown.

> Necesito que las tablas que se usan en los markdown sean visibles en App.jsx.

---

---

## Fase 3: Arreglo de la página y sus errores

### Prompt 17: Soporte de tablas Markdown

**Objetivo:** Solucionar el problema de renderizado de tablas en React Markdown.

> Necesito que las tablas que se usan en los markdown sean visibles en App.jsx.

**Resultado:**
- Se detectó que React Markdown no soporta tablas por defecto.
- Se incorporó `remark-gfm`.
- Se agregaron estilos CSS para mejorar tablas, código y estructura visual.

---

### Prompt 18: Error en instalación de dependencias (npm install)

**Objetivo:** Resolver error crítico al instalar dependencias del proyecto.

> Command "npm install" exited with 1

**Error detectado:**
- `EINTEGRITY`
- caché corrupta de npm
- errores EPERM en Windows

**Resultado:**
- Se recomendó limpiar `node_modules`
- eliminar `package-lock.json`
- limpiar caché npm
- reinstalar dependencias
- verificar versiones de Node y npm

---

## Resultado final del proyecto

- Arquitectura modular con React + Markdown
- Integración de vulnerabilidades OWASP (SQLi, XSS, CMD Injection)
- Visualización de tablas, imágenes y reportes
- Dashboard tipo auditoría profesional
- Corrección de errores de dependencias y renderizado