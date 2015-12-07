---
layout: post
title: Criando a paleta de cores para seu projeto css - uma abordagem focada em componentização
categories: [css]
image: "http://monovektor.com/wp-content/uploads/2011/06/NES-590x166.png"
published: true

---

Oba, que beleza! Hora de falar de cores.

Uma das várias tarefas do desenvolvedor front-ender é trabalhar em conjunto com o time de designers para criar uma arquitetura css que seja capaz de reproduzir os componentes e padrões de user interface estabelecidos no design de um sistema.

Nesse contexto, criar uma paleta de cores padronizada fiel aos requisitos do design é um passo importante para construir a identidade visual de um sistema e permitir que seu código css seja fácil de entender, manter, sem "números mágicos" e cores que nunca existiram na paleta do designer.

Entre outras vantagens de se criar uma paleta de cores estão:

* Incentivar que designers e desenvolvedores interajam e discutam sobre o projeto visual do sistema;
* Permitir que o front-ender seja um facilitador na hora da construção da paleta com ferramentas que facilitem a manipulação de cores, como os mixins do compass, por exemplo;
* Facilitar a busca por cores no código: A menos que você seja a fera do [What the color?](http://leaverou.github.io/whathecolor/)  procurar por ````#0000bd```` e ````hsl(219, 100%, 49%)````  dá mais trabalho do que procurar por ````minhas-cores(‘dark-blue’, ‘00’)```` ou ````minhas-cores(‘dark-blue’, ‘10’)````;
* Restringir as discussões sobre que notação de cor usar (hexa, hsl ou rgb) à fase de criação da paleta css;
* Fornecer [apenas um jeito óbvio de fazer as coisas](https://ark4n.wordpress.com/2009/05/25/pyctoria-5-o-zen-do-python/);

Agora que eu já te convencí à criar sua paleta de cores (ou a abandonar esse artigo que não entra logo na parte do código) vamos falar de como fazer isso :D

## Como criar uma paleta de cores para css?

As abordagens e implementações para criar uma paleta de cores pra ser utilizada no css podem variar.

Basicamente a paleta será um conjunto de variáveis que representam as cores da paleta fornecida pelo designer. 

A abordagem que estou utilizando é dividida em duas partes, na primeira defino minha paleta utilizando mapas do scss e na segunda crio um conjunto de variáveis scss que representam cores por contexto (falarei mais sobre isso adiante).

No exemplo deste artigo irei implementar uma paleta de cores representando a paleta de cores no nes (sim, do videogame 8bits :D ).

A paleta original do nes que iremos implementar é essa:

![paleta do nes](https://camo.githubusercontent.com/21c7fc6c3bb2c0da3df7474b90db3a24025f4091/687474703a2f2f6465762e626f7764656e7765622e636f6d2f6e65732f612f692f6e65732d636f6c6f722d70616c657474652e706e67)

## Mapeando suas cores no scss

Como o [suporte a variáveis no css ainda](http://caniuse.com/#feat=css-variables) é extremamente baixo optei por utilizar scss para definição de um mapa da minha paleta de cores.

Uma paleta de cores normalmente é uma matriz que inclui diversos matizes e diversas variações para cada matiz.

Um matiz é uma das 3 propriedades de uma cor que permite classificá-la entre vermelho, laranja, verde, roxo, azul, etc. As outras propriedades são saturação e luminosidade.

A paleta do nes possui 14 matizes válidos e cada um dos matizes possui 4 luminosidades diferentes que vão do mais escuro até o mais claro totalizando 56 cores válidas.

A paleta do nes não é totalmente regular e em alguns casos existem pequenas diferenças de saturação e até de matiz na mesma coluna.

Dito isso a melhor maneira que encontrei de representar essa matriz em scss foi utilizando mapas, essa técnica é exatamente a mesma utilizada no repositório sass-material-colors (https://github.com/minusfive/sass-material-colors).

O que fiz foi descobrir o valor de cada uma das cores existentes e descrevê-las em um mapa, desta forma: 

<p data-height="268" data-theme-id="0" data-slug-hash="adzooM" data-default-tab="css" data-user="teles" class='codepen'>See the Pen <a href='http://codepen.io/teles/pen/adzooM/'>Nes palette map</a> by Jota Teles (<a href='http://codepen.io/teles'>@teles</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Se parássemos nesse ponto nosso mapa poderia ser acessado assim: ````map-get(map-get($nes-palette, $nome-da-minha-cor),$lumonisidade-da-minha-cor)````;

como:

```` 
$cor-verde-hulk-calmo: map-get(map-get($nes-palette,'green'),'10'); 
````

ou

```` 
$cor-verde-hulk-nervoso: map-get(map-get($nes-palette,'dark-green'),'10'); 
````

Mas para para colocar um pouco de sanidade nesse processo utilizei a seguinte função scss para representar a paleta:

<p data-height="268" data-theme-id="0" data-slug-hash="MKYgWX" data-default-tab="css" data-user="teles" class='codepen'>See the Pen <a href='http://codepen.io/teles/pen/MKYgWX/'>Nes palette function</a> by Jota Teles (<a href='http://codepen.io/teles'>@teles</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Agora para utilizar a paleta basta fazer:

````
$cor-verde-hulk-calmo: nes-palette(’green’, ’10’);
````

ou

````
$cor-verde-hulk-nervoso: nes-palette(’dark-green’,’10’);
````

A função simplifica abstrai o uso do mapa e lança um @warn durante a compilação do scss caso uma combinação inválida de matiz e luminosidade seja usada.

Interessante, né?

## Cores por contexto 

A ideia de cores por contexto é uma abordagem para extender a nossa paleta de cores atribuindo significados para as cores presentes na nossa paleta.

Quer dizer que alguns componentes de css do sistema apresentarão uma estilização dependente do seu estado.

Na teoria isto é semelhante ao que ocorre em alguns frameworks css como o bootstrap em que alguns componentes possuem estados como : primary, success e danger.

Então vamos imaginar que no nosso caso iremos utilizar o nes-palette e criar dois componentes: um botão e uma mensagem, cada um com os estados de primary, success e danger.

<p data-height="268" data-theme-id="0" data-slug-hash="RrwXBw" data-default-tab="result" data-user="teles" class='codepen'>See the Pen <a href='http://codepen.io/teles/pen/RrwXBw/'>Nes palette components</a> by Jota Teles (<a href='http://codepen.io/teles'>@teles</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

O que fizemos basicamente foi criar uma série de variáveis em scss que utilizam-se da função nes-palette, com isso a relação entre diferentes componentes com diferente estados ficou mais clara. No código, entre outras coisas, vemos que:

* Botões no estado danger e mensagens no estado danger compartilham do mesmo background-color e border-color por representarem o mesmo estado;
* Botões primary em hover e botões success em hover compartilham o mesmo nível de luminosidade;
* Podemos atribuir o valor de uma variável à outra, no nosso caso isso foi útil para dizer que color e border-color de mensagens são sempre iguais;
* A função nes-palette da nossa paleta de cores não precisa ser restrita apenas a variáveis, pode ser usada em qualquer contexto

O importante aqui é evitar declarar cores que não estejam dentro da paleta previamente definida. 

A abordagem de cores por contexto precisa ser bem pensada por designers e front-enders antes de ser implementada, seus pontos fortes são facilitar a troca de cores dos estados existentes, incentivar uma componentização bem planejada e uma discussão sobre cores entre designers e front-enders. 

## Conclusão / tldr;

* É importante concentrar todas as cores disponíveis em um sistema web em uma paleta de cores css;
* Essa paleta normalmente é uma matriz com vários matizes e variações de matizes;
* Essa matriz pode ser representada por um mapa e uma função scss;
* Como feito no exemplo do [nes-palette (deixe sua estrelinha aqui no projeto)](https://github.com/teles/nes-palette) ou baixe-o com um ````bower install --save nes-palette````
* A abordagem de cores por contexto é uma técnica auxiliar à paleta de cores que atribui determinadas cores da paleta à estados específicos de componentes css como success e danger;



E aí, o que acharam?
