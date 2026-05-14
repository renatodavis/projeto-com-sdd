```typescript
import { Calculator } from '../src/calculator';
import { parseAndValidateNumber, validateDivisionByZero } from '../src/utils/validator';

describe('Projeto Calculadora Básica - Testes Unitários', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('Operações Aritméticas Base', () => {
        test('Soma: 2 + 2 deve ser 4', () => {
            expect(calculator.add(2, 2)).toBe(4);
        });

        test('Subtração: 10 - 5 deve ser 5', () => {
            expect(calculator.subtract(10, 5)).toBe(5);
        });

        test('Multiplicação: 3 * 3 deve ser 9', () => {
            expect(calculator.multiply(3, 3)).toBe(9);
        });

        test('Divisão: 10 / 2 deve ser 5', () => {
            expect(calculator.divide(10, 2)).toBe(5);
        });
        
        test('Precisão Decimal: deve lidar com floats adequadamente', () => {
            expect(calculator.add(10.5, 2.5)).toBe(13);
            expect(calculator.divide(5, 2)).toBe(2.5);
        });
    });

    describe('Tratamento de Regras de Negócio e Exceções', () => {
        test('Erro de Divisão: 10 / 0 deve lançar erro "Não é possível dividir por zero"', () => {
            expect(() => calculator.divide(10, 0)).toThrow('Não é possível dividir por zero');
        });

        test('Validador de Divisão Direto: deve lançar erro ao validar zero', () => {
            expect(() => validateDivisionByZero(0)).toThrow('Não é possível dividir por zero');
            expect(() => validateDivisionByZero(1)).not.toThrow();
        });

        test('Input Não Numérico: deve lançar erro para entradas como "abc"', () => {
            expect(() => parseAndValidateNumber("abc")).toThrow('Entrada inválida: "abc" não é um número válido.');
        });

        test('Input Válido em String: deve converter para número com sucesso', () => {
            expect(parseAndValidateNumber("42.5")).toBe(42.5);
            expect(parseAndValidateNumber("-10")).toBe(-10);
        });
    });
});
```