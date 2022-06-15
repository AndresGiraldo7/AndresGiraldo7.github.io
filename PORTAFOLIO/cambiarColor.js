var body = document.getElementById("cuerpo");


function cambiarColor(x){
if (x.value == 1){ 
  console.log("Tema: ", cuerpo);
  body.style.backgroundColor = "#5f9ea0";
  mantenerColor("#5f9ea0");
  localStorage.setItem("tema", "original" );
  
}else if (x.value == 2){
  console.log("Tema: ", cuerpo);
  body.style.backgroundColor = "#9bcd9b";
  mantenerColor("#9bcd9b")
  localStorage.setItem("tema", "verde");
 
}else if (x.value == 3){
  console.log("Tema: ", cuerpo);
  body.style.backgroundColor = "#EB5D49";
  mantenerColor("#EB5D49");
  localStorage.setItem("tema","rojo");
} else if (x.value == 4){
  console.log("Tema: ", cuerpo);
  body.style.backgroundColor = "#ffdf00";
  mantenerColor("#ffdf00")
  localStorage.setItem("tema","amarillo");
  }
}

function mantenerColor(color){ 
  Array.prototype.forEach((body)=> {
    body.style.backgroundColor = color;
  })
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
