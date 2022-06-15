window.onload = () => {
    
    console.log("DOM cargado");
    const formNode = document.getElementById("formulario");
    formNode.addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log("Evento submit capturado");
        var nombre = this.document.querySelector("#nombre").value;
        var correo = this.document.querySelector("#correo").value;
        var asunto = this.document.querySelector("#asunto").value;
        var mensaje = this.document.querySelector("#mensaje").value;

        if(nombre == ""){ 
            alert("Por favor, escribe tu nombre");
        }
        if(correo == ""){
            alert("Por favor, escribe tu correo");
        }
        if(asunto == ""){
            alert("Por favor, escribe tu asunto");
        }
        if(mensaje == ""){ 
            alert("Por favor, escribe tu mensaje");  
        }
        console.log("El nombre es: " + nombre);
        console.log("El correo es: " + correo);
        console.log("El asunto es: " + asunto);
        console.log("El Mensaje es: " + mensaje);

       
    })
};

function resetForm(){
    document.getElementById("formulario").reset();
}