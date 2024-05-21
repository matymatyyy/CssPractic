
const buttonBurguer = document.getElementById("buton");
const menu= document.getElementById("menu");
const buttonCerrar= document.getElementById("cerrar");
const TextFlag= document.getElementById("sol");
const div1=document.querySelector(".div1");
const div3=document.querySelector(".div3");      
    
buttonBurguer.addEventListener("click", function() {
    menu.style.left = 0;
})
buttonCerrar.addEventListener("click", function() {
    menu.style.left = "-105%";
})

function Bandera(nombre) {
    if (nombre=="Japon") {
        TextFlag.innerHTML= "🔴";
        TextFlag.style.fontSize = "4em";
        div1.style.background = "white";
        div3.style.background = "white"; 
    }
    else if(nombre=="Argentina"){
        div1.style.background = "lightblue";
        div3.style.background = "lightblue"; 
        TextFlag.innerHTML= "☀️";
        TextFlag.style.fontSize = "3em";
    }
    menu.style.left = "-105%";
}