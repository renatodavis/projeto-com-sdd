import { ICalculator, CalculatorError } from './types';
import { formatFloatPrecision, validateNumbers } from '../utils/formatter';

/**
 * Implementação do Motor de Cálculo.
 * Encapsula a lógica de negócio e o tratamento de casos de borda.
 */
export class Calculator implements ICalculator {
  
  /**
   * Soma dois números.
   */
  public add(a: number, b: number): number {
    this.validate(a, b);
    return formatFloatPrecision(a + b);
  }

  /**
   * Subtrai o segundo número do primeiro.
   */
  public subtract(a: number, b: number): number {
    this.validate(a, b);
    return formatFloatPrecision(a - b);
  }

  /**
   * Multiplica dois números.
   */
  public multiply(a: number, b: number): number {
    this.validate(a, b);
    return formatFloatPrecision(a * b);
  }

  /**
   * Divide o primeiro número pelo segundo.
   * Lança erro explícito em caso de divisão por zero.
   */
  public divide(a: number, b: number): number {
    this.validate(a, b);
    
    if (b === 0) {
      throw new CalculatorError('Não é possível realizar divisão por zero.');
    }
    
    return formatFloatPrecision(a / b);
  }

  /**
   * Valida as entradas delegando para o utilitário de formatação.
   * Centraliza o tratamento de erro de tipo em tempo de execução.
   */
  private validate(a: number, b: number): void {
    try {
      validateNumbers(a, b);
    } catch (error: any) {
      throw new CalculatorError(error.message);
    }
  }
}