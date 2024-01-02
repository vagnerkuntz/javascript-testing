# Por que testar?

* Confiança ao refatorar
* Confiança ao incluir novas funcionalidades
* Confiança ao atualizar dependências
* Facilita a compreensão da implementação
* Funciona como documentação

# O que testar?

* Tudo o que fizer sentido testar!
- Devo deixar um comentário? Escreva um teste no lugar!

# Pirâmide de testes

Os tipos mais comuns de testes

* Unit Tests
* Integration Tests
* End to End (E2E) Tests

# Ferramentas

* Jest
    - É um test runner
    - Localiza os arquivos e executa os testes
    - Permite fazer mock e observar métodos em bibliotecas
    - Permite fazer assertions, tais como expect().toBe()

* Cypress
    - É um framework de testes End to End
    - Executa a aplicação no browser, como se fosse o usuário
    - Permite executar no Chrome, Firefox, Edge e Electron
    - Uma ferramenta completa, não precisa ser usada com Jest

# Bibliotecas que trabalham em conjunto

* Testing Library
    - É uma biblioteca 
    - Provê utilitários para montar componentes (React, Vue, Svelte...)
    - Oferece ferramentas de interagir com componentes como se fosse o usuário
    - Trabalha em conjunto com o Jest
    - Faz o mesmo papel do Enzyme e Vue-test-utils
    - Pode ser usada para substituí-las

* Enzyme
    - É uma biblioteca 
    - Provê utilitários para montar componentes React
    - Oferece ferramentas de interagir com componentes como se fosse o usuário
    - Permite manejar state e testar detalhes de implementação
    - Trabalha em conjunto com o Jest
    - Faz o mesmo papel da Testing Library
    - Pode ser usada para substituí-las

* Vue Test Utils
    - É uma biblioteca 
    - Provê utilitários para montar componentes Vue.js
    - Oferece ferramentas de interagir com componentes como se fosse o usuário
    - Permite manejar state e testar detalhes de implementação
    - Trabalha em conjunto com o Jest
    - Faz o mesmo papel da Testing Library
    - Pode ser usada para substituí-las

# CI/CD

O papel dos testes no deploy moderno
Os testes são integrados ao processo de Continuous Integration / Continuous Delivery e são fundamentais para que estes existam.

* Github Actions
* CircleCI

# TDD

Vantagens

* Melhora a implementação
* Facilita implementação mais simples
* Facilita a escrita dos testes
* Detalhes de implementação frescos na mente
* Menor tempo dedicado a bug fixing

Desafios

* Curva de aprendizado
* Maior tempo de desenvolvimento
* Difícil de vender ao time de produto
