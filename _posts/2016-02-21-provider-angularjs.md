---
published: True
layout: post
title: "Provider no angular: o que é, para que serve e como criar um"
categories: 
  - javascript
image: "/images/minified/posts/providers/providers-no-angular-dicaprio.jpg"
---

O angular oferece uma série de receitas para que desenvolvedores front-end criem aplicações bem estruturadas.

[Essas receitas](https://docs.angularjs.org/guide/providers) são as funções que usamos no cotidiano como directive, factory, value, constant e claro: **provider**.

## O que é um provider no angular?

No angular o provider é mãe de todas as outras receitas, as outras receitas mencionadas acima são formas diferentes de implementar um Provider.

Exemplo disso é que quando você declara uma factory, fazendo por exemplo:


```javascript

// Declaramos o módulo meu-modulo-maravilhoso
angular.module('meu-modulo-maravilhoso', []);
angular.module('meu-modulo-maravilhoso').factory('MinhaFactoryLinda', MinhaFactoryLinda);
function MinhaFactoryLinda(){}

```

O angular automaticamente irá criar para você um Provider por baixo dos panos, sem que você precisa declarar nada, nesse caso um 'MinhaFactoryLindaProvider'.

E para que isso serve? Já vou explicar.

## Para que serve um Provider do angular?

Nesse post vou mostrar como o provider serve para prover (:P) uma interface para configuração de uma factory.

[Segundo a documentação do angular sobre Provider](https://docs.angularjs.org/guide/providers):
    
<blockquote>
"Você deve usar a receita do Provider apenas quando deseja export uma API para configurações que precisam ser feitas antes da inicialização da aplicação. Comumente isto é interessante apenas para serviços reutilizáveis cujo comportamento precise variar ligeiramente entre aplicações." (tradução livre)
</blockquote>

A configuração feita antes da inicialização da aplicação mencionada pela documentação diz respeito a fase de configuração de um módulo angular.

Quer dizer, um módulo angular possui um ciclo de vida que começa com uma função **config()** e segue para a função **run()**.

Na fase de configuração, as factory adicionadas a um módulo ainda não foram "*compiladas*" pelo angular e **apenas estão disponíveis os providers dessas factory** para configuração.

### Exemplo:

```javascript
(function(){

    // Criamos um módulo chamado meu-modulo-maravilhoso
    angular.module('meu-modulo-maravilhoso', []);

    // Declaramos uma factory MinhaFactoryLinda dentro do módulo meu-modulo-maravilhoso
    angular.module('meu-modulo-maravilhoso').factory('MinhaFactoryLinda', MinhaFactoryLinda);
    function MinhaFactoryLinda(){
        var factory = {
            nomeDoMeuFrameworkJSFavorito: null
        };
        return factory;
    }   
})();

```

Em outro arquivo continuamos com as configurações do módulo:

```javascript
(function(){
    // Configuramos o meu-modulo-maravilhoso usando a função config()
    // Na função config() apenas os Provider existem
    angular.module('meu-modulo-maravilhoso').config(config);

    function config(MinhaFactoryLindaProvider){
        // console.log(MinhaFactoryLinda); // imprime "Uncaught Error: [$injector:modulerr]" e trava a aplicação
        // console.log(MinhaFactoryLindaProvider); // imprime um objeto com atributo $get
    }

    // Na função run() os Provider não são mais acessíveis, apenas as factory
    angular.module('meu-modulo-maravilhoso').run(run);

    // function run(){
    function run(MinhaFactoryLinda){
        console.log(MinhaFactoryLinda); // imprime um objeto com um atributo nomeDoMeuFrameworkJSFavorito
        console.log(MinhaFactoryLindaProvider); // imprime "Uncaught ReferenceError" e trava a aplicação

    }
})();

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

(function(){

    // Criamos um módulo chamado meu-modulo-maravilhoso
    angular.module('meu-modulo-maravilhoso', []);

    // Registrei o provider MinhaFactoryLinda dentro do módulo meu-modulo-maravilhoso
    angular.module('meu-modulo-maravilhoso').provider('MinhaFactoryLinda', MinhaFactoryLindaProvider);

    function MinhaFactoryLindaProvider(){

        // Crio um objeto de configure dentro do provider
        // Esse objeto irá conter as funções e variáveis acessíveis via closure do provider na fase de configuração
        var configure = {
            setNomeDoMeuFrameworkJSFavorito: setNomeDoMeuFrameworkJSFavorito,
            nomeDoMeuFrameworkJSFavorito: null          
        };

        var provider = {
            $get: MinhaFactoryLinda,
            configure: configure
        };
        return provider;

        // Implemento a minha função de configuração dentro do provider
        function setNomeDoMeuFrameworkJSFavorito(nomeDoMeuFrameworkJSFavorito){
            configure.nomeDoMeuFrameworkJSFavorito = nomeDoMeuFrameworkJSFavorito;
        }

        // Implemento a factory dentro do provider
        function MinhaFactoryLinda(){
            var model = {
              nomeDoMeuFrameworkJSFavorito: configure.nomeDoMeuFrameworkJSFavorito
            };
            return model;
        }
    }
})();

```


A partir de agora, podemos fazer o seguinte no arquivo de configuração do módulo:

```javascript

(function(){
    // Criamos um novo módulo que depende do módulo meu-modulo-maravilhoso
    angular.module('minha-outra-aplicacao', ['meu-modulo-maravilhoso']);

    angular.module('minha-outra-aplicacao').config(config);

    // Configuro o MinhaFactoryLindaProvider na fase de configuração do módulo
    function config(MinhaFactoryLindaProvider){
        MinhaFactoryLindaProvider.setNomeDoMeuFrameworkJSFavorito('react');
    }

    angular.module('minha-outra-aplicacao').run(run);

    // Rodo o módulo para exibir o resultado da fase de configuração
    function run(MinhaFactoryLinda){
        console.log(MinhaFactoryLinda.nomeDoMeuFrameworkJSFavorito); // imprime 'react'
    }
})();

```

É isso!

## Se liga aí que agora é hora da revisão!

* Provider é uma das receitas angular;
* Provider é a receita básica do angular, mãe de todas as outras;
* Um provider implementa um método $get que retorna uma Factory;
* Se você não declarar um provider para sua factory o angular irá fazer isso por conta própria debaixo dos panos;
* Um módulo angular possui fases, e a fase de configuração é acessível via função config();
* Na função config() os factory ainda não existem, apenas os provider;
* Na fase de run() os provider já não estão mais disponíveis;
* Por isso usa-se um provider quando se quer que uma factory angular possa ser configurada de modos diferentes em aplicações diferentes;

Usar providers no angular como o ```$httpProvider``` e o ```$interpolateProvider``` é comum no dia a dia, mas agora você também deve ter a habilidade para criar seus providers quando isso for necessário.

E aí, dúvidas? Achou legal? <a href='https://www.facebook.com/sharer/sharer.php?u=http://jotateles.com.br/javascript/2016/02/21/provider-angularjs.html'>Compartilhará com a galerinha? </a>

Caso o assunto interesse a alguém volto aqui no [raio frontendizador](http://jotateles.com.br) para dar um exemplo mais realista da utilização de um provider.

Abraços, frontaiada.