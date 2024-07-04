# Gifs App

GifsApp es una aplicacion web sencilla que utiliza la api [Giphy](https://giphy.com/) que te muestra los gifs segun a la busqueda que estes realizando.

### Un vistazo a la aplicacion

![GifsApp image](/src/assets/gifApp.png)

Puedes acceder a una demo de la aplicacion haciendo click en el siguiente enlace [GifsApp demo](https://rodolfoll.github.io/gif_app_angular_16/)

## Modulos y componentes de la aplicacion

La aplicacion fue construida utilizando Angular en su version 16.0.0 la cual maneja lo que es el concepto de modulos y componentes.

Los modulos que se encuentran en la aplicacion son los siguientes:

- appModule
- sharedModule
- homeModule
- gifModule

Los componentes que se encuentran en la aplicacion son los siguientes:

- appComponent
- searchboxComponent
- sidebarComponent
- gifcardComponent
- listCardGifsComponent
- lazyimageComponent
- homepageComponent

Una descripcion mas correcta que se puede encontrar con respecto a los modulos en angular es consultando a la documentacion de angular [Angular arquitecture modules](https://docs.angular.lat/guide/architecture-modules).

A continuación se muestran los modulos de la aplicacion:

![GifsApp modules and components](/src/assets/gifAppModules.png)

A continuacion se muestran los componentes de la aplicacion:

![GifsApp components](/src/assets/gifAppComponents.png)

## Como obtener la informacion de una API?

Angular es un framework o plataforma muy completo, por lo que nos ofrece distintas herramientas para poder obtener informacion de una API.
Angular fue desarrollado con el lenguaje de programacion javascript por lo tanto tambien podemos utilizar funciones de javascript para obtener la informacion de una API,angular maneja un principo que es la injeccion de dependencias.

## Que es una injeccion de dependencias?

Segun la documentacion de angular que se puede leer en este enlace [Angular arquitecture services](https://docs.angular.lat/guide/architecture-services) nos indica que un servicio es una categoría amplia que abarca cualquier valor, función o característica que necesite una aplicación. Un servicio es típicamente una clase con un propósito limitado y bien definido. Debe hacer algo específico y hacerlo bien.

En la aplicacion GifsApp se hace uso de la injeccion de dependencias para poder obtener la informacion de la API Ghipy y tambien se aplican ciertas validaciones para que la informacion que se obtenga de la API sea correcta y tambien para que podamos tener toda la logica necesaria para tener persistencia de datos utilizando algun almacenamiento del navegador.

## Como levantar la aplicacion
Cabe recalcar que debe tener el angular cli en la version 16.0.0 puede instalarlo con el siguenites comando (npm install -g @angular/cli@16.0.0) esta version de angular utiliza la version node 18.0.0 no superior a 18.

Para poder levantar la aplicacion solo debe seguir los siguientes pasos:
- Realize una copia del proyecto utilizando el comando de (git clone ["link del proyecto"])
- Ejecutar el comando de (npm install) para que se instalen las dependencias de la aplicacion.
- Ejecutar el comando (npm start) que levantara la aplicacion en el puerto (localhost:4200).

## Deploy de la aplicacion
Para el deploy de la aplicacion utilize github pages, para hacer el build instale ciertas depencias de desarollo estas son:
- [del-cli](https://www.npmjs.com/package/del-cli)
-[copyfiles](https://www.npmjs.com/package/copyfiles)

y configure un script para poder ejecutar los diferentes comandos:
![GifsApp deploy](/src/assets/scriptBuild.png)

el comando importante para el hacer el deploy en github pages es el : npm run build:github
