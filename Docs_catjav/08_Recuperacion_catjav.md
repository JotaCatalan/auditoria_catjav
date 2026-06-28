# Mejora Tecnológica y Plan de Recuperación ante Desastres (Disaster Recovery - DR)

## Empresa: MercadoSur

MercadoSur es una empresa de **E-commerce / Retail Online** que administra información crítica como compras, tarjetas de pago y direcciones de despacho. Para garantizar la continuidad operacional y reducir el impacto de incidentes de ciberseguridad, se proponen las siguientes mejoras tecnológicas y un plan básico de recuperación ante desastres.

---

# 1. Mejoras Tecnológicas

## 1.1 Implementar un Web Application Firewall (WAF)

Un WAF analiza y filtra el tráfico HTTP y HTTPS antes de que llegue a la aplicación. Permite bloquear ataques como SQL Injection, XSS y Command Injection utilizando reglas de seguridad actualizadas, reduciendo considerablemente la superficie de ataque del portal.

---

## 1.2 Incorporar Autenticación Multifactor (MFA)

La autenticación multifactor agrega una segunda capa de verificación además de la contraseña. Esto disminuye el riesgo de acceso no autorizado en caso de robo o filtración de credenciales de clientes y administradores.

---

## 1.3 Centralizar el monitoreo mediante un SIEM

Una plataforma SIEM recopila y correlaciona registros de servidores, aplicaciones y dispositivos de red. Permite detectar comportamientos anómalos, generar alertas en tiempo real y facilitar la respuesta temprana frente a incidentes de seguridad.

---

# 2. Plan de Recuperación ante Desastres (Disaster Recovery - DR)

## 2.1 Respaldos automáticos y periódicos

Realizar copias de seguridad automáticas de la base de datos y de los servidores de la aplicación. Los respaldos deben almacenarse en una ubicación distinta al entorno principal y verificarse regularmente mediante pruebas de restauración.

---

## 2.2 Infraestructura redundante

Mantener servidores de respaldo o servicios en la nube preparados para asumir la operación en caso de falla del servidor principal. Esto reduce el tiempo de inactividad y mejora la disponibilidad del servicio.

---

## 2.3 Procedimiento documentado de recuperación

Definir un protocolo con los pasos para responder ante un incidente, incluyendo responsables, prioridades, restauración de respaldos, validación de servicios y comunicación con clientes. Debe revisarse y probarse periódicamente mediante simulacros.

---

# Beneficios Esperados

| Medida | Beneficio Principal |
|---------|---------------------|
| Web Application Firewall (WAF) | Bloquea ataques comunes contra aplicaciones web antes de que lleguen al servidor. |
| Autenticación Multifactor (MFA) | Reduce el riesgo de accesos no autorizados por robo de credenciales. |
| SIEM | Detecta incidentes rápidamente y facilita la respuesta del equipo de seguridad. |
| Respaldos automáticos | Permite recuperar información crítica tras un incidente o pérdida de datos. |
| Infraestructura redundante | Mantiene la continuidad del servicio durante fallas o desastres. |
| Procedimiento de recuperación | Reduce los tiempos de respuesta y asegura una recuperación organizada. |

---

# Conclusión

La combinación de mejoras tecnológicas y un plan de recuperación ante desastres fortalece la resiliencia de MercadoSur frente a ataques informáticos y fallas operacionales. Estas medidas permiten proteger la información crítica, mantener la continuidad del negocio y minimizar el impacto sobre clientes y operaciones.