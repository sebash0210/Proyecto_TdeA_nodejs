const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const directoriopublico = path.join(__dirname,'../public');
app.use(express.static(directoriopublico));

app.set ('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index',{
        estudiante: 'Sebastian'
    });
});
app.listen(3001,()=>{
    console.log("Servidor iniciado");  
})
