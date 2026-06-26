# Controles de Seguridad para Reducir el Riesgo en MercadoSur

## Introducción

Las vulnerabilidades identificadas durante las pruebas realizadas en DVWA (SQL Injection, Cross-Site Scripting y Command Injection) representan amenazas importantes para la seguridad de MercadoSur. Estas podrían comprometer información sensible como compras, tarjetas de pago y direcciones de despacho.

Para reducir el nivel de riesgo identificado en la matriz de riesgo, es necesario implementar controles de seguridad tanto preventivos como detectivos y correctivos. A continuación, se presentan tres aplicaciones y/o protocolos recomendados para cada tipo de vulnerabilidad.

---

# 1. SQL Injection (SQLi)

## Riesgo identificado

- **Probabilidad:** Muy Alta
- **Impacto:** Crítico
- **Nivel de Riesgo:** Crítico (25)

## Objetivo

Evitar que un atacante pueda ejecutar consultas SQL no autorizadas sobre la base de datos.

### Medidas de mitigación

| Aplicación / Protocolo | Función | Cómo reduce el riesgo |
|-------------------------|----------|-----------------------|
| **Prepared Statements (Consultas Parametrizadas)** | Evitan que los datos ingresados por el usuario sean interpretados como código SQL. | Disminuye significativamente la probabilidad de explotación al separar los datos de la consulta SQL. |
| **Web Application Firewall (WAF) (por ejemplo, ModSecurity o Cloudflare WAF)** | Filtra solicitudes HTTP maliciosas antes de que lleguen a la aplicación. | Reduce la probabilidad de ataques bloqueando patrones conocidos de SQL Injection. |
| **Principio de Mínimos Privilegios en la Base de Datos** | Limita los permisos de las cuentas utilizadas por la aplicación. | Reduce el impacto de un ataque al impedir que el atacante acceda o modifique información fuera de lo estrictamente necesario. |

### Resultado esperado

La combinación de estos controles puede reducir el riesgo desde **Crítico** a **Medio**, disminuyendo tanto la probabilidad de explotación como el impacto sobre los datos.

---

# 2. Cross-Site Scripting (XSS)

## Riesgo identificado

- **Probabilidad:** Alta
- **Impacto:** Alto
- **Nivel de Riesgo:** Alto (12)

## Objetivo

Impedir la ejecución de código JavaScript malicioso en el navegador de los usuarios.

### Medidas de mitigación

| Aplicación / Protocolo | Función | Cómo reduce el riesgo |
|-------------------------|----------|-----------------------|
| **Content Security Policy (CSP)** | Define qué recursos y scripts puede ejecutar el navegador. | Reduce el impacto bloqueando la ejecución de scripts no autorizados incluso si se inyectan en la página. |
| **Escape y Sanitización de Entradas (OWASP Java Encoder, HTML Purifier, etc.)** | Convierte caracteres especiales para que sean tratados como texto y no como código ejecutable. | Disminuye la probabilidad de que un script malicioso sea interpretado por el navegador. |
| **Cookies con atributos HttpOnly, Secure y SameSite** | Impiden el acceso a las cookies desde JavaScript y limitan su envío entre sitios. | Reduce el impacto al dificultar el robo de sesiones mediante ataques XSS. |

### Resultado esperado

La implementación de estas medidas reduce considerablemente la posibilidad de secuestro de sesiones y exposición de datos personales.

---

# 3. Command Injection

## Riesgo identificado

- **Probabilidad:** Muy Alta
- **Impacto:** Crítico
- **Nivel de Riesgo:** Crítico (25)

## Objetivo

Evitar que un atacante pueda ejecutar comandos del sistema operativo desde la aplicación web.

### Medidas de mitigación

| Aplicación / Protocolo | Función | Cómo reduce el riesgo |
|-------------------------|----------|-----------------------|
| **Validación estricta de entradas (Allow List)** | Solo permite valores previamente autorizados por la aplicación. | Reduce la probabilidad al impedir el ingreso de caracteres o comandos peligrosos. |
| **Ejecución de la aplicación con cuentas de mínimos privilegios** | El servidor web funciona con permisos limitados sobre el sistema operativo. | Disminuye el impacto al restringir las acciones que un atacante podría realizar incluso si logra ejecutar comandos. |
| **Endpoint Detection and Response (EDR) o Antivirus de nueva generación (por ejemplo, Microsoft Defender for Endpoint, CrowdStrike o SentinelOne)** | Detecta y bloquea comportamientos anómalos o intentos de ejecución de comandos maliciosos en el servidor. | Reduce tanto la probabilidad de éxito como el impacto al identificar y contener actividades maliciosas en tiempo real. |

### Resultado esperado

Estos controles limitan la posibilidad de ejecución de comandos arbitrarios y reducen el daño potencial sobre el servidor y la información almacenada.

---

# Comparación del Riesgo Antes y Después de Implementar Controles

| Vulnerabilidad | Riesgo Inicial | Riesgo Esperado tras Mitigaciones |
|----------------|----------------|-----------------------------------|
| SQL Injection | Crítico | Medio |
| Cross-Site Scripting (XSS) | Alto | Bajo |
| Command Injection | Crítico | Medio |

---

# Impacto sobre la Matriz de Riesgo

La implementación de controles de seguridad modifica la evaluación de la matriz de riesgo al reducir la probabilidad de explotación y, en algunos casos, el impacto de un incidente.

| Vulnerabilidad | Probabilidad Inicial | Probabilidad Final | Impacto Inicial | Impacto Final |
|----------------|----------------------|--------------------|-----------------|---------------|
| SQL Injection | 5 | 2 | 5 | 4 |
| XSS | 4 | 2 | 3 | 2 |
| Command Injection | 5 | 2 | 5 | 4 |

Como consecuencia, los riesgos dejan de ubicarse en la zona crítica del mapa de calor y pasan a niveles de riesgo medio o bajo, permitiendo que MercadoSur opere con un nivel de exposición considerablemente menor.



