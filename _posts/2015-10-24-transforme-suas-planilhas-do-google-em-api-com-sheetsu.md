---
layout: post
title: Transforme suas planilhas do Google em API com Sheetsu
categories: []
published: False

---

Recentemente, navegando pelo Product Hunt encontrei um serviço com uma proposta bem simples e interessante chamado Sheetsu.

A proposta do Sheetsu é transformar planilhas do Google em endpoints que retornam json, esses endpoints podem receber GET para pegar os dados da planilha ou POST para inserir novas linhas em uma planilha. Legal, né?

Para exemplificar o uso do Sheetsu criei uma planilha no Google Drive com ideias de post para o blog com esses dados iniciais.

| ideia                                      | categoria  |
|--------------------------------------------|------------|
| Aprenda a utilizar a técnica do svg symbol | svg        |
| Snippets de angularjs para Sublime Text    | javascript |

A ideia é permitir que usuários que nem sabem que a planilha existe possam inserir novos dados na minha planilha e verificar as ideias existentes.

## Buscando dados no Sheetsu com GET

A primeira coisa que fiz depois de criar minha planilha foi ir até o[Sheetsu](https://sheetsu.com) e criar minha planilha com o endereço [https://sheetsu.com/apis/9a70b9b9 - veja o json retornado](https://sheetsu.com/apis/9a70b9b9).

Depois criei um trecho de código javascript para lidar com get e post.


O próprio criador do Sheetsu, [Michael Oblak explica que o Sheetsu se propõe a tarefas menores](https://www.producthunt.com/tech/sheetsu) e mais rápidas como criação de formulários, MVPs ou pequenos projetos.


