// Fonte: https://www.w3schools.com/js/default.asp

// -> Comentario de uma linha

/* -> Comentario de mais de uma linha*/

/*

# Conhecendo um pouco sobre JavaScript #

JavaScript e uma das principais linguagens do mundo.

E uma linguagem web.

E simples de aprender.

Esse tutorial ensina do basico ate o avancado.

Por que estudar JavaScript?

JavaScript e uma de 3 tecnologias que os desenvolvedores web devem aprender, sendo elas:

- HTML: define o conteudo de uma pagina web; 

- CSS: especifica o layout da pagina;

- JavaScrip: trata-se do comportamento de uma pagina web;

Perguntas comuns:

- Como eu "pego" ou baixo o Javascript?

Voce nao precisa "pegar" nem baixar o JavaScript, ele pode ser executado direto no console do browser
(F12), ou de seu computador, tablet ou smartphone.

- JavaScript e gratuito?

Sim, para todos.

*/

/* --------------------------------------------------------------------------------------------------------------- */
 
/* 

A funcao abaixo retorna uma data e hora do momento que o sistema estiver sendo executado.

- document = DOM: trata-se da representacao do universo HTML dentro do universo JavaScript;

- getElementById() = conecta com toda a tag correspondente ao id informado;

- innerHTML = acessa o conteudo associado a tag;

- Date() = funcao que retorna a data e hora atuais;

*/

function dataHoraAgora () { 
    document.getElementById('teste0').innerHTML = Date()
 };

/* --------------------------------------------------------------------------------------------------------------- */

/* 

A funcao abaixo altera um texto escrito e inicializado pelo HTML

*/

function mudarTexto () {
    document.getElementById('teste1').innerHTML = "Veja como fui alterado."
};

/* --------------------------------------------------------------------------------------------------------------- */

/*

As funcoes abaixo alteram a imagem para produzir um efeito de acender e apagar uma luz

- src = e responsavel por encontrar a imagem no diretorio informado;

*/

function acenderLuz () {
    document.getElementById('teste2').src = 'pic_bulbon.gif'
}

function desligarLuz () {
    document.getElementById('teste2').src = 'pic_bulboff.gif'
}