---
layout: post
title: Transforme suas planilhas do Google em API com Sheetsu em 3 passos
category: 'javascript'
published: True
image: "/images/posts/sheetsu/sheetsu-printscreen.png"

---

Recentemente, navegando pelo Product Hunt encontrei um serviço com uma proposta bem simples e interessante chamado Sheetsu.

A proposta do Sheetsu é transformar planilhas do Google em endpoints que retornam json, esses endpoints podem receber GET para pegar os dados da planilha ou POST para inserir novas linhas em uma planilha. Legal, né?

Para exemplificar o uso do Sheetsu criei uma planilha no Google Drive com ideias de post para o blog com esses dados iniciais.

| ideia                                      | categoria  |
|--------------------------------------------|------------|
| Aprenda a utilizar a técnica do svg symbol | svg        |
| Snippets de angularjs para Sublime Text    | javascript |

A ideia é permitir que usuários que nem sabem que a planilha existe possam inserir novos dados na minha planilha e verificar as ideias existentes.

## 1. Crie sua API

A primeira coisa que fiz depois de criar minha planilha foi ir até o [Sheetsu](https://sheetsu.com) e inserir a url da [minha planilha do Google Drive](https://docs.google.com/spreadsheets/d/1ZhV77UEhpQeRytrngCCjqN4rEyVqGo0JG70WpphbyE4/edit#gid=0) no campo indicado. 

O serviço então transformou minha planilha em um endpoint json com a seguinte url [https://sheetsu.com/apis/9a70b9b9 - veja o json retornado](https://sheetsu.com/apis/9a70b9b9).

Agora vou mostrar como pegar os dados da planilha e como inserir novas linhas na planilha com javascript.

## 2. Buscando dados da planilha com GET

> Atenção: Para finalidade de explicação vou utilizar a biblioteca [jQuery](https://github.com/jquery/jquery) nesses exemplos, se você copiar e colar esse código em algum lugar, lembre de copiar também o jQuery.

Abra o console do seu navegador e cole esse exemplo:

    $.ajax({
        type: "GET",
        url: 'https://sheetsu.com/apis/9a70b9b9',
        success: processarDadosPlanilha
    });
    // Função ajax que será chamada quando os dados forem recebidos do Sheetsu
    // Caso a requisição tenha ocorrido com sucesso, faça:
    function processarDadosPlanilha(data){
        console.table(data.result);            
    }

Você deverá ver uma tabela com os dados da planilha. 
O segredo do exemplo está todo na segunda linha, isto é, para receber os dados do Sheetsu basta fazer um GET para a url da sua API.

## 3. Inserindo dados na planilha com POST

Abra o console do seu navegador e cole esse exemplo:

    $.ajax({
        type: "POST",
        url: 'https://sheetsu.com/apis/9a70b9b9',
        data: novaLinha,
        success: processarDadosPlanilha
    });
    
    var novaLinha = {
        ideia: 'INSIRA AQUI SUA IDEIA',
        categoria: 'exemplo'
    };    
    
    // Função ajax que será chamada quando os dados forem recebidos do Sheetsu
    // Caso a requisição tenha ocorrido com sucesso, faça:
    function processarDadosPlanilha(data){
        console.log('Dados inseridos com sucesso');
    }

Para inserir uma nova linha numa planilha, basta fazer um POST e passar um objeto javascript como 'data' da requisição. Nesse caso, nosso objeto precisa ter as chaves 'ideia' e 'categoria'.

## Conclusões

Sheetsu se mostrou um serviço bacana que vale a pena dar uma olhada para implementações simples, criação de MVP e projetos pequenos como [afirmado pelo próprio criador do Sheetsu Michael Oblak](https://www.producthunt.com/tech/sheetsu). Nada de substituir o backend da sua aplicação por Sheetsu, ok? :)

Eu, por exemplo, uso o Sheetsu para atualizar [esse repositório com links de SEO](https://github.com/teles/awesome-seo) utilizando uma planilha do Google Drive, mas não é difícil imaginar outras utilidades para o serviço, como:

* Aplicativo de todo list;
* Página de administração para permitir edição de conteúdo de um site;
* Exemplo didático focado em GET e POST;
* Criar formulários, lista de links, agenda de contatos, etc.

Enfim, bacanudo esse [Sheetsu](https://sheetsu.com)! Fica a dica :)

### Observações

Inicialmente eu estava usando a biblioteca [qwest](https://github.com/pyrsmk/qwest) para fazer as requisições ajax dos exemplos, mas acabei trocando-a por jQuery.

**Motivo**: Com qwest eu teria que configurar o XDomainRequest do request para permitir que meu site http fizesse uma requisição ao https do Sheetsu, então para não complicar coloquei o jQuery mesmo :P

Embora eu não use muito o jQuery é interessante ver como ele lida com a questão do ajax sem pedir que o usuário configure alguma coisa.

<script type="text/javascript" src='https://code.jquery.com/jquery-2.1.4.min.js'></script>
