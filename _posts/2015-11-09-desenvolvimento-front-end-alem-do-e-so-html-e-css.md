---
layout: post
title: Desenvolvimento front-end além do "É só html e css"
category: 'opinião'
published: True
image: "/images/minified/posts/alemdohtmlecss/htmlcssjavascriptgithub.png"

---

Já ouví e você provavelmente já deve ter ouvido também algum desenvolvedor dizendo que o desenvolvimento front-end é "Só html e css". 

Não me cabe fazer uma crítica aos amigos que analisam a área do front-end desta maneira, mas tentar entender e divulgar na medida do possível qual a verdadeira extensão desse ramo do desenvolvimento de software.

Como já foi analisado no excelente artigo ["Por que não encontramos desenvolvedores front-end"](http://letanure.github.io/2015/02/10/por-que-nao-podemos-encontrar-desenvolvedores-front-end) o desenvolvimento front-end como ramo de trabalho é uma ideia bastante recente.

![Gráficos Google Trends para pesquisas sobre desenvolvimento front end](/images/minified/posts/alemdohtmlecss/alem-do-html-e-css-google-trends.png)

Acima um [gráfico do Google Trends](https://www.google.com/trends/explore#q=front%20end%20developer%2C%20desenvolvedor%20front%20end&cmpt=q&tz=Etc%2FGMT%2B2) mostra que as buscas por 'front end developer' começaram no ano de 2009, enquanto as buscar por 'desenvolvedor front end' com uma força muito menor começaram entre 2013 e 2014, ou seja, trata-se realmente de uma área nova.

Por isso, o desenvolvimento front-end é uma área que está o tempo todo sendo definida e entendida entre os profissionais da área. 

Essa área assim tão nova tem abraçado os antigos web designers e programadores com "formação back end" que desejaram migrar.

## "É só html e css"

![E se eu te disser...](/images/minified/posts/alemdohtmlecss/morpheus-meme.jpg)

Embora html e css possam te fazer lembrar daquele seu primo que adorava o frontpage, elas são juntamente com o javascript, de fato as linguagens da web. 

São linguagens de marcação e estilo que se renovam com velocidades impressionantes e quando você ficar feliz por lembrar que o [flash está morto](http://thenextweb.com/apps/2015/09/01/adobe-flash-just-took-another-step-towards-death-thanks-to-google/), lembre-se de agradecer o html5 por isso :)

## Escrever bom html é:

Escrever html, para um bom desenvolvedor front-end, não é uma tarefa acessória que ele faz usando um gerador de código. 

Escrever bom html envolve conhecimentos variados de: semântica de código; SEO; acessibilidade; micro dados ([microformats](http://microformats.org/) e [schema.org](http://schema.org)); [page speed](https://developers.google.com/speed/pagespeed/), utilização de novas tags e atributos como header, footer, aside, picture, datalist, patterns para inputs, etc.

Enquanto isso, escrever css se mostra um ramo ainda mais específico e que tem revelado bons profissionais, conhecí vários front-enders (como [Willian Ribeiro](http://willianribeiro.com.br/), [Luiz Otávio](http://luizotcarvalho.com.br) e Guto Oliveira) com grande habilidade no css e pude aprender muito com eles.

## Escrever bom css é:

Escrever um css bom, envolve muitas das habilidades dignas de um bom programador. Acima de tudo **escrever um bom css é um exercício de definir responsabilidades no código** para criar componentes reaproveitáveis e atômicos. 

Não acredita em mim? Dê uma procurada por ‘css architeture’ no youtube e você deve encontrar [boas apresentações sobre o tema como essa](https://www.youtube.com/watch?v=FYcu-wWrNqo).

Várias são as soluções que tem surgido na web para modularização e arquitetura de css, como o [smacss](https://smacss.com/), [BEM](http://getbem.com/introduction/), [oocss](http://getbem.com/introduction/). Além de muitas ferramentas que ajudam na criação de páginas para documentação de componentes, como o [styledown](https://github.com/styledown/styledown).

E nem mencionei os pré processadores de css, como o [sass](http://sass-lang.com/) e o [stylus](https://learnboost.github.io/stylus/) que trazem controles de fluxo, variáveis, condicionais, funções e muito mais para o mundo do css. 

Se você estava esperando a chance de escrever um "for" para se aventurar no front-end, a hora é agora :P

Essa [lista no github contém vários links sobre css, styleguides, toolkits, frameworks, resets, etc](https://github.com/sotayamashita/awesome-css).

## Escrever bom javascript é:

Enquanto o css algumas vezes aparece como um ponto de interseção entre o trabalho de designers e front-enders, o javascript na maioria das empresas aparece como uma tarefa dividida entre desenvolvedores back-end e front-end.

Minha experiência pessoal mostra que o motivo disso é que a lógica de negócios está saindo cada dia mais do back-end e migrando para o front-end (falo mais sobre isso a seguir), e a expertise de muitos programadores back-end tem sido largamente aproveitada para escrita de javascript.

Escrever um bom javascript, não tem mais nenhuma relação com copiar funções inteiras da internet para fazer o cursos do mouse piscar. 

Um bom desenvolvimento de javascript é uma tarefa que leva em conta todos os aspectos do bom desenvolvimento de software, além das particularidades de se trabalhar com javascript como entendimento de CORS (esse danadinho!), processamento assíncrono, cabeçalhos http, como trabalhar com formatos de imagem variados como svg e png, manipulação de DOM, databind com o html, single page application, gerenciadores de tasks, etc.

Se você decidir trabalhar com [angularjs](https://angularjs.org/), por exemplo, vai acabar esbarrando em decisões de software típicas de um framework que te oferece databinds, templates, controle de cache, diretivas, manipulação do DOM, injeção de dependências e tudo mais que você merece.

## A lógica de negócios está migrando para o front-end

Posso agora apresentar uma hipótese falha por não ter os dados que a provem, mas tenho visto com frequência uma migração da lógica das aplicações web para o front-end.

É um caminho natural e que se aproveita do maior poder de processamento dos computadores mais novos e da maior capacidade de navegadores modernos para deixar no lado cliente boa parte da lógica de negócio das aplicações.

Isso é especialmente válido quando falamos de single page applications, aplicações web com rotas gerenciadas pelo javascript e que consomem dados de um serviço disponibilizado pelo back-end através de ajax.

## Back-end como serviço

Outra tendência bastante interessante e sobre a qual voltei a pensar depois de ler [esse artigo sobre geradores de páginas estáticas](http://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/) é a disponiblização de serviços de back-end através de api disponíveis na web.

Já existem apis para as mais variadas finalidades hoje. Sem implementar nenhum back-end e hospedando um site no seu github pages você poder ter:

* Comentários usando o [Disqus](https://disqus.com/home)
* Buscas usando o [Swiftype](https://swiftype.com/)
* Formulários usando o [getform](https://getform.org/)
* Chat usando o [Olark](https://www.olark.com/)
* Carrinho de compras usando o [Snipcart](https://snipcart.com/)
* Um sistema de blogs usando [jekyll](https://jekyllrb.com/) ou [hexo](https://hexo.io/)

Você pode [usar o Google Drive como ‘base de dados’ para uma aplicação pequena usando o Sheetsu](http://jotateles.com.br/javascript/2015/10/25/transforme-suas-planilhas-do-google-em-api-com-sheetsu.html).
 
Você pode ainda criar uma api própria raspando dados de um site (ou consumindo outra api) escrevendo apenas javascript e usando o [YQL](https://developer.yahoo.com/yql/)! 

Não sei você mas eu acho isso [#legal #bemloco #empolgante](https://www.youtube.com/watch?v=Jp0apIj2AeU) :D

## Conclusão

Essas tendências todas não decretam, é claro, a morte do back-end, muito pelo contrário, a especialização do front-end traz resultados positivos para quem trabalha exclusivamente no back.

Os desenvolvedores front-end são o elo entre o design e o código e tem seu trabalho intimamente relacionado ao trabalho de designers e desenvolvedores back-end sem substituir nenhuma das duas funções.

Minha aposta é que a especialização do front-end deve continuar e a busca por bons desenvolvedores front-end deve se tornar cada vez maior, tanto para mercado como para projetos open source.

E se você teve a coragem de ler até aqui e se animou a entender mais sobre o mundo front-end, tenho uma boa notícia para você: a web precisa de front-enders! 

Se você se interessou mas se incomodou em algum momento com termos que não conhece, não tem problema, na maioria das tecnologias citadas eu sou mais um entusiasta do que um especialista.

Minha dica para você é que vá estudando um pouquinho de cada vez e sempre acompanhando as novidades do [Raio frontendizador](http://jotateles.com.br), é claro.

Abraços, frontaiada!
