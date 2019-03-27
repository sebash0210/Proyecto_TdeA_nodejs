const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyparser = require('body-parser');
const dirNode_modules = path.join(__dirname , '../node_modules')

const directoriopublico = path.join(__dirname,'../public');
app.use(express.static(directoriopublico));
app.use(bodyparser.urlencoded({extended: false}))
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));

app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
app.set ('view engine','hbs');

app.get('/crud',(req,res)=>{
    res.render('crud',{
        id: req.body.id,
        name: req.body.nameC
    });
});

app.listen(3001,()=>{
    console.log("Servidor iniciado");  
})
