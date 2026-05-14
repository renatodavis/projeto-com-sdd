```typescript
import { Calculator } from './calculator';
import { parseAndValidateNumber } from './utils/validator';
import { Operation } from './types';

/**
 * Função principal que processa a Interface de Linha de Comando (CLI).
 */
function main() {
    // Pega os argumentos da linha de comando, ignorando 'node' e o nome do arquivo.
    const args = process.argv.slice(2);

    if (args.length < 3) {
        console.error("Uso incorreto. Formato esperado:");
        console.error("npm start <operacao> <num1> <num2>");
        console.error("Operações disponíveis: add, subtract, multiply, divide");
        process.exit(1);
    }

    const operationName = args[0] as Operation;

    try {
        // Valida as entradas e trata pontos flutuantes de forma segura
        const num1 = parseAndValidateNumber(args[1]);
        const num2 = parseAndValidateNumber(args[2]);

        const calculator = new Calculator();
        let result: number;

        // Executa a operação apropriada
        switch (operationName) {
            case 'add':
                result = calculator.add(num1, num2);
                break;
            case 'subtract':
                result = calculator.subtract(num1, num2);
                break;
            case 'multiply':
                result = calculator.multiply(num1, num2);
                break;
            case 'divide':
                result = calculator.divide(num1, num2);
                break;
            default:
                throw new Error(`Operação "${operationName}" não reconhecida. Use: add, subtract, multiply, divide.`);
        }

        console.log(`Resultado: ${result}`);
        
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Erro: ${error.message}`);
        } else {
            console.error("Ocorreu um erro desconhecido.");
        }
        process.exit(1);
    }
}

// Inicializa o CLI
main();
```