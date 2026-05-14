/**
 * Definição da interface principal da Calculadora.
 * Segue o princípio da Inversão de Dependência (SOLID), permitindo
 * que outras partes do sistema dependam da abstração e não da implementação.
 */
export interface ICalculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
}

/**
 * Erro customizado para o domínio da Calculadora.
 * Permite identificar facilmente erros de regra de negócio em tempo de execução.
 */
export class CalculatorError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CalculatorError';
    
    // Restaura a cadeia de protótipos corretamente em TypeScript/ES6
    Object.setPrototypeOf(this, CalculatorError.prototype);
  }
}