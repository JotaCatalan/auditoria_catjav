Inyeccion mediante comandos.

Explicacion paso a paso:
La inyección de comandos en DVWA (Damn Vulnerable Web Application) permite a un atacante ejecutar comandos arbitrarios del sistema operativo (SO) en el servidor web. Esto ocurre cuando la aplicación procesa entradas del usuario de forma insegura, pasando caracteres especiales directamente al sistema.

El resultado y posible impacto a MercadoSur:
La vulnerabilidad de Command Injection permite que un atacante ejecute comandos arbitrarios en el sistema operativo subyacente mediante la manipulación de parámetros de entrada. En la prueba realizada sobre DVWA se logró acceder al contenido del archivo /etc/passwd utilizando el comando "127.0.0.1; cat /etc/passwd".



Nivel de riesgo:

