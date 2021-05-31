/*
# Pruebas E2E

## Lista de las acciones que comprenden la prueba

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

*/

const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 })

    // definicion de variables relacionadas a la ubicacion de la plataforma Ghost
    host_ghost = 'localhost'
    puerto_ghost = '2368'

    //Accede a la página de login
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/signin');
    await new Promise(r => setTimeout(r, 2000));
    console.log('Página de login cargada')
    await page.screenshot({path: './images/01-login.png'})

    //Prueba haciendo clic en el botón Forgot? para validar que funcione
    await page.click('button.forgotten-link.gh-btn.gh-btn-link.gh-btn-icon.ember-view')
    await new Promise(r => setTimeout(r, 1000));
    console.log('Clic en Forgot?')
    await page.screenshot({path: './images/02-login-forgot.png'})

    //Accede de nuevo a la página de login
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/signin');
    await new Promise(r => setTimeout(r, 2000));
    console.log('Página de login cargada de nuevo')

    //Prueba haciendo clic en el boton de Sign in sin datos para validar que funcione 
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view')
    await new Promise(r => setTimeout(r, 1000));
    console.log('Clic en Sign in')
    await page.screenshot({path: './images/03-login-sigin.png'})

    //Accede de nuevo a la página de login
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/signin');
    await new Promise(r => setTimeout(r, 2000));
    console.log('Página de login cargada de nuevo')

    //Llena los campos del formulario con datos errados para validar que funcione
    await page.type('input[name="identification"]', 'dato erroneo');
    await page.type('input[name="password"]', 'dato erroneo');
    console.log('Datos invalidos de logeo')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:'./images/04-bad-data-login-process.png'})

    //Prueba haciendo clic en el boton Sign in con datos erroneos
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view')
    console.log('Realizado proceso de logeo invalido')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:'./images/05-bad-login-process.png'})

    //Accede a la página de login de nuevo
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/signin');
    console.log('Página de login cargada de nuevo')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./images/06-login-again-process.png'})

    //Llena los campos del formulario con datos correctos para validar que funcione
    await page.type('input[name="identification"]', 's.salinasv@uniandes.edu.co');
    await page.type('input[name="password"]', 'Hk194ftxw5');
    console.log('Datos validos de logeo')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:'./images/07-ok-data-login-process.png'})

    //Prueba haciendo clic en el boton Sign in con datos correctos
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view')
    console.log('Realizado proceso de logeo')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:'./images/08-end-login-process.png'})

    //Accede a la página de listado de POSTS
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log('Página de listado de POSTS cargada')
    await page.screenshot({path: './images/09-list-posts.png'})

    //Prueba haciendo clic en el boton de New Post para que acceda a la pagina de nuevo post 
    await page.click('a.ember-view.gh-btn.gh-btn-green')
    await new Promise(r => setTimeout(r, 2000));
    console.log('Clic en acceder a nuevo post')
    await page.screenshot({path: './images/10-new-post.png'})

    //Llena los campos del formulario con datos correctos para validar que funcione
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'titulo de prueba');
    console.log('Realizado proceso de llenado del titulo del POST')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:'./images/11-fill-title-new-post.png'})

    //Prueba haciendo clic en el boton de opciones para que active el boton de publicar 
    await page.click('button.post-settings')
    await new Promise(r => setTimeout(r, 2000));
    console.log('Clic activar el boton de enlace al formulario de publicar el nuevo post')
    await page.screenshot({path: './images/12-activate-button-publish.png'})

    //Prueba haciendo clic en el boton de Publish para que muestre el boton de publicar el post
    await page.click('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 1000));
    console.log('Clic activar el formulario de publicar el nuevo post')
    await page.screenshot({path: './images/13-new-form-post.png'})

    //Prueba haciendo clic en el boton de Publish para que crear el nuevo post 
    await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    await new Promise(r => setTimeout(r, 1000));
    console.log('Clic publicar el nuevo post')
    await page.screenshot({path: './images/14-new-post.png'})

    //Prueba haciendo clic en el boton de Post para regresar a la lista de posts 
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 2000));
    console.log('Clic para regresar a la lista de posts')
    await page.screenshot({path: './images/15-list-post.png'})

    //Confirma que si se creo el post con el titulo definido
    const Message =  await page.$eval('h3.gh-content-entry-title', ele => ele.textContent);
    console.log("Titulo del post creado: "+Message);
    
    await browser.close();
    return;
})().catch(e=>console.log(e));
