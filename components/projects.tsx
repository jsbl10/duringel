"use client";

import { Card } from "@/components/ui/card";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "Diseño e implementación de Alumbrado Navideño",
    description:
      "Proyecto ejecutado para Egetsa S.A. E.S.P.",
    location: "Guamo, Tolima",
    image: [
      "/projects/project_1/Im_3.jpg",
      "/projects/project_1/Im_4.jpg",
      "/projects/project_1/Im_2.jpg",
    ],
  },
  {
    title: "Urbanismo Parque Deportivo",
    description: "Proyecto ejecutado para Promciviles",
    location: "Ibagué, Tolima",
    image: [
      "/projects/project_2/P2_Im_2.jpeg",
      "/projects/project_2/P2_Im_3.jpeg",
      "/projects/project_2/P2_Im_4.jpg",
      "/projects/project_2/P2_Im_5.jpeg",
      "/projects/project_2/P2_Im_6.jpg",
    ],
  },
  {
    title: "Paradero Túnel de La Línea",
    description: "Proyecto ejecutado para Energyred",
    location: "Colombia",
    image: [
      "/projects/project_3/P3_Im_1.jpeg",
      "/projects/project_3/P3_Im_2.jpeg",
    ],
  },
];

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="proyectos" className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#FCEA10]">
              Proyectos Realizados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experiencia comprobada en proyectos eléctricos de diversa
              escala y complejidad
            </p>
          </div>

          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm shadow-lg"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="shrink-0 w-[90%] md:w-[500px] snap-center hover:shadow-xl transition-all"
                >
                  <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-muted">
                    {Array.isArray(project.image) ? (
                      <div className="relative w-full rounded-t-lg bg-muted">
                        <button
                          onClick={(e) => {
                            const container = e.currentTarget
                              .nextSibling as HTMLDivElement;
                            container.scrollBy({
                              left: -400,
                              behavior: "smooth",
                            });
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>

                        <div
                          className="flex overflow-x-auto gap-3 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                          style={{
                            overflowY: "hidden",
                            height: "auto",
                          }}
                        >
                          {project.image.map((img, i) => (
                            <div
                              key={i}
                              className="flex-none w-[450px] aspect-video relative snap-center"
                            >
                              <Image
                                src={img}
                                alt={`${project.title} ${i + 1}`}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 90vw, 500px"
                              />
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            const container = e.currentTarget
                              .previousSibling as HTMLDivElement;
                            container.scrollBy({
                              left: 400,
                              behavior: "smooth",
                            });
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 500px"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-balance text-[#FCEA10]">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </Card>
              ))}{" "}
              {/* <- aquí se cierra bien el map */}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm shadow-lg"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
