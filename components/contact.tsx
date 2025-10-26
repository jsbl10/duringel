import { Card } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Contacto
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {
                "¿Tiene un proyecto en mente? Contáctenos para una consultoría profesional"
              }
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Teléfono</h3>
                  <a
                    href="https://wa.me/573114110100?text=Hola%20Duringel,%20quisiera%20más%20información%20sobre%20sus%20servicios%20de%20ingeniería%20eléctrica."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    311 411 0100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=contacto@duringel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    contacto@duringel.com
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
