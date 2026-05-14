/**
 * Utilitário para corrigir a precisão de ponto flutuante do padrão IEEE 754.
 * Exemplo: 0.1 + 0.2 em JS nativo resulta em 0.30000000000000004.
 * Esta função arredonda para até 10 casas decimais e remove os zeros à direita.
 * 
 * @param value O valor numérico a ser formatado.
 * @returns O número com a precisão corrigida.
 */
export function formatFloatPrecision(value: number): number {
  // Converte para string com 10 casas decimais e depois volta para float,
  // o que remove os zeros desnecessários automaticamente.
  return parseFloat(value.toFixed(10));
}

/**
 * Validador de entrada em tempo de execução.
 * Garante que os valores passados sejam estritamente números, 
 * protegendo o motor caso seja consumido por código JavaScript puro.
 * 
 * @param values Array de valores a serem verificados.
 * @throws {Error} Se algum valor não for um número finito.
 */
export function validateNumbers(...values: any[]): void {
  for (const val of values) {
    if (typeof val !== 'number' || !Number.isFinite(val) || Number.isNaN(val)) {
      throw new Error(`Entrada inválida: o valor '${val}' não é um número válido.`);
    }
  }
}