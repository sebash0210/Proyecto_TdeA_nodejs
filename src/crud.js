const fs = require('fs');
listCourse = [];

const RegisterEst = (Estudiante)=>{
    list();
    let inscEst ={
        idEst:Estudiante.id,
        nEst:Estudiante.name,
        emailEst: Estudiante.email,
        telEst: Estudiante.tel,
        course: Estudiante.course,
    }
    let dupl = listInscri.find(id => (id.idEst == Estudiante.id) && (id.course == Estudiante.course));
    if(!dupl){
        listInscri.push(inscEst);
        save('E');
    }else{
        let msgerr = 'Ya existe un Estudiate con ese id inscrito en el curso ' + inscEst.course;
        console.log(msgerr);
    }

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
        statusCourse:course.status
    }
    let dupl = listCourse.find(id=>id.idcourse == course.id);
    if(!dupl){
        listCourse.push(cCourse);
        save('C');
    }else{
        let msgerr = 'Ya existe un curso con ese ID';
        console.log(msgerr);
    }

}

const list =()=>{
    try{
        listCourse = require('./lista_cursos.json')
        //listCourse= JSON.parse(fs.readFileSync('lista_cursos.json'));
    }catch(error){
        listCourse =[];
    }
    
}
const save =(file)=>{
    if (file=='C'){
        let data = JSON.stringify(listCourse);
        fs.writefile('lista_cursos.json',data,(err)=>{
            if (err) throw  (err);
            let msg = 'Curso creado con exito';
            console.log(msg);
        })
    }else {
        let data = JSON.stringify(listInscri);
        fs.writefile('lista_Incritos.json',data,(err)=>{
            if (err) throw  (err);
            let msg = 'Estudiante inscrito con exito';
            console.log(msg);
        })
    }
} 

const show= () =>{
   list();
   listCourse.forEach(course => {
       console.log(course.nCourse);
       console.log(course.desCourse);
       console.log(course.valCourse);
       console.log(course.modCourse);
       console.log(course.intCourse);
   });
}
const showCoursestatus = (status) =>{
    list();
    let status = listCourse.find(element =>element.statusCourse == status);
    if(!status){
        let msgerr = 'No se encuentra ningun Courso disponible';
        console.log(msgerr);
    }else{
        status.forEach(course => {
            console.log(course.nCourse);
            console.log(course.desCourse);
            console.log(course.valCourse);
            console.log(course.modCourse);
            console.log(course.intCourse);
        });
        
    }
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
    show,
    showCoursestatus,
    RegisterEst,
    deleteE
}