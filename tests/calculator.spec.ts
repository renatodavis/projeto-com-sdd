import { Calculator } from '../src/core/Calculator';
import { CalculatorError } from '../src/core/types';

describe('Calculator Engine', () => {
  let calculator: Calculator;

  beforeEach(() => {
    // Inicializa uma nova instância antes de cada teste
    calculator = new Calculator();
  });

  describe('Soma (add)', () => {
    it('deve somar dois números positivos corretamente (2 + 2 = 4)', () => {
      expect(calculator.add(2, 2)).toBe(4);
    });

    it('deve somar corretamente envolvendo números negativos', () => {
      expect(calculator.add(-5, 3)).toBe(-2);
      expect(calculator.add(-5, -5)).toBe(-10);
    });

    it('deve resolver o problema de precisão do ponto flutuante (0.1 + 0.2 = 0.3)', () => {
      expect(calculator.add(0.1, 0.2)).toBe(0.3);
    });
  });

  describe('Subtração (subtract)', () => {
    it('deve subtrair um número de outro (10 - 5 = 5)', () => {
      expect(calculator.subtract(10, 5)).toBe(5);
    });

    it('deve resolver o problema de precisão ao subtrair (0.3 - 0.1 = 0.2)', () => {
      expect(calculator.subtract(0.3, 0.1)).toBe(0.2);
    });
  });

  describe('Multiplicação (multiply)', () => {
    it('deve multiplicar dois números (3 * 3 = 9)', () => {
      expect(calculator.multiply(3, 3)).toBe(9);
    });

    it('deve resultar em zero quando multiplicado por zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
      expect(calculator.multiply(0, 10)).toBe(0);
    });
  });

  describe('Divisão (divide)', () => {
    it('deve dividir um número por outro (10 / 2 = 5)', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('deve lançar um erro explícito ao tentar dividir por zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow(CalculatorError);
      expect(() => calculator.divide(10, 0)).toThrow('Não é possível realizar divisão por zero.');
    });
  });

  describe('Tratamento de Entradas Inválidas (Edge Cases Runtime)', () => {
    it('deve lançar erro se a entrada for um valor não-numérico (ex: null, string)', () => {
      // Ignorando o TypeScript (ts-ignore) para simular consumo do código compilado em JS puro
      // @ts-ignore
      expect(() => calculator.add('2', 2)).toThrow(CalculatorError);
      // @ts-ignore
      expect(() => calculator.multiply(5, null)).toThrow(CalculatorError);
    });

    it('deve lançar erro se a entrada for NaN (Not a Number)', () => {
      expect(() => calculator.subtract(NaN, 5)).toThrow(CalculatorError);
    });
  });
});