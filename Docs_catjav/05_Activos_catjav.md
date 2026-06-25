# Clasificación de la Información (Triada CIA)

## Empresa: MercadoSur

**MercadoSur** es una empresa ficticia del rubro **E-commerce / Retail Online**, dedicada a la venta de productos a través de internet. El portal administra información relacionada con las compras realizadas por los clientes, datos de tarjetas de pago y direcciones de despacho.

La clasificación de la información se realiza utilizando la **Triada CIA (Confidentiality, Integrity, Availability)**, la cual permite determinar los niveles de seguridad requeridos para cada tipo de dato.

---

# 1. Datos de Compras

Corresponde al historial de pedidos, productos adquiridos, montos pagados, fechas de compra y estado de los pedidos.

| Principio | Nivel | Justificación |
|------------|---------|---------------|
| Confidencialidad | Media | Aunque no contiene información financiera completa, revela hábitos de consumo y preferencias de los clientes. |
| Integridad | Alta | La modificación de órdenes, montos o estados de compra podría generar pérdidas económicas y reclamos de clientes. |
| Disponibilidad | Alta | Los usuarios y administradores necesitan acceder continuamente a la información de compras para gestionar pedidos y soporte. |

### Resumen
- **Confidencialidad:** Media
- **Integridad:** Alta
- **Disponibilidad:** Alta

---

# 2. Datos de Tarjetas de Pago

Corresponde a números de tarjetas, fechas de vencimiento, tokens de pago u otra información asociada a medios de pago electrónicos.

| Principio | Nivel | Justificación |
|------------|---------|---------------|
| Confidencialidad | Crítica | Una filtración podría provocar fraude financiero, robo de identidad y sanciones regulatorias. |
| Integridad | Alta | Alteraciones en los datos de pago podrían generar transacciones fraudulentas o errores de cobro. |
| Disponibilidad | Media | La indisponibilidad afecta las ventas, pero existen mecanismos alternativos de pago que pueden mitigar parcialmente el impacto. |

### Resumen
- **Confidencialidad:** Crítica
- **Integridad:** Alta
- **Disponibilidad:** Media

---

# 3. Direcciones de Despacho

Corresponde a las direcciones físicas utilizadas para la entrega de productos.

| Principio | Nivel | Justificación |
|------------|---------|---------------|
| Confidencialidad | Alta | Constituyen datos personales protegidos cuya divulgación puede afectar la privacidad de los clientes. |
| Integridad | Alta | Una modificación maliciosa podría provocar entregas incorrectas o pérdida de productos. |
| Disponibilidad | Media | Deben estar disponibles durante el proceso logístico, aunque una interrupción temporal no siempre detiene completamente las operaciones. |

### Resumen
- **Confidencialidad:** Alta
- **Integridad:** Alta
- **Disponibilidad:** Media
