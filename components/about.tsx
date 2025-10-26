import { Card } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export function About() {
  return (
    <section id="nosotros" className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#FCEA10]">Nosotros</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprometidos con la excelencia en ingeniería eléctrica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#FCEA10]">Visión</h3>
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed" style={{ textAlign: "justify" }}>
                    Crecer, desarrollando sus procesos y avanzando en su reconocimiento regional
                    y nacional, de la mano de sus clientes.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#FCEA10]">Misión</h3>
                  <div className="w-12 h-1 bg-accent rounded-full"></div>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed" style={{ textAlign: "justify" }}>
                Consultoría y ejecución de proyectos de ingeniería eléctrica y sus actividades
                conexas cumpliendo las expectativas del cliente, acatando la normativa y las
                leyes vigentes.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
