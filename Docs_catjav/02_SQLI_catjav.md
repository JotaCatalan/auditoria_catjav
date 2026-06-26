# Inyeccion sql (SQLI)

Explicacion paso a paso:
para el ataque en la pagina DMWA utilizando la inyeccion SQL la cual es un proceso donde es una vulnerabilidad de ciberseguridad que ocurre cuando un atacante inserta código malicioso en las consultas que una aplicación web envía a su base de datos, accedemos a la pagina como se muestra en la imagen "sqli_catjav.PNG" y se uso e comando " ’ OR ’1’=’1" para demostrar lo facil que es el robar los datos de los usuarios. 

## el resultado y posible impacto a MercadoSur:
Con el comando realizado se pudo demostrar que con este comando, el posible atacante puede obtener los datos personales como RUT, direccion de domicilio, fono y el mayor problema: el robo de los datos de las tarjetas que se usaron para pagar sus compras.

## Nivel de riesgo:
para analizar el riesgo usamos el siguiente vector(CVSS:3.1): 
CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N