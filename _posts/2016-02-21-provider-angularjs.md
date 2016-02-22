---
published: True
layout: post
title: "Provider no angular: o que é, para que serve e como criar um"
categories: 
  - javascript
image: "/images/minified/posts/providers/providers-no-angular-dicaprio.jpg"
---

O angular oferece uma série de receitas para que desenvolvedores front-end criem aplicações bem estruturadas.

[Essas receitas](https://docs.angularjs.org/guide/providers) são os funções que usamos no cotidiano como directive, factory, value, constant e claro: **provider**.

## O que é um Provider no angular?

No angular o Provider é mãe de todas as outras receitas, as outras receitas mencionadas acima são formas diferentes de implementar um Provider.

Exemplo disso é que quando você declara uma factory, fazendo por exemplo:


```javascript

angular.module('meu-modulo-maravilhoso').factory('MinhaFactoryLinda', MinhaFactoryLinda);
function MinhaFactoryLinda(){};

```

O angular automaticamente irá criar para você um Provider por baixo dos panos, sem que você precisa declarar nada, nesse caso um 'MinhaFactoryLindaProvider'.

E para que isso serve? Já vou explicar.

## Para que serve um Provider do angular?

Nesse post vou mostrar como o provider serve para prover (:P) uma interface para configuração de uma factory.

[Segundo a documentação do angular sobre Provider](https://docs.angularjs.org/guide/providers):
    
<blockquote>
You should use the Provider recipe only when you want to expose an API for application-wide configuration that must be made before the application starts. This is usually interesting only for reusable services whose behavior might need to vary slightly between applications".
</blockquote>

A configuração feita antes da aplicação iniciar mencionada pela documentação diz respeito a fase de configuração de um módulo angular.

Quer dizer, um módulo angular possui um ciclo de vida que começa com uma função **config()** e segue para a função **run()**.

Na fase de configuração, as factory adicionadas a um módulo ainda não foram "*compiladas*" pelo angular e **apenas estão disponíveis os providers dessas factory** para configuração.

### Exemplo:

```javascript

angular.module('meu-modulo-maravilhoso', []);
// Criei um módulo chamado meu-modulo-maravilhoso

// Declaramos uma factory MinhaFactoryLinda dentro do módulo meu-modulo-maravilhoso
angular.module('meu-modulo-maravilhoso').factory('MinhaFactoryLinda', MinhaFactoryLinda);
function MinhaFactoryLinda(){};

// Configuramos o meu-modulo-maravilhoso usando a função config()
// Na função config() apenas os Provider existem
angular.module('meu-modulo-maravilhoso').config(function(MinhaFactoryLindaProvider){
    console.log(MinhaFactoryLinda); // imprime null
    console.log(MinhaFactoryLindaProvider); // imprime um objeto vazio  
});

// Na função run() os Provider não são mais acessíveis, apenas as factory
angular.module('meu-modulo-maravilhoso').run(function(MinhaFactoryLinda){
    console.log(MinhaFactoryLinda); // imprime um objeto
    console.log(MinhaFactoryLindaProvider); // imprime null
});

```

## Ok. Como criar um Provider no angular?

Um provider angular é uma receita que implementa uma função ```$get``` e esta função ```$get``` deve retornar uma função tipo Factory. 

Para mostrar como é primeiro vou mostrar como criar uma factory angular sem declarar um provider, e depois declarando o provider.

### Criando uma factory angular sem declarar seu provider

**PS**: Não sou um fã das funções anônimas do javascript, por isso nestes exemplos utilizo o padrão *revealing module* para escrever as funções necessárias.

```javascript

angular.module('meu-modulo-maravilhoso').factory('MinhaFactoryLinda', MinhaFactoryLinda);
// Registrei a factory MinhaFactoryLinda dentro do módulo meu-modulo-maravilhoso

// Implemento a factory nessa função
function MinhaFactoryLinda(){
    var model = {
      nomeDoMeuFrameworkJSFavorito: null
    };
    return model;
}

```


Agora vamos imaginar o seguinte cenário: Você precisava que ```MinhaFactoryLinda``` fosse usada em várias aplicações diferentes e então a disponibilizou como um pacote bower.

Na sua aplicação você deseja que o valor de ```nomeDoMeuFrameworkJSFavorito``` seja 'angularJs', enquanto na aplicação do seu amigo estranho o valor dessa variável deve ser 'reactJS' (o que soa estranho já que reactJS é só uma biblioteca). É aí que precisamos declarar essa factory como um provider.

## Criando uma factory angular e declarando seu provider

```javascript

angular.module('meu-modulo-maravilhoso').provider('MinhaFactoryLinda', MinhaFactoryLindaProvider);
// Registrei o provider MinhaFactoryLinda dentro do módulo meu-modulo-maravilhoso

function MinhaFactoryLindaProvider(){
    var nomeDoMeuFrameworkJSFavorito; // é necessário declarar a variável que queremos acessar dentro da factory dentro do provider para que ela seja acessível via closure

    var provider = {
        $get: MinhaFactoryLinda,
        setNomeDoMeuFrameworkJSFavorito: setNomeDoMeuFrameworkJSFavorito
    };
    return provider;

    // Implemento a minha função de configuração dentro do provider
    function setNomeDoMeuFrameworkJSFavorito(paramNomeDoMeuFrameworkJavascriptFavorito){
        nomeDoMeuFrameworkJSFavorito: paramNomeDoMeuFrameworkJavascriptFavorito;
    }

    // Implemento a factory dentro do provider
    function MinhaFactoryLinda(){
        var model = {
          nomeDoMeuFrameworkJSFavorito: null
        };
        return model;
    }

}

```


A partir de agora, podemos fazer o seguinte:

```javascript

angular.module('minha-outra-aplicacao', ['meu-modulo-maravilhoso']);

angular.module('minha-outra-aplicacao').config(function(MinhaFactoryLindaProvider){
    MinhaFactoryLindaProvider.setNomeDoMeuFrameworkJSFavorito('react');
});

angular.module('minha-outra-aplicacao').run(function(MinhaFactoryLinda){
    console.log(MinhaFactoryLinda.nomeDoMeuFrameworkJSFavorito); // imprime 'react'
});

```


É isso!


## Se liga aí que agora é hora da revisão!

* Provider é uma das receitas angular;
* Provider é a receita básica do angular, mãe de todas as outras;
* Um provider implementa um método $get que retorna uma Factory;
* Se você não declarar um provider para sua factory o angular irá fazer isso por conta própria debaixo dos panos;
* Um módulo angular possui fases, e a fase de configuração é acessível via função config();
* Na função config os factory ainda não existem, apenas os provider
* Na fase de run() os provider já não estão mais disponíveis;
* Por isso usa-se um provider quando se quer que uma factory angular possa ser configurada de modos diferentes em aplicações diferentes;

Usar providers no angular como o ```$httpProvider``` e o ```$interpolateProvider``` é comum no dia a dia, mas agora você também deve ter a habilidade para criar seus providers quando isso for necessário.

E aí, dúvidas? Achou legal? Compartilhará com os *brother*? 

Caso o assunto interesse a alguém volto aqui no [raio frontendizador](http://jotateles.com.br) para dar um exemplo mais realista da utilização de um provider.

Abraços, frontaiada.