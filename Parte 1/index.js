var express = require('express');
var path = require('path');
var soap = require('soap'); 
//SERVER
var app = express();
//Plantilla de nodejs
app.set("view engine","jade"); 
//middleware
app.use(express.urlencoded({ extended: true }));    //peticiones application /json
app.use(express.json());        //peticiones application /json
app.use("/public",express.static(path.join(__dirname,'/public'))); //carpeta publica para los usuarios


//-------------------------------------------------
//--------------------- INICIO --------------------
//-------------------------------------------------


// Metodo POST para guardar el formulario que se lleno
app.post('/guardar', function (req, res) {
    var args = {
        name:req.body.nombre,
        catid:req.body.catid,
        language:req.body.language,
        published:req.body.published
    }; 
    //URL a consultar para crear 
    var url = "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap&pageLimit=100&wsdl"; 
    //Se crear el SOAP
    soap.createClient(url,function(err,client){
        if(err){
            console.error(err); 
        } else { 
            client.create(args,
                function(err,response){ 
                    if(err) {
                        console.error(err); 
                    }else { 
                        console.log(response);
                        res.send("CREADO CORRECTAMENTE");
                    } 
                }) 
            } 
        });
});

//Metodo GET para renderizar el formulario
app.get('/', function (req, res) { 
    res.render("home");
});

//Metodo GET para listar el filtro por carnet 201504242
app.get('/lista', function (req, res) {
    var url2 = "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap&wsdl"; 
    var args2= {filterSearch:201504242};
    soap.createClient(url2,function(err,client){
        if(err){
            console.error(err); 
        } else { 
            client.readList(args2,
                function(err,response){ 
                    if(err) {
                        console.error(err); 
                    }else { 
                        console.error("TODO"); 
                        arreglo = (response["list"]["item"]);
                        //arreglo.forEach(element => {
                            
                        //}); 
                        res.send(arreglo);                       
                    } 
                }) 
            } 
        });
});



//-------------------------------------------------
//----------------------- FIN ---------------------
//-------------------------------------------------

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});