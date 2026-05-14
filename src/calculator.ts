```typescript
import { ICalculator } from './types';
import { validateDivisionByZero } from './utils/validator';

/**
 * Classe principal da Calculadora contendo a lógica de negócios e os cálculos puros.
 */
export class Calculator implements ICalculator {
    
    /**
     * Soma dois números.
     */
    public add(a: number, b: number): number {
        return a + b;
    }

    /**
     * Subtrai o segundo número do primeiro.
     */
    public subtract(a: number, b: number): number {
        return a - b;
    }

    /**
     * Multiplica dois números.
     */
    public multiply(a: number, b: number): number {
        return a * b;
    }

    /**
     * Divide o primeiro número pelo segundo.
     * Inclui validação de borda para evitar divisão por zero.
     */
    public divide(a: number, b: number): number {
        validateDivisionByZero(b);
        return a / b;
    }
}
```