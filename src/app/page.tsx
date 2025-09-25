import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Quote, Award, ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { ImageDimensions } from '@/components/image-dimensions';

const programs = [
  {
    title: 'Programa 1:1 - 12 Semanas',
    description: 'Acompañamiento personalizado para transformar tu liderazgo y comunicación.',
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Grupal Intensivo - 4 Semanas',
    description: 'Una inmersión profunda con un grupo de pares para potenciar tus habilidades.',
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Suscripción Continua',
    description: 'Acceso constante a herramientas y una comunidad para sostener tu crecimiento.',
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
  },
];

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

const heroImage = getPlaceholderImage('hero-woman-leader');
const forYouImage = getPlaceholderImage('program-individual');
const forCompaniesImage = getPlaceholderImage('corporate-safe-workplace');

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-background/30 z-10" />
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
        <ImageDimensions image={heroImage} />
        <div className="relative z-20 container text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter !leading-tight" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            Tu Liderazgo es Real.
            <br />
            <span className="text-primary-foreground">Comunica con Confianza.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>
            Ayudo a mujeres y equipos a comunicarse de forma estratégica y con claridad, formando líderes con voz propia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <div className="flex items-center justify-center gap-2 rounded-full bg-black/20 px-4 py-2 backdrop-blur-sm">
                <Award className="h-5 w-5 text-white/90" />
                <span className="text-sm font-medium text-white">Coach Ejecutiva</span>
            </div>
             <div className="flex items-center justify-center gap-2 rounded-full bg-black/20 px-4 py-2 backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 text-white/90" />
                <span className="text-sm font-medium text-white">Certificada en Ley Karin</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover:bg-primary hover:text-primary-foreground" asChild>
              <Link href="/contact">Agenda una Sesión</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Formando Líderes con Voz Propia</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Mi misión es posicionar la comunicación consciente como la herramienta clave para transformar cómo lideramos en contextos técnicos, generando un impacto personal y organizacional sostenible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64 overflow-hidden group">
                     <Image
                        src={forYouImage.imageUrl}
                        alt={forYouImage.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={forYouImage.imageHint}
                    />
                    <ImageDimensions image={forYouImage} />
                </div>
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">Para Ti</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <p className="text-muted-foreground">Acompañamiento 1:1 y grupal para mujeres líderes que buscan ejercer su autoridad con autenticidad.</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href="/programs" className="group">
                            Ver programas <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64 overflow-hidden group">
                     <Image
                        src={forCompaniesImage.imageUrl}
                        alt={forCompaniesImage.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={forCompaniesImage.imageHint}
                    />
                    <ImageDimensions image={forCompaniesImage} />
                </div>
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">Para Empresas</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <p className="text-muted-foreground">Potenciamos equipos y cultura organizacional a través de workshops y coaching de comunicación efectiva.</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href="/corporate" className="group">
                            Conoce más <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="bg-secondary py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Programas de Transformación</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Procesos que combinan estrategia, emocionalidad aplicada y herramientas conversacionales para escenarios reales.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div key={program.title} className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:bg-card/50 hover:-translate-y-2">
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center">
                    {program.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{program.title}</h3>
                  <p className="mt-2 text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/programs">Ver todos los programas</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Lo que mis clientas dicen</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Historias de mujeres que decidieron liderar desde su propia voz.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto mt-16"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col justify-between h-full shadow-lg bg-card">
                       <CardContent className="pt-6">
                        <Quote className="h-8 w-8 text-primary mb-4" />
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardHeader className="flex-row items-center gap-4 border-t pt-6 mt-auto">
                         <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint} />
                            <AvatarFallback>{testimonial.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-lg">{testimonial.name}</p>
                          </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px]"/>
            <CarouselNext className="right-[-50px]"/>
          </Carousel>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">¿Lista para liderar con estrategia desde quien ya eres?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80 text-lg">
            Descubre si mis programas son para ti. Agenda una conversación sin compromiso.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Hablemos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
