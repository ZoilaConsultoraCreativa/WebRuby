import Image from 'next/image';
import { Eye, Gem, Goal, CheckCircle, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { ImageDimensions } from '@/components/image-dimensions';

const values = [
  "Humanidad estratégica – Lo emocional como ventaja competitiva.",
  "Claridad valiente – Decir lo que importa, con respeto.",
  "Diseño que potencia el mensaje – Visualidad y estructura como parte del impacto.",
  "Transformación sostenible – Procesos reales, medibles y duraderos.",
  "Coherencia profesional – Ser en privado lo que se enseña en público.",
  "Inspiración aplicable – Ideas que bajan a conversaciones y decisiones reales."
];

const credentials = [
    { title: "Certificación Actualización Ley Karin N° 21.643", description: "Pontificia Universidad Católica de Valparaíso (2024)" },
    { title: "Coach en Negocios Femeninos", description: "Fundadoras (2022)" },
    { title: "Coach Profesional PCC", description: "International Coaching Federation - ICF (2020)" },
    { title: "Coach Organizacional de Equipos", description: "Universidad Adolfo Ibáñez, Chile (2019)" },
    { title: "Coach Ontológico Organizacional", description: "A&T Coaching Organizacional, Argentina (2013)" },
    { title: "+15 años de experiencia corporativa", description: "Roles gerenciales en industrias técnicas" },
];

const aboutHeroImage = getPlaceholderImage('about-hero');
const aboutRubyImage = getPlaceholderImage('about-ruby');


export default function AboutPage() {
  return (
    <>
      <section className="relative py-28 md:py-40 text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={aboutHeroImage.imageUrl}
          alt={aboutHeroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={aboutHeroImage.imageHint}
        />
        <ImageDimensions image={aboutHeroImage} />
        <div className="container relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Sobre Mí</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
            Mi marca no solo se recuerda: se siente.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-secondary">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="container grid md:grid-cols-5 gap-12 items-center relative z-10">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl font-bold text-[#475f4d]">Mi Identidad de Marca</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Represento comunicación estratégica, liderazgo emocional y acompañamiento transformacional. No enseño desde la teoría, sino desde la experiencia vivida como mujer en entornos corporativos masculinizados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
             No formo oradoras. Formo líderes con voz propia, capaces de sostener sus ideas, generar impacto y ser recordadas por su forma de decir lo que importa. Transformo conversaciones en relaciones que perduran. Mi escucha genera vínculos, mi presencia hace sentir a las personas importantes, vistas y valoradas.
            </p>
          </div>
          <div className="md:col-span-2 relative group w-full h-[550px] rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={aboutRubyImage.imageUrl}
              alt={aboutRubyImage.description}
              fill
              quality={100}
              className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={aboutRubyImage.imageHint}
            />
            <ImageDimensions image={aboutRubyImage} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Mis Credenciales</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Mi formación y experiencia para acompañarte en tu transformación.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {credentials.map((credential, index) => (
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{credential.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Mi Filosofía</h2>
          </div>
          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Misión</TabsTrigger>
              <TabsTrigger value="vision">Visión</TabsTrigger>
              <TabsTrigger value="values">Valores</TabsTrigger>
            </TabsList>
            <TabsContent value="mission">
              <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Goal className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Misión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Mi misión es posicionar la comunicación consciente como herramienta clave para ejercer un liderazgo que inspira, ayudando a construir culturas más seguras y a preparar a las organizaciones para cumplir con normativas como la Ley Karin.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vision">
              <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Visión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Ser una referencia latinoamericana en comunicación consciente para mujeres que lideran en industrias técnicas, mostrando que se puede aprender a liderar y comunicar con confianza, generando impacto sin renunciar a la identidad femenina ni a la calidad profesional.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="values">
              <Card className="shadow-lg">
                 <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Gem className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {values.map((value, index) => (
                      <Card key={index} className="bg-background/50 shadow-sm">
                        <CardContent className="p-4 flex items-start">
                           <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                           <span className="text-muted-foreground text-sm">{value}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
