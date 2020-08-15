# Practica 2 - 201504242

Continuacion de [Practica 1](https://github.com/blanco-pablo/Tarea1_SA) -> Conceptos básicos de SOA

## Autor ✒️

* **Pablo Javier Blanco Calderon** - *201504242* - [blanco-pablo](https://github.com/blanco-pablo)

## Restricciones 🚀

* __Parte 1:__ Repetir la práctica # 1 agregando credenciales tipo client_credentials y un token Bearer para poder volver a desarrollar el mismo ejercicio anterior (ahora requiere autenticación).
[Click Aqui](https://github.com/blanco-pablo/Tarea1_SA/tree/Practica2_SA/Parte%201) para ir a la parte 1.

* __Parte 2:__ Repetir la misma tarea # 1 utilizando SOAP y autenticación básica
[Click Aqui](https://github.com/blanco-pablo/Tarea1_SA/tree/Practica2_SA/Parte%202) para ir a la parte 2.

## Caracteristicas :necktie:

* Formulario para crear contacto
    * Nombre (String)
    * catid (Entero)
    * language (String)
    * published (Entero)

* Link con filtro por carnet

# Herramientas :hammer:

* __Visual Studio Code__

    Version: 1.47.3 (user setup)
    Commit: 91899dcef7b8110878ea59626991a18c8a6a1b3e
    Date: 2020-07-23T13:12:49.994Z
    Electron: 7.3.2
    Chrome: 78.0.3904.130
    Node.js: 12.8.1
    V8: 7.8.279.23-electron.0
    OS: Windows_NT x64 10.0.18362

__Aca el [link](https://code.visualstudio.com/download) de descarga.__

* __Express__

    Fast, unopinionated, minimalist web framework for node JS.
    Express esta disponible para que cualquier usuarios pueda descargarlo de forma totalmente gratuita desde el __[siguiente enlace](https://www.npmjs.com/package/express)__

# Pre-Requisitos :bulb:

1. __Node JS:__ Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. [Link de Descarga ACA.](https://nodejs.org/es/download/)

2. __NPM:__ npm es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript, bajo Artistic License 2.0. [Link de Descarga ACA.](https://www.npmjs.com/get-npm)

* Para verificar si tiene Node.js instalado, ejecute este comando en su terminal:
```bash
node -v
```
* Para confirmar que tiene npm instalado, puede ejecutar este comando en su terminal:
```bash
npm -v
```
# Uso 🛠️

1. Clonar el repositorio: https://github.com/blanco-pablo/Tarea1_SA en la rama __Practica2_SA__
```bash
git clone --branch Practica2_SA https://github.com/blanco-pablo/Tarea1_SA
```
* Entre a la carpeta que quiere ejecutar:
```bash
cd '.\Parte 1\'
```
```bash
cd '.\Parte 2\'
```
2. Correr el comando para descargar las dependencias especificadas en el package.json
```bash
npm install
```

* Podremos ver que instala las siguientes dependencias:
    * "express": "^4.17.1", documentacion [aqui](https://www.npmjs.com/package/express)
    * "express-soap": "^1.1.2", documentacion [aqui](https://www.npmjs.com/package/express-soap)
    * "jade": "^1.11.0", documentacion [aqui](https://www.npmjs.com/package/express-jade)
    * "request": "^2.88.2", documentacion [aqui](https://expressjs.com/es/api.html)

3. Ejecutar
```bash
node index.js
```
4. En el navegador abrir http://localhost:3000/

* Cargara la siguiente pagina:
![Imagen](/ima.jpg)