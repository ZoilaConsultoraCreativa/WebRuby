import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Workshops de Comunicación Estratégica",
        description: "Talleres prácticos y a medida para dotar a los equipos de herramientas de comunicación que generan impacto, confianza y resultados.",
        icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
        title: "Coaching para Equipos de Liderazgo",
        description: "Procesos de acompañamiento para alinear al equipo directivo, mejorar la toma de decisiones y construir una cultura de feedback y accountability.",
        icon: <Building className="h-8 w-8 text-primary" />,
    },
    {
        title: "Programas de Liderazgo Femenino",
        description: "Iniciativas para potenciar el talento femenino dentro de la organización, abordando los desafíos específicos que enfrentan las mujeres en entornos masculinizados.",
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
    }
]

const caseStudies = [
  {
    company: "Empresa Minera Top 5",
    challenge: "El equipo de gerentas de área reportaba baja influencia en comités directivos y alta sobrecarga por dificultades para delegar efectivamente.",
    solution: "Se implementó un programa de 3 meses de coaching grupal enfocado en comunicación asertiva, negociación y liderazgo situacional.",
    result: "Aumento del 40% en la participación percibida de las líderes en reuniones. Mejora del 25% en los indicadores de clima del equipo a cargo.",
  },
  {
    company: "Banca de Inversión",
    challenge: "Falta de cohesión y confianza en un nuevo equipo de líderes, resultando en silos y retrasos en proyectos inter-área.",
    solution: "Serie de workshops basados en el modelo de Patrick Lencioni, complementado con coaching 1:1 para el director del área.",
    result: "Reducción de los tiempos de ciclo de proyectos en un 15%. El equipo fue calificado como 'altamente cohesionado' en la siguiente encuesta de pulso.",
  }
]


export default function CorporatePage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Soluciones para Empresas</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Transformando la comunicación de tus equipos para construir culturas de alto desempeño, confianza y colaboración.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Servicios Corporativos</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Programas diseñados para abordar los desafíos específicos de tu organización.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
              {services.map(service => (
                  <Card key={service.title}>
                      <CardHeader className="items-center text-center">
                          <div className="p-4 bg-primary/10 rounded-full">
                            {service.icon}
                          </div>
                          <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground text-center">{service.description}</p>
                      </CardContent>
                  </Card>
              ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
          <div className="container">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold">Historias de Éxito Corporativo</h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                      El impacto real de la comunicación consciente en el negocio.
                  </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-8">
                  {caseStudies.map((study, index) => (
                      <Card key={index} className="shadow-lg">
                          <CardHeader>
                              <CardTitle className="text-primary">{study.company}</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                              <div>
                                  <h4 className="font-semibold">Desafío</h4>
                                  <p className="text-muted-foreground">{study.challenge}</p>
                              </div>
                              <div>
                                  <h4 className="font-semibold">Solución</h4>
                                  <p className="text-muted-foreground">{study.solution}</p>
                              </div>
                              <div className="bg-accent/50 p-4 rounded-lg">
                                  <h4 className="font-semibold text-accent-foreground">Resultado</h4>
                                  <p className="text-accent-foreground font-medium">{study.result}</p>
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-20">
        <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold">¿Tu equipo necesita potenciar su comunicación?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Conversemos sobre cómo podemos diseñar una solución a la medida de tu organización para llevar a tus líderes y equipos al siguiente nivel.
            </p>
            <Button size="lg" asChild className="mt-8">
                <Link href="/contact">Contactar para Empresas</Link>
            </Button>
        </div>
      </section>

    </>
  );
}
