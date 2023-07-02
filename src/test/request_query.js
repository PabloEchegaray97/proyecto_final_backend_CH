import express from "express";
const app = express();

app.get ('/saludo', (request, response) => {
    console.log(request.query) // query es todo lo que el usuario envia al servidor por la url
    //{ edad: '26', name: 'pablo' }
    const nombre = request.query.name;
    console.log(nombre);
    response.send(`Tu edad es ${request.query.edad} y tu nombre es ${nombre}`);
})

app.listen(8080);
