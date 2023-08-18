var senhaInput = document.getElementById('senha');
var senhaInput2 = document.getElementById('senha2');
var senhaInput3 = document.getElementById('senha3');
var response = "sob"
var response2 = "torrepreso"
var response3 = "001cfhqrxz"

 function verificarSenha ()
 {
    var senha = senhaInput.value.toLowerCase();
    if(senha === response){
        window.location.href = "index2.html";
    }
    else{
        var alerta = document.querySelector('.meu-alerta');
        setTimeout(function() {
            alerta.style.display = "flex";
            setTimeout(function() {
                alerta.style.opacity = "0.9";
            },20)
        },20)
        setTimeout(function() {
            alerta.style.opacity = "0";
            setTimeout(function() {
                alerta.style.display = "none";
            }, 600); 
        }, 2000);
    }
 }
 function verificarSenha2 ()
 {
    var senha = senhaInput2.value.toLowerCase();
    if(senha === response2){
        window.location.href = "index3.html";
    }
    else{
        var alerta = document.querySelector('.meu-alerta');
        setTimeout(function() {
            alerta.style.display = "flex";
            setTimeout(function() {
                alerta.style.opacity = "0.9";
            },20)
        },20)
        setTimeout(function() {
            alerta.style.opacity = "0";
            setTimeout(function() {
                alerta.style.display = "none";
            }, 600); 
        }, 2000);
    }
 }

 function verificarSenha3 ()
 {
    var senha = senhaInput3.value.toLowerCase();
    if(senha === response3){
        window.location.href= "index4.html";
    }
    else{
        var alerta = document.querySelector('.meu-alerta');
        setTimeout(function() {
            alerta.style.display = "flex";
            setTimeout(function() {
                alerta.style.opacity = "0.9";
            },20)
        },20)
        setTimeout(function() {
            alerta.style.opacity = "0";
            setTimeout(function() {
                alerta.style.display = "none";
            }, 600); 
        }, 2000);
    }
 }
