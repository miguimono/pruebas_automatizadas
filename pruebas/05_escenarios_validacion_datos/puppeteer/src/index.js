/*
Pruebas  de Escenarios de Validación de Datos

Descripción:

El proceso de pruebas de escenario de validación de datos de la plataforma Ghost V3.42.5 usa las siguientes estrategias: (i) pool de datos a-priori, 
(ii) pool de datos (pseudo) aleatorio dinámico y (iii) escenario aleatorio. 

Las principales herramientas usadas para lograr el objetivo fueron: Puppeteer, Faker y Mockaroo.

Funcionalidades bajo pruebas:

Las funcionalidades bajo prueba estan alrededor de los POSTS en la plataforma Ghost. Se ha identificado cada funcionalidad por una letra, que servirá para explicar la lógica de los escenarios de pruebas:

L: login. Esta funcionalidad corresponde al ingreso a la plataforma Ghost. Aplica a todos los escenarios.
O: logout. Esta funcionalidad corresponde a la salida de a la plataforma Ghost. Aplica a todos los escenarios.
C: crear. Esta funcionalidad corresponde a la creación de un nuevo POST en la plataforma Ghost.
M: modificar. Esta funcionalidad corresponde a la modificacion de un POST que no se hayan publicado.
MP: modificar. Esta funcionalidad corresponde a la modificacion de un POST que ya se hayan publicado (actualización).
P: publicar. Esta funcionalidad corresponde a la publicación de un POST en la plataforma Ghost.
E: Eliminar. Esta funcionalidad corresponde a la eliminación de un POST en la plataforma Ghost.

Escenarios de pruebas:

Los excenarios de pruebas combinan en diferente orden las funcionalidades en prueba para poder determinar posibles fallos generados en su interacción. Algunos escenarios requieren tareas previas para alistar el sistema 
Ghost para ejecutarlo, a estas actividades se les definió como : precondicion. De igual manera algunos escenarios requieren tareas posteriores para dejar el sistema Ghost igual que antes de aplicar el escenario de pruebas, 
a estas actividades se les definió como : postcondicion

Escenario de prueba 1: LCO Este escenario combina las funcionalidades Logueo y Creación de un POST. Finalmente sale de la plataforma (Logout).
Escenario de prueba 2: LMO Este escenario combina las funcionalidades Logueo y Modificación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 3: LPO Este escenario combina las funcionalidades Logueo y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 4: LEO Este escenario combina las funcionalidades Logueo y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 5: LCMO Este escenario combina las funcionalidades Logueo, Creación y Modificación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 6: LCPO Este escenario combina las funcionalidades Logueo, Creación y Publicación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 7: LCEO Este escenario combina las funcionalidades Logueo, Creación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 8: LMEO Este escenario combina las funcionalidades Logueo, Modificación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 9: LMPO Este escenario combina las funcionalidades Logueo, Modificación y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 10: LMCO Este escenario combina las funcionalidades Logueo, Modificación y Creación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 11: LPEO Este escenario combina las funcionalidades Logueo, Publicación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 12: LPMO Este escenario combina las funcionalidades Logueo, Publicación y Modificación (actualización) de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 13: LMPEO Este escenario combina las funcionalidades Logueo, Modificación, Publicación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 14: LMCEO Este escenario combina las funcionalidades Logueo, Modificación, Creación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 15: LCMPO Este escenario combina las funcionalidades Logueo, Creación, Modificación y Publicación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 16: LPMEO Este escenario combina las funcionalidades Logueo, Publicación, Modificación (actualización) y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 17: LMCPO Este escenario combina las funcionalidades Logueo, Modificación, Creación y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 18: LCPMO Este escenario combina las funcionalidades Logueo, Creación, Publicación y Modificación (actualización) de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 19: LCPEO Este escenario combina las funcionalidades Logueo, Creación, Publicación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).
Escenario de prueba 20: LCPMEO Este escenario combina las funcionalidades Logueo, Creación, Publicación, Modificación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

Pruebas ejecutadas:

Se diseño el software para que realice tres ciclos de pruebas sobre todos los escenario de pruebas así:

Tipo de prueba 0: pool de datos a-priori con valores conocidos que se sabe funcionan en la plataforma Ghost. 
Tipo de prueba 1: pool de valores pseudo aleatorios obtenidos con faker. 
Tipo de prueba 2: pool de valores aleatorios obtenidos con Mockaroo uasndo "naughty string"

Cada ciclo a su vez contiene cuatro ciclos internos, los cuales definen un rango de longitu de las cadenas de texto generadas de la siguiente manera:

Largo 0. mensajes de texto entre 0 y 10 caracteres/palabras 
Largo 1. mensajes de texto entre 11 y 100 caracteres/palabras 
Largo 2. mensajes de texto entre 101 y 500 caracteres/palabras 
Largo 3. mensajes de texto entre 501 y 1000 caracteres/palabras

De esta forma se tiene un total de 3x4=12 ciclos sobre todos los 20 escenarios de pruebas, lo que da 240 escenarios de prueba.

Instalación:

Una vez se clona el repositorio es necesario instalara las librerías necesarias para su funcionamiento. Para ello ubiquese en la carpeta "pupperteer" y ejecute el siguiente comando:

npm install

Luego de unos minutos concluirá la instalación de todas las librerías necesarias.

Ejecución:

Para poder ejecutar los escenarios de pruebas se debe seguir los siguientes pasos:

Ejecutar la plataforma Ghost en el entorno local bajo el puerto 2368. Si esto no es así se requiere modificar el archivo puppeteer/src/index.js en las lineas 103 y 104 con la información adecuada.
Crear en la plataforma Ghost un usuario y ajustar el archivo puppeteer/src/index.js en las líneas 106 y 107 con estas credenciales.
Ubicarse en la carpeta "puppeteer/src" y ejecutar el comando:
node ./src/index.js

Resultados:

Los resultados obtenidos de la ejecución de pueden pobservar por la consola y en la generación de imágenes PNG guardadas en la carpeta puppeteer/images. En esta carpeta hay subcarpetas nombradas por cada ciclo de ejecución. 
Por ejempo la carpeta ciclo_3-tipo_prueba_0-largo_2 se interpereta como:

Ciclo de ejecución 3,
Tipo de prueba 0 (pool de datos a-priori) y
Largo 2 (mensajes de texto entre 101 y 500 caracteres/palabras)

El nombre de cada imágen contiene el escenario de prueba (EP) a la cual pertenece, las funcionalidades que hacen parte del escenario de pruebas, indice y nombre de la funcionalidad específica probada e índice interno de los 
pasos dentro de la funcionalidad. Por ejemplo: EP02-LMO-02-modificar-01.png, se interpreta como:

Escenario de Pruebas 02 : EP02.
Informacipon de la secuencia de pruebas : Login, Modificación y Salida : LMO.
Pertenencia de la prueba a la funcionalidadad : 02-modificar.
Índice de la imagen en los pasos de prueba de la funcionalidad : 01.

*/

const puppeteer = require('puppeteer');
const faker = require('faker');
const request = require('request');
const fetch = require('node-fetch');

(async()=>{
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 })

    // definicion de variables relacionadas a la ubicacion de la plataforma Ghost
    host_ghost = 'localhost'
    puerto_ghost = '2368'
    // contenido de las variables fijas usadas en el proceso
    correo = 's.salinasv@uniandes.edu.co'
    password = 'sanalejo1974'


    api_url = "https://my.api.mockaroo.com/titulos_post.json?key=1e716ae0";

    // los tipos de pruebas son:
    // 0. pool de datos a-priori con valores conocidos que se sabe funcionan
    // 1. pool de valores pseudo aleatorios obtenidos con faker
    // 2. pool de valores aleatorios obtenidos con faker
    tipo_prueba = 0
    // establece el largo de los mensajes de texto en palabras o caracteres
    // 0. mensajes de texto entre 0 y 10 caracteres/palabras
    // 1. mensajes de texto entre 11 y 100 caracteres/palabras
    // 2. mensajes de texto entre 101 y 500 caracteres/palabras
    // 3. mensajes de texto entre 501 y 1000 caracteres/palabras
    largo = 0
    
    i = 0

    let current_datetime = new Date()

    // for tipo
    for (tipo_prueba = 0; tipo_prueba < 3; tipo_prueba++) {

        // for longitud
        for (largo = 0; largo < 4; largo++) {

            console.log("tipo_prueba:"+tipo_prueba+" - largo:"+largo)

            i++;

            if (tipo_prueba==0) {
                if (largo==0) {
                    titulo_crear = 'Titulo'
                    titulo_modificar = ' Modificado'
                    titulo_modificar_publicado = ' luego de Publicado'       
                }
                if (largo==1) {
                    titulo_crear = 'Titulo de Post'
                    titulo_modificar = ' Modificado el Coentenido'
                    titulo_modificar_publicado = ' luego de Publicado de longitud media'       
                }
                if (largo==2) {
                    titulo_crear = 'Titulo de Post Nuevo'
                    titulo_modificar = ' Modificado el Contenido con mas Info'
                    titulo_modificar_publicado = ' luego de Publicado de longitud muy larga'       
                }
                if (largo==3) {
                    titulo_crear = 'Titulo de Post Nuevo muy Extenso'
                    titulo_modificar = ' Modificado el Contenido con mas Información de manera extensa'
                    titulo_modificar_publicado = ' luego de Publicado de longitud muy extensa para pruebas de escenarios de datos'       
                }
            }
            if (tipo_prueba==1) {
                if (largo==0) {
                    titulo_crear = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * 11))),
                    titulo_modificar = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * 11))),
                    titulo_modificar_publicado = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * 11)))
                }
                if (largo==1) {
                    titulo_crear = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * (100-11+1)+11))),
                    titulo_modificar = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * (100-11+1)+11))),
                    titulo_modificar_publicado = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * (100-11+1)+11)))
                }
                if (largo==2) {
                    titulo_crear = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * (500-101+1)+101))),
                    titulo_modificar = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * (500-101+1)+101))),
                    titulo_modificar_publicado = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * (500-101+1)+101)))
                }
                if (largo==3) {
                    titulo_crear = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * (1000-501+1)+501))),
                    titulo_modificar = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * (1000-501+1)+501))),
                    titulo_modificar_publicado = faker.lorem.sentence(wordCount=(Math.floor(Math.random() * (1000-501+1)+501)))
                }
            }
            if (tipo_prueba==2) {
                if (largo==0) {
                    try {
                        const response = await fetch(api_url);
                        const json = await response.text();
                        var string = json.split(",");
                        titulo_crear = string[0];
                        titulo_modificar = string[1];
                        titulo_modificar_publicado = string[2];
                        console.log("OK");
                    } catch (error) {
                        titulo_crear = faker.random.words(count = (Math.floor(Math.random() * 11))),
                        titulo_modificar = faker.random.words(count = (Math.floor(Math.random() * 11))),
                        titulo_modificar_publicado = faker.random.words(count = (Math.floor(Math.random() * 11)));
                        console.log("ERROR : " + err);
                    }
                }
                if (largo==1) {
                    try {
                        const response = await fetch(api_url);
                        const json = await response.text();
                        var string = json.split(",");
                        titulo_crear = string[0];
                        titulo_modificar = string[1];
                        titulo_modificar_publicado = string[2];
                        console.log("OK");
                    } catch (error) {
                        titulo_crear = faker.random.words(count = (Math.floor(Math.random() * (100 - 11 + 1) + 11))),
                        titulo_modificar = faker.random.words(count = (Math.floor(Math.random() * (100 - 11 + 1) + 11))),
                        titulo_modificar_publicado = faker.random.words(count = (Math.floor(Math.random() * (100 - 11 + 1) + 11)));
                        console.log("ERROR : " + err);
                    }
                }
                if (largo==2) {
                    try {
                        const response = await fetch(api_url);
                        const json = await response.text();
                        var string = json.split(",");
                        titulo_crear = string[0];
                        titulo_modificar = string[1];
                        titulo_modificar_publicado = string[2];
                        console.log("OK");
                    } catch (error) {
                        titulo_crear = faker.random.words(count = (Math.floor(Math.random() * (500 - 101 + 1) + 101))),
                        titulo_modificar = faker.random.words(count = (Math.floor(Math.random() * (500 - 101 + 1) + 101))),
                        titulo_modificar_publicado = faker.random.words(count = (Math.floor(Math.random() * (500 - 101 + 1) + 101)));
                       console.log("ERROR : " + err);
                    }
                }
                if (largo==3) {
                    try {
                        const response = await fetch(api_url);
                        const json = await response.text();
                        var string = json.split(",");
                        titulo_crear = string[0];
                        titulo_modificar = string[1];
                        titulo_modificar_publicado = string[2];
                        console.log("OK");
                    } catch (error) {
                        titulo_crear = faker.random.words(count = (Math.floor(Math.random() * (1000 - 501 + 1) + 501))),
                        titulo_modificar = faker.random.words(count = (Math.floor(Math.random() * (1000 - 501 + 1) + 501))),
                        titulo_modificar_publicado = faker.random.words(count = (Math.floor(Math.random() * (1000 - 501 + 1) + 501)));
                       console.log("ERROR : " + err);
                    }
                }
            }            

            // ESCENARIO DE PRUEBA 1: LCO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await escenario01(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 2: LMO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario02(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 3: LPO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario03(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 4: LEO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario04(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 5: LCMO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await escenario05(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()
            
            // ESCENARIO DE PRUEBA 6: LCPO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await escenario06(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 7: LCEO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await escenario07(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 8: LMEO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario08(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 9: LMPO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario09(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 10: LMCO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario10(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 11: LPEO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario11(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 12: LPMO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario12(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 13: LMPEO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario13(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 14: LMCEO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario14(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()
            
            // ESCENARIO DE PRUEBA 15: LCMPO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await escenario15(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 16: LPMEO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario16(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()
            
            // ESCENARIO DE PRUEBA 17: LMCPO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await escenario17(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 18: LCPMO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await escenario18(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            await postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 19: LCPEO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await escenario19(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()

            // ESCENARIO DE PRUEBA 20: LCPMEO
            console.log()
            console.log('-----------------------------------------------------------------------------------------------')
            console.log('---  ' + current_datetime.toString())
            console.log('-----------------------------------------------------------------------------------------------')
            await escenario20(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo);
            console.log('-----------------------------------------------------------------------------------------------')
            console.log()
        }
    }

    await browser.close();
    return;

})().catch(e=>console.log(e));

//------------------------------------------------------------------------------------------------------

async function escenario01(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 01: LCO  <<<<< ') 
    try {
        eu = 'EP01-LCO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP01-LCO-02';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP01-LCO-03';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario02(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 02: LMO  <<<<< ')
    try {
        eu = 'EP02-LMO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP02-LMO-02';
        await modificar(page, eu, host_ghost, puerto_ghost, titulo_modificar, i, tipo_prueba, largo);
        eu = 'EP02-LMO-03';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario03(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 03: LPO  <<<<< ')
    try {
        eu = 'EP03-LPO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP03-LPO-02';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP03-LPO-03';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario04(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 04: LEO  <<<<< ')
    try {
        eu = 'EP04-LEO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP04-LEO-02';
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP04-LEO-03';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario05(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 05: LCPO  <<<<< ')
    try {
        eu = 'EP05-LCPO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP05-LCPO-02';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP05-LCPO-03';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP05-LCPO-04';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
     } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
   console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario06(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 06: LCMO  <<<<< ')
    try {
        eu = 'EP06-LCMO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP06-LCMO-02';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP06-LCMO-03';
        await modificar(page, eu, host_ghost, puerto_ghost, titulo_modificar, i, tipo_prueba, largo);
        eu = 'EP06-LCMO-04';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario07(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 07: LCEO  <<<<< ')
    try {
        eu = 'EP07-LCEO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP07-LCEO-02';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP07-LCEO-03';
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP07-LCEO-04';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario08(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 08: LMEO   <<<<< ')
    try {
        eu = 'EP08-LMEO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP08-LMEO-02';
        await modificar(page, eu, host_ghost, puerto_ghost, titulo_modificar, i, tipo_prueba, largo);
        eu = 'EP08-LMEO-03';
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP08-LMEO-04';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario09(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 09: LMPO  <<<<< ')
    try {
        eu = 'EP09-LMPO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP09-LMPO-02';
        await modificar(page, eu, host_ghost, puerto_ghost, titulo_modificar, i, tipo_prueba, largo);
        eu = 'EP09-LMPO-03';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP09-LMPO-04';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario10(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 10: LMCO  <<<<< ')
    try {
        eu = 'EP10-LMCO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP10-LMCO-02';
        await modificar(page, eu, host_ghost, puerto_ghost, titulo_modificar, i, tipo_prueba, largo);
        eu = 'EP10-LMCO-03';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP10-LMCO-04';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario11(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 11: LPEO  <<<<< ')
    try {
        eu = 'EP11-LPEO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP11-LPEO-02';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP11-LPEO-03';
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP11-LPEO-04';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario12(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 12: LPMO  <<<<< ')
    try {
        eu = 'EP12-LPMO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP12-LPMO-02';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP12-LPMO-03';
        await modificar_publicado(page, eu, host_ghost, puerto_ghost, titulo_modificar_publicado, i, tipo_prueba, largo);
        eu = 'EP12-LPMO-04';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario13(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 13: LMPEO  <<<<< ')
    try {
        eu = 'EP13-LMPEO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP13-LMPEO-02';
        await modificar(page, eu, host_ghost, puerto_ghost, titulo_modificar, i, tipo_prueba, largo);
        eu = 'EP13-LMPEO-03';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP13-LMPEO-04';
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP13-LMPEO-05';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario14(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 14: LMCEO  <<<<< ')
    try {
        eu = 'EP14-LMCEO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP14-LMCEO-02';
        await modificar(page, eu, host_ghost, puerto_ghost, titulo_modificar, i, tipo_prueba, largo);
        eu = 'EP14-LMCEO-03';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP14-LMCEO-04';
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP14-LMCEO-05';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario15(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 15: LCMPO  <<<<< ')
    try {
        eu = 'EP15-LCMPO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP15-LCMPO-02';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP15-LCMPO-03';
        await modificar(page, eu, host_ghost, puerto_ghost, titulo_modificar, i, tipo_prueba, largo);
        eu = 'EP15-LCMPO-04';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP15-LCMPO-05';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario16(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 16: LPMEO  <<<<< ')
    try {
        eu = 'EP16-LPMEO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP16-LPMEO-02';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP16-LPMEO-03';
        await modificar_publicado(page, eu, host_ghost, puerto_ghost, titulo_modificar_publicado, i, tipo_prueba, largo);
        eu = 'EP16-LPMEO-04';
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP16-LPMEO-05';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario17(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 17: LMCPO  <<<<< ')
    try {
        eu = 'EP17-LMCPO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP17-LMCPO-02';
        await modificar(page, eu, host_ghost, puerto_ghost, titulo_modificar, i, tipo_prueba, largo);
        eu = 'EP17-LMCPO-03';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP17-LMCPO-04';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP17-LMCPO-05';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario18(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 18: LCPMO  <<<<< ')
    try {
        eu = 'EP18-LCPMO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP18-LCPMO-02';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP18-LCPMO-03';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP18-LCPMO-04';
        await modificar_publicado(page, eu, host_ghost, puerto_ghost, titulo_modificar_publicado, i, tipo_prueba, largo);
        eu = 'EP18-LCPMO-05';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario19(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 19: LCPEO  <<<<< ')
    try {
        eu = 'EP19-LCPEO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP19-LCPEO-02';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP19-LCPEO-03';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP19-LCPEO-04';
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP19-LCPEO-05';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario20(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' ESCENARIO DE PRUEBA 20: LCPMEO  <<<<< ')
    try {        
        eu = 'EP20-LCPMEO-01';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        eu = 'EP20-LCPMEO-02';
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        eu = 'EP20-LCPMEO-03';
        await publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP20-LCPMEO-04';
        await modificar_publicado(page, eu, host_ghost, puerto_ghost, titulo_modificar_publicado, i, tipo_prueba, largo);
        eu = 'EP20-LCPMEO-05';
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        eu = 'EP20-LCPMEO-06';
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

async function precondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    // Tareas previas necesarias para poder ejecutar el caso de prueba
    // Crea un post como base para el caso de prueba
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' PRECONDICION  <<<<< ')
    try {        
        eu = 'PRE';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        await crear(page, eu, host_ghost, puerto_ghost, titulo_crear, i, tipo_prueba, largo);
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function postcondicion(page, host_ghost, puerto_ghost, correo, password, titulo_crear, titulo_modificar, titulo_modificar_publicado, i, tipo_prueba, largo) {
    // Tareas posteriores necesarias para dejar el sistema en el mismo estado inicial luego de aplicar 
    // un escenario de pruebas.
    console.log(' >>>>> CICLO: '+i+' - TIPO PRUEBA: '+tipo_prueba+' / LARGO: '+largo+' POSTCONDICION  <<<<< ')
    try {
        eu = 'POS';
        await login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo);
        await eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
        await logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo);
    } catch (error) {
        console.log("=====>  ERROR: ", err);
    }
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

async function publicar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 4000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-publicar_01.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-publicar_02.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
    
    //Hace clic en el primer posts 
    await page.waitForSelector('a.ember-view.permalink.gh-list-data.gh-post-list-title').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-publicar_03.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de Publish para que muestre el boton de publicar el post
    await page.waitForSelector('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 1000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic activar el formulario de publicar el nuevo post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-publicar_04.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de Publish para que publique el nuevo post 
    await page.waitForSelector('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 3000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic publicar el nuevo post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-publicar_05.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Guarda el POSTS modificado y regresa a la pagina de administracion
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 10000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-publicar_06.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
}

//------------------------------------------------------------------------------------------------------

async function modificar_publicado(page, eu, host_ghost, puerto_ghost, titulo, i, tipo_prueba, largo) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 4000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_publicado_01.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_publicado_02.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
    
    //Hace clic en el primer posts 
    await page.waitForSelector('a.ember-view.permalink.gh-list-data.gh-post-list-title').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_publicado_03.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Modifica el titulo del post
    await page.waitForSelector('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', titulo).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Realizado proceso de la modificacion del titulo del POST')
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.screenshot({path:'../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_publicado_04.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
    
    //Hace clic en el boton de Update para que muestre el boton de actualizar el post
    await page.waitForSelector('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 1000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic activar el formulario de actualizar el post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_publicado_05.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de Update para modificar el post 
    await page.waitForSelector('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 3000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic actualizar el post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_publicado_06.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Guarda el POSTS modificado y regresa a la pagina de administracion
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 10000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_publicado_07.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
}

//------------------------------------------------------------------------------------------------------

async function modificar(page, eu, host_ghost, puerto_ghost, titulo, i, tipo_prueba, largo) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 4000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_01.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_02.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
    
    //Hace clic en el primer posts 
    await page.waitForSelector('a.ember-view.permalink.gh-list-data.gh-post-list-title').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_03.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Modifica el titulo del post
    await page.waitForSelector('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', titulo).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Realizado proceso de la modificacion del titulo del POST')
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.screenshot({path:'../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_04.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Guarda el POSTS modificado y regresa a la pagina de administracion
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 10000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-modificar_05.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
}

//------------------------------------------------------------------------------------------------------

async function eliminar(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 4000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-eliminar_01.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-eliminar_02.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
    
    //Hace clic en el primer posts 
    await page.waitForSelector('a.ember-view.permalink.gh-list-data.gh-post-list-title').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-eliminar_03.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de opciones para que active el boton de eliminar 
    await page.waitForSelector('button.post-settings').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('button.post-settings').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en el boton de configuraciones del post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-eliminar_04.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de eliminar 
    await page.waitForSelector('[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en el boton de eliminar post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-eliminar_05.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de confirmacion de eliminacion y regresa a la pagina de listado de post
    await page.waitForSelector('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en el boton de confirmacion de eliminar post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-eliminar_06.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
}

//------------------------------------------------------------------------------------------------------

async function crear(page, eu, host_ghost, puerto_ghost, titulo, i, tipo_prueba, largo) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-crear_01.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-crear_02.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton de New Posts para cargar la pagina de creacion de posts 
    await page.waitForSelector('a.ember-view.gh-btn.gh-btn-green').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.ember-view.gh-btn.gh-btn-green').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en acceder a nuevo post')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-crear_03.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Escribe el titulo del post
    await page.waitForSelector('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', titulo).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Realizado proceso de llenado del titulo del POST')
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.screenshot({path:'../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-crear_04.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Crea el nuevo POSTS 
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 10000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-crear_05.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Regresa a la pagina de administracion 
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('a.blue.link.fw4.flex.items-center.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 5000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-crear_06.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton abandonar si aparece
    await page.waitForSelector('button.gh-btn.gh-btn-red').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('button.gh-btn.gh-btn-red').catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Clic en boton de abandonar si es que aparece')
    await new Promise(r => setTimeout(r, 1000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.screenshot({path:'../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-crear_07.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
}
//------------------------------------------------------------------------------------------------------

async function login(page, eu, host_ghost, puerto_ghost, correo, password, i, tipo_prueba, largo) {
    //Accede a la página de login
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/signin').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 4000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Página de login cargada')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-login_01.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Llena los campos del formulario con datos correctos
    await page.waitForSelector('input[name="identification"]').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.type('input[name="identification"]', correo).catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.waitForSelector('input[name="password"]').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.type('input[name="password"]', password).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Datos validos de logeo')
    await new Promise(r => setTimeout(r, 1000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.screenshot({path:'../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-login_02.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});

    //Hace clic en el boton Sign y pasa a la pagina de post
    await page.waitForSelector('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Realizado proceso de logeo')
    await new Promise(r => setTimeout(r, 1000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    await page.screenshot({path:'../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-login_03.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
}

//------------------------------------------------------------------------------------------------------

async function logout(page, eu, host_ghost, puerto_ghost, i, tipo_prueba, largo) {
    //Accede a la página de logout
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/signout').catch((err) => {console.log ("=====>  ERROR: ", err)});
    await new Promise(r => setTimeout(r, 2000)).catch((err) => {console.log ("=====>  ERROR: ", err)});
    console.log(eu+' : Salida del sistema')
    await page.screenshot({path: '../images/ciclo_'+i+'-tipo_prueba_'+tipo_prueba+'-largo_'+largo+'/'+eu+'-logout_01.png'}).catch((err) => {console.log ("=====>  ERROR: ", err)});
}

//------------------------------------------------------------------------------------------------------
