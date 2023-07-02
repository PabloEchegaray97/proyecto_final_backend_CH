import express from 'express';
const app = express ();
app.get('/saludo', (req,res) => {
    res.send('Saludo a secas')
})
app.get('/saludo/:nombre',(req,res) =>{
    console.log(req.params);
    res.send(`Saludos a ${req.params.nombre}`)
})

app.listen(8080)