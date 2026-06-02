alert("JS CARGADO");

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if(menuBtn){
    alert("BOTON EXISTE");
}else{
    alert("BOTON NO EXISTE");
}

if(menu){
    alert("MENU EXISTE");
}else{
    alert("MENU NO EXISTE");
}

if(menuBtn && menu){

    menuBtn.onclick = function(){

        alert("CLICK DETECTADO");

        menu.classList.toggle("activo");

    };

}
