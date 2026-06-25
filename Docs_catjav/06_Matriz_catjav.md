# Matriz de Riesgo (Probabilidad × Impacto) y Mapa de Calor

## ¿Qué es una Matriz de Riesgo?

La matriz de riesgo es una herramienta utilizada en la gestión de riesgos para evaluar y priorizar amenazas según dos factores principales:

- **Probabilidad:** posibilidad de que ocurra un incidente o vulnerabilidad.
- **Impacto:** nivel de daño que causaría dicho incidente en la organización.

La fórmula básica utilizada es:

```text
Riesgo = Probabilidad × Impacto
```

Mientras mayor sea el resultado, mayor será la prioridad de mitigación.

---

# Escala Utilizada

## Probabilidad

| Valor | Nivel | Descripción |
|---------|---------|-------------|
| 1 | Muy Baja | Poco probable que ocurra |
| 2 | Baja | Puede ocurrir ocasionalmente |
| 3 | Media | Ocurre con cierta frecuencia |
| 4 | Alta | Ocurre regularmente |
| 5 | Muy Alta | Es altamente probable |

## Impacto

| Valor | Nivel | Descripción |
|---------|---------|-------------|
| 1 | Muy Bajo | Consecuencias mínimas |
| 2 | Bajo | Impacto limitado |
| 3 | Medio | Afecta parcialmente la operación |
| 4 | Alto | Interrupción importante del negocio |
| 5 | Crítico | Daño grave financiero, legal o reputacional |

---

# Mapa de Calor

La combinación de probabilidad e impacto genera un nivel de riesgo representado mediante un mapa de calor.

| Impacto \\ Probabilidad | 1 | 2 | 3 | 4 | 5 |
|------------------------|---|---|---|---|---|
| **5 Crítico** | M | A | A | C | C |
| **4 Alto** | B | M | A | A | C |
| **3 Medio** | B | M | M | A | A |
| **2 Bajo** | B | B | M | M | A |
| **1 Muy Bajo** | B | B | B | M | M |

### Leyenda

- **B:** Riesgo Bajo
- **M:** Riesgo Medio
- **A:** Riesgo Alto
- **C:** Riesgo Crítico

---

# Relación con la Clasificación CIA

La clasificación CIA realizada anteriormente permite determinar el impacto que tendría la pérdida de:

- Confidencialidad
- Integridad
- Disponibilidad

Cuanto más alta sea la clasificación CIA de un activo, mayor será el impacto asociado a una vulnerabilidad que afecte dicho activo.

Por ejemplo:

- Si una vulnerabilidad expone datos de tarjetas de crédito, el impacto será crítico debido a la alta confidencialidad requerida.
- Si una vulnerabilidad modifica órdenes de compra, el impacto será alto debido a la importancia de la integridad de los datos.
- Si una vulnerabilidad impide el acceso al sistema de ventas, el impacto será alto por afectar la disponibilidad.

---

# Aplicación a MercadoSur

## Activos Analizados

| Activo | Confidencialidad | Integridad | Disponibilidad |
|----------|------------------|-------------|----------------|
| Compras | Media | Alta | Alta |
| Tarjetas de Pago | Crítica | Alta | Media |
| Direcciones de Despacho | Alta | Alta | Media |

---

# Evaluación de Vulnerabilidades Detectadas en DVWA

Las vulnerabilidades identificadas durante el laboratorio fueron:

1. SQL Injection
2. Cross Site Scripting (XSS)
3. Command Injection

---

## SQL Injection

### Activos afectados

- Compras
- Tarjetas de Pago
- Direcciones de Despacho

### Análisis

La explotación permite acceder directamente a la base de datos, exponiendo información sensible de clientes y transacciones.

| Factor | Valor |
|----------|---------|
| Probabilidad | 5 |
| Impacto | 5 |

```text
Riesgo = 5 × 5 = 25
```

### Resultado

**Riesgo Crítico**

### Justificación

La información de tarjetas posee confidencialidad crítica según la Triada CIA, por lo que una extracción masiva de datos generaría consecuencias financieras, legales y reputacionales severas.

---

## Cross Site Scripting (XSS)

### Activos afectados

- Sesiones de usuarios
- Direcciones de despacho
- Información de compras

### Análisis

Permite ejecutar código JavaScript en el navegador de la víctima para capturar información o secuestrar sesiones.

| Factor | Valor |
|----------|---------|
| Probabilidad | 4 |
| Impacto | 3 |

```text
Riesgo = 4 × 3 = 12
```

### Resultado

**Riesgo Alto**

### Justificación

Aunque requiere interacción de la víctima, puede comprometer información personal y cuentas de usuario.

---

## Command Injection

### Activos afectados

- Servidor web
- Base de datos
- Sistema operativo

### Análisis

Permite ejecutar comandos arbitrarios sobre el servidor comprometido.

| Factor | Valor |
|----------|---------|
| Probabilidad | 5 |
| Impacto | 5 |

```text
Riesgo = 5 × 5 = 25
```

### Resultado

**Riesgo Crítico**

### Justificación

Esta vulnerabilidad podría comprometer completamente la infraestructura de MercadoSur, afectando simultáneamente la confidencialidad, integridad y disponibilidad de todos los activos.

---

# Relación entre CIA y la Matriz de Riesgo

La clasificación CIA influye directamente en la valoración del impacto.

| Activo | Clasificación CIA dominante | Impacto generado |
|----------|---------------------------|------------------|
| Compras | Integridad Alta | Alto |
| Tarjetas de Pago | Confidencialidad Crítica | Crítico |
| Direcciones de Despacho | Confidencialidad Alta | Alto |

Por esta razón:

- SQL Injection obtiene un impacto crítico al afectar tarjetas de pago.
- XSS obtiene un impacto alto al comprometer sesiones e información personal.
- Command Injection obtiene un impacto crítico al afectar todos los activos y servicios.

---

# Resumen Final de Riesgos

| Vulnerabilidad | Probabilidad | Impacto | Riesgo |
|---------------|-------------|----------|---------|
| SQL Injection | 5 | 5 | 25 (Crítico) |
| XSS | 4 | 3 | 12 (Alto) |
| Command Injection | 5 | 5 | 25 (Crítico) |

---

# Conclusión

La Triada CIA permite determinar qué tan importantes son los activos de información para MercadoSur, mientras que la Matriz de Riesgo permite cuantificar el nivel de amenaza que representan las vulnerabilidades detectadas.

Al combinar ambos enfoques se observa que las vulnerabilidades SQL Injection y Command Injection representan riesgos críticos debido a que afectan activos con altos requerimientos de confidencialidad, integridad y disponibilidad, especialmente los datos de pago de los clientes. Por su parte, XSS representa un riesgo alto debido a su capacidad de comprometer sesiones y datos personales, aunque con un impacto menor que las vulnerabilidades anteriores.