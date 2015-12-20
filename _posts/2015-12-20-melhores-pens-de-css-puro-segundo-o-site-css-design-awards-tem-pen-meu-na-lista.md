---
published: true
layout: post
categories: 
  - css
image: "http://monovektor.com/wp-content/uploads/2011/06/NES-590x166.png"
---


# Melhores pens de CSS puro segundo o site CSS Design Awards. Tem um pen meu na lista.

Oi, front-enders, tudo bem?

O site [css design awards](http://www.cssdesignawards.com/) divulgou uma lista com o que eles consideraram [os melhores code pens feitos apenas com css no ano de 2015](http://www.cssdesignawards.com/articles/best-pure-css-pens-of-2015/268/) e um pen que fiz esse ano apareceu na lista: O [Parallel Park](http://codepen.io/teles/pen/gbKeLR), legal, né? 

## Que isso de Pure CSS Parallel Park?

O Pure CSS Parallel Park é uma prova de conceito que desenvolví para testar alguns conceitos de animação em css. A ideia é simples, o pen propõe ensinar como fazer uma baliza (parallel park) em quatro passos.

A medida que você vai completando os passos vai clicando em um botão para avançar pro passo seguinte, tudo sem nenhum javascript.

## Mas como funciona?

É um truque bem simples, que utiliza inputs escondidos e labels.
Quando o usuário clica no botão "start" por exemplo, na verdade está clicando em um label que está associado a um ````<input type='checkbox'>```` através dos atributos ````for```` e ````id````. 

Como mostra esse trecho de código html:

````html
  <div class="car-line">
    <input class="passo1" id="passo1" type="checkbox"/>
    <div class="breadcrumbs breadcrumbs-flat">
      <label class="passo1-label" for="passo1">start</label>
    </div>
````
[Código html também disponível no github](https://github.com/teles/pure-css-parallel-park/blob/master/index.html#L30-L40)


Ou seja, quando o usuário clica no label na verdade está checando um checkbox e quando esse checkbox está checado um seletor css se torna válido e "aciona" a animação do carro utilizando keyframes. O exemplo abaixo usa sass:

````sass
.passo1:checked + .passo2:not(:checked)
  ~ .car
    @include animation(animacao-passo1 3s ease-in-out)
```` 
[Código sass também disponível no github](https://github.com/teles/pure-css-parallel-park/blob/master/sass/components/_animations-steps.sass)

**Traduzindo esse trecho do sass/css:** Quando um elemento com a classe .passo1 estiver no estado checked for seguido de um elemento adjacente com a classe .passo2 não estiver no estado checked procure um elemento irmão com a classe ````.car```` e aplique nele a animação ````animacao-passo1```` com duração de 3.2 segundos.

Simples, né? 

O código do projeto está todo no [repositório github do pure-css-parallel-park](https://github.com/teles/pure-css-parallel-park) e no codepen [Parallel Park - Pure Css](http://codepen.io/teles/pen/gbKeLR).

Faça um fork, dê estrelinhas, seja feliz e não esqueça de dar uma olhada nos outros [pens feitos com css puro da lista do css design awards](http://www.cssdesignawards.com/articles/best-pure-css-pens-of-2015/268/).

Abraço
