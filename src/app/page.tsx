'use client'

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote, Award, ShieldCheck } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { ImageDimensions } from '@/components/image-dimensions';

const testimonials = [
  {
    name: 'Gerenta de Área',
    quote: 'Ruby me ayudó a encontrar mi voz y a comunicar con una confianza que no sabía que tenía. El cambio fue notorio no solo para mí, sino para todo mi equipo.',
    image: getPlaceholderImage('testimonial-1'),
    initials: 'GA',
  },
  {
    name: 'Senior Manager',
    quote: 'El proceso fue transformador. Pasé de sentirme invisible en reuniones clave a liderar las conversaciones más importantes de mi área.',
    image: getPlaceholderImage('testimonial-2'),
    initials: 'SM',
  },
  {
    name: 'Superintendente',
    quote: 'Aprendí herramientas prácticas que apliqué desde el primer día. El acompañamiento de Ruby es estratégico, humano y, sobre todo, efectivo.',
    image: getPlaceholderImage('testimonial-3'),
    initials: 'S',
  },
  {
    name: 'Directora de Proyectos',
    quote: 'Las sesiones con Ruby fueron un antes y un después. No solo mejoré mi comunicación, sino que también aprendí a liderar con más empatía y visión estratégica.',
    image: getPlaceholderImage('testimonial-4'),
    initials: 'DP',
  }
];

const CompanyLogo = ({ name, src }: { name: string, src: string }) => (
    <div className="flex items-center justify-center h-16">
        <Image src={src} alt={name} width={144} height={64} className="object-contain aspect-[3/1] w-32 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" data-ai-hint="company logo"/>
    </div>
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

const heroImage = getPlaceholderImage('hero-woman-leader');
const forYouImage = getPlaceholderImage('program-individual');
const forCompaniesImage = getPlaceholderImage('corporate-safe-workplace');

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const heroRef = React.useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">
      <section ref={heroRef} className="relative pt-24 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 will-change-transform"
          initial={{ opacity: 0.8, scale: 1.1, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </motion.div>
        
        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              className="max-w-xl space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 justify-start text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <span>Coach Ejecutiva Certificada</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                          <span>Experta en Ley Karin</span>
                      </div>
                  </div>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter !leading-tight"
                variants={itemVariants}
              >
                Liderazgo que Inspira.
                <br />
                <span className="text-primary">Comunicación que Transforma.</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground"
                variants={itemVariants}
              >
                Ayudo a mujeres líderes y equipos a convertir su comunicación en su mayor activo estratégico.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Button size="lg" asChild>
                  <Link href="/contact">Agenda una Sesión</Link>
                </Button>
              </motion.div>
            </motion.div>
            <div className="relative h-[600px] lg:h-[700px] -mr-16 lg:flex items-end justify-center">
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-primary/5 rounded-t-full"></div>
              <motion.div
                className="relative w-full h-full will-change-transform"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-contain object-bottom"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
                <ImageDimensions image={heroImage} />
              </motion.div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Mi Misión
                </motion.h2>
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Con más de <strong>8.000 horas de experiencia</strong>, mi propósito es impulsar una <strong>transformación real y sostenible</strong> en líderes y equipos. Fusiono una <strong>mirada estratégica</strong> con una profunda <strong>sensibilidad humana</strong> para diseñar <strong>conversaciones de alto impacto</strong>, potenciar la <strong>inteligencia relacional</strong> y construir <strong>culturas de confianza</strong> en los entornos más exigentes.
                </motion.p>
            </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Soluciones para tu Crecimiento
                </motion.h2>
                <motion.p 
                  className="mt-6 text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Programas y servicios diseñados para potenciar tu liderazgo y el de tu organización.
                </motion.p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Card className="flex flex-col shadow-xl bg-card rounded-2xl overflow-hidden h-full">
                        <div className="relative h-72 w-full">
                            <Image
                                src={forYouImage.imageUrl}
                                alt={forYouImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={forYouImage.imageHint}
                            />
                            <ImageDimensions image={forYouImage} />
                        </div>
                        <CardHeader className="pt-6">
                            <CardTitle className="text-3xl text-primary">Para Ti</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground text-lg">Desde mi experiencia como exgerenta en entornos exigentes, te acompaño a comunicar con confianza, encontrar tu voz y ejercer tu autoridad con autenticidad.</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="link" className="px-0 text-base">
                                <Link href="/programs">
                                    Ver programas <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
                
                <motion.div
                  className="md:mt-24"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                     <Card className="flex flex-col shadow-xl bg-card rounded-2xl overflow-hidden h-full">
                        <div className="relative h-72 w-full">
                            <Image
                                src={forCompaniesImage.imageUrl}
                                alt={forCompaniesImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={forCompaniesImage.imageHint}
                            />
                            <ImageDimensions image={forCompaniesImage} />
                        </div>
                        <CardHeader className="pt-6">
                            <CardTitle className="text-3xl text-primary">Para Empresas</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground text-lg">Potenciamos la comunicación de tus equipos y preparamos a tus líderes para la Ley Karin a través de workshops y coaching especializado.</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="link" className="px-0 text-base">
                                <Link href="/corporate">
                                    Soluciones Corporativas <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
             <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Lo que mis clientas dicen
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Historias de mujeres que decidieron liderar desde su propia voz.
            </motion.p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto mt-16"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="p-4 h-full"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Card className="flex flex-col justify-between h-full shadow-lg bg-card text-left rounded-2xl border-border/80">
                       <CardContent className="pt-8 flex-grow">
                        <Quote className="h-8 w-8 text-primary mb-4" />
                        <p className="text-muted-foreground italic text-base leading-relaxed">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter className="flex-row items-center gap-4 border-t pt-6 mt-4">
                         <Avatar className="h-12 w-12 border-2 border-primary">
                            <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint} />
                            <AvatarFallback>{testimonial.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-base text-foreground">{testimonial.name}</p>
                          </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-20px] md:left-[-50px]"/>
            <CarouselNext className="right-[-20px] md:right-[-50px]"/>
          </Carousel>
        </div>
      </section>

      <section className="py-20 md:py-28">
          <div className="container">
              <div className="text-center mb-16">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Empresas que ya confían en mi trabajo
                  </motion.h2>
                  <motion.p 
                    className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                      Organizaciones que están transformando su comunicación y liderazgo.
                  </motion.p>
              </div>
              <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent">
                <div className="flex animate-scroll-x group">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-48 mx-8 group">
                           <CompanyLogo name={logo.name} src={logo.src} />
                        </div>
                    ))}
                </div>
              </div>
          </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ¿Lista para liderar con estrategia desde quien ya eres?
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-primary-foreground/90 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Descubre si mis programas son para ti. Agenda una conversación inicial sin costo y sin compromiso.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Hablemos</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
