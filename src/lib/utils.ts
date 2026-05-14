import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utilitário para mesclar classes do Tailwind CSS de forma segura.
 * Resolve conflitos de classes e permite condicionalismo elegante.
 * 
 * @param inputs - Array de classes ou objetos condicionais de classes.
 * @returns String contendo as classes mescladas e otimizadas.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}