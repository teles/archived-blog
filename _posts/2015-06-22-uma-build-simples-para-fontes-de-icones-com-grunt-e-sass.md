---
layout: post
title: Uma build simples e automatizada para fonte de ícones com grunt e sass.
categories: []
published: False
---

É comum muitos projetos web possuírem sua própria fonte de ícones utilizando a técnica de font face, suportada desde o IE8 (http://caniuse.com/#feat=fontface). 
E se o seu projeto web precisa de ícones próprios e não pode usar sets de ícones já prontos, você vai precisar gerar seus arquivos de fonte a partir de ícones em formato svg.
Você pode fazer isso da maneira que considero mais trabalhosa, e utilizar um gerador online de fontes como o IcoMoon (https://icomoon.io/app) ou automatizar esse processo utilizando o grunt e sass.

Automatizar esse processo irá trazer vários benefícios para seu projeto, vamos por a mão na massa. Você só vai precisar de um projeto rodando grunt e sass.

### 1. Instale o Grunt webfont https://github.com/sapegin/grunt-webfont
Dentro da raiz do seu projeto rode o comando:

	$ npm install grunt-webfont --save-dev

Isso irá incluir a task do webfont no seu packages.json.

### 2. Crie a task grunt webfont.
Adicione uma task webfont ao seu Gruntfile.js. Para fins didáticos vou usar aqui trechos de código do repositório desse blog.

	webfont: {
      icons: {
        src: 'fonts/raicons/glifos/*.svg',
        dest: 'fonts',
        destCss : '_sass/helpers',
        options: {
          engine: 'node',
          font: 'raicons',
          hashes: false,
          htmlDemo: false,
          ligature: false,
          stylesheet: 'scss',
          template: 'fonts/raicons/templates/raicons-template.css',
          templateOptions: {
            classPrefix: 'raicon-',
            baseClass: 'raicon'
          }
        }
      }
    },


#### Explicação dos parâmetros (pule esse ponto se quiser):

* src: url do diretório de destino onde ficarão os arquivos svg dos seus ícones;
* dest: url do diretório onde ficarão os arquivos gerados da sua fonte (ttf, otf, woff, svg. eot);
* destCss: url do diretório onde ficará o arquivo scss	do seu font face;

#### Options 
* engine: mantenha 'node' para usar o node como gerador de fontes;
* font: nome da sua fonte, é o que vai ser usado no seu font-family;
* hashes: parâmetro booleano, se for deixado como true, coloca um hash no final do nome dos seus arquivos de fonte para evitar o cache do navegador;
* htmlDemo: se deixado como true permite a criação de um arquivo html de exemplo para sua fonte;
* stylesheet: recebe o nome do pre-processador que será usado, no nosso caso 'scss';
* template: url do arquivo .css 

#### templateOptions
* classPrefix: prefixo que será usado nas classes css dos seus ícones, 
* baseClass: 

### 3. Criando seu template .css
O template .css é o arquivo que será lido pela task webfont para gerar o arquivo .scss que será importado no seu projeto. O interessante, é que embora o arquivo de template obrigatoriamente precise ter a extensão .css ele aceita qualquer código, inclusive scss e um pouco de node.

	// ##Raicons

	$font-face-folder: '../fonts';

	@font-face {
	    font-family: "Raicons";
	    src: url("#{$font-face-folder}/raicons.eot"); /* IE9 Compat Modes */
	    src: url("#{$font-face-folder}/raicons.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
	        url("#{$font-face-folder}/raicons.woff") format("woff"), /* Modern Browsers */
	        url("#{$font-face-folder}/raicons.ttf")  format("truetype"), /* Safari, Android, iOS */
	        url("#{$font-face-folder}/raicons.svg#raicons") format("svg"); /* Legacy iOS */
	}


	$raicons-default-size: 18px;

	*[class^='raicon-'],
	*[class*=' raicon-'] {
	    font-weight: normal;
	    font-style: normal;
	    font-size: $raicons-default-size;
	    speak: none;
	    text-decoration: inherit;
	    text-transform: none;
	    text-rendering: optimizeLegibility;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    line-height: inherit;
		font-family: "Raicons";
	    display: inline-block;	
	}

	//   # Lista dos glifos/ícones por unicode
	<% for (var glyphIdx = 0; glyphIdx < glyphs.length; glyphIdx++) { %>
	$<%= classPrefix %><%= glyphs[glyphIdx] %>: "\<%= codepoints[glyphIdx] %>";<% } %>

	// Classes 
	<% for (var glyphIdx = 0; glyphIdx < glyphs.length; glyphIdx++) { %>
	.<%= classPrefix %><%= glyphs[glyphIdx] %>:before { content: $<%= classPrefix %><%= glyphs[glyphIdx] %>;}<% } %>

Perceba que nesse arquivo eu usei um mixin para criação do @font-face, definí um seletor para todas as classes 'raicon-[QUAlQUER-COISA]' e um criei um loop para gerar variáveis e classes css para cada um dos ícones.

### 4. Rode a task e verifique que os arquivos foram criados.
Rode a task
	$ grunt webfont
É de se esperar que sejam gerados arquivos .eot, .ttf e .woff dentro do diretório definido no parâmetro *dest* no seu *Gruntfile.js*, também deve ser gerado um arquivo .scss dentro do diretório definido no parâmetro *destCss*.

### 5. Preparando seus arquivos svg de ícones e adicionando novos ícones
Os arquivos de svg dos seus ícones devem ter algumas características.

### 6. Adicionando o webfont ao seu grunt watch
