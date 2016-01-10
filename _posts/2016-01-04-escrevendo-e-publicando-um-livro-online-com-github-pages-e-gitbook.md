---
published: false
layout: post
title: 'Escrevendo e publicando um livro online com github pages e gitbook'
categories: 
  - dicas
image: "/images/minified/posts/cssdesignawards-parallelpark/parallel-park-screenshot.png"
---

Oi, galera. Tudo bem?

Muito antes de eu me me considerar um desenvolvedor, quando eu tinha meu 10 anos de idade, já me atraia por literatura e poesia. 

E assim como ocorre com o código, a prática de ler muito nos faz querer produzir nossa própria arte.

Acontece que desde 2009, escrevendo esporadicamente junto com um amigo, comecei um blog de poesias chamado [versos do mundo](http://versosdomundo.wordpress.com).

Agora você que está aí do outro lado me pergunta: 

	"Ok. Onde entra tecnologia na história?"

A tecnologia entrou na história quando resolví recentemente trocar meu blog hospedado no wordpress por um site em formato de livro digital. 

O resultado final pode ser conferido no [versosdomundo.com.br/livro](http://www.versosdomundo.com.br/livro).

Legal, né? Se quiser saber como eu fiz continua aqui no post.

## O que é o gitbook?

Para quem ainda não o conhece, o gitbook é um gerador de sites com base em arquivos markdown, o que o torna muito semelhante ao jekyll.

No entanto, diferentemente de outros geradores de site estático, o gitbook foca-se em construir um site com recursos de navegação típicos de livros digitais, como navegação por tópicos, busca por palavras, sumário, possibilidade de alteração de tamanho de fonte e contraste da tela pelo usuário. 

Além disso, o gitbook oferece nativamente exportação do conteúdo do livro para pdf e epubi com capa personalizada.

Bom lembrar, que assim como o wordpress, o gitbook funciona de duas maneiras diferentes: como um site em que você pode hospedar seu conteúdo gratuitamente, e como uma ferramenta possível de ser baixada e usada como o usuário desejar.

No meu caso irei utilizar o gitbook apenas como ferramenta, optando pelo github pages para hospedar o conteúdo do meu livro.

## Criando um projeto/repositório com github pages

Como explicado acima irei utilizar um repositório do github para hospedar meu livro que deverá ser disponbilizado online através do github pages.

Com essa finalidade a primeira coisa que fiz foi criar uma organização no github, e dentro dessa organização um repositório nomeado como ````[nomedaorganização].github.io````.

No caso como minha organização se chama [versosdomundo](https://github.com/versosdomundo/) meu repositório deve se chamar obrigatoriamente [versosdomundo.github.io](https://github.com/versosdomundo/versosdomundo.github.io).

Apenas nomeando um repositório dessa maneira, o github já disponibiliza o conteúdo da branch master do meu repositório no endereço [http://versosdomundo.github.io](http://versosdomundo.github.io).

	"Quer dizer que se eu tiver uma organização com nome minhaorganizacao e dentro dela um repositório de nome minhaorganizacao.github.io, o github irá disponiblizar meu repositório online no endereço http://minhaorganizacao.github.io ?"

Exatamente, existem outras maneiras de hospedar seu site DE GRÁTIS no github pages, mas para organizações é assim que funciona!

## Adicionando o gitbook como dependência do seu projeto

Assim que garantí que meu repositório estava funcionando o segundo passo foi clonar meu projeto na minha máquina e adicionar o gitbook à ele.

Primeiro iniciei um projeto npm dentro do meu repositório, assim:

	npm init

Depois de eu rodar o comando acima e responder algumas perguntas na linha de comando, foi gerado um arquivo package.json. Esse arquivo irá conter as dependências npm do projeto.

	npm install gitbook-cli -g

Depois para iniciar um projeto gitbook basta rodar:

	gitbook init

![Saída do comando gitbook init](http://screencloud.net/v/1UbV)

Nesse ponto o gitbook já está pronto para ser gerado, para isso basta rodar o comando:

	gitbook build . livro

Esse comando avisa para o gitbook gerar um diretório chamado "livro" a partir dos arquivos de markdown encontrados no diretório corrente (o ponto ".").

Dentro desse diretório chamado "livro" encontra-se um arquivo index.html, que se aberto no navegador revela a estrutura do meu livro vazio.

http://www.awesomescreenshot.com/image/883419/974beb3d6017736a04dc396a4da67e9f

Agora vamos adicionar conteúdo ao livro.

## Arquivos de configuração do gitbook

Durante a criação do html dos site, o gitbook importa-se apenas em ler três arquivos: o README.md, o SUMMARY.md e o book.json.

* O README.md é o arquivo que por padrão se tornará a página inicial do seu livro, a sua [introdução](http://versosdomundo.com.br/livro/index.html);

* O SUMMARY.md é o arquivo que deverá os links para os arquivos markdown do seu livro (já explico melhor);

* O book.json é um arquivo opcional com configurações específicas do seu gitbook, por exemplo, título, descrição, plugins e estilos css.

No caso do versosdomundo, optei por não utilizar o arquivo README.md como introdução do livro, já que esse arquivo também é utilizado pelo github. Felizmente mudar o arquivo de introdução é fácil, basta fazer uma alteração no book.json, para incluir esta configuração:

    "structure": {
        "readme": "introducao.md"
    }

Lembrando sempre de incluir essa configuração numa [estrutura json válida, como você pode ver no book.json do projeto](https://github.com/versosdomundo/versosdomundo.github.io/blob/master/book.json).

## Finalmente adicionando conteúdo ao livro

Adicionar conteúdo ao gitbook é bastante fácil.

Apea

## Alterando o estilo do seu gitbook

## Bônus: atualizando seu livro usando prose.io 

