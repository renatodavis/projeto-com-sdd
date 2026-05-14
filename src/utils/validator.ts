```typescript
/**
 * Converte a entrada (string ou número) para um número de ponto flutuante válido.
 * Lança um erro se a conversão falhar (Input Não Numérico).
 * 
 * @param value Valor inserido pelo usuário.
 * @returns O número convertido e validado.
 */
export function parseAndValidateNumber(value: string | number): number {
    const parsedValue = Number(value);
    
    if (isNaN(parsedValue)) {
        throw new Error(`Entrada inválida: "${value}" não é um número válido.`);
    }
    
    return parsedValue;
}

/**
 * Verifica se a operação pode gerar uma divisão por zero.
 * Lança uma exceção para impedir a execução.
 * 
 * @param divisor O número que será usado como divisor.
 */
export function validateDivisionByZero(divisor: number): void {
    if (divisor === 0) {
        throw new Error("Não é possível dividir por zero");
    }
}
```