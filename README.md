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

###	Codificación de la prueba

En el repositorio en la carpeta pruebas/02_reconocimiento/puppeteer/src, encontrará el archivo index.js con el código de la prueba a traves de puppeteer.

### Ejecución de la prueba

Para poder ejecutar la prueba como prerrequisito debe tenerse instalado y ejecutando el software bajo prueba : Ghost v. 3.3.0. Este software debe tener desplegada su interfaz web localmente en el puerto 2368. De igual forma tener instalada la librería puppeteer.

Cumplido lo anterior, estando en la carpeta prueba/02_reconicimiento/puppeteer/src , se ejecuta el comando node index.js y con ello se activa la prueba de reconocimeinto automatizada a traves de puppeteer.

### Resultados

Los resultados generados se expresan como una serie de imágenes generadas en el proceso de pruebas. Estas imágenes se encuentran en la carpeta prueba/02_reconicimiento/puppeteer/images.

#### Pros del uso de la herramienta puppeteer

La principal ventaja del uso de la herramienta Puppeteer es el poder automatizar las pruebas de interfaz, lo que puede permitir identificar errores generados por cambios en la codificación o en la secuencia de los procesos.

Otra, es que la herramienta al ser libre y teniendo el apoyo de Google la hace un elemento importante dentro del arsenal de cualquier ingeniero de pruebas.

Finalmente, esta herramienta permite generar casos de prueba que pueden ser compartidos y analizados fácilmente.

#### Contras del uso de la herramienta puppeteer

Curva de aprendizaje inclinada.

