# Projeto Calculadora Básica

Este projeto implementa um **Motor de Cálculo (Calculator Engine)** robusto, modular e com foco em alta qualidade de código, escrito em TypeScript. Foi desenvolvido seguindo os princípios SOLID e possui cobertura completa de testes.

## 🛠 Funcionalidades

- **Operações Básicas:** Soma, Subtração, Multiplicação e Divisão.
- **Tratamento de Ponto Flutuante:** Corrige automaticamente a imprecisão nativa do JavaScript (padrão IEEE 754), garantindo que operações como `0.1 + 0.2` resultem em `0.3`.
- **Prevenção de Erros:** Bloqueia divisões por zero com uma exceção personalizada (`CalculatorError`).
- **Segurança de Execução:** Valida tipos em tempo de execução para garantir que apenas números reais sejam processados, mesmo se a biblioteca for importada em um ambiente JavaScript sem tipagem.

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18+ recomendada)
- NPM ou Yarn

## 🚀 Instalação

1. Clone o repositório ou descompacte os arquivos.
2. Na raiz do projeto, instale as dependências:

```bash
npm install
```

## 🧪 Comandos Disponíveis

- **Executar Testes:**
  Roda a suíte de testes unitários escrita em Jest.
  ```bash
  npm run test
  ```

- **Verificação de Linter:**
  Analisa o código em busca de quebras de padrão e más práticas.
  ```bash
  npm run lint
  ```

- **Compilar o Projeto:**
  Transpila o código TypeScript da pasta `/src` para código JavaScript na pasta `/dist`.
  ```bash
  npm run build
  ```

- **Rodar a Aplicação (Demonstração):**
  Roda o script de demonstração do arquivo index. O código será compilado e executado.
  ```bash
  npm run build
  npm run start
  ```

## 📁 Arquitetura

O projeto foi organizado com o objetivo de separar a lógica do domínio principal dos scripts de interface. A abstração (`ICalculator`) permite que a implementação real mude sem quebrar o código que a consome, facilitando futuras extensões (ex: adição de cálculo de raízes, potências, etc).