
'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ImageDimensions } from "@/components/image-dimensions";
import { motion } from "framer-motion";

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
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            },
        },
    };

  return (
    <>
      <section className="relative py-32 md:py-48 text-center text-white bg-black">
        <div className="absolute inset-0">
            <Image
            src="https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FBanner%20Sobre%20mi%20(4).png?alt=media&token=4d767079-3fa1-4778-afed-4993c5dfd0d1"
            alt="Banner de programas"
            fill
            className="object-cover opacity-40"
            priority
            data-ai-hint="people working"
            />
        </div>
        <div className="container relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-headline tracking-tight">Programas para Personas</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Procesos que combinan lo estratégico y lo humano sin perder rigurosidad, para mujeres líderes listas para transformar su impacto.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div key={program.value} className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                  <motion.div 
                    className={`relative h-96 md:h-[600px] w-full rounded-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Image
                      src={program.image.imageUrl}
                      alt={program.image.description}
                      fill
                      className="object-cover rounded-lg shadow-2xl"
                      data-ai-hint={program.image.imageHint}
                    />
                    <ImageDimensions image={program.image} />
                  </motion.div>
                  <motion.div 
                    className={`space-y-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-headline !leading-tight">{program.title}</motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-primary">{program.subtitle}</motion.p>
                    <motion.p variants={itemVariants} className="text-lg text-muted-foreground">{program.description}</motion.p>
                    
                    <motion.div variants={itemVariants}>
                      <Accordion type="single" collapsible className="w-full border-t">
                          <AccordionItem value="features" className="border-b">
                              <AccordionTrigger className="text-lg py-5">¿Qué incluye?</AccordionTrigger>
                              <AccordionContent className="pt-2 pb-4">
                                  <ul className="space-y-3 pl-2">
                                  {program.features.map((feature, i) => (
                                      <li key={i} className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                                      <span className="text-muted-foreground text-base">{feature}</span>
                                      </li>
                                  ))}
                                  </ul>
                              </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="ideal_for" className="border-b-0">
                              <AccordionTrigger className="text-lg py-5">¿Es para mí?</AccordionTrigger>
                              <AccordionContent className="pt-2 pb-4">
                                  <p className="text-muted-foreground text-base">{program.ideal_for}</p>
                              </AccordionContent>
                          </AccordionItem>
                      </Accordion>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button asChild size="lg" className="text-base mt-6">
                           {program.id === 'subscription' ? (
                            <Link href="https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=1f259e3a9a464ad6a0ecec39f3102440" target="_blank" rel="noopener noreferrer">
                              Suscribirme
                            </Link>
                          ) : program.id === 'individual' ? (
                              <Link href="/contact">Agendar sesión inicial gratuita</Link>
                          ) : (
                            <Link href="/contact">Quiero más información</Link>
                          )}
                      </Button>
                    </motion.div>
                  </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
