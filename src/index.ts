import { Calculator } from './core/Calculator';
import { CalculatorError } from './core/types';

/**
 * Ponto de entrada (Entry point) do projeto.
 * Serve como um pequeno script de demonstração da biblioteca em funcionamento no console.
 */
function main() {
  console.log('=== Calculadora Básica Inicializada ===\n');

  const calc = new Calculator();

  try {
    console.log('Soma (2 + 2):', calc.add(2, 2));
    
    console.log('Subtração (10 - 5):', calc.subtract(10, 5));
    
    console.log('Multiplicação (3 * 3):', calc.multiply(3, 3));
    
    console.log('Divisão (10 / 2):', calc.divide(10, 2));
    
    // Demonstração da correção de precisão decimal do IEEE 754
    console.log('Precisão (0.1 + 0.2):', calc.add(0.1, 0.2));

    // Demonstração de erro (Divisão por zero)
    console.log('\nTentando dividir por zero (5 / 0)...');
    console.log(calc.divide(5, 0));

  } catch (error) {
    if (error instanceof CalculatorError) {
      console.error('Erro capturado com sucesso:', error.message);
    } else {
      console.error('Erro inesperado:', error);
    }
  }
}

// Executa a função principal
main();