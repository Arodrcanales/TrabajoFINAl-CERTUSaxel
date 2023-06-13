let boton = document.querySelectorAll("button");

boton[5].addEventListener("click",agregarCarrito);
boton[6].addEventListener("click",agregarCarrito);
boton[7].addEventListener("click",agregarCarrito);
boton[8].addEventListener("click",agregarCarrito);
boton[9].addEventListener("click",agregarCarrito);
boton[10].addEventListener("click",agregarCarrito);
boton[11].addEventListener("click",agregarCarrito);
boton[12].addEventListener("click",agregarCarrito);

function agregarCarrito(e) {

     

    if(document.querySelector("#carritoVacio")){
       document.querySelector("#carritoVacio").remove();
       document.querySelector("#carrito > figcaption").remove();
    }

    let elementoBoton = e.target;
    let elementoPadre = elementoBoton.parentElement;
    console.log(elementoPadre);

    

    
    

    alert("se agrego correctamente") 
}


