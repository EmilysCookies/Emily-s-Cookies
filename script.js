alert("JS CARGADO");

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

alert("BOTON: " + menuBtn);
alert("MENU: " + menu);

if(menuBtn && menu){
    menuBtn.onclick = function(){
        alert("CLICK");
        menu.classList.toggle("activo");
    };
}
