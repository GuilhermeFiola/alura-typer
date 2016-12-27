var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var botaoReiniciar = $("#botao-reiniciar");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    botaoReiniciar.attr("disabled", true);
    botaoReiniciar.click(reiniciaJogo);
});

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
};


function inicializaContadores(){
    campo.on("input", function(){
        var conteudo = campo.val();
        var qtdePalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdePalavras);

        var contadorCaracteres = conteudo.length;
        $("#contador-caracteres").text(contadorCaracteres); 
    });
};

function inicializaCronometro(){
    var tempoRestante = $("#tempo-digitacao").text();
    botaoReiniciar.attr("disabled", true);
    campo.one("focus", function(){
        var cronometroId = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante<1){  
                finalizaJogo();
                clearInterval(cronometroId);
            };
        }, 1000);
        
    });
};

function finalizaJogo(){
    campo.attr("disabled", true);
    botaoReiniciar.attr("disabled", false);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
    inicializaCronometro();
};

function inicializaMarcadores(){
    var frase = $(".frase").text();
    campo.on("input", function(){
        var digitado = campo.val();
        //  var comparavel = frase.substr(0, digitado.length);

        var ehComparavel = frase.startsWith(digitado);
        campo.toggleClass("borda-verde", ehComparavel);
        campo.toggleClass("borda-vermelha", !ehComparavel);
    });
}