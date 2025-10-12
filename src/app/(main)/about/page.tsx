
'use client'
import Image from 'next/image';
import { Award, CheckCircle, Eye, Gem, Goal, Handshake, MessageCircle, School, ShieldCheck, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { ImageDimensions } from '@/components/image-dimensions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

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
    { title: "+200 líderes", description: "Coaching en Liderazgo Gerencial para más de 200 líderes en LATAM.", icon: <Target className="h-8 w-8 text-primary" /> },
    { title: "+100 empresas", description: "Formación de equipos de Alto Desempeño para más de 100 empresas en LATAM.", icon: <Users className="h-8 w-8 text-primary" /> },
    { title: "+50 empresas", description: "Experiencia cliente y habilidades comerciales para más de 50 empresas en LATAM.", icon: <Handshake className="h-8 w-8 text-primary" /> },
    { title: "Academias y Diplomados", description: "Diseño de Academias de Liderazgo y Diplomados en industrias de Servicios Financieros y Minería.", icon: <School className="h-8 w-8 text-primary" /> },
    { title: "Storytelling y Comunicación", description: "Estrategias de Storytelling para mujeres influyentes y líderes de opinión en LATAM.", icon: <MessageCircle className="h-8 w-8 text-primary" /> },
];

const CredentialCard = ({ title, description, delay = 0 }: { title: string, description: string, delay?: number }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        className="flex items-center gap-8 p-8 transition-colors duration-300 hover:bg-background group border-b"
    >
        <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-primary/10 transition-colors">
            <Award className="h-8 w-8 text-primary" />
        </div>
        <div>
            <h3 className="font-bold text-foreground text-xl">{title}</h3>
            <p className="text-muted-foreground mt-1">{description}</p>
        </div>
    </motion.div>
);

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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
        <div className="container flex flex-col md:flex-row gap-16 md:gap-24 items-stretch">
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={aboutRubyImage.imageUrl}
              alt={aboutRubyImage.description}
              fill
              quality={100}
              className="object-cover rounded-lg shadow-2xl"
              data-ai-hint={aboutRubyImage.imageHint}
            />
            <ImageDimensions image={aboutRubyImage} />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto bg-background/80 backdrop-blur-sm border border-border/50 p-4 rounded-lg shadow-lg flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-foreground">Experta Certificada en Ley Karin</span>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={itemVariants} className="font-headline text-4xl md:text-5xl !leading-tight">Coach Organizacional, de Equipos y Ontológica.</motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground">Especializada en Comunicación Estratégica y Liderazgo Gerencial.</motion.p>
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
              Cuento con más de <strong>8.000 horas</strong> en procesos de <strong>coaching ejecutivo, liderazgo estratégico, formación de equipos de alto desempeño</strong> y facilitación de talleres y charlas. He trabajado con <strong>líderes de primer nivel en LATAM</strong>, impulsando <strong>transformación cultural, comunicación efectiva y gestión emocional</strong> en contextos corporativos complejos.
            </motion.p>
             <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed border-l-4 border-primary pl-6">
                  Especialista en <strong>diseñar conversaciones de alto impacto</strong>, potenciar la inteligencia relacional y construir confianza en entornos de alta exigencia.
                </motion.p>
          </motion.div>
        </div>
      </section>

       <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
             <h2 className="text-4xl md:text-5xl font-headline">Experiencia Destacada</h2>
             <p className="mt-4 text-lg text-muted-foreground">Logros y Resultados Concretos</p>
          </motion.div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {experience.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} className="h-full">
                        <Card className="h-full text-center flex flex-col p-8 bg-background shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <CardHeader className="items-center p-0">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 mb-6">
                                    {item.icon}
                                </div>
                                <CardTitle className="text-3xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-4 flex-grow">
                                <p className="text-muted-foreground text-lg">{item.description}</p>
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
              className="max-w-3xl mx-auto text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
             <h2 className="text-4xl md:text-5xl font-headline">Mi Filosofía</h2>
          </motion.div>
          <Tabs defaultValue="mission" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-secondary/50 h-auto p-2">
              <TabsTrigger value="mission" className="py-3 text-base">Misión</TabsTrigger>
              <TabsTrigger value="vision" className="py-3 text-base">Visión</TabsTrigger>
              <TabsTrigger value="values" className="py-3 text-base">Valores</TabsTrigger>
            </TabsList>
            <motion.div 
              className="pt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
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
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {values.map((value, index) => (
                        <motion.div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/40" variants={itemVariants}>
                           <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                           <span className="text-muted-foreground">{value}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
             <h2 className="text-4xl md:text-5xl font-headline">Mis Credenciales</h2>
             <p className="mt-4 text-lg text-muted-foreground">Formación y experiencia para acompañarte.</p>
          </motion.div>
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border-t">
                <motion.div
                    variants={itemVariants}
                    className="border-b bg-background"
                >
                    <Card className="shadow-none border-none rounded-none p-8">
                        <CardHeader className="flex flex-row items-center gap-8 p-0">
                            <div className="p-4 rounded-full bg-primary/10 transition-colors">
                                <Award className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">Directora de Membresías en ICF Chile</CardTitle>
                                <CardDescription className="text-base mt-1">Miembro del Directorio (2024)</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0 mt-6">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Como parte del directorio de la <strong>International Coach Federation (ICF) en Chile</strong>, contribuyo a la promoción de los más altos estándares éticos y de calidad en la profesión. La ICF es la mayor organización de coaches del mundo, con +30.000 miembros, 25 años de trayectoria y presencia en 140 países.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

              {credentials.map((credential, index) => (
                <CredentialCard key={index} title={credential.title} description={credential.description} delay={0.1 * (index + 1)} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
