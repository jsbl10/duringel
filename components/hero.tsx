import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/projects/Logo.png"
              alt="Duringel Ingeniería Eléctrica"
              width={400}
              height={200}
              className="w-auto h-32 md:h-40"
              priority
            />
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {
              "Soluciones profesionales en diseño, consultoría y ejecución de proyectos eléctricos de media y baja tensión"
            }
          </p>
        </div>
      </div>
    </section>
  )
}
