import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

// Otimização de fonte usando next/font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// SEO e Metadados globais
export const metadata: Metadata = {
  title: "Projeto SDD | Moderno e Escalável",
  description: "Apresentação principal do ecossistema Projeto SDD construído com Next.js e Tailwind CSS.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Software Design Document"],
  authors: [{ name: "Engenheiro Principal" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://projetosdd.com.br",
    title: "Projeto SDD | Plataforma Moderna",
    description: "Excelente experiência de usuário e alta performance.",
  },
}

/**
 * Layout Base da Aplicação (RootLayout).
 * Configura o HTML, Body, Fontes, Provedores de Estado e Layout padrão (Navbar + Main + Footer).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}