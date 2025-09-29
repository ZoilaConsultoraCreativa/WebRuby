
import Image from 'next/image';
import { Eye, Gem, Goal, CheckCircle, Award, Target, Users, Handshake, School, MessageCircle } from 'lucide-react';
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
    { text: "Coaching en Liderazgo Gerencial para más de 200 líderes en LATAM.", icon: <Target /> },
    { text: "Formación de equipos de Alto Desempeño para más de 100 empresas en LATAM.", icon: <Users /> },
    { text: "Experiencia cliente y habilidades comerciales para más de 50 empresas en LATAM.", icon: <Handshake /> },
    { text: "Academias de liderazgo y Programas de Diplomado Empresarial en Industrias de Servicios Financieros y Minería.", icon: <School /> },
    { text: "Estrategias de storytelling y desarrollo de habilidades comunicacionales para mujeres influyentes y líderes de opinión LATAM.", icon: <MessageCircle /> }
];


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
            Transformando la comunicación en tu mayor activo de liderazgo.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-secondary">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="container grid md:grid-cols-5 gap-12 items-center relative z-10">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl font-bold text-[#475f4d]">Coach Organizacional,  de Equipos y Ontológica</h2>
            <p className="text-xl text-muted-foreground -mt-4">especializada en Comunicación Estratégica y Liderazgo Gerencial.</p>
            <p className="text-lg text-foreground leading-relaxed text-justify">
Cuento con más de <strong>8.000 horas</strong> en procesos de <strong>coaching ejecutivo, liderazgo estratégico, formación de equipos de alto desempeño</strong> y facilitación de talleres y charlas. He trabajado con <strong>líderes de primer nivel en LATAM</strong>, impulsando <strong>transformación cultural, comunicación efectiva y gestión emocional</strong> en contextos corporativos complejos.
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
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-lg">
                <CardHeader>
                <CardTitle style={{color: '#475f4d'}}>Especialista</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p style={{color: '#475f4d'}}>
                  Especialista en <strong>diseñar conversaciones de alto impacto</strong>, potenciar la inteligencia relacional y construir confianza en entornos de alta exigencia.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 rounded-2xl shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-primary">Experiencia Destacada</CardTitle>
                <p className="text-muted-foreground">Logros y Resultados Concretos</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {experience.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">
                        {item.icon}
                      </div>
                      <p className="text-muted-foreground">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-primary">Mis Credenciales</CardTitle>
                <p className="text-muted-foreground">Formación y experiencia para acompañarte.</p>
              </CardHeader>
              <CardContent>
                <div className="border border-border rounded-xl">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center gap-6 p-6 transition-colors duration-300 hover:bg-secondary/50 group not-last:border-b not-last:border-border">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{credential.title}</h3>
                        <p className="text-muted-foreground">{credential.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Mi Filosofía</h2>
          </div>
          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-white/60">
              <TabsTrigger value="mission">Misión</TabsTrigger>
              <TabsTrigger value="vision">Visión</TabsTrigger>
              <TabsTrigger value="values">Valores</TabsTrigger>
            </TabsList>
            <TabsContent value="mission">
              <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-secondary rounded-full">
                    <Goal className="h-8 w-8 text-[#475f4d]" />
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
                  <div className="p-3 bg-secondary rounded-full">
                    <Eye className="h-8 w-8 text-[#475f4d]" />
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
                  <div className="p-3 bg-secondary rounded-full">
                    <Gem className="h-8 w-8 text-[#475f4d]" />
                  </div>
                  <CardTitle className="text-2xl">Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {values.map((value, index) => (
                      <Card key={index} className="shadow-sm" style={{backgroundColor: '#d9e2d0'}}>
                        <CardContent className="p-4 flex items-start">
                           <CheckCircle className="h-5 w-5 text-[#475f4d] mt-1 mr-3 flex-shrink-0" />
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
