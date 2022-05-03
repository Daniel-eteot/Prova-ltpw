function calc(){
    //entrada
    plano = document.form.plano.value;  //name do formulario. name. value

    //processamento
    if(plano == "ini"){
        valor = 1500;
    }
    else if (plano == "int"){
        valor = 1800;
    }
    else{
        valor = 2300
    }
    
    //saída
    document.getElementById('total').value = valor;

    document.getElementById('python').checked = false;
    document.getElementById('design').checked = false;
    document.getElementById('java').checked = false;
    document.getElementById('php').checked = false;


    
}

function opcionais(valor,marcado){
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    
    }
    //saída
    document.getElementById('total').value = total;
}

function trocaTurno(){

    //entrada
    turno = document.getElementById('turno').value;
    

    //processamento
    if (turno == "noite") {
        newFundo = "img/noite.jpg";
        newFoto = "img/mario.png";
        titulo = "Noite";
        cor = "yellow";

        altura = "85%";
        right = "0%";
        bottom = "-5%";
      }
    else if (turno == "tarde"){
        newFundo = "img/pexels-3.jpg";
        newFoto = "img/sofia.png";    
        titulo = "Intermediário";
        cor = "aqua";

        altura = "90%";
        right = "5%";
        bottom = "-5%";
    }
    else if(turno == "dia"){
        newFundo = "img/pexels-christina-morillu-1181352.jpg";
        newFoto = "img/pjmasks.png";    
        titulo = "Profissional";
        cor = "orange";

        altura = "85%";
        right = "-2%";
        bottom = "0%";
    }
    else{
        newFundo = "";
        newFoto = "";    
        titulo = "Contrate um programador";
        cor = "white";

        altura = "100%";
        right = "0%";
        bottom = "0%";
    }
 

    //saída
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById('foto').src = newFoto;
    document.getElementById('titulo').value = titulo;
    document.getElementById('titulo').style.color = cor;
    document.body.style.color = cor;

    document.getElementById('foto').style.height = altura;
    document.getElementById('foto').style.right = right;
    document.getElementById('foto').style.bottom = bottom;

}

function alerta(){
    //entrada
    total = document.getElementById('total').value;

    //processamento
    if (total < 1500){
        msg = "Selecione a qualificação do programador."
    }
    else{
        msg = "Obrigada pela Preferêcia. ";
    
        if (total >= 2500) {
            total = total * 0.9;
            msg += "Você recebeu um desconto de 10%. ";
        }
  
        msg += "Valor a Pagar R$ " + total;
  
    }
    
   //saída
   //alert(msg);
    
    document.getElementById('mensagem').value = msg;
    $('#alerta').modal('show');
    
}