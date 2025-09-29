import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ImageDimensions } from "@/components/image-dimensions";

const programsData = [
    {
        id: "individual",
        value: "item-1",
        title: "Programa 1:1 - 12 Semanas",
        subtitle: "Acompañamiento Estratégico y Personalizado",
        description: "Un viaje de transformación profunda y confidencial, diseñado a la medida de tus desafíos. Combina estrategia, emocionalidad aplicada y herramientas conversacionales para que lideres con confianza y autenticidad desde la primera sesión.",
        features: [
            "10 sesiones online de coaching ejecutivo.",
            "Test de Saboteadores + debrief para desmontar miedos.",
            "Role-play de conversaciones críticas.",
            "Toolkits 'torpedo' para aplicación inmediata.",
        ],
        ideal_for: "Líderes que buscan un acompañamiento profundo, confidencial y con resultados medibles para navegar una transición de rol, potenciar su influencia o resolver desafíos complejos de comunicación.",
        imageId: "program-individual",
    },
    {
        id: "group",
        value: "item-2",
        title: "Programa Grupal Intensivo - 4 Semanas",
        subtitle: "Inmersión y Crecimiento en Comunidad",
        description: "Una experiencia de aprendizaje acelerado junto a un grupo de mujeres líderes que enfrentan desafíos similares. Un espacio de contención y potencia para adquirir herramientas prácticas en un formato intensivo.",
        features: [
            "4 sesiones grupales en vivo.",
            "Ejercicios prácticos y feedback en tiempo real.",
            "Comunidad privada para networking y apoyo.",
            "Contenido enfocado en quick-wins visibles.",
        ],
        ideal_for: "Mujeres líderes que quieren obtener herramientas concretas rápidamente, aprender de las experiencias de otras y construir una red de apoyo profesional sólida en un entorno de confianza.",
        imageId: "program-group",
    },
    {
        id: "subscription",
        value: "item-3",
        title: "Suscripción 'Líder con Voz'",
        subtitle: "Crecimiento Continuo y Sostenible",
        description: "Tu espacio de entrenamiento constante para mantener afiladas tus habilidades de comunicación y liderazgo. Accede a recursos, sesiones mensuales y una comunidad activa para sostener tu transformación en el tiempo.",
        features: [
            "Sesión mensual de coaching grupal.",
            "Acceso a una biblioteca de recursos y herramientas.",
            "Comunidad exclusiva para consultas y networking.",
            "Descuentos en otros programas y workshops.",
        ],
        ideal_for: "Líderes que ya han completado un proceso de coaching y buscan un acompañamiento continuo, o para aquellas que desean empezar a integrar nuevas herramientas de forma gradual y sostenida.",
        imageId: "program-subscription",
    },
]

const programs = programsData.map(p => ({
    ...p,
    image: getPlaceholderImage(p.imageId)
}))

export default function ProgramsPage() {
  return (
    <>
      <section className="relative py-28 md:py-40 text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FBanner%20Sobre%20mi%20(4).png?alt=media&token=4d767079-3fa1-4778-afed-4993c5dfd0d1"
          alt="Banner de programas"
          fill
          className="object-cover"
          priority
          data-ai-hint="people working"
        />
        <div className="container relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Programas para Personas</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
            Procesos que combinan lo estratégico y lo humano sin perder rigurosidad, para mujeres líderes listas para transformar su impacto.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-12">
            {programs.map((program) => (
              <Card key={program.value} className="overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 relative h-60 md:h-full w-full">
                    <Image
                      src={program.image.imageUrl}
                      alt={program.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={program.image.imageHint}
                    />
                    <ImageDimensions image={program.image} />
                  </div>
                  <div className="md:col-span-3">
                    <CardHeader>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <CardDescription>{program.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-muted-foreground">{program.description}</p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="features">
                          <AccordionTrigger>¿Qué incluye?</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-2">
                              {program.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="ideal_for">
                          <AccordionTrigger>¿Es para mí?</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{program.ideal_for}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Button asChild className="mt-6">
                        <Link href="/contact">Quiero más información</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
