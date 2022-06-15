var cont1 = document.getElementById("contenedor1");
var cont2 = document.getElementById("contenedor2");
var cont3 = document.getElementById("contenedor3");
var cont4 = document.getElementById("contenedor4");
var cont5 = document.getElementById("contenedor5");
var cont6 = document.getElementById("contenedor6");
var cont7 = document.getElementById("contenedor7");
var cont8 = document.getElementById("contenedor8");
var cont9 = document.getElementById("contenedor9");
var cont10 = document.getElementById("contenedor10");

function frutasPar(x){ 
if (x.value == 1){
    cont1.style.backgroundColor = "#9bcd9b";
    cont3.style.backgroundColor = "#9bcd9b";
    cont5.style.backgroundColor = "#9bcd9b";
    cont7.style.backgroundColor = "#9bcd9b";
    cont9.style.backgroundColor = "#9bcd9b";
}else if(x.value == 2){
    cont2.style.backgroundColor = "rgb(22, 103, 165)";
    cont4.style.backgroundColor = "rgb(22, 103, 165)";
    cont6.style.backgroundColor = "rgb(22, 103, 165)";
    cont8.style.backgroundColor = "rgb(22, 103, 165)";
    cont10.style.backgroundColor ="rgb(22, 103, 165)";

}

}
