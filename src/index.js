import express from 'express';

// creo una instancia de express
const app = express();

const port = 4000;

app.listen(port, ()=>{
    console.log('Estoy usando el puerto '+port)
});

