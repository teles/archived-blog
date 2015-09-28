---
layout: post
title: Usando o surge.sh para hospedar projetos de front end gratuitamente.
categories: [dica]
published: True
image: "/images/posts/surge/surge-capa.png"
---

Galera, recentemente estava com um problema para subir arquivos estáticos para a internet gratuitamente e encontrei uma ferramenta excelente para essa finalidade.

O [surge.sh](http://surge.sh) é um serviço online para hospedagem de conteúdo estático. Isso é, você pode hospedar seus arquivos diretamente no surge.sh sem pagar nada por isso.

O ponto forte do surge.sh é a facilidade para subir seus arquivos através de um único comando! 

Vamos ver como funciona?

### 1. Instale o pacote do surge

Rode o seguinte comando para instalar o surge, lembre-se de ter o node instalado na sua máquina!

	$ npm install --global surge


### 2. Envie seus arquivos para o surge.sh
Dentro do diretório que deseja enviar rode o comando.

    $ surge

Pronto!

A primeira vez que você rodar o comando o surge deve te pedir para cadastrar um email e senha.

![surge.sh rodando em terminal ubuntu](/images/posts/surge/surge-terminal.png)

Não esqueça também de definir a url em que você quer que seu projeto fique disponível.

O surge.sh irá salvar todos os arquivos do seu repositório na url que você especificou, e no futuro, você pode sobrescrever o conteúdo desses arquivos rodando novamente o comando **surge**.

**Dica:** para evitar precisar digitar sempre a url surge.sh onde você irá hospedar seus arquivos, basta criar um arquivo chamado CNAME na raiz do seu repositório. O conteúdo desse arquivo CNAME deve ser sua url.surge.sh.

Exemplo: [http://yql-tables.surge.sh/CNAME](http://yql-tables.surge.sh/CNAME) 

### 3. Quando usar o surge?

Sabemos que existem outras maneiras de um front ender esperto publicar seu projeto como o github pages, no entanto, achei o surge vantajoso nas seguintes situações.

**Se você não pode usar o github pages** por algum motivo, porquê não quer perder tempo criando um repositório ou porquê não precisa de controle de versão.

**Se você precisa de um cdn mas o github não expõe seus arquivos com content-type correto.** Se você tentar usar o github como cdn logo vai notar alguns problemas, pois independente do tipo de arquivo que está no seu repositório, a url do arquivo no formato raw é sempre a url de um arquivo de texto. Ou seja, você pode ter problemas colocando um js, html, xml ou css aí, pois eles serão lidos como arquivos de texto.

O [rawgit](http://rawgit.com) resolve bem esse problema, com o contratempo de gerar um nome muito grande de arquivo para você usar.

Por exemplo: Precisei subir alguns arquivos xml de [um repositório github](http://github.com/teles/yql-tables) com content-type correto e a url do arquivo no rawgit foi:

[https://rawgit.com/teles/yql-tables/061ab5f7410927bf002fae84a66feb6948171d4b/carrosaojose.com.br/revenda.xml](https://rawgit.com/teles/yql-tables/061ab5f7410927bf002fae84a66feb6948171d4b/carrosaojose.com.br/revenda.xml)

Subí o mesmo arquivo para o surge.sh e a url foi:

[http://yql-tables.surge.sh/carrosaojose.com.br/revenda.xml](http://yql-tables.surge.sh/carrosaojose.com.br/revenda.xml)

Bem mais prático, né?

Abraços, frontaiada!

