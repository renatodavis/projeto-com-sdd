"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

/**
 * Error Boundary Global (Padrão Next.js).
 * Captura exceções em tempo de execução para evitar tela branca (crash) na aplicação.
 */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    // Aqui seria ideal logar o erro em um serviço como Sentry ou Datadog
    console.error("Aplicação encontrou um erro:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-4">
      <AlertCircle className="h-16 w-16 text-destructive" />
      <h2 className="text-2xl font-bold text-foreground">Ops! Algo deu errado.</h2>
      <p className="text-muted-foreground max-w-md">
        Um erro inesperado ocorreu. Nossa equipe técnica já foi notificada.
      </p>
      <Button 
        onClick={() => reset()} 
        variant="default"
        className="mt-4"
      >
        Tentar Novamente
      </Button>
    </div>
  )
}