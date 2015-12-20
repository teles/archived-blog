---
published: false
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

Ou seja, quando o usuário clica no label na verdade está checando um checkbox e quando esse checkbox está checado um seletor css se torna válido e "aciona" a animação do carro utilizando keyframes. O exemplo abaixo usa sass:

````sass
// Start
.passo1:checked + .passo2:not(:checked)
  ~ .car
    @include animation(animacao-passo1 3s ease-in-out)
````

Traduzindo esse trecho do sass/css: Quando um elemento com a classe .passo1 estiver no estado checked for seguido de um elemento adjacente com a classe .passo2 não estiver no estado checked procure um elemento irmão com a classe ```.car```` e aplique nele a animação ````animacao-passo1```` com duração de 3.2 s




