var tempoInicial = $("#tempo-digitacao").text();
var campo = $("#campo-digitacao");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
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
    var botaoReiniciar = $("#botao-reiniciar");
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
        var cronometroId = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante<1){  
                campo.attr("disabled", true);
                botaoReiniciar.attr("disabled", false);
                clearInterval(cronometroId);
            };
        }, 1000);
        botaoReiniciar.attr("disabled", true);
    });
};

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
};