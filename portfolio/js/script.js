var menuOculto = document.querySelector('.ocultar-menu');

menuOculto.addEventListener('click',()=>{

    let menuMobile = document.querySelector('.menu-mobile');
    
    if(menuMobile.classList.contains('mostrar')){
        menuMobile.classList.remove('mostrar');
        menuMobile.classList.add('ocultar');
    }else{
        menuMobile.classList.add('mostrar');
        menuMobile.classList.remove('ocultar');
    }

});