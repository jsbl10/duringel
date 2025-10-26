"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/projects/Logo.png"
              alt="Duringel Ingeniería Eléctrica"
              width={50}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
