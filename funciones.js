//Interactuar con HTML

const usuario1 = document.getElementById("usuario1") ;
const usuario2 = document.getElementById("usuario2") ;
const usuario3 = document.getElementById("usuario3") ;



function agregarusuario1() {
    let usuarionuevo = prompt("Ingrese un nuevo nombre de usuario") ;
    usuario1.innerText = usuarionuevo ;    
}

function agregarusuario2() {
    let usuarionuevo = prompt("Ingrese un nuevo nombre de usuario") ;
    usuario2.innerText = usuarionuevo ;    
}

function agregarusuario3() {
    let usuarionuevo = prompt("Ingrese un nuevo nombre de usuario") ;
    usuario3.innerText = usuarionuevo ;    
}




let pregunta = confirm("Desea crear un usuario?") ;

while(pregunta == true){
    let consulta = prompt("Ingrese el usuario que desea modificar (Ej: usuario1):").toLowerCase() ;
    if ( consulta === "usuario1"){
        agregarusuario1() ;    
    }else if(consulta === "usuario2"){
        agregarusuario2() ;
    }else if(consulta === "usuario3"){
        agregarusuario3() ;
    }else{console.warn("Ustes ingresó un usuario no válido.") ;}
    pregunta = confirm("Desea crear otro usuario?") ;
}


