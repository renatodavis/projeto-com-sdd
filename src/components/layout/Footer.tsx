import Link from "next/link"

/**
 * Rodapé da aplicação.
 * Contém links úteis, direitos autorais e design limpo.
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40 py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {currentYear} Projeto SDD. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/privacidade" className="hover:text-foreground transition-colors">
            Privacidade
          </Link>
          <Link href="/termos" className="hover:text-foreground transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  )
}