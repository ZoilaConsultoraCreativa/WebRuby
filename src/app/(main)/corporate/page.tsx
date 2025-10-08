
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

const CompanyLogo = ({ name, src }: { name: string, src: string }) => (
    <div className="flex items-center justify-center h-16 text-muted-foreground font-semibold text-lg">
        <Image src={src} alt={name} width={144} height={64} className="object-contain grayscale opacity-80 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300" data-ai-hint="company logo"/>
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

const safeWorkplaceImage = getPlaceholderImage('corporate-safe-workplace');

export default function CorporatePage() {
  return (
    <>
      <section className="relative py-28 md:py-40 text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/webruby-d89a9.firebasestorage.app/o/Sitio%20RubyVillarroel.cl%2FBanner%20Sobre%20mi%20(3).png?alt=media&token=4389e43b-62f3-40f3-9504-53761bd24cb9"
          alt="Corporate solutions background"
          fill
          className="object-cover"
          priority
          data-ai-hint="corporate meeting"
        />
        <div className="container relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Soluciones para Empresas</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
                  {logos.map((logo) => (
                      <div key={logo.name} className="group/logo">
                         <CompanyLogo name={logo.name} src={logo.src} />
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold">¿Tu equipo necesita potenciar su comunicación?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
                Conversemos sobre cómo podemos diseñar una solución a la medida de tu organización para llevar a tus líderes y equipos al siguiente nivel.
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-8">
                <Link href="/contact">Contacto para Empresas</Link>
            </Button>
        </div>
      </section>

    </>
  );
}
