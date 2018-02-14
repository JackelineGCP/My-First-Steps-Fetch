const express = require('express'); //descargando express
const app = express(); //guardame todas las funciones de expresss en una variable 'app'
const server = app.listen(3000, encender); //cuando escuches el puerto 3000 recrea la funcion encender
function encender() {
  console.log('servidor encendido');

}

app.use(express.static('public')); //cuando uses express static y la carpeta se llama 'public'