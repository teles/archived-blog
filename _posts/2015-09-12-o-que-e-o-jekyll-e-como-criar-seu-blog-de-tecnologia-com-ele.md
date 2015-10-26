---
layout: post
title: O que é o Jekyll e como criar seu blog de tecnologia com ele.
category: 'jekyll'
tags: ['jekyll', 'blog', 'github', 'github pages']
published: True
image: "/images/posts/jekyll/jekyll-o-que-e.png"

---

Então você gostaria de ter um blog pessoal mas desiste da ideia quando pensa que vai ter que contratar um servidor só para isso? 

Pois bem, seus problemas acabaram!

Neste artigo vou mostrar o que é o Jekyll e porque eu o escolhi para [meu blog pessoal](http://www.jotateles.com.br).

## O que é o Jekyll?

[Jekyll](https://jekyllrb.com/) é uma plataforma para sites que transforma arquivos estáticos em um blog 100% funcional, com posts, paginação, categorias, tags, possibilidade de adicionar comentários, etc.

## Como o Jekyll funciona? 

![É assim que um post do meu blog se parece no modo edição.](/images/posts/jekyll/meu-ambiente-de-trabalho-com-jekyll-e-sublime.png)

Quando você instala o jekyll o que ele faz é fornecer um projeto inicial com uma estrutura de pastas padrão e quando você altera os arquivos desse projeto inicial, incluindo posts ou editando o estilo do blog, o jekyll se encarrega de transformar tudo isso em uma pasta chamada **"_site"** que será o seu blog.

## Integração com seu Github

Ou seja, você vai lidar apenas com arquivos estáticos, não precisa de backend.

Outra coisa legal é que o jekyll é integrado com o [Github](https://www.github.com).

Isso significa que tudo que você precisa fazer para ter seu blog rodando no github é: 

* No seu github criar um repositório chamado **seu-nome-de-usuario-github**.github.io;
* [Instalar o jekyll](https://jekyllrb.com/docs/installation/);
* Dentro da pasta do seu projeto rodar `jekyll serve`;
* Criar posts e fazer commits na branch master do projeto; -**não precisa ser na branch gh-pages**
* Entrar em http://**seu-nome-de-usuario-github**.github.io e pronto, seu blog estará online.

## Escreva seus posts com markdown
![Pacote do sublime para jekyll](/images/posts/jekyll/jekyll-sublime-package.png)

Dentro da estrutura de pastas de um projeto Jekyll, a pasta **'_posts'** é destinada aos posts do seu blog.

Você deverá escrever seu post usando markdown, linguagem de marcação simples e bastante conhecida para escrita de arquivos README.md.

O nome do arquivo de um post jekyll precisa seguir a seguinte notação:

**[ANO]-[MES]-[DIA]-[TITULO].md**

Por exemplo, [2015-08-12-usando-o-surgesh-para-hospedar-projetos-de-front-end-gratuitamente.md](https://github.com/teles/teles.github.io/blob/master/_posts/2015-08-12-usando-o-surgesh-para-hospedar-projetos-de-front-end-gratuitamente.md).

Se você é usuário do sublime recomendo a utilização [desse plugin](https://packagecontrol.io/packages/Jekyll), que irá criar o nome dos arquivos de post automaticamente. 

## Edite o estilo do seu blog com sass

![Rodando o comando jekyll serve.](/images/posts/jekyll/jekyll-serve.png)

Boa notícia, front enders! O Jekyll usa SASS por padrão e caso você altere um arquivo .sass ou .scss dentro da pasta **'_sass'** o seu css final é regerado automaticamente, sem que você precise se preocupar em instalar mais nada.

E claro, o estilo do seu blog é totalmente customizável, a pasta **['_sass' desse blog](https://github.com/teles/teles.github.io/tree/master/_sass)** , por exemplo, foi 100% criada por mim.


## Existem muitos plugins e temas para seu Jekyll

Jekyll possui [plugins para todas as finalidades](https://jekyllrb.com/docs/plugins/), categorização de posts, internacionalização, tags, SEO, etc. Também existe muitos [temas para Jekyll](http://jekyllthemes.org/) disponíveis aqui e em outros sites.

## Agora é mão na massa!

E aí, [bora começar seu blog em jekyll?](https://jekyllrb.com/) No próximo post irei dar algumas dicas para front enders personalizarem seu blog jekyll. 

Abraços.











