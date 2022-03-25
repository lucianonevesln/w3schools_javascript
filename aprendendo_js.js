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

    document.getElementById('teste0').innerHTML = Date();

 };

/* --------------------------------------------------------------------------------------------------------------- */

/* 

A funcao abaixo altera um texto escrito e inicializado pelo HTML

*/

function mudarTexto () {

    document.getElementById('teste1').innerHTML = "Veja como fui alterado.";

};

/* --------------------------------------------------------------------------------------------------------------- */

/*

As funcoes abaixo alteram a imagem para produzir um efeito de acender e apagar uma luz

- src = e responsavel por encontrar a imagem no diretorio informado;

*/

function acenderLuz () {

    document.getElementById('teste2').src = 'pic_bulbon.gif';

};

function desligarLuz () {

    document.getElementById('teste2').src = 'pic_bulboff.gif';

};

/* --------------------------------------------------------------------------------------------------------------- */

/*

As funcoes abaixo altera a estilizacao

- style.display: altera o que esta sendo apresentado;

- style.backgroundColor: altera o fundo da estrutura;

*/

function mudarEstilo () {

    document.getElementById('teste3').style.display = 'none';

};

function mudarCor () {

    document.getElementById('teste4').style.backgroundColor = 'green';

};

function mostrarTexto () {

    document.getElementById('teste5').style.display = 'block';

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

    document.write('<h1>Deu certo</h1>');
    document.write('<a href="index.html"><button>Volte por aqui</button></a>');

};

/*

A funcao abaixo utiliza o window.alert() e mostra uma janela com o output.

*/

function descobrirImc () {

    // definicao de variaveis
    var nome = document.getElementById('nome').value;
    var peso = Number(document.getElementById('peso').value);
    var altura = Number(document.getElementById('altura').value);
    var resultado = "";

    // calculo de imc e tratamento de casas decimais
    var imc = parseFloat(peso / (altura * altura)).toFixed(2);

    // estrutura para verificacao de status de massa corporal
    switch (true) {
        case imc < 18.5:
            resultado = 'MAGREZA (abaixo do peso).';
            break;
        case imc >= 18.5 && imc <= 24.9:
            resultado = 'NORMAL (peso ideal).';
            break;
        case imc > 24.9 && imc < 30:
            resultado = 'SOBREPESO (acima do peso).';
            break;
        case imc > 30:
            resultado = 'OBESIDADE (procure um especialista).';
            break;
    };

    // mensagem para usuario com seu imc
    window.alert('Olá, '
                 + nome
                 + '. Seu IMC é de '
                 + imc
                 + '. O status desse IMC é '
                 + resultado);

};

/*

A funcao abaixo utiliza o console.log() e mostra em console do browser um output.

*/

function descubraConsoleLog () {

    document.getElementById('teste9').innerHTML = 'Agora, pressione a tecla F12 e vá até a aba Console...';
    console.log('Obrigado por me encontrar aqui...');

};

/*

Programas JavaScript

Um programa de computador e uma lista de instrucoes que devem ser excutadas po um computador. Em linguagem
de programcao essas instrucoes sao chamadas de declaracao.

Declaracao (statements) JavaScript

A declaracao/statements JavaScript e composta por:

- Valores;

- Operadores;

- Expressoes;

- Palavras-chaves;

- Comentarios;

Essas statements sao executadas na ordem em que sao escritas. Os multiplicos espacos em branco sao ignorados.
Num linha de codigo muito longa e que o programador prefere quebrar essa linha, o JS ira executar a continuacao
ne eventual outra linha.

Blocos de Codigo JavaScript

A declaracao JS pode ser agrupada toda em bloco de codigo dentro de { ... }. O proposito de um bloco de codigo e
definir uma instrucao que sera executada em conjunto. Um lugar para se colocar uma declaracao/script agrupada e
em um funcao (function).

A declaracao JavaScript muitas vezes se inicia com palavras-chave para identificar uma acao que o JS deve tomar
dentro da performance.

Valores JavaScript

A sintaxe de JS permite criar 2 tipos de valores: fixos (tambem chamados de literal) e variveis.

- Literal: Numbers pode ser escrito com decimais e String com "" ou ''.

- Variaveis: em programacao se armazenamento por variavel. Em JS e possivel declarar de 3 maneiras: let, var e const.
O sinal de = atribui um valor a uma variavel.

Operadores Aritmeticos: / * - +;

Expressoes: se podem combinar valores, variaveis, operadores que manipula valores. Tambem e possivel concatenar cadeias
de caracteres atraves do operador +.

Variaveis JavaScript

Variaveis sao containers que armazenam dados (valores).

- var: e usada em todo o codigo desde 1995;

- let e const: foram adicionadas em 2015

Para que o codigo seja executada em qualquer versao de browser, deve ser utilizada o var.

Se quiser utilizar uma regra geral de variavel, deve-se usar o const.

Se quiser uma variavel que podera ser alterada, usa-se o let.

Variaveis devem ser unicas. Sua declaracao deve respeitar:

- Pode se usar letrar, digitos, sublinhados e cifra;

- O nomes devem comecar com letras;

- Os nomes sao case sensitive, ou seja, A e a sao diferentes;

- Palavras reservadas nao podem ser usadas;

Para declara a variavel deve ser invocado o var ou let antes do seu nome. Em caso de nao haver valor, e dito que essa variavel
e undefined e a atribuicao de valor se como dito anteriormente por meio do sinal de =.

*/

/*

Abaixo, ha funcoes que trazem detalhes de cada tipo de variavel.

*/

function variavelCont () {

    document.getElementById('teste10').innerHTML = "Essa variavel jamais será alterada!"

};

function variavelLet () {

    window.alert("Essa variável pode ser alterada e foi implementada a partir de 2015.")

};

function variavelVar () {

    window.alert("Essa variavel pode ser alterada e deve ser usada quando sua aplicação rodar em browser mais antigos por ela existe desde 1995.")

};

/*

Abaixo, ha uma funcao que recebe alguns valores do front-end e retorna uma string concatenada.

*/

function mostrarTextoDois () {

    // recebe valores do front-end e armazena em variaveis
    var teste13 = document.getElementById('teste13').value;
    var teste14 = document.getElementById('teste14').value;

    if (teste13 != "" && teste14 != "") {

        // armazena uma string de complementacao do texte que sera apresentado
        var concatenar0 = " : transformei tudo em uma única string, não é legal?!"

        // efetua de fato a concatenacao
        var concatenar1 = teste13 + " " + teste14 + " "+ concatenar0;

        // atribui o texto concatenado a uma tag escondida do index.html
        document.getElementById('teste15').innerHTML =  concatenar1;

        // mostra a tag escondida no HTML
        document.getElementById('teste15').style.display = 'block';

    } else {

        // atribui o texto concatenado a uma tag escondida do index.html
        document.getElementById('teste15').innerHTML = "Por favor, preencha os 2 campos acima!"

        // mostra a tag escondida no HTML
        document.getElementById('teste15').style.display = 'block';

    }

};

/*

JavaScript let

Variaveis com let nao podem ser redeclaradas.

Escopo de Bloco

Uma variavel declarada como let dentro de um determinado escopo nao pode ser usada fora dele, por exemplo:

{
    x = 10;
    console.log(x); // aqui pode ser usada
};

= nao pode ser lido aqui

Agora, se a declaracao ocorrer por var, ai e possivel, por exemplo:

{
    x = 10;
    console.log(x);
};

console.log(x);

Tambem e possivel fazer a redeclaracao dessa variavel tanto dentro do escopo do bloco quanto fora.

JavaScript const

Variaveis const nao podem ser redeclaradas e reassinadas.

Escopo de Bloco

Tambem tem uma comportamento semelhante ao de let no que diz respeito ao scopo de bloco.

const x = 100;

{
    const x = 500;
    console.log(x);
};

console.log(x);

*/

// Criando const de array que pode ter seu consteu modificado
const listaPalavras = [];

// funcacao para inserir palavra no array
function inserirPalavra() {

    // variavel que recebe palavra do front-end
    palavra = document.getElementById('palavra').value;

    // funcao que adiciona palavra ao array
    listaPalavras.push(palavra);

};

// funcao para mostrar palavras no arry
function mostrarPalavras () {

    // seleciona as palavras que serao mostradas em front-end
    document.getElementById('exibir').innerHTML = listaPalavras;

    // mostra palavras no front-end
    document.getElementById('exibir').style.display = 'block';

};

// funcao que esconde as palavras do front-end
function esconderPalavras () {

    // esconde palavras do front-end
    document.getElementById('exibir').style.display = 'none';

};

// funcao que mostra labes e inputs ou mensagem solicitando que o usuario esolha operacao correta
function mostrarLabelInput () {

    // declaracao de variavel
    var escolherOperacao = document.getElementById('escolherOperacao').value;

    // verificacao de escolha de operacao pelo usuario
    if (escolherOperacao != "") {

        // mostra relacao labels e inputs para interacao do usuario
        document.getElementById('mensagem').style.display = 'none';
        document.getElementById('label1').style.display = 'block';
        document.getElementById('inputValor1').style.display = 'block';
        document.getElementById('label2').style.display = 'block';
        document.getElementById('inputValor2').style.display = 'block';
        document.getElementById('botao').style.display = 'block';

    } else {

        // retorna uma mensagem em tag escondida no HTML
        document.getElementById('mensagem').innerHTML = 'Escolha uma operação!';
        document.getElementById('mensagem').style.display = 'block';

    };

};

// funcao para efetuar o calculo
function efetuarCalculo () {

    // recebe as os valores definidos no front-end pelo usuario
    var escolherOperacao = document.getElementById('escolherOperacao').value;
    var inputValor1 = Number(document.getElementById('inputValor1').value);
    var inputValor2 = Number(document.getElementById('inputValor2').value);
    var resultado = 0;

    // valida se a operacao e de divisao por 0
    if (inputValor2 == 0 && (escolherOperacao == '/' || escolherOperacao == '%')) {
        document.getElementById('resultado').innerHTML = "Valor 2 inválido. Por favor, digite um número válido para essa operação.";
        document.getElementById('resultado').style.display = 'block';
    } else {
        // seleciona o operador matematico de acordo com a escolha do usuario e efetua o calculo
        switch (true) {
            case escolherOperacao == '+':
                resultado = inputValor1 + inputValor2;
                break;
            case escolherOperacao == '-':
                resultado = inputValor1 - inputValor2;
                break;
            case escolherOperacao == '*':
                resultado = inputValor1 * inputValor2;
                break;
            case escolherOperacao == '**':
                resultado = inputValor1 ** inputValor2;
                break;
            case escolherOperacao == '/':
                resultado = inputValor1 / inputValor2;
                break;
            case escolherOperacao == '%' && inputValor2 != 0:
                resultado = inputValor1 % inputValor2;
                break;
        };

        // retorna resultado em tag escondida no HTML
        document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
        document.getElementById('resultado').style.display = 'block';

    };

};

/*

Alem dos operadores aritmeticos acima, existem no JavaScript os seguintes operadores
de incremento e decremento:

++ -> trata-se de um operador de atribuicao, por exemplo:

let x = 1;

x ++; -> neste caso, toda vez que este script for executado, sera somado o numero 1 ao
         valor de x;

let y = 10;

y --; -> neste caso, toda vez que este script for executado, sera subtraido o numero 1 do
         valor de y;

Operadores de Atribuicao

= -> atribui um valor a uma variavel;

+= -> soma um valor de uma variavel a outra variavel;

-= -> soma um valor de uma variavel a outra variavel;

*= -> multiplica um valor de uma variavel e atribuo outra variavel;

/= -> divide um valor de uma variavel e atribui outra variavel;

%= -> divide na modularizacao um valor de uma variavel e atribui outra variavel;

**= -> multiplica um valor em exponenciacao de uma variavel e atribui outra variavel;

*/

// traz explicacao sobre cada um dos operadores de comparacao
function operadorComparacao () {

    // recebe valor do front-end, atrabui a uma variavel e cria uma variavel vazia
    let varOperador = document.getElementById('operadorComparar').value;
    let retornoOperador = '';

    // verifica qual o operador de comparacao escolhido pelo usuario e retorna uma explicacao
    switch (true) {
        case varOperador == 'todos':
            retornoOperador =  ("==  : verifica se as expressoes sao iguais;<br><br>" +
                                "=== : verifica se os tipos das expressoes sao iguais;<br><br>" +
                                "!=  : verifica se as expressoes sao diferentes;<br><br>" +
                                "!== : verifica se os tipos das expressoes sao diferentes;<br><br>" +
                                ">   : verifica se a expressao da esquerda e maior que a da direita;<br><br>" +
                                "<   : verifica se a expressao da esquerda e menor que a da direita;<br><br>" +
                                ">=  : verifica se a expressao da esquerda e maior ou igual que a da direita;<br><br>" +
                                "<=  : verifica se a expressao da esquerda e menor ou igual que a da direita;<br><br>" +
                                "?   : operador ternario;\n");
            break;
        case varOperador == "==":
            retornoOperador = "verifica se as expressoes sao iguais;";
            break;
        case varOperador == "===":
            retornoOperador = "verifica se os tipos das expressoes sao iguais;";
            break;
        case varOperador == "!=":
            retornoOperador = "verifica se as expressoes sao diferentes";
            break;
        case varOperador == "!==":
            retornoOperador = "verifica se os tipos das expressoes sao diferentes;";
            break;
        case varOperador == ">":
            retornoOperador = "verifica se a expressao da esquerda e maior que a da direita;";
            break;
        case varOperador == "<":
            retornoOperador = "verifica se a expressao da esquerda e menor que a da direita;";
            break;
        case varOperador == ">=":
            retornoOperador = "verifica se a expressao da esquerda e maior ou igual que a da direita;";
            break;
        case varOperador == "<=":
            retornoOperador = "verifica se a expressao da esquerda e menor ou igual que a da direita;";
            break;
        case varOperador == "?":
            retornoOperador = "operador ternario;";
            break;
    };

    // retorna resultado em tag escondida no HTML
    document.getElementById('resultadoOperador').innerHTML = retornoOperador;
    document.getElementById('resultadoOperador').style.display = 'block';

};

// as 3 funcoes abixo trazem explicacao sobre cada um dos operadores logicos
function operadorLogicoE () {

    document.write("<h2>Este operador compara expressoes e retorna TRUE apenas se todos os valores forem verdadeiros</h2>");
    document.write('<a href="index.html"><button>Volte por aqui</button></a>');

};

function operadorLogicoOu () {

    document.write("<h2>Este operador compara expressoes e retorna FALSE apenas se todos os valores forem falsos</h2>");
    document.write('<a href="index.html"><button>Volte por aqui</button></a>');

};

function operadorLogicoNegacao () {

    document.write("<h2>Este operador retorna o inverso da expressao</h2>");
    document.write('<a href="index.html"><button>Volte por aqui</button></a>');

};

// funcao que recebe parametros e concatena palavras
function concatenandoPalavras (palavra1, palavra2) {

    // retorna a concatenacao
    return palavra1 + " " + palavra2;

};

// funcao que e executada quando o front-end e acionado
function usandoFuncaoParametros () {

    // recebe os valores digitados no front-end, atribui valores a variaveis e cria variavel vazia
    let funcaoPalavra1 = document.getElementById('funcaoPalavra1').value;
    let funcaoPalavra2 = document.getElementById('funcaoPalavra2').value;
    let retornoConcateno = '';

    // invoca/chama funcao que fara a concatenacao das palavras
    retornoConcateno = concatenandoPalavras(funcaoPalavra1, funcaoPalavra2);

    // retorna resultado em tag escondida no HTML
    document.getElementById('retornandoConcateno').innerHTML = retornoConcateno;
    document.getElementById('retornandoConcateno').style.display = 'block';

};

/*

Loop "for"

Loops sao uteis, se voce for exercutar o mesmo codigo varias e varias vezes cada vez com diferentes
valores.

Muitas vezes se usa esse recurso quando se trabalha com arrays.

O loop for conta com a seguinte syntaxe:

for (statement 1; statement 1; statement 1) {
    blo que script;
};

- statement 1: e executado uma vez antes de se chegar ao bloco de codigo, pode ser omitido, ou seja,
nao necessariamente deve ser implementado, e pode ser iniciado assim let i = 0;

- statement 2: define uma condicao para execucao do bloco e tambem e opcional. O teste sera executado;

- statement 3: e executado toda vez apos a execucao do bloco e tambem e opcional;

"for in"

Esse for percorre cada propriedade de um objeto.

"array.forEach"

*/

// criando array
let armazenandoPalavras1 = [];

// funcao para armazenar palavra no array
function guardarPalavra1 () {

    // criando variavel que recebe valor do front-end
    let recebendoPalavra1 = document.getElementById('recebendoPalavra1').value;

    // estrutura para armazenar palavra no array
    armazenandoPalavras1.push(recebendoPalavra1);

};

// funcao que exibe as palavras em linha
function exibirPalavras1 () {

    // retorna resultado em tag escondida no HTML
    document.getElementById('palavrasEscondidas1').innerHTML = armazenandoPalavras1;
    document.getElementById('palavrasEscondidas1').style.display = 'block';

};

// funcao que exibe palavras uma embaixo da outra
function exibirPalavrasFor1 () {

    // estrutura for que permite passar por todas as palavras do array
    for (let palavra1 = 0; palavra1 < armazenandoPalavras1.length; palavra1++) {

        // coleta palavra no for, adiciona em tag escondida no HTML e retorna esse resultado nessa tag
        document.getElementById('palavrasEscondidasFor1').innerHTML += armazenandoPalavras1[palavra1] + '<br>';
        document.getElementById('palavrasEscondidasFor1').style.display = 'block';

    };

};

// funcao que exibe palavras uma embaixo da outra
function exibirPalavrasForIn1 () {

    // estrutura for que permite passar por todas as palavras do array
    for (let palavraIn in armazenandoPalavras1) {

        // coleta palavra no for, adiciona em tag escondida no HTML e retorna esse resultado nessa tag
        document.getElementById('palavrasEscondidasForIn1').innerHTML += armazenandoPalavras1[palavraIn] + '<br>';
        document.getElementById('palavrasEscondidasForIn1').style.display = 'block';

    };

};

// funcao para exibir posicoes ocupadas pelos nomes inseridos no array
function exibirPosicoesFor1 () {

    // estrutura for que permite passar por todas as palavras do array
    for (let palavraPos1 = 0; palavraPos1 < armazenandoPalavras1.length; palavraPos1++) {

        // coleta palavra no for, adiciona em tag escondida no HTML e retorna esse resultado nessa tag
        document.getElementById('posicoesEscondidasFor1').innerHTML += [palavraPos1] + '<br>';
        document.getElementById('posicoesEscondidasFor1').style.display = 'block';

    };

};

/* --------------------------------------------------------------------------------------------------------------- */

// criando array
let armazenandoPalavras2 = [];

// funcao para armazenar palavra no array
function guardarPalavra2 () {

    // criando variavel que recebe valor do front-end
    let recebendoPalavra2 = document.getElementById('recebendoPalavra2').value;

    // estrutura para armazenar palavra no array
    armazenandoPalavras2.push(recebendoPalavra2);

};

// funcao que exibe as palavras em linha
function exibirPalavras2 () {

    // retorna resultado em tag escondida no HTML
    document.getElementById('palavrasEscondidas2').innerHTML = armazenandoPalavras2;
    document.getElementById('palavrasEscondidas2').style.display = 'block';

};

// funcao que exibe palavras uma embaixo da outra
function exibirPalavrasFor2 () {

    // criando variavel para receber palavras enviadas pelo for
    let listaComPalavras = '';

    // estrutura for que permite passar por todas as palavras do array
    for (let palavra2 = 0; palavra2 < armazenandoPalavras2.length; palavra2++) {

        // script para coletar cada palavra gerada no for e armazenar em variavel de apresentacao
        listaComPalavras += armazenandoPalavras2[palavra2] + '<br>';

    };

    // retorna resultado em tag escondida no HTML
    document.getElementById('palavrasEscondidasFor2').innerHTML = listaComPalavras;
    document.getElementById('palavrasEscondidasFor2').style.display = 'block';

};

// funcao que exibe palavras uma embaixo da outra
function exibirPalavrasForIn2 () {

    // criando variavel para receber palavras enviadas pelo for
    let listaComPalavrasIn = '';

    // estrutura for que permite passar por todas as palavras do array
    for (let palavraIn2 in armazenandoPalavras2) {

        // script para coletar cada palavra gerada no for e armazenar em variavel de apresentacao
        listaComPalavrasIn += armazenandoPalavras2[palavraIn2] + '<br>';

    };

    // retorna resultado em tag escondida no HTML
    document.getElementById('palavrasEscondidasForIn2').innerHTML = listaComPalavrasIn;
    document.getElementById('palavrasEscondidasForIn2').style.display = 'block';

};

// funcao para exibir posicoes ocupadas pelos nomes inseridos no array
function exibirPosicoesFor2 () {

    // criando variavel para receber palavras enviadas pelo for
    let listaComPalavras = '';

    // estrutura for que permite passar por todas as palavras do array
    for (let palavraPos2 = 0; palavraPos2 < armazenandoPalavras2.length; palavraPos2++) {

        // script para coletar cada palavra gerada no for e armazenar em variavel de apresentacao
        listaComPalavras += [palavraPos2] + '<br>';

    };

    // retorna resultado em tag escondida no HTML
    document.getElementById('posicoesEscondidasFor2').innerHTML = listaComPalavras;
    document.getElementById('posicoesEscondidasFor2').style.display = 'block';

};