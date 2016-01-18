---
published: True
layout: post
title: 'Escrevendo e publicando um livro online com github pages e gitbook. Parte 2 - Adicionando conteúdo e alterando estilos'
categories: 
  - dicas
image: "/images/minified/posts/gitbook/versosdomundo-com-sumario.png"
---

Continuação da primeira parte do tutorial sobre como publicar um livro no github pages usando gitbook.

## Adicionando o gitbook como dependência do seu projeto

[Lembre-se aqui da primeira parte do tutorial](dicas/2016/01/17/escrevendo-e-publicando-um-livro-online-com-github-pages-e-gitbook-parte1.html)

Assim que garantí que meu repositório estava funcionando o segundo passo foi clonar meu projeto na minha máquina e adicionar o gitbook à ele.

Primeiro iniciei um projeto npm dentro do meu repositório, assim:

	npm init

Depois de eu rodar o comando acima e responder algumas perguntas na linha de comando, foi gerado um arquivo package.json. Esse arquivo irá conter as dependências npm do projeto.

	npm install gitbook-cli -g

Depois para iniciar um projeto gitbook basta rodar:

	gitbook init

![Saída do comando gitbook init](/images/minified/posts/gitbook/screenshot-gitbook-1.png)

Nesse ponto o gitbook já está pronto para ser gerado, para isso basta rodar o comando:

	gitbook build . livro

Esse comando avisa para o gitbook gerar um diretório chamado "livro" a partir dos arquivos de markdown encontrados no diretório corrente (o ponto ".").

Dentro desse diretório chamado "livro" encontra-se um arquivo index.html, que se aberto no navegador revela a estrutura do meu livro vazio.

![Introdução básica criada pelo gitbook](/images/minified/posts/gitbook/gitbook-introducao.png)

Agora vamos adicionar conteúdo ao livro.

## Arquivos de configuração do gitbook

Durante a criação do html do site, o gitbook precisa de apenas três arquivos: o README.md, o SUMMARY.md e o book.json.

* O README.md é o arquivo que por padrão se tornará a página inicial do seu livro, a sua [introdução](http://versosdomundo.com.br/livro/index.html);

* O SUMMARY.md é o arquivo que deverá os links para os arquivos markdown do seu livro (já explico melhor);

* O book.json é um arquivo opcional com configurações específicas do seu gitbook, por exemplo, título, descrição, plugins e estilos css.

No caso do versosdomundo, optei por não utilizar o arquivo README.md como introdução do livro, já que esse arquivo também é utilizado pelo github. 
Felizmente mudar o arquivo de introdução é fácil, basta fazer uma alteração no book.json, para incluir esta configuração:

    "structure": {
        "readme": "introducao.md"
    }

Lembrando sempre de incluir essa configuração numa [estrutura json válida, como você pode ver no book.json do projeto](https://github.com/versosdomundo/versosdomundo.github.io/blob/master/book.json).

## Adicionando conteúdo a um livro com gitbook

Adicionar conteúdo ao gitbook é bastante fácil.

Basta criar os arquivos markdown que irão compor o seu livro em qualquer diretório que você desejar dentro do seu repositório.

Depois de criados os arquivos markdown, basta referênciá-los na ordem em que você desejar dentro do arquivo **summary.md**, deste modo:

	* [Introdução](introducao.md)
	* [Venha comigo](poesias/venha-comigo.md)
	* [Será que eu sou o homem da metrópole?](poesias/sera-que-eu-sou-o-homem-da-metropole.md)
	* [Segunda feira](poesias/segunda-feira.md)

O primeiro arquivo listado será a introdução do seu livro, os arquivos listados a seguir serão numerados de acordo com sua posição. Bastante simples.

## Alterando o estilo do seu gitbook

Uma das partes mais interessantes de usar o gitbook como dependência em um projeto github é a possibilidade de alterar o estilo css do site gerado e mesmo do pdf.

No caso do [versos do mundo](http://www.versosdomundo.com.br/livro) tive o seguinte problema. No estilo padrão de formatação dos parágrafos não existe a quebra automática de linhas o que compromete a leitura das poesias deixando as linhas todas juntas.

![Poesia sem quebra de linha](/images/minified/posts/gitbook/poesia-segunda-feira-sem-quebra.png)

Para corrigir isso o que fiz foi adicionar a seguinte linha no nosso [book.json](https://github.com/versosdomundo/versosdomundo.github.io/blob/master/book.json):

    "styles": {
        "website": "./sass/website.sass"
    }

Com isso informei ao gitbook que existe uma folha de estilo sass adicional para o website no arquivo [sass/website.sass](https://github.com/versosdomundo/versosdomundo.github.io/blob/master/sass/website.sass).

Nesse ponto eu poderia ter alterado o website.sass para incluir o css necessário para corrigir a formatação da poesia, mas ao invés disso apenas importei outro arquivo dentro dele:

	@import temas/poesia.sass

E no arquivo [temas/poesia.sass](https://github.com/versosdomundo/versosdomundo.github.io/blob/master/sass/temas/_poesia.sass) adicionei o css para correção das quebras de linha:

	.book-chapter + .section
		white-space: pre-wrap

![Poesia com quebra de linha](/images/minified/posts/gitbook/poesia-segunda-feira-com-quebra.png)

[Continue aqui para a terceira e última parte do tutorial de gitbook ->](/dicas/2016/01/17/escrevendo-e-publicando-um-livro-online-com-github-pages-e-gitbook-parte3.html)