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
var sa = 'sa';
var usac = 'usac';

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
    //Asignamos la URL y el usuario y contraseña
    var url_wsdl = "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap&wsdl";
    
    var httpOptions = {
        wsdl_headers: {
          'Authorization': 'Basic ' + Buffer.from(sa + ':' + usac).toString('base64')
        }
      };
    //Se crear el SOAP
    soap.createClient(
        url_wsdl,
        httpOptions,
        function(err,client){
            //Mandamos los Headers con autorizacion Basic
            client.addHttpHeader('Authorization',"Basic "+ Buffer.from(sa + ':' + usac).toString('base64'))
            if(err){
                console.log(err.message); 
            } else { 
                //Creamos el contacto
                client.create(
                    datos,
                    function(error,response){ 
                        if(error) {
                            res.send(error.message); 
                        }else { 
                            console.log(response);
                            res.send("CREADO CORRECTAMENTE");
                        } 
                    }
                ) 
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
    //Colocamos la URL, el filtro y los headeres
    var url2 = "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap&wsdl"; 
    var args2= {filterSearch:201504242};
    var httpOptions = {
        wsdl_headers: {
          'Authorization': 'Basic ' + Buffer.from(sa + ':' + usac).toString('base64')
        }
    };
    //Creamos el SOAP y le colocamos las http
    soap.createClient(
        url2,
        httpOptions,
        function(err,client){
            //Agregamos los headers
            client.addHttpHeader('Authorization',"Basic "+ Buffer.from(sa + ':' + usac).toString('base64'));
            if(err){
                console.log(err.message); 
            } else { 
                //Leemos el metodo ReadList del WSDL
                client.readList(args2,
                    function(err,response){ 
                        if(err) {
                            console.log(err.message); 
                        }else { 
                            console.log("LISTADO CORRECTO"); 
                            var arr = response["list"]["item"];
                            res.send(arr);                       
                        } 
                    }) 
            } 
        }
    );
    /*request.post(
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
    );*/
});



//-------------------------------------------------
//----------------------- FIN ---------------------
//-------------------------------------------------

//Puerto 3000 donde se inicia el server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});