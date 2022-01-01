function carregar () {
    
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    msg.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    msg.style.fontSize = "1.5em"; 
    msg.style.color = "#004240"; 
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = "manha.jpg";
        document.body.style.background = "#ffc715" 
    } else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = "tarde.jpg";
        document.body.style.background = "#fab969" 
    } else{
        //Boa noite
        img.src = "noiteat.jpg";
        document.body.style.background = "#26292e"
    }
}









