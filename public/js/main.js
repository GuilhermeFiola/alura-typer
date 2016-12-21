var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

campo = $(".campo-digitacao");
campo.on("input", function(){
    var conteudo = campo.val();
    var qtdePalavras = conteudo.split(/\S+/).length - 1;
    $(".contador-palavras").text(qtdePalavras);

    var contadorCaracteres = conteudo.length;
    $(".contador-caracteres").text(contadorCaracteres); 
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function(){
    var cronometroId = setInterval(function(){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if(tempoRestante<1){  
            campo.attr("disabled", true);
            clearInterval(cronometroId);
        };
    }, 1000);
});