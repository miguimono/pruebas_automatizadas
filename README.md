# Pruebas Automatizadas de Software

# Integrantes:

- Felipe Téllez Zapata
- Miguel Ángel Niño Suarez
- Oscar Javier Jiménez Mejía
- Santiago Alejandro Salinas Vargas

Este repositorio con el consolidado de las pruebas realizadas durante las 8 semanas del curso de Pruebas Automatizadas de Software.

----

# Pruebas manuales de reconocimiento

## Listado de funcionalidades identificadas:

- Agregar miembro: Esta funcionalidad permite agregar un miembro al sitio web.

- Invitar usuarios: Esta funcionalidad permite enviar por email una invitación a un usuario para que se vincule bajo un rol de: autor, editor, administrador o colaborador.

- Importar miembros desde CSV: Esta funcionalidad permite agregar miembros desde un archivo plano separado por comas.

- Adicionar label: Esta funcionalidad permite crear un rótulo que permita clasificar los miembros.

- Buscar miembro: Esta funcionalidad permite buscar un miembro dentro de la lista principal.

- Cambiar carátula de usuario: Esta funcionalidad permite cambiar la imagen de fondo de la pagina de características del usuario.

- Cambiar contraseña de usuario: Esta funcionalidad permite cambiar la contraseña del usuario.

- Crear página: Esta funcionalidad permite crear una nueva página dentro del sistema.

- Programar publicación de página: Esta funcionalidad permite programar la publicación de la página en una fecha específica.

- Eliminar página: Esta funcionalidad permite eliminar una página del sistema.


## Escenarios probados:

- Agregar miembro con información válida :	https://youtu.be/SqHc11CIjFM

- Agregar miembro con información no válida :	https://youtu.be/oxu7llJn98U

- Invitar usuarios con información válida	: https://youtu.be/hm13Ukqq4Qo

- Invitar usuarios con información no válida :	https://youtu.be/kZkw3mU4wow

- Importar miembros desde CSV con información válida :	https://youtu.be/sO2XVnhngh8 

Este escenario genero un issue que está reportado en : https://github.com/ssalinasvuniandes/pruebas_automatizadas/issues/7

- Importar miembros desde CSV con información no válida	https://youtu.be/iuFx4zbjt5I

- Adicionar label con información válida	https://youtu.be/IECLekYLfEY

- Adicionar label con información no válida	https://youtu.be/lnG0SpJTEJ8

- Buscar miembro con información válida	https://youtu.be/GvpGNGvE-sI

- Buscar miembro con información no válida	https://youtu.be/ckgLdl8JurI

- Cambiar carátula de usuario con información válida	https://youtu.be/yzSd_zCi-i4

- Cambiar carátula de usuario con información no válida	https://youtu.be/-CrfoUXF8sY

Este escenario genero un issue que está reportado en : https://github.com/ssalinasvuniandes/pruebas_automatizadas/issues/6

- Cambiar contraseña de usuario con información válida	https://youtu.be/yvxxdSsMhjI

- Cambiar contraseña de usuario con información no válida	https://youtu.be/205Lvm7sM54

Este escenario genero un issue que está reportado en : https://github.com/ssalinasvuniandes/pruebas_automatizadas/issues/5

- Crear página con información válida	https://youtu.be/LwnpZZC4J7k

- Crear página con información no válida	https://youtu.be/tfLznivR4-o 

Este escenario genero un issue que está reportado en : https://github.com/ssalinasvuniandes/pruebas_automatizadas/issues/4

- Previsualizar nueva página con información válida	https://youtu.be/7a06KryIfhY 

Este escenario genero un issue que está reportado en : https://github.com/ssalinasvuniandes/pruebas_automatizadas/issues/3

- Previsualizar nueva página en tamaño móvil con información válida	https://youtu.be/Crfpo5eGrrs 

Este escenario genero un issue que está reportado en : https://github.com/ssalinasvuniandes/pruebas_automatizadas/issues/2

- Publicar página con información de fecha válida	https://youtu.be/eOK634lD3JU 

- Publicar página con información de fecha no válida	https://youtu.be/JG2_VuVRTG0 

Este escenario genero un issue que está reportado en : https://github.com/ssalinasvuniandes/pruebas_automatizadas/issues/1

----

# Pruebas automatizadas de reconocimiento

## Introducción

Los navegadores son aplicaciones cuya principal función es permitir el acceso a contenido web al consultar información de servidores en internet y renderizar contenido mixto en una interfaz gráfica. Ghost, al ser una aplicación web, funciona en estos navegadores, ya que son la principal forma de interacción con el usuario y, por ende, representan un objetivo importante al momento de hacer pruebas automáticas.

Teniendo en cuenta lo anterior, es apenas natural hacer pruebas para validar el comportamiento de las aplicaciones web. Esto se hace por medio de herramientas como Puppeteer, que automatizan la interacción con los navegadores web por medio de comandos escritos en un lenguaje de programación convencional. De esta forma es posible explorar las funcionalidades que desee probar.

## ¿Qué es Puppeteer?

Puppeteer es una librería lanzada en 2017 que brinda un API para automatizar el navegador de Chromium o Chrome. Esta brinda la posibilidad de ejecutar varias funcionalidades sobre una aplicación web de forma automática al manipular un clon del navegador. Está disponible únicamente para Node.js y soporta la mayoría de las interacciones y modificaciones sobre los navegadores más recientes. Este proyecto es mantenido por el equipo de Chrome DevTools.

## Procedimiento

### Lista de las acciones que comprenden la prueba

a.	Accede a la página de Login
b.	Hace clic en el botón Forgot?
c.	Hace clic en el boton de Sign in sin datos
d.	Llena los campos del formulario con datos errados
e.	Hace clic en el boton Sign in con datos erroneos
f.	Llena los campos del formulario con datos correctos
g.	Hace clic en el boton Sign in con datos correctos
h.	Accede a la página de listado de POSTS
i.	Hace clic en el boton de New Post
j.	Llena el campos del titulo con datos correctos
k.	Hace clic en el boton de opciones para que active el boton de publicar 
l.	Hace clic en el boton de Publish para que muestre el boton de publicar el post
m.	Hace clic en el boton de Publish para que crear el nuevo post 
n.	Hace clic en el boton de Post para regresar a la lista de posts 
o.	Confirma que si se creó el post con el título definido

### Instalación:

Una vez se clona el repositorio es necesario instalara las librerías necesarias para su funcionamiento. Para ello ubiquese en la carpeta "prueba/02_reconicimiento/puppeteer/" y ejecute el siguiente comando:

`npm install`

Luego de unos minutos concluirá la instalación de todas las librerías necesarias.

### Ejecución:

Para poder ejecutar los escenarios de pruebas se debe seguir los siguientes pasos:

1. Ejecutar la plataforma Ghost en el entorno local bajo el puerto 2368. Si esto no es así se requiere modificar el archivo puppeteer/src/index.js en las lineas 34 y 35 con la información adecuada. 
2. Ubicarse en la carpeta "puppeteer" y ejecutar el comando: `node ./src/index.js`

### Resultados

Los resultados generados se expresan como una serie de imágenes generadas en el proceso de pruebas. Estas imágenes se encuentran en la carpeta "prueba/02_reconicimiento/puppeteer/images".

#### PROS

La principal ventaja del uso de la herramienta Puppeteer es el poder automatizar las pruebas de interfaz, lo que puede permitir identificar errores generados por cambios en la codificación o en la secuencia de los procesos.

Otra, es que la herramienta al ser libre y teniendo el apoyo de Google la hace un elemento importante dentro del arsenal de cualquier ingeniero de pruebas.

Finalmente, esta herramienta permite generar casos de prueba que pueden ser compartidos y analizados fácilmente.

#### CONTRAS

Curva de aprendizaje inclinada.


----

# Pruebas E2E

## Introducción:

En el proceso de pruebas E2E se utilizaron las herramientas Puppeteer y Kraken sobre la plataforma Ghost.

## Funcionalidades bajo pruebas:

Las funcionalidades bajo prueba estan alrededor de los POSTS en la plataforma Ghost. 

Se ha identificado cada funcionalidad por una letra, que servirá para explicar la lógica de los escenarios de pruebas:

* L: login. Esta funcionalidad corresponde al ingreso a la plataforma Ghost. Aplica a todos los escenarios.
* O: logout. Esta funcionalidad corresponde a la salida de a la plataforma Ghost. Aplica a todos los escenarios.
* C: crear. Esta funcionalidad corresponde a la creación de un nuevo POST en la plataforma Ghost.
* M: modificar. Esta funcionalidad corresponde a la modificacion de un POST que no se hayan publicado.
* MP: modificar. Esta funcionalidad corresponde a la modificacion de un POST que ya se hayan publicado (actualización).
* P: publicar. Esta funcionalidad corresponde a la publicación de un POST en la plataforma Ghost.
* E: Eliminar. Esta funcionalidad corresponde a la eliminación de un POST en la plataforma Ghost.

## Escenarios de pruebas:

Los excenarios de pruebas combinan en diferente orden las funcionalidades en prueba para poder determinar posibles fallos generados en su interacción.
Algunos escenarios requieren tareas previas para alistar el sistema Ghost para ejecutarlo, a estas actividades se les definió como : precondicion.
De igual manera algunos escenarios requieren tareas posteriores para dejar el sistema Ghost igual que antes de aplicar el escenario de pruebas, a estas actividades se les definió como : postcondicion

* Escenario de prueba 1: LCO
Este escenario combina las funcionalidades Logueo y Creación de un POST. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 2: LMO
Este escenario combina las funcionalidades Logueo y Modificación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 3: LPO
Este escenario combina las funcionalidades Logueo y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 4: LEO
Este escenario combina las funcionalidades Logueo y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 5: LCMO
Este escenario combina las funcionalidades Logueo, Creación y Modificación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 6: LCPO
Este escenario combina las funcionalidades Logueo, Creación y Publicación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 7: LCEO
Este escenario combina las funcionalidades Logueo, Creación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 8: LMEO
Este escenario combina las funcionalidades Logueo, Modificación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 9: LMPO
Este escenario combina las funcionalidades Logueo, Modificación y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 10: LMCO 
Este escenario combina las funcionalidades Logueo, Modificación y Creación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 11: LPEO
Este escenario combina las funcionalidades Logueo, Publicación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 12: LPMO
Este escenario combina las funcionalidades Logueo, Publicación y Modificación (actualización) de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 13: LMPEO
Este escenario combina las funcionalidades Logueo, Modificación, Publicación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 14: LMCEO
Este escenario combina las funcionalidades Logueo, Modificación, Creación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 15: LCMPO
Este escenario combina las funcionalidades Logueo, Creación, Modificación y Publicación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 16: LPMEO
Este escenario combina las funcionalidades Logueo, Publicación, Modificación (actualización) y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 17: LMCPO
Este escenario combina las funcionalidades Logueo, Modificación, Creación y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 18: LCPMO
Este escenario combina las funcionalidades Logueo, Creación, Publicación y Modificación (actualización) de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 19: LCPEO
Este escenario combina las funcionalidades Logueo, Creación, Publicación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 20: LCPMEO
Este escenario combina las funcionalidades Logueo, Creación, Publicación, Modificación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

## PUPPETEER:

### Instalación:

Una vez se clona el repositorio es necesario instalara las librerías necesarias para su funcionamiento. Para ello ubiquese en la carpeta "prueba/03_e2e/puppeteer/" y ejecute el siguiente comando:

`npm install`

Luego de unos minutos concluirá la instalación de todas las librerías necesarias.

### Ejecución:

Para poder ejecutar los escenarios de pruebas se debe seguir los siguientes pasos:

1. Ejecutar la plataforma Ghost en el entorno local bajo el puerto 2368. Si esto no es así se requiere modificar el archivo "prueba/03_e2e/puppeteer/src/index.js" en las lineas 95 y 96 con la información adecuada. 
2. Ubicarse en la carpeta "puppeteer" y ejecutar el comando: `node ./src/index.js`

### Resultados:

Los resultados obtenidos de la ejecución de pueden pobservar por la consola y en la generación de imágenes PNG guardadas en la carpeta "prueba/03_e2e/puppeteer/images". El nombre de cada imágen contiene el escenario de prueba (EP) a la cual pertenece, las funcionalidades que hacen parte del escenario de pruebas, indice y nombre de la funcionalidad específica probada e índice interno de los pasos dentro de la funcionalidad.

Por ejemplo: EP02-LMO-02-modificar-01.png, se interpreta como:

* Escenario de Pruebas 02 : EP02.
* Informacipon de la secuencia de pruebas : Login, Modificación y Salida : LMO.
* Pertenencia de la prueba a la funcionalidadad : 02-modificar.
* Índice de la imagen en los pasos de prueba de la funcionalidad : 01. 

### PROS:

* Curva de aprendizaje leve, incluso para los no expertos en JavaScript.
* API limpia y bien documentada.
* Amplio abanico de acciones que se pueden realizar y monitorear. 
* Configurable y automatizable para ser usado en procesos de pruebas amplios.

### CONTRAS:

* Puppeteer no permite automatizar pruebas en navegadores que no sean Chrome o Chromium
* Sólo permite su uso en JavaScript para Node.js.
* Algunas veces no es fácil de programar por la complejidad del DOM de las aplicaciones Web actuales.
* El tiempo de ejecución de los scripts no es rápido.

## Kraken

### Instalación

Como precondición se debe tener en cuenta que el proyecto dentro de la carpeta *kraken* tiene dependencia del compilado de **KrakenMobile-1.0.9** por lo cual las dos carpetas deben existir al mismo nive para que la prueba funcione.

Se creó el archivo ```propetires.json``` en el cual se colocan las variables para la ejecución de la prueba.

### Ejecución

La forma de ejecutar la prueba es mediante el comando ```bundle exec kraken-mobile run --properties="properties.json"```

Tener en cuenta que las variables que existen en el el archivo `properties.json` sirven para la ejecución de la prueba, por lo tanto se solicita modificar estas variables según su propia instancia de Ghost y su usuario y contraseña creados.

### Resultados

Los resultados de las pruebas se pueden validar en la carpeta *reports*, en la cual se genera una nueva subcarpeta por cada escenario ejecutado.

### PROS

* La herramienta permite interactuar entre varios dispositivos al tiempo y logra crear flujos completos que involucran varios tipos de dispositivos
* Para las pruebas e2e de la ABP Ghost solo se vio la necesidad de usar un solo dispositivo para pruebas en plataforma web lo que genera las pruebas de manera directa
* La herramienta Kraken permite la creación de un archivo de configuraciones para centralizar la utilización de variables de pruebas
* Se pueden realizar varios tipos de pruebas e2e de forma sencilla una vez se conoce el funcionamiento.
* Una vez instalada la herramienta, es fácil crear un proyecto bajo pruebas con ella.

### CONTRAS

* No tiene una documentación extensa, lo que obliga a trabajar bajo la premisa de prueba y error, no se encuentra información en internet ya que la herramienta hace parte de un proyecto investigativo que aún está en proceso.
* La herramienta en un inicio es complicada de usar ya que no se cuentan con proyectos o guías que ejemplifiquen su uso y funcionamiento.
* Proceso de instalación complicado y con muchos pasos.

