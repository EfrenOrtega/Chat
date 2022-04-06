//SERVER SIDE
//SERVER CODE
const path = require('path');//Para poder trabajar con rutas
const express = require('express');//IMPORTAMOS EXPRESS
const app = express();//App encargado de tener todas las configuraciones del SERVIDOR

//SETTINGS
app.set('port', process.env.PORT || 3000);

//TO START THE SERVER
//I put my IP to connect other devices with this SERVER
const server = app.listen(app.get('port'), '192.168.1.65', ()=>{
  console.log("Server on port:", app.get('port'));
});


//STATIC FILES para que el servidor llame a los archivos como html, css y javascript

//__dirname es del module Path y es lo mismo que la direccion de este proyecto -> C:\Users\Efren\Downloads\Chat V1
app.use(express.static(path.join(__dirname, 'public')));//Esto es para llamar todos los archivos estaticos como
//html, css, javascript etc.
