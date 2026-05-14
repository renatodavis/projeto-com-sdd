"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

/**
 * Landing Page (Página Inicial).
 * Utiliza Framer Motion para animações de entrada otimizadas e sem impacto no LCP.
 */
export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Construindo o futuro com o <span className="text-primary">Projeto SDD</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Uma interface moderna, performática e altamente escalável. Focada em acessibilidade e na melhor experiência para o usuário.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Button size="lg" className="w-full sm:w-auto">Começar Agora</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Documentação</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full border-border/50 bg-background/50 backdrop-blur">
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Alta Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Otimizado para carregar em menos de 2 segundos. SSR e SSG garantem que seus usuários nunca esperem.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-border/50 bg-background/50 backdrop-blur">
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Responsividade Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Acesse de qualquer dispositivo sem perda de funcionalidade. Layout perfeitamente adaptável.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-border/50 bg-background/50 backdrop-blur">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Acessibilidade & Segurança</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Conformidade com WCAG 2.1 e proteção contra vulnerabilidades XSS garantidas desde a base.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}