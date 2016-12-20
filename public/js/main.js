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