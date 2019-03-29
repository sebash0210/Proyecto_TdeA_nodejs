const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyparser = require('body-parser');
//require('./helpers/helpers.js')
let statc="";
const dirNode_modules = path.join(__dirname , '../node_modules')
const directoriopublico = path.join(__dirname,'../public');
const directoriopartials= path.join(__dirname,'../partials');
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
hbs.registerHelper(require('./helpers/helpers.js'))
app.use(bodyparser.urlencoded({extended: false}))
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));

app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
app.set ('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index',{
    });
});
app.get('/consultar',(req,res)=>{
    res.render('consultar',{
        estado:'Disponible'
    });
});

app.get('/int',(req,res)=>{
    res.render('consultinsc',{
    });
});
app.post('/registrarEst',(req,res)=>{
    res.render('inscribir',{Es:{
        ide:parseInt(req.body.ides),
        namee: req.body.nombree,
        emaile:req.body.email,
        tel:parseInt(req.body.tel),
        curso: req.body.cur
    }});
})
app.post('/consin',(req,res)=>{
    res.render('consultari',{
        course:req.body.mod
    });
})




app.post('/crearCurso',(req,res)=>{
    if (req.body.est == ''){
        statc= "Disponible"
    }else{
        statc=req.body.est
    }
    res.render('registrar',{cur:{
        id:parseInt(req.body.idcurso),
        name: req.body.nombrec,
        desc:req.body.descc,
        value:parseInt(req.body.val),
        mod: req.body.mod,
        int: req.body.int,
        stat: statc
    },
    estado:'Disponible'
    });
});


app.get('/formulario',(req,res)=>{
    res.render('formulario',{
       curs:{

       }
    })
})
app.get('/inscribir',(req,res)=>{
    res.render('formularioes',{
       curs:{

       }
    })
})
app.get('*',(req,res)=>{
    res.render('error')
})
app.listen(3001,()=>{
    console.log("Servidor iniciado en el puerto 3001");  
})
