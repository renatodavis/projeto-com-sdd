"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

/**
 * Provedor de Tema Global (Claro/Escuro).
 * Encapsula a aplicação para gerenciar a preferência de tema do usuário
 * evitando problemas de hidratação (hydration mismatch).
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}