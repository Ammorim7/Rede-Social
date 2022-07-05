function logar(){
    let usuario = document.querySelector("#usuario");
    let senha = document.querySelector("#senha");

    if(usuario.value=="amorim" && senha.value=="amorim"){
        window.location.href="feed.html";
    } else {
        usuario.setAttribute('style', 'border: 1px solid red;');
        senha.setAttribute('style', 'border: 1px solid red;');
    }
}