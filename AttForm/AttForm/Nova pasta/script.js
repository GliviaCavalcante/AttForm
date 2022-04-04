function corrigir(){

    let div = document.querySelector("#result");
    div.classList.remove("hide");
    div.classList.add("show");

    let acertos = 0;

    let q1 = document.querySelector("#textarea").value;

    if(q1 == "Administração, Informática, Enfermagem"){
        acertos++;
    }

    let octal = document.querySelector("#octal").checked;
    let binario = document.querySelector("#binario").checked;
    let decimal = document.querySelector("#decimal").checked;
    let hexagonal = document.querySelector("#hexagonal").checked;

    if((binario)&&(hexagonal)){
        acertos++;
        if((octal)||(decimal)){
            acertos--;
        }
    }if((octal)||(decimal)){
        acertos = acertos;
    }

    let cont = document.querySelector("#cont").checked;

    if(cont){
        acertos++
    }

    let v = document.querySelector("#v").checked;

    if(v){
        acertos++
    }

    let percent = (acertos*100)/4

    document.querySelector("#corretas").innerHTML = "Corretas: "+acertos+" de 4"
    document.querySelector("#percentual").innerHTML = "Percentual: "+percent+"%"   
}