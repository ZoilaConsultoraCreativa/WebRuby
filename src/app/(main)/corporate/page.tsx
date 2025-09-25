import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Lightbulb, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ImageDimensions } from "@/components/image-dimensions";

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

const CompanyLogo = ({ name, id }: { name: string, id: number }) => (
    <div className="flex items-center justify-center h-16 text-muted-foreground font-semibold text-lg">
        <Image src={`https://picsum.photos/seed/${id}/144/64`} alt={name} width={144} height={64} className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" data-ai-hint="company logo"/>
    </div>
);

const logos = [
  { name: "TechCorp", id: 21 },
  { name: "Innovate Inc.", id: 22 },
  { name: "QuantumLeap", id: 23 },
  { name: "Strive", id: 24 },
  { name: "Apex Global", id: 25 },
  { name: "Momentum", id: 26 },
  { name: "Nexus", id: 27 },
];

const safeWorkplaceImage = getPlaceholderImage('corporate-safe-workplace');

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
                  <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
                  <ShieldCheck className="h-10 w-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Cumplimiento y Cultura: Expertos en Ley Karin</h2>
              <p className="text-lg text-muted-foreground">
                Nuestros programas están diseñados no solo para cumplir con la normativa, sino para construir culturas de seguridad psicológica y respeto que van más allá de la ley. Prepara a tus líderes para gestionar y prevenir el acoso laboral de manera efectiva.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Saber más</Link>
              </Button>
            </div>
            <div className="relative w-full h-80 rounded-lg shadow-xl">
               <Image src={safeWorkplaceImage.imageUrl} alt={safeWorkplaceImage.description} fill className="object-cover rounded-lg" data-ai-hint={safeWorkplaceImage.imageHint} />
               <ImageDimensions image={safeWorkplaceImage} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
          <div className="container">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold">Han confiado en nosotros</h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                      Empresas que ya están transformando su comunicación y liderazgo.
                  </p>
              </div>
              <div className="relative w-full overflow-hidden">
                <div className="flex animate-scroll-x group">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-48 mx-4 group">
                           <CompanyLogo name={logo.name} id={logo.id} />
                        </div>
                    ))}
                </div>
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
                <Link href="/contact">Contacto para Empresas</Link>
            </Button>
        </div>
      </section>

    </>
  );
}
