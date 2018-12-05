# Actividad_5
### 5º Actividad semanal Gestionando las sesiones a nuestra web, y creando nuestro primer BackOffice.

Hemos vistos que es un verdadero trabajo tener que añadir los viajes manualmente en el front, accediendo al código cada vez que tengamos un nuevo viaje, o al intentar modificar alguna de las condiciones del viaje. Para evitar esta situación se debe crear una backOffice donde un administrador pueda acceder y añadir nuevos viajes en tiempo de ejecución.

Nuestra nueva página de administación sería muy similar a lo siguiente
![alt_text](https://github.com/GeeksHubsAcademy/Actividad_5/blob/master/administrador.jpg)

Esto nos plantea un nuevo problema y es controlar las sesiones para comprobar que sólo el usuario con permisos pueda acceder a dicha url de gestión de viajes.

---

## Condiciones.
* Crearemos una nueva vista que se llame Admin donde crearemos la funcionalidad suficiente para añadir los nuevos viajes y recuperar el listado de los existentes.
* La Tabla se denominara travels y dispondrá de los siguientes campos:
  * ID
  * TRAVEL
  * DESCRIPTION
  * ACTIVE(true, false)
  * PRICE
  * TYPE (FAMILY, SINGLE, ADVENTURE, ETC)..
* Debemos gestinar las sesiones de nuestros usuarios diferenciando tres tipos de usuarios:
  *ANONIMO -> Tiene accesso: front, vista descripción viaje, error404, login, register.
  *USER -> Tiene accesso: front, vista descripción viaje, error404, login, register.
  *ADMIN ->Tiene accesso: front, vista descripción viaje, error404, login, register y además a la nueva vista que se denomine admin

---

### Características.

* Se utilizará NPM para la instalación de dependencias.
* El proyecto debe estar subido en un contendor en vagrant, y debe cumplir las siguientes condiciones:
  * Debe disponer de un vagrantfile y un archivo .sh donde se encuentren todos los scripts necesarios para construir el contenedor y nuestra aplicacion se autoejecute.
  * El contendor debe tener abierto el puerto 80 y apuntara internamente al puerto 3000 donde tenemos apuntado nuestro servidor de node.js
  * El contendor debe disponer un mysql instalado con la tabla descrita anteriormente.
  * Dentro del package.json debemos disponer la tarea production debe llamar al módulo forever y arrancar la maquina.
  * Debemos generar una nueva carpeta en nuestra estructura denominada log, donde se almacenará un log de los posibles errores que se produzcan en la aplicación.