const fs = require('fs');

listCourse = [];
let listinsxcurso=[];
const RegisterEst = (Estudiante)=>{
    list();
    let inscEst ={
        idEst:Estudiante.ide,
        nEst:Estudiante.namee,
        emailEst: Estudiante.emaile,
        telEst: Estudiante.tel,
        course: Estudiante.curso,
    }
    let cursoest ={
        nEst:Estudiante.namee,
        course: Estudiante.curso
    }
    let dupl = listInscri.find(id => (id.idEst == Estudiante.ide) && (id.course == Estudiante.curso));
    if(!dupl){
        listInscri.push(inscEst);
        listinsxcurso.push(cursoest);
        save('E');
        resp="Se registro correctamente el Estudiante";
    }else{
        resp = 'Ya existe un Estudiante con ese ID en el curso';
    }
return resp;
}

const createCourse = (course)=>{
    list();
    let cCourse ={
        idCourse:course.id,
        nCourse:course.name,
        desCourse: course.desc,
        valCourse: course.value,
        modCourse: course.mod,
        intCourse: course.int,
        statusCourse:course.stat
    }
    let dupl = listCourse.find(id=>id.idCourse == course.id);
    let resp = "";
    if(!dupl){
        listCourse.push(cCourse);
        save('C');
        resp="Se registro correctamente el curso";
    }else{
        resp = 'Ya existe un curso con ese ID';
    }
   return resp;
}

const list =()=>{  
        listCourse = require('./../../lista_cursos.json') 
        listInscri = require('./../../lista_Inscritos.json') 
        listinsxcurso =  require('./../../insc_cursos.json') 
}
const save =(file)=>{
    if (file=='C'){
        let data = JSON.stringify(listCourse,null,2 );
        fs.writeFileSync('lista_cursos.json',data,(err)=>{
            if (err) throw  (err);
            let msg = 'Curso creado con exito';
            console.log(msg);
        })
    }else {
        let data = JSON.stringify(listInscri,null,2);
        let datacr = JSON.stringify(listinsxcurso,null,2);
        fs.writeFileSync('insc_cursos.json',datacr,(err)=>{
            if (err) throw  (err);
        })
        fs.writeFileSync('lista_Inscritos.json',data,(err)=>{
            if (err) throw  (err);
            let msg = 'Estudiante inscrito con exito';
            console.log(msg);
        })
    }
} 

const listrel = (c)=>{
    list();
    let newarray = listinsxcurso.filter(ele => ele.course == c) 
    return newarray;
}


 const deleteE = (idEst) =>{
    list();
    let Continue = listInscri.filter(element  =>element.idE != idEst);
    if(Continue.length == listInscri.length){
        console.log('no existe ese estudinte inscrito')
    }else{
        listInscri = Continue;
        save('E');
    }
 }
module.exports = {
    createCourse,
    listrel,
    RegisterEst,
    deleteE
}