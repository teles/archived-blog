---
layout: post
title: 10 dicas rápidas para quem usa chrome no desenvolvimento front end.
categories: [dica]
published: True
image: "https://sc-cdn.scaleengine.net/i/ffdac48fc3a225b884128da32b2db6ae.png"
---

Olá, frontaiada!

Sabendo que o devtools é bastante usando hoje para desenvolvimento web, separei 11 dicas que uso no meu dia a dia quando estou desenvolvendo com chr
ome ou chromium. Lá vão elas:

## 1 . Use o `console.table()` para logar objetos javascript em formato de tabela.

Se você tem um vetor cheio de objetos para logar, com certeza seria mais prático logar esses objetos em um formato de tabela, certo?

Fazer isso é fácil! Use o comando `console.table()` passando seu vetor como argumento e seja feliz.

### Exemplo `console.table(sites)` :

```
function Site(nome, url){
    this.nome = nome;
    this.url = url;  
}
var sites = [];
var siteDoTeles = new Site('Raio Frontendizador','http://jotateles.com.br');
var github = new Site('Github','https://www;github.com');
var siteDoWillian = new Site('Willian Ribeiro','http://willianribeiro.com.br');
sites.push(siteDoTeles, github, siteDoWillian);

console.table(sites);
```

![Exemplo](https://sc-cdn.scaleengine.net/i/ffdac48fc3a225b884128da32b2db6ae.png)

## 2. Buscar por seletores css ou xpath na aba 'Elements'

Normalmente procuramos na aba 'Elements' por strings visíveis na tela ou nome de elementos html, mas o que nem todo mundo sabe é que dá para buscar por seletores css e xpath também!

## Exemplo buscando por seletor css:
Encontre os links desse post procurando pelo seletor css `.raio-body .raio-post a`.

![Exemplo](https://sc-cdn.scaleengine.net/i/bcc20c42449d451e39a724b9447cb150.png)

## Encontre buscando por seletor xpath:

Encontre as datas dos posts do blog buscando por `//div[@class='raio-post-info']//span[@class='raio-post-date']/text()`:

![Exemplo](https://sc-cdn.scaleengine.net/i/2e150a77b0d54fed794c29b14f86442f.png)

## 3. Logue por seletores xpath direto na aba 'Console' usando a função $x():

Uma boa alternativa para logar elementos do DOM no console é utilizar a função $x();
A função $x(), recebe dois parametros, o primeiro é o seletor xpath e o segundo o contexto onde ele será buscado (opcional); 

### Exemplo de uso $x('//article')
Encontre os artigos do blog na aba console buscando por `$x('//article')`:

![Article](https://sc-cdn.scaleengine.net/i/2b03ba36860bb8136e43d1d3eaf82998.png)

Isso mesmo, esse é mais um motivo para você não precisar do jQuery para selecionar elementos do dom facilmente no console.

## 4 . Exiba as chamadas ajax no 'Console' em tempo real

Essa é muito útil!

Logue as chamadas ajax em tempo real no seu console apenas checando uma opção nas preferências do seu chrome:

1.  Clique em 'settings';
2.  Desça até 'General > Console';
3.  Cheque Log XMLHTTPRequests;
4.  Pronto, olha como fica:

![Assim](https://sc-cdn.scaleengine.net/i/9bff157c74c1e2b5b55a2fbe330e9f59.png)
![Fica](https://sc-cdn.scaleengine.net/i/229144a80649a0950248ee05c4e4b8cd.png)
![Isso](https://sc-cdn.scaleengine.net/i/f71c8d7fc9e24f91b36521e9014ef52e.png)

## 5 . Descubra vários formatos de uma cor na aba Elements

Essa é bastante conhecida. Quando você ver uma cor na aba 'Styles' dentro de 'Elements', clique na cor segurando a tecla shift. Você vai alternar entre as diferentes formas de escrever essa cor, RGB, hexadecimal, HSL, nome web (caso exista).

![COR](http://cdn.tutorialzine.com/wp-content/uploads/2015/03/14.ColorFormat.gif)

## 6. Para quem gosta do Sublime. Atalho CTRL +P 'Go to anything':

Acostumado com o 'ctrl + p' do sublime para abrir um arquivo novo, né?
Use o mesmo 'ctrl + p' na aba 'Source' para pular para um dos arquivos carregados na sua página atual. 

Use 'ctrl + sift + p' para buscar por um seletor css ou função javascript!

![Vai](https://d262ilb51hltx0.cloudfront.net/max/800/1*v595nTQXCOB_FOzmaYWtrg.gif)

## 7. Outra para 'sublimeiros'. Cursores múltiplos na aba 'Sources':

Essa é bem simples. Você pode fazer múltiplas seleções na aba 'Sources', simplesmente deixando o 'ctrl' pressionado enquant clica nas seleções desejadas.

![Exemplo](https://d262ilb51hltx0.cloudfront.net/max/800/1*4svsSOFNREo3PYlqAIHMcw.gif)

## 8. Simule pseudo-classes css na aba 'Elements'.

Não sabe como testar se a propriedade que você escreveu para o estado `:hover` de um elemento ficou legal sem mover seu mouse para longe do elemento?

Fácil. Na aba 'Styles' dentro de 'Elements' existe uma opção para simular esses estados.

![Exemplo](http://georgik.sinusgear.com/wp-content/uploads/google-chrome-dev-hover.png)

## 9. Expandir seletores css declarados como *short hand*

Na aba 'Elements', em 'Styles', clique na setinha antes do valor de um atributo css declarado como shorthand para expandir sua visualização e ver todas os valores de atributos que foram definidos internamente na declaração.


## 10. 'Copy as cURL' dentro da aba 'Networks'.

Bem interessante para testar as chamadas que estão sendo feitas na aba 'Networks'.

Na aba 'Networks' selecione um item, clique com o botão direito e depois em 'Copy as cURL'. Você copiará para área de transferência algo do tipo:

    curl 'http://jotateles.com.br/jmveiculos/js/lib/angular.min.js' -H 'Pragma: no-cache' -H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4,nb;q=0.2,fr;q=0.2' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36' -H 'Accept: */*' -H 'Referer: http://jotateles.com.br/jmveiculos/' -H 'Cookie: _hjUserId=daf385ee-892f-480e-81e7-10ee5c9f8aee; _hjIncludedInSample=1' -H 'Connection: keep-alive' -H 'Cache-Control: no-cache' --compressed

Que pode ser usado direto no console do seu sistema operacional para fazer uma chamadas curl para o arquivo selecionado usando todas as configurações do seu navegador!

![Exemplo](https://lh6.googleusercontent.com/-vGCP6Wrln1w/Ud2vAeCookI/AAAAAAAAA2w/Fc0qCO7bPew/w596-h398-no/copy-as-curl.gif)

## Quer mais dicas, né? Veja as fontes aqui:

Bem, utilizo várias dessas dicas no meu dia a dia a algum tempo, algumas a mais de ano, outras mais recentemente descobrí em alguns sites, como esses que cito abaixo:

[Google Developes Web Updates Tips](https://developers.google.com/web/updates/tip)
[Devtools tips for sublime text users](https://medium.com/google-developers/devtools-tips-for-sublime-text-users-cdd559ee80f8)
[DevTools Tips](http://devtoolstips.com/)
