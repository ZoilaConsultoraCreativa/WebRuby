
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { getPlaceholderImage, ImagePlaceholder } from '@/lib/placeholder-images';
import { ImageDimensions } from '@/components/image-dimensions';

type Article = {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: ImagePlaceholder;
};

const articles: Article[] = [
  {
    id: 'article-1',
    title: 'El Arte de la Escucha Activa en el Liderazgo',
    summary: 'Descubre cómo la escucha activa puede transformar la dinámica de tu equipo, fomentar la confianza y mejorar la toma de decisiones.',
    content: 'La escucha activa va más allá de oír palabras; implica comprender las emociones y las intenciones detrás del mensaje. En un rol de liderazgo, dominar esta habilidad no es un lujo, es una necesidad. Permite identificar problemas subyacentes, validar las contribuciones del equipo y construir una cultura de seguridad psicológica donde las ideas fluyen libremente. Un líder que escucha activamente no solo resuelve conflictos de manera más eficaz, sino que también inspira lealtad y compromiso, convirtiendo a su equipo en una unidad más cohesionada y productiva.',
    image: getPlaceholderImage('newsletter-1'),
  },
  {
    id: 'article-2',
    title: 'Comunicación No Verbal: El Lenguaje Silencioso del Poder',
    summary: 'Tu cuerpo habla antes que tú. Aprende a alinear tu lenguaje corporal con tu mensaje para proyectar autoridad y confianza.',
    content: 'Mucho antes de que pronuncies una palabra, tu postura, tus gestos y tu contacto visual ya han comunicado una gran cantidad de información. En el mundo corporativo, la coherencia entre tu mensaje verbal y tu comunicación no verbal es crucial para proyectar credibilidad y liderazgo. Este artículo explora cómo puedes utilizar conscientemente tu lenguaje corporal para afirmar tu presencia en reuniones, negociar con mayor eficacia y liderar con una autoridad natural que inspira respeto. Dominar este lenguaje silencioso es un diferenciador clave para cualquier mujer líder en un entorno competitivo.',
    image: getPlaceholderImage('newsletter-2'),
  },
  {
    id: 'article-3',
    title: 'Feedback Constructivo: Cómo Impulsar el Crecimiento Sin Generar Resistencia',
    summary: 'Dar feedback es una de las tareas más desafiantes del liderazgo. Te enseñamos un método para hacerlo de forma efectiva y empática.',
    content: 'El feedback es el motor del crecimiento profesional, pero entregarlo de manera incorrecta puede desmotivar y generar resentimiento. El secreto está en enfocar la conversación en el comportamiento y su impacto, no en la persona. Se trata de crear un diálogo bidireccional donde el objetivo es el desarrollo mutuo. Aprende a estructurar tus conversaciones de feedback utilizando el modelo Situación-Comportamiento-Impacto, y descubre cómo crear un entorno donde tu equipo no solo acepte la retroalimentación, sino que la busque activamente para mejorar su desempeño.',
    image: getPlaceholderImage('newsletter-3'),
  },
];

const featuredArticle: Article = {
  id: 'featured-article',
  title: 'Ley Karin: Más Allá del Cumplimiento, una Oportunidad para la Transformación Cultural',
  summary: 'La implementación de la Ley Karin representa un punto de inflexión para las organizaciones en Chile. Lejos de ser una simple obligación normativa, esta ley es una invitación a revisar y fortalecer las bases de la cultura organizacional, poniendo el foco en la seguridad psicológica y el respeto como pilares fundamentales del entorno laboral.',
  content: 'La Ley Karin no es solo un protocolo a seguir; es un catalizador para un cambio profundo. Las empresas que la abracen como una oportunidad estratégica podrán diferenciarse, atraer y retener al mejor talento y construir equipos más resilientes e innovadores. Se trata de pasar de un enfoque reactivo a uno proactivo, donde el liderazgo modela activamente la comunicación consciente, la empatía y la resolución constructiva de conflictos. \n\nAcompañar a los líderes en este proceso es clave. Implica dotarlos de herramientas para gestionar conversaciones difíciles, identificar sesgos inconscientes y fomentar un clima de confianza donde cada miembro del equipo se sienta seguro para expresarse. En última instancia, una cultura que cumple con la Ley Karin no solo previene el acoso, sino que libera el potencial humano y potencia los resultados del negocio.',
  image: getPlaceholderImage('corporate-safe-workplace'),
};

export default function NewsletterPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

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
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <section className="py-24 md:py-32 text-center bg-secondary/30">
        <div className="container animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-headline tracking-tight">Artículos de Interés</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Recursos, reflexiones y herramientas para potenciar tu liderazgo.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {articles.map((article) => (
              <motion.div key={article.id} variants={itemVariants} className="h-full">
                <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-64 w-full">
                    <Image
                      src={article.image.imageUrl}
                      alt={article.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={article.image.imageHint}
                    />
                    <ImageDimensions image={article.image} />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl h-20">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base">{article.summary}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="link" className="px-0 font-bold" onClick={() => setSelectedArticle(article)}>
                      Leer más
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Card className="overflow-hidden shadow-2xl md:grid md:grid-cols-2">
              <div className="relative h-80 md:h-auto">
                <Image
                  src={featuredArticle.image.imageUrl}
                  alt={featuredArticle.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={featuredArticle.image.imageHint}
                />
                <ImageDimensions image={featuredArticle.image} />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-sm uppercase text-primary font-semibold tracking-wider">Artículo Destacado</h3>
                <h2 className="text-3xl md:text-4xl font-headline mt-4">{featuredArticle.title}</h2>
                <p className="text-muted-foreground mt-6 text-lg">{featuredArticle.summary}</p>
                <Button variant="link" className="px-0 font-bold mt-6 text-base" onClick={() => setSelectedArticle(featuredArticle)}>
                  Leer artículo completo
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl p-0">
          {selectedArticle && (
            <>
              <div className="relative h-80">
                <Image
                  src={selectedArticle.image.imageUrl}
                  alt={selectedArticle.image.description}
                  fill
                  className="object-cover"
                />
              </div>
              <DialogHeader className="p-8">
                <DialogTitle className="text-3xl font-headline">{selectedArticle.title}</DialogTitle>
              </DialogHeader>
              <DialogDescription className="px-8 pb-8 text-lg text-foreground/80 whitespace-pre-line">
                {selectedArticle.content}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
