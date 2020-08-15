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

# Uso 🛠️

1. Clonar el repositorio: https://github.com/blanco-pablo/Tarea1_SA en la rama __Practica2_SA__
```
git clone --branch Practica2_SA https://github.com/blanco-pablo/Tarea1_SA
```
* Entre a la carpeta que quiere ejecutar:
```
cd '.\Parte 1\
```
```
cd '.\Parte 2\
```
2. Correr el comando para descargar las dependencias especificadas en el package.json
```
npm install
```

* Podremos ver que instala las siguientes dependencias:
    * "express": "^4.17.1", documentacion [aqui](https://www.npmjs.com/package/express)
    * "express-soap": "^1.1.2", documentacion [aqui](https://www.npmjs.com/package/express-soap)
    * "jade": "^1.11.0", documentacion [aqui](https://www.npmjs.com/package/express-jade)
    * "request": "^2.88.2", documentacion [aqui](https://expressjs.com/es/api.html)

3. Ejecutar
```
node index.js
```
4. En el navegador abrir http://localhost:3000/

* Cargara la siguiente pagina:
![Imagen](/ima.jpg)