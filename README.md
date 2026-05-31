# Serviço de Pagamento

Projeto desenvolvido em JavaScript utilizando Node.js, Mocha e Assert.

## Descrição

Este projeto implementa uma classe chamada `ServicoDePagamento` responsável por:

- Realizar pagamentos
- Armazenar pagamentos em uma lista
- Consultar o último pagamento realizado
- Categorizar pagamentos como:
  - `cara` quando o valor for maior que 100
  - `padrao` quando o valor for menor ou igual a 100

## Estrutura do Projeto

```text
servico-pagamento/
├── src/
│   └── ServicoDePagamento.js
├── test/
│   └── ServicoDePagamento.test.js
├── package.json
└── README.md
```

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Mocha
- Assert

## Executando os Testes

Instalar dependências:

```bash
npm install
```

Executar testes:

```bash
npm test
```

## Testes Implementados

- Pagamento com categoria `cara`
- Pagamento com categoria `padrao`
- Consulta do último pagamento realizado
- Consulta quando não existem pagamentos

## Autor

Patrícia Moura