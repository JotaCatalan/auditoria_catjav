# Cross-Site Scripting

## Explicacion paso a paso:
El Cross-Site Scripting (XSS) es una vulnerabilidad de seguridad web que permite a un atacante inyectar scripts maliciosos (normalmente JavaScript) en páginas web legítimas. Cuando otras personas visitan la página, este código se ejecuta en sus navegadores, lo que permite el robo de cookies, secuestro de sesiones o redirecciones.
Los ataques XSS ocurren cuando una aplicación web toma datos proporcionados por el usuario y los incluye en una página web sin la validación ni el escape de contenido adecuados. El navegador no puede distinguir entre el script legítimo del sitio web y el código inyectado por el atacante, por lo que ejecuta el código malicioso.
Para intentar ver si podemos acceder y realizar el ataque XSS utilizamos el comando "<script>alert(’XSS’)</script>, el cual, nos permite hacer que la pagina nos mande un mensaje como se muestra en la imagen

## el resultado y posible impacto a MercadoSur:
La imagen muestra que el comando logro que la pagina pudiera mandar mensajes a traves del comando mostrado lo cual permitiria a atacantes mandar mensajes a usuarios maliciosas, como por ejemplo: mandar mensajes insultantes o desagradables, pedir informacion personal de los clientes o mensajes falsos advirtiendo a los usuarios de problemas que no existen en realidad, etc.
El impacto que puede tener en la empresa puede ser muy grande pero no al mismo nivel de los otros 2 casos que se mencionan en esta misma auditoria.

## Nivel de riesgo:
para analizar el riesgo usamos el siguiente vector(CVSS:3.1): 
CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:N
