---
published: True
layout: post
title: 'Escrevendo e publicando um livro online com github pages e gitbook'
categories: 
  - dicas
image: "/images/minified/posts/gitbook/gitbook.com-homepage.png"
---

Oi, galera. Tudo bem? Prontos para escrever um livro?

Muito antes de eu me me considerar um desenvolvedor, quando eu tinha meu 10 anos de idade, já me atraia por literatura e poesia. 

E assim como ocorre com o código, a prática de ler muito nos faz querer produzir nossa própria arte.

Acontece que desde 2009, escrevendo esporadicamente junto com um amigo, comecei um blog de poesias chamado [versos do mundo](http://versosdomundo.wordpress.com).

Resolví recentemente trocar meu blog hospedado no wordpress por um site em formato de livro digital. 

O resultado final pode ser conferido no [versosdomundo.com.br/livro](http://www.versosdomundo.com.br/livro).

Legal, né? Se quiser saber como eu fiz continua aqui no post.

## O que é o gitbook?

Para quem ainda não o conhece, o gitbook é um gerador de sites com base em arquivos markdown, o que o torna muito semelhante ao jekyll. [Relembre aqui como criar seu blog com jekyll](http://jotateles.com.br/jekyll/2015/09/12/o-que-e-o-jekyll-e-como-criar-seu-blog-de-tecnologia-com-ele.html).

No entanto, diferentemente de outros geradores de site estático, o [gitbook](https://github.com/GitbookIO/gitbook) foca-se em construir um site com recursos de navegação típicos de livros digitais, como navegação por tópicos, busca por palavras, sumário, possibilidade de alteração de tamanho de fonte e contraste da tela pelo usuário. 

Além disso, o gitbook oferece nativamente exportação do conteúdo do livro para pdf e epubi com capa personalizada.

Bom lembrar, que assim como o wordpress, o gitbook funciona de duas maneiras diferentes: [como um site em que você pode hospedar seu conteúdo gratuitamente](https://www.gitbook.com/), e como uma [ferramenta possível de ser baixada e usada como o usuário desejar](https://github.com/GitbookIO/gitbook).

No meu caso irei utilizar o gitbook apenas como ferramenta, optando pelo github pages para hospedar o conteúdo do meu livro.

## Criando um projeto/repositório com github pages

Como explicado acima irei utilizar um repositório do github para hospedar meu livro que deverá ser disponbilizado online através do github pages.

Com essa finalidade a primeira coisa que fiz foi criar uma organização no github, e dentro dessa organização um repositório nomeado como ````[nomedaorganização].github.io````.

No caso como minha organização se chama [versosdomundo](https://github.com/versosdomundo/) meu repositório deve se chamar obrigatoriamente [versosdomundo.github.io](https://github.com/versosdomundo/versosdomundo.github.io).

Apenas nomeando um repositório dessa maneira, o github já disponibiliza o conteúdo da branch master do meu repositório no endereço [http://versosdomundo.github.io](http://versosdomundo.github.io).

	"Quer dizer que se eu tiver uma organização com nome minhaorganizacao e dentro dela um repositório de nome minhaorganizacao.github.io, o github irá disponiblizar meu repositório online no endereço http://minhaorganizacao.github.io ?"

Exatamente, existem outras maneiras de hospedar seu site no github pages, mas para organizações é assim que funciona!

[Continue aqui para a segunda parte do tutorial de gitbook ->](/dicas/2016/01/17/escrevendo-e-publicando-um-livro-online-com-github-pages-e-gitbook-parte2.html)