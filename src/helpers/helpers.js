const hbs = require('hbs');
const fs = require('fs');
const funciones =  require('./crud');

let texto="";
let status =[];

hbs.registerHelper("listar",()=>{
            listCourse = require('./../../lista_cursos.json')
            texto = "<table class='table'> \
                        <thead class='thead-dark'> \
                           <th scope='col'>Id</th> \
                           <th scope='col'>Nombre</th> \
                           <th scope='col'>Descripcion</th>" + 
                           "<th scope='col'>Valor</th> \
                           <th scope='col'>Modalidad</th> \
                           <th scope='col'>Intensidad</th> \
                           <th scope='col'>Estado</th></tr>" +
                        "</thead> \
                        <tbody>";

       listCourse.forEach(element => {
           texto =  texto + 
                    "<tr>" +
                    "<td>" + element.idCourse  + "</td>" +
                    "<td>" + element.nCourse   + "</td>" +
                    "<td>" + element.desCourse + "</td>" +
                    "<td>" + element.valCourse + "</td>" +
                    "<td>" + element.modCourse + "</td>" +
                    "<td>" + element.intCourse + "</td>" +
                    "<td>" + element.statusCourse + "</td>" + 
                    "</tr>";
       })
       texto= texto + "</tbody></table>";
       return texto;
 
    }
);
hbs.registerHelper("listardis",(estado)=>{
 
        listCourse = require('./../../lista_cursos.json')
        status = listCourse.filter(element =>element.statusCourse == estado);
        if(status.length == 0){
            let msgerr = '<h1>No se encuentra ningun Courso disponible<h1>';
            texto = msgerr;
        }else{
            texto = "<table class='table'> \
            <thead class='thead-dark'> \
               <th scope='col'>Id</th> \
               <th scope='col'>Nombre</th> \
               <th scope='col'>Descripcion</th>" + 
               "<th scope='col'>Valor</th> \
               <th scope='col'>Modalidad</th> \
               <th scope='col'>Intensidad</th> \
               <th scope='col'>Estado</th></tr>" +
            "</thead> \
            <tbody>";
            status.forEach(element => {
                texto =  texto + 
                "<tr>" +
                "<td>" + element.idCourse  + "</td>" +
                "<td>" + element.nCourse   + "</td>" +
                "<td>" + element.desCourse + "</td>" +
                "<td>" + element.valCourse + "</td>" +
                "<td>" + element.modCourse + "</td>" +
                "<td>" + element.intCourse + "</td>" +
                "<td>" + element.statusCourse + "</td>" + 
                "</tr>";
            });
            texto= texto + "</tbody></table>";
        }
        return texto;
});
hbs.registerHelper("RegCourse",(Curso)=>{  
        let result = funciones.createCourse(Curso);
        respo = "<h1>"+ result +"</h1>"
    return respo;
})
hbs.registerHelper("RegEst",(Estu)=>{  
    console.log(Estu)
    let result = funciones.RegisterEst(Estu);
    respo = "<h1>"+ result +"</h1>"
return respo;
});
hbs.registerHelper("listestxcur",()=>{  
    funciones.listrel();
});