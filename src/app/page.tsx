import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Quote } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const programs = [
  {
    title: 'Programa 1:1 - 12 Semanas',
    description: 'Acompañamiento personalizado para transformar tu liderazgo y comunicación.',
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Grupal Intensivo - 4 Semanas',
    description: 'Una inmersión profunda con un grupo de pares para potenciar tus habilidades.',
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Suscripción Continua',
    description: 'Acceso constante a herramientas y una comunidad para sostener tu crecimiento.',
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
];

const testimonials = [
  {
    name: 'Gerenta de Área',
    quote: 'Ruby me ayudó a encontrar mi voz y a comunicar con una confianza que no sabía que tenía. El cambio fue notorio no solo para mí, sino para todo mi equipo.',
    image: 'https://picsum.photos/seed/11/150/150',
    initials: 'GA',
  },
  {
    name: 'Senior Manager',
    quote: 'El proceso fue transformador. Pasé de sentirme invisible en reuniones clave a liderar las conversaciones más importantes de mi área.',
    image: 'https://picsum.photos/seed/12/150/150',
    initials: 'SM',
  },
  {
    name: 'Superintendente',
    quote: 'Aprendí herramientas prácticas que apliqué desde el primer día. El acompañamiento de Ruby es estratégico, humano y, sobre todo, efectivo.',
    image: 'https://picsum.photos/seed/13/150/150',
    initials: 'S',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-secondary">
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Tu Liderazgo es Real.
              <br />
              <span className="text-primary">Comunica con Confianza.</span>
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-muted-foreground">
              Ayudo a mujeres y equipos a comunicarse de forma estratégica y con claridad, formando líderes con voz propia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/programs">Explora los Programas</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Agenda una Sesión</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 lg:h-full w-full">
             <Image
                src="https://picsum.photos/seed/1/1200/800"
                alt="Woman Leader"
                fill
                className="rounded-lg object-cover shadow-xl"
                data-ai-hint="woman leader"
              />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Formando Líderes con Voz Propia</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Mi misión es posicionar la comunicación consciente como la herramienta clave para transformar cómo lideramos en contextos técnicos, generando un impacto personal y organizacional sostenible.
            </p>
        </div>
        <div className="container mt-16 grid gap-8 md:grid-cols-2">
            <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Para Personas</CardTitle>
                <CardDescription>Acompañamiento 1:1 y grupal para mujeres líderes.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Procesos diseñados para ayudarte a encontrar tu voz, establecer límites sin culpa y ejercer tu autoridad con autenticidad.</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/programs">Ver programas <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Para Empresas</CardTitle>
                <CardDescription>Potenciando equipos y cultura organizacional.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Workshops y coaching para equipos corporativos que buscan mejorar su comunicación, confianza y efectividad.</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/corporate">Conoce más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
        </div>
      </section>
      
      <section className="bg-secondary py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Programas de Transformación</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Procesos que combinan estrategia, emocionalidad aplicada y herramientas conversacionales para escenarios reales.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    {program.icon}
                  </div>
                  <CardTitle className="mt-4">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Lo que mis clientas dicen</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Historias de mujeres que decidieron liderar desde su propia voz.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between">
                <CardHeader>
                  <Quote className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="woman portrait" />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">¿Lista para liderar con estrategia desde quien ya eres?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
            Descubre si mis programas son para ti o explora las herramientas de IA para un primer diagnóstico.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Hablemos</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/tools">Probar Herramientas IA</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
