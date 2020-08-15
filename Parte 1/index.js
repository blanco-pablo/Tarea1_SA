var express = require('express');
var path = require('path');
var soap = require('soap'); 
const request = require('request');
//SERVER
var app = express();
//Plantilla de nodejs
app.set("view engine","jade"); 

//-------------------------------------------------
//------------------ Middleware -------------------
//-------------------------------------------------
//peticiones application /json
app.use(express.urlencoded({ extended: true }));    
app.use(express.json()); 
//carpeta publica para los usuarios
app.use("/public",express.static(path.join(__dirname,'/public'))); 

//Variables para autorizacion
var usuario = 'sa';
var secret = 'fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745';
var url_credenciales = "https://api.softwareavanzado.world/index.php?option=token&api=oauth2";
    
//-------------------------------------------------
//--------------------- INICIO --------------------
//-------------------------------------------------


// Metodo POST para guardar el formulario que se lleno
app.post('/guardar', function (req, res) {
    //Traemos los datos del formulario
    var datos = {
        name: req.body.nombre,
        catid: req.body.catid,
        language: req.body.language,
        published: req.body.published
    };
    var url_api = "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal";
    
    //Vamos a traer el tocken con el usuario y secret
    request.post(
        url_credenciales,
        { json: { 
            grant_type: 'client_credentials',
            client_id: usuario,
            client_secret: secret 
        }},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var token = body.access_token;
                //Ya con el token podemos enviar los datos
                request.post({
                    url: url_api,
                    body: JSON.stringify(datos),
                    headers: {
                        "Content-Type":"application/json",
                        "Authorization": "Bearer "+token
                    }}, 
                    function (error, response, body) {
                        if (!error && response.statusCode == 201) {
                            res.send("Insertado Exitosamnte");
                        }else{
                            res.send("Existio un Error "+error);
                        }
                    }
                );
            }else{
                res.send("Existio un Error en token "+error);
            }
        }
    );
});

//Metodo GET para renderizar el formulario
app.get('/', function (req, res) { 
    res.render("home");
});

//Metodo GET para listar el filtro por carnet 201504242
app.get('/lista', function (req, res) {
    request.post(
        url_credenciales,
        { json: { 
            grant_type: 'client_credentials',
            client_id: usuario,
            client_secret: secret 
        }},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                //Obtenemos el token
                var token = body.access_token;
                var url_lista = "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&list[limit]=0&filter[search]=201504242"
                request.get({
                    url: url_lista,
                    headers: {
                        "Content-Type":"application/json",
                        "Authorization": "Bearer "+token
                    }}, 
                    function (err, resp, b) {
                        if (!err) {
                            //Retorno el filtro que me devuelve la API
                            res.send(resp.body);
                        }else{
                            //Retorno el error
                            res.send(e);
                        }
                    }
                );
            }
        }
    );
});



//-------------------------------------------------
//----------------------- FIN ---------------------
//-------------------------------------------------

//Puerto 3000 donde se inicia el server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});