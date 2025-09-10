import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tools = [
  {
    title: "Perfil de Cliente Ideal",
    description: "Responde unas preguntas y obtén un perfil preliminar para entender si eres la 'Mujer Andes Consciente' que puede beneficiarse de mi coaching.",
    href: "/tools/ideal-client-profile",
    image: "https://picsum.photos/seed/101/600/400",
    imageHint: "profile analysis",
  },
  {
    title: "Generador de Posts para Redes",
    description: "Transforma testimonios de clientes en posts atractivos para redes sociales, manteniendo la voz y el estilo de tu marca.",
    href: "/tools/social-post-generator",
    image: "https://picsum.photos/seed/102/600/400",
    imageHint: "social media",
  },
  {
    title: "Pregúntale a Ruby (IA)",
    description: "Haz una consulta y recibe una respuesta instantánea con la voz y el estilo de Ruby, para una primera orientación.",
    href: "/tools/ask-ruby",
    image: "https://picsum.photos/seed/103/600/400",
    imageHint: "conversation chat",
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Herramientas con IA</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explora estas herramientas generativas para obtener insights y experimentar el poder de la comunicación estratégica.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link href={tool.href} key={tool.title} className="group">
                <Card className="h-full overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="relative h-48 w-full">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      fill
                      className="object-cover"
                      data-ai-hint={tool.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      Probar herramienta
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
