import app from './app'//importacion de la App con todas las configuraciones
const puerto = process.env.PORT ||'4000';//definicion del puerto

app.listen(puerto, function(){
  console.log('El servidor web orion-server esta corriendo por el puerto '+puerto);
});