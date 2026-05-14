```typescript
/**
 * Tipos de operações suportadas pela calculadora.
 */
export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

/**
 * Interface que define o contrato da Calculadora.
 */
export interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}
```