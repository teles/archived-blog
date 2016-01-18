---
published: True
layout: post
title: 'Escrevendo e publicando um livro online com github pages e gitbook. Parte 3 - Exportando como pdf'
categories: 
  - dicas
image: "/images/minified/posts/gitbook/versosdomundo-pdf-gerado.png"
---

Continuação da segunda parte do tutorial sobre como publicar um livro no github pages usando gitbook.

## Gerando um pdf e alterando o seu estilo 

[Lembre-se aqui da primeira parte do tutorial](dicas/2016/01/17/escrevendo-e-publicando-um-livro-online-com-github-pages-e-gitbook-parte2.html)

Para que o gitbook seja capaz de gerar um arquivo pdf com a mesma estrutura do seu website você precisará instalar no seu sistema operacional o [ebook-convert](http://manual.calibre-ebook.com/cli/ebook-convert.html).

Isso é necessário pois internamente o gitbook irá utilizar o comando **ebook-convert** para gerar seu pdf.

Depois de instalado o ebook-convert, para gerar o pdf apenas utilizei a seguinte linha de comando.

	gitbook pdf . ./livro/versosdomundo.pdf

Esse comando indica ao gitbook para gerar um pdf a partir da raiz e salvá-lo em livro/versosdomundo.pdf. [Esse é o resultado final do pdf do versos do mundo.](http://versosdomundo.com.br/livro/versosdomundo.pdf)

![Exemplo de pdf gerado](/images/minified/posts/gitbook/versosdomundo-pdf-gerado.png)

Assim como ocorre com o website, também é possível alterar o estilo do pdf.

Nesse caso, apenas informei no book.json que o pdf possuí uma folha de estilo própria:

    "styles": {
        "website": "./sass/website.sass",
        "pdf": "./sass/pdf.sass"
    }

E adicionei no sass dessa folha de estilo um import para um arquivo chamado [poesia.sass](https://github.com/versosdomundo/versosdomundo.github.io/blob/master/sass/ebook/poesia.sass).

Nesse arquivo adicionei o trecho de css que corrige a quebra de linhas das páginas:

	.book-chapter + .section
		white-space: pre-wrap

**É importante** notar que o pdf será gerado a partir de arquivos html contidos na estrutura interna do gitbook. 

Por exemplo, o arquivo que contém a estrutura de html das páginas do gitbook que serão transformadas em pdf é o **node_modules/gitbook/theme/templates/ebook/page.html**, foi aí que encontrei a classe **.book-chapter**.

## Bônus: atualizando seu livro usando prose.io 

![Interface do prose.io](/images/minified/posts/gitbook/prose.io.png)

Minha dica final é sobre o site [prose.io](http://prose.io/), o prose.io oferece uma interface com suporte a markdown para criação e edição de arquivos de texto hospedados no github.

Com isso é possível editar os meus arquivos de poesia pelo prose.io sem ter que clonar o repositório, ou mesmo ter clonar o repositório no meu computador.

Na prática basta se logar no [prose.io](http://prose.io), autorizar o acesso ao seu github e então navegar pelos diretórios do seu repositório criando e editando arquivos.

![Interface do prose.io para edição de arquivos](/images/minified/posts/gitbook/prose.io-pequeno-retrato-social.png)

Aqui a [visualização da interface do prose.io para edição de uma das poesias do versos do mundo](http://prose.io/#versosdomundo/versosdomundo.github.io/edit/master/poesias/pequeno-retrato-social.md)

O inconveniente nesse ponto é que depois de editar os arquivos é necessários fazer novamente o build do gitbook via linha de comando, pois o github não faz esse build automaticamente.

## Conclusão

O gitbook é um gerador de páginas estáticas similar ao jekyll e ao hexo, mas ao contrário desses geradores, o gitbook foca-se em gerar sites em formato de livro e mesmo arquivos pdf. 

Tudo a partir de arquivos markdown e com configurações simples, o gitbook pode ser instalado como dependência de um projeto web e o website gerado por ele pode ser hospedado no github-pages, como é o exemplo do [versosdomundo.github.io](http://versosdomundo.github.io/livro).

Arquivos pdf também podem ser gerados pelo gitbook, [veja este exemplo](http://versosdomundo.com.br/livro/versosdomundo.pdf).

O estilo tanto do website como do pdf pode ser customizado, e finalmente, os arquivos markdown do repositório onde se encontra seu gitbook podem ser editados via navegador pelo site [prose.io](http://prose.io).

Bacana, né? Se você estava pensando em escrever um livro, formatar seu tcc ou criar uma documentação em pdf pro seu projeto, dê uma chance ao gitbook, você não vai se arrepender.

Abraços.