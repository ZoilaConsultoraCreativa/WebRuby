
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { getNewsletterArticles, type NewsletterArticle } from './actions';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';

// Helper to build the proxy URL
const getProxyImageUrl = (url: string) => {
  if (!url || url.startsWith('/') || !url.startsWith('http')) {
    return url; // Don't proxy local or invalid URLs
  }
  return `/api/image-proxy?url=${encodeURIComponent(url)}`;
};

function ArticleCard({ article, onClick }: { article: NewsletterArticle, onClick: () => void }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={getProxyImageUrl(article.image)}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl h-16">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{article.summary}</CardDescription>
      </CardContent>
      <div className="p-6 pt-0">
        <Button variant="link" className="px-0 font-bold" onClick={onClick}>
          Leer más
        </Button>
      </div>
    </Card>
  );
}

function FeaturedArticleCard({ article, onClick }: { article: NewsletterArticle, onClick: () => void }) {
  return (
    <Card className="overflow-hidden shadow-2xl md:grid md:grid-cols-2">
      <div className="relative h-80 md:h-auto">
        <Image
          src={getProxyImageUrl(article.image)}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-8 md:p-12">
        <h3 className="text-sm uppercase text-primary font-semibold tracking-wider">Artículo Destacado</h3>
        <h2 className="text-3xl md:text-4xl font-headline mt-4">{article.title}</h2>
        <p className="text-muted-foreground mt-6 text-lg">{article.summary}</p>
        <Button variant="link" className="px-0 font-bold mt-6 text-base" onClick={onClick}>
          Leer artículo completo
        </Button>
      </div>
    </Card>
  );
}

function ArticleSkeleton() {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <Skeleton className="h-64 w-full" />
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-8 w-1/2 mt-2" />
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
      <div className="p-6 pt-0">
        <Skeleton className="h-6 w-24" />
      </div>
    </Card>
  )
}

function FeaturedArticleSkeleton() {
    return (
        <Card className="overflow-hidden shadow-2xl md:grid md:grid-cols-2">
            <Skeleton className="h-80 md:h-auto w-full" />
            <div className="p-8 md:p-12 space-y-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-8 w-3/4 mt-2" />
                <Skeleton className="h-6 w-full mt-4" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-8 w-32 mt-6" />
            </div>
        </Card>
    )
}


export default function NewsletterPage() {
  const [articles, setArticles] = useState<NewsletterArticle[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<NewsletterArticle | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsletterArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        const allArticles = await getNewsletterArticles();
        const regular = allArticles.filter(a => a.status === 'MOSTRAR');
        const featured = allArticles.find(a => a.status === 'DESTACAR') || null;
        setArticles(regular);
        setFeaturedArticle(featured);
      } catch (e: any) {
        console.error(e);
        setError(e.message || "No se pudieron cargar los artículos. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

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
      <section className="py-20 md:py-24 text-center bg-secondary/30">
        <div className="container animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-headline tracking-tight">Artículos de Interés</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Recursos, reflexiones y herramientas para potenciar tu liderazgo.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
           {loading ? (
             <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                  {[...Array(3)].map((_, i) => (
                    <motion.div key={i} variants={itemVariants}>
                      <ArticleSkeleton />
                    </motion.div>
                  ))}
              </motion.div>
           ) : error ? (
              <div className="text-center text-red-500 bg-red-100 border border-red-400 rounded p-4">{error}</div>
           ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {articles.map((article) => (
                <motion.div key={article.id} variants={itemVariants} className="h-full">
                  <ArticleCard article={article} onClick={() => setSelectedArticle(article)} />
                </motion.div>
              ))}
            </motion.div>
           )}
        </div>
      </section>

      <section className="py-24 md:py-24 bg-secondary/30">
        <div className="container">
           {loading ? (
             <FeaturedArticleSkeleton />
           ) : error ? null : featuredArticle ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <FeaturedArticleCard article={featuredArticle} onClick={() => setSelectedArticle(featuredArticle)} />
            </motion.div>
           ) : null}
        </div>
      </section>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-5xl p-0">
          {selectedArticle && (
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full min-h-[400px]">
                    <Image
                    src={getProxyImageUrl(selectedArticle.image)}
                    alt={selectedArticle.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className="flex flex-col">
                    <DialogHeader className="p-8 pb-4">
                        <DialogTitle className="text-3xl font-headline">{selectedArticle.title}</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[50vh] px-8">
                        <DialogDescription className="pr-4 pb-8 text-lg text-foreground/80 whitespace-pre-line">
                        {selectedArticle.content}
                        </DialogDescription>
                    </ScrollArea>
                    {selectedArticle.externalLink && (
                        <div className="px-8 pb-8 pt-4 border-t mt-auto">
                        <Button asChild>
                            <Link href={selectedArticle.externalLink} target="_blank" rel="noopener noreferrer">
                            Ver fuente original
                            </Link>
                        </Button>
                        </div>
                    )}
                </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
