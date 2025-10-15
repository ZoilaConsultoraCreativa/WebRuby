
'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Lightbulb, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ImageDimensions } from "@/components/image-dimensions";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const services = [
    {
        title: "Workshops de Comunicación Estratégica",
        description: "Talleres prácticos y a medida para crear culturas de seguridad psicológica y cumplir con normativas como la Ley Karin, fomentando entornos laborales respetuosos.",
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

const CompanyLogo = ({ name, src, index }: { name: string, src: string, index: number }) => (
    <motion.div
        className="flex justify-center items-center"
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Image src={src} alt={name} width={144} height={64} className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-110" data-ai-hint="company logo"/>
    </motion.div>
);

const logos = [
    { name: "Logo 1", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F1.png?alt=media&token=05b6eb99-5846-41e0-86fd-2fe30b6234a1" },
    { name: "Logo 2", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F2.png?alt=media&token=1a77aded-f6bb-43b1-887c-828267d7a7e1" },
    { name: "Logo 3", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F3.png?alt=media&token=851dea2c-229b-493b-950f-179e2f05e540" },
    { name: "Logo 4", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F4.png?alt=media&token=f42c2a78-731c-4538-bcbe-0ba1aaec413c" },
    { name: "Logo 5", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F5.png?alt=media&token=4133d54e-864b-4d7d-9f3f-952cb527c56d" },
    { name: "Logo 6", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F6.png?alt=media&token=7f74327f-cfea-4c5c-9348-f1a43dba64ed" },
    { name: "Logo 7", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F7.png?alt=media&token=e9cb7624-0780-4bb2-ad6a-82d1e308a1b9" },
    { name: "Logo 8", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F8.png?alt=media&token=cd33eb9f-5b80-49dd-b14d-8561f86e7e78" },
    { name: "Logo 9", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F9.png?alt=media&token=e1c5d881-4951-4737-98fb-87e166bbc2e0" },
    { name: "Logo 10", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F10.png?alt=media&token=b1f75eb5-dbec-4bca-a398-457dd29c381f" },
    { name: "Logo 11", src: "https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FLogos%20Empresas%2F11.png?alt=media&token=d89d6828-5651-4417-8071-33205d0b411e" },
];

const safeWorkplaceImage = getPlaceholderImage('corporate-safe-workplace');

export default function CorporatePage() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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

  const logoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <section className="relative py-20 md:py-24 text-center text-foreground bg-background">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FBanner%20Sobre%20mi%20(6).png?alt=media&token=93756425-85a6-45e3-a999-c006a8e2b3ef"
            alt="Corporate solutions background"
            fill
            className="object-cover opacity-100"
            priority
            data-ai-hint="corporate meeting"
          />
          <div className="absolute inset-0 bg-background/45" />
        </div>
        <div className="container relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-headline tracking-tight">Soluciones para Empresas</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Transformando la comunicación de tus equipos para construir culturas de alto desempeño, confianza y colaboración.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              className="space-y-8 text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={itemVariants} className="inline-block bg-primary/10 text-primary p-4 rounded-full border border-primary/20">
                  <ShieldCheck className="h-10 w-10" />
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-headline !leading-tight">Cumplimiento y Cultura: Expertos en Ley Karin</motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
                Nuestros programas están diseñados no solo para cumplir con la normativa, sino para construir culturas de seguridad psicológica y respeto que van más allá de la ley. Prepara a tus líderes para gestionar y prevenir el acoso laboral de manera efectiva.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button size="lg" asChild className="text-base">
                  <Link href="/contact">Saber más</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative w-full h-96 md:h-[500px] rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
               <Image src={safeWorkplaceImage.imageUrl} alt={safeWorkplaceImage.description} fill className="object-cover rounded-lg" data-ai-hint={safeWorkplaceImage.imageHint} />
               <ImageDimensions image={safeWorkplaceImage} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-headline">Servicios Corporativos</motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-muted-foreground">
              Programas diseñados para abordar los desafíos específicos de tu organización.
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
              {services.map(service => (
                  <motion.div key={service.title} variants={itemVariants}>
                    <Card className="shadow-none border-none bg-secondary/30 p-8 rounded-lg text-center h-full">
                        <CardHeader className="items-center text-center p-0">
                            <div className="p-4 bg-background rounded-full border shadow-sm">
                              {service.icon}
                            </div>
                            <CardTitle className="mt-6 text-2xl font-headline">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                            <p className="text-muted-foreground text-lg">{service.description}</p>
                        </CardContent>
                    </Card>
                  </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
          <div className="container">
              <motion.div 
                className="text-center mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={containerVariants}
              >
                  <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-headline">Han confiado en nosotros</motion.h2>
                  <motion.p variants={itemVariants} className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                      Empresas que ya están transformando su comunicación y liderazgo.
                  </motion.p>
              </motion.div>
              <div className="md:hidden">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-1">
                    {logos.map((logo, index) => (
                      <CarouselItem key={index} className="basis-auto pl-6 flex justify-center items-center h-16">
                          <Image src={logo.src} alt={logo.name} width={144} height={64} className="h-10 w-auto object-contain" data-ai-hint="company logo"/>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
               <motion.div 
                className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 items-center justify-items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={logoContainerVariants}
               >
                  {logos.map((logo, index) => (
                      <CompanyLogo key={logo.name} name={logo.name} src={logo.src} index={index} />
                  ))}
              </motion.div>
          </div>
      </section>

      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center max-w-4xl animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline">¿Tu equipo necesita potenciar su comunicación?</h2>
            <p className="mt-6 text-xl text-primary-foreground/80">
                Conversemos sobre cómo podemos diseñar una solución a la medida de tu organización para llevar a tus líderes y equipos al siguiente nivel.
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-10 text-base">
                <Link href="/contact">Contacto para Empresas</Link>
            </Button>
        </div>
      </section>
    </>
  );
}
