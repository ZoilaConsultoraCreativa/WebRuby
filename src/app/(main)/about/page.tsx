
import Image from 'next/image';
import { Award, CheckCircle, Eye, Gem, Goal, Handshake, MessageCircle, School, ShieldCheck, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { ImageDimensions } from '@/components/image-dimensions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const values = [
  "Humanidad estratégica – Lo emocional como ventaja competitiva.",
  "Claridad valiente – Decir lo que importa, con respeto.",
  "Diseño que potencia el mensaje – Visualidad y estructura como parte del impacto.",
  "Transformación sostenible – Procesos reales, medibles y duraderos.",
  "Coherencia profesional – Ser en privado lo que se enseña en público.",
  "Inspiración aplicable – Ideas que bajan a conversaciones y decisiones reales."
];

const credentials = [
    { title: "Magíster en Comunicación Estratégica y Sostenibilidad", description: "Universidad Adolfo Ibáñez (2025)" },
    { title: "Certificación Internacional en Cultura Organizacional", description: "Executing Growth, EE.UU. (2024)" },
    { title: "Certificación en Liderazgo y Equipos", description: "Executing Growth, EE.UU. (2024)" },
    { title: "Certificación en Storytelling", description: "Pontificia Universidad Católica de Chile (2024)" },
    { title: "Certificación en Negociación", description: "Pontificia Universidad Católica de Chile (2023)" },
    { title: "Coach Profesional PCC", description: "International Coaching Federation - ICF (2020)" },
    { title: "+15 años de experiencia corporativa", description: "Roles gerenciales en industrias técnicas" },
];

const aboutHeroImage = getPlaceholderImage('about-hero');
const aboutRubyImage = getPlaceholderImage('about-ruby');

const experience = [
    { text: "Coaching en Liderazgo Gerencial para más de 200 líderes en LATAM.", icon: <Target className="h-6 w-6 text-primary" /> },
    { text: "Formación de equipos de Alto Desempeño para más de 100 empresas en LATAM.", icon: <Users className="h-6 w-6 text-primary" /> },
    { text: "Experiencia cliente y habilidades comerciales para más de 50 empresas en LATAM.", icon: <Handshake className="h-6 w-6 text-primary" /> },
    { text: "Academias de liderazgo y Programas de Diplomado Empresarial en Industrias de Servicios Financieros y Minería.", icon: <School className="h-6 w-6 text-primary" /> },
    { text: "Estrategias de storytelling y desarrollo de habilidades comunicacionales para mujeres influyentes y líderes de opinión LATAM.", icon: <MessageCircle className="h-6 w-6 text-primary" /> }
];


export default function AboutPage() {
  return (
    <>
      <section className="relative py-32 md:py-48 text-center text-white bg-black">
        <div className="absolute inset-0">
          <Image
            src={aboutHeroImage.imageUrl}
            alt={aboutHeroImage.description}
            fill
            className="object-cover opacity-40"
            priority
            data-ai-hint={aboutHeroImage.imageHint}
          />
          <ImageDimensions image={aboutHeroImage} />
        </div>
        <div className="container relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-headline tracking-tight">Sobre Mí</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Transformando la comunicación en tu mayor activo de liderazgo.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="relative group w-full rounded-lg">
            <Image
              src={aboutRubyImage.imageUrl}
              alt={aboutRubyImage.description}
              width={aboutRubyImage.width || 600}
              height={aboutRubyImage.height || 800}
              quality={100}
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              data-ai-hint={aboutRubyImage.imageHint}
            />
            <ImageDimensions image={aboutRubyImage} />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto bg-background/80 backdrop-blur-sm border border-border/50 p-4 rounded-lg shadow-lg flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-foreground">Experta Certificada en Ley Karin</span>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-headline text-4xl md:text-5xl !leading-tight">Coach Organizacional, de Equipos y Ontológica.</h2>
            <p className="text-xl text-muted-foreground">Especializada en Comunicación Estratégica y Liderazgo Gerencial.</p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Cuento con más de <strong>8.000 horas</strong> en procesos de <strong>coaching ejecutivo, liderazgo estratégico, formación de equipos de alto desempeño</strong> y facilitación de talleres y charlas. He trabajado con <strong>líderes de primer nivel en LATAM</strong>, impulsando <strong>transformación cultural, comunicación efectiva y gestión emocional</strong> en contextos corporativos complejos.
            </p>
             <p className="text-lg text-foreground/80 leading-relaxed border-l-4 border-primary pl-6">
                  Especialista en <strong>diseñar conversaciones de alto impacto</strong>, potenciar la inteligencia relacional y construir confianza en entornos de alta exigencia.
                </p>
          </div>
        </div>
      </section>

       <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-headline">Experiencia Destacada</h2>
             <p className="mt-4 text-lg text-muted-foreground">Logros y Resultados Concretos</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12">
            {experience.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background border flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <p className="text-lg text-muted-foreground pt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
       </section>

      <section className="py-24 md:py-32">
        <div className="container">
           <div className="max-w-3xl mx-auto text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-headline">Mi Filosofía</h2>
          </div>
          <Tabs defaultValue="mission" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-secondary/50 h-auto p-2">
              <TabsTrigger value="mission" className="py-3 text-base">Misión</TabsTrigger>
              <TabsTrigger value="vision" className="py-3 text-base">Visión</TabsTrigger>
              <TabsTrigger value="values" className="py-3 text-base">Valores</TabsTrigger>
            </TabsList>
            <div className="pt-12">
              <TabsContent value="mission">
                <Card className="shadow-none border-none bg-transparent">
                  <CardHeader className="flex flex-row items-center gap-6 p-0">
                    <div className="p-4 bg-secondary/60 rounded-full">
                      <Goal className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-headline">Misión</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-6">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Mi misión es posicionar la comunicación consciente como herramienta clave para ejercer un liderazgo que inspira, ayudando a construir culturas más seguras y a preparar a las organizaciones para cumplir con normativas como la Ley Karin.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="vision">
                <Card className="shadow-none border-none bg-transparent">
                  <CardHeader className="flex flex-row items-center gap-6 p-0">
                    <div className="p-4 bg-secondary/60 rounded-full">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-headline">Visión</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-6">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Ser una referencia latinoamericana en comunicación consciente para mujeres que lideran en industrias técnicas, mostrando que se puede aprender a liderar y comunicar con confianza, generando impacto sin renunciar a la identidad femenina ni a la calidad profesional.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="values">
                <Card className="shadow-none border-none bg-transparent">
                   <CardHeader className="flex flex-row items-center gap-6 p-0">
                    <div className="p-4 bg-secondary/60 rounded-full">
                      <Gem className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-headline">Valores</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {values.map((value, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/40">
                           <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                           <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-headline">Mis Credenciales</h2>
             <p className="mt-4 text-lg text-muted-foreground">Formación y experiencia para acompañarte.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="border-t">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-8 p-8 transition-colors duration-300 hover:bg-background group border-b">
                  <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl">{credential.title}</h3>
                    <p className="text-muted-foreground mt-1">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
