import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * Página 404 Personalizada.
 * Fornece um feedback amigável para rotas inexistentes, mantendo o usuário engajado.
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-7xl font-extrabold text-primary tracking-tighter">404</h2>
      <h3 className="text-2xl font-semibold mt-4 text-foreground">Página não encontrada</h3>
      <p className="text-muted-foreground mt-2 max-w-md">
        Desculpe, não conseguimos encontrar a página que você está procurando. Ela pode ter sido movida ou deletada.
      </p>
      <div className="mt-8">
        <Button asChild size="lg">
          <Link href="/">
            Voltar para o Início
          </Link>
        </Button>
      </div>
    </div>
  )
}