import express from 'express';

// setup
// creo una instancia de express
const app = express();

const port = 4000;
// crear el puerto

app.listen(port, ()=>{
    console.log('Estoy usando el puerto '+port)
});

//herramientras extras


// rutas

