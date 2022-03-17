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
};

function desligarLuz () {
    document.getElementById('teste2').src = 'pic_bulboff.gif'
};

/* --------------------------------------------------------------------------------------------------------------- */

/*

As funcoes abaixo altera a estilizacao

- style.display: altera o que esta sendo apresentado;

- style.backgroundColor: altera o fundo da estrutura;

*/

function mudarEstilo () {
    document.getElementById('teste3').style.display = 'none'    
};

function mudarCor () {
    document.getElementById('teste4').style.backgroundColor = 'green'
};

function mostrarTexto () {
    document.getElementById('teste5').style.display = 'block'
};

/* --------------------------------------------------------------------------------------------------------------- */

/*

* JavaScript tag <script>

Para utilizar o JavaScript em HTML e necessario inserir seu script na tag <script></script>.

Ele pode ser inserido em qualquer parte do script HTML. Mas ele tambem pode vir de uma aquivo externo, que inclusive,
permite o uso por diversas paginas. Para inserir-lo basta utilizar o atributo "src" dentro da tag <script></script>.

* Vantagens do Uso Externo

- Separa o codigo HTML do JS;

- E mais facil para ler e manter os codigos;

- Cache de arquivo JavaScript pode ficar mais rapido para carregar;

* Referencia Externa

Pode ser feita de 3 maneiras:

- De qualquer URL da web: <script src="https://www.w3schools.com/js/myScript.js"></script>;

- De diretorio local: <script src="/js/myScript.js"></script>;

- Do propio diretorio: <script src="myScript.js"></script>;

* Funcao JavaScript

A funcao em JavaScript e um bloco de codigo que pode ser reutilizado inumeras vezes ao ser invocada/chamada.

* Event JavaScript

Pode ser criado uma funcao que ao ser invocada/chamada se comporta de uma determinada maneira ao ser clicada pelo usuario.

* Output

O JavaScript pode mostrar uma informacao de diversas formas:

- innerHTML(): dentro do elemento HTML;

- document.write(): escrevendo um output;

- window.alert(): mostrando um box em janela;

- console.log(): mostrando no console;

*/

/*

A funcao abaixo utiliza o innerHTML().

*/

function executarCalculo () {

    // defini variaveis a partir do HTML
    var valor1 = Number(document.getElementById('valor1').value);
    var valor2 = Number(document.getElementById('valor2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado = 0;

    // identifica e executa a operacao matematica
    if (operacao == 'multiplicar') {
        resultado = valor1 * valor2
    } else if (operacao == 'dividir' && valor2 != 0) {
        resultado = valor1 / valor2
    } else if (operacao == 'somar') {
        resultado = valor1 + valor2
    } else if (operacao == 'subtrair') {
        resultado = valor1 - valor2
    } else {
        return document.getElementById('teste6').innerHTML = 'Escolha uma operacao!'
    }

    // retorna o resultado da operacao
    return document.getElementById('teste6').innerHTML = resultado;

};

/*

A funcao abaixo utiliza o write() e direciona o usuario para um ambiente em que se pode mostrar o output.

*/

function mostrarEmOutroAmbiente () {

    document.write('<h1>Deu certo</h1>')
    document.write('<a href="index.html"><button>Volte por aqui</button></a>')

};