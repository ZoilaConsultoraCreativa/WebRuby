
'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ImageDimensions } from "@/components/image-dimensions";

const contactImage = getPlaceholderImage("contact-hero");

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <div className="relative min-h-[calc(100vh-theme(height.20))] flex items-center justify-center py-12 md:py-24">
      <Image
        src={contactImage.imageUrl}
        alt={contactImage.description}
        fill
        className="object-cover"
        data-ai-hint={contactImage.imageHint}
        priority
      />
      <ImageDimensions image={contactImage} />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>

      <motion.div 
          className="relative z-10 w-full max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
      >
          <motion.div className="text-center space-y-4 mb-10" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-headline tracking-tight">Contacto</h1>
              <p className="text-lg text-muted-foreground">
                  ¿Lista para dar el siguiente paso? Hablemos sobre cómo puedo ayudarte.
              </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-background/80 border border-border/30 rounded-lg p-6 md:p-8 shadow-2xl">
              <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <Label htmlFor="name" className="text-base">Nombre</Label>
                          <Input id="name" placeholder="Tu nombre" className="h-12 text-base bg-secondary/50"/>
                      </div>
                      <div className="space-y-2">
                          <Label htmlFor="email" className="text-base">Email</Label>
                          <Input id="email" type="email" placeholder="tu@email.com" className="h-12 text-base bg-secondary/50"/>
                      </div>
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">Mensaje</Label>
                      <Textarea id="message" placeholder="Cuéntame sobre tus desafíos..." rows={5} className="text-base bg-secondary/50"/>
                  </div>
                  <Button type="submit" size="lg" className="w-full text-base h-14">Enviar Mensaje</Button>
              </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 pt-8 text-center">
              <h3 className="text-base font-semibold text-foreground">Otras formas de conectar</h3>
              <div className="flex justify-center items-center gap-6 text-sm">
                  <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0WEGseIdr_qscy_KLTOU5-XzSE9iHzTA2G_nVICz2LuuSh9KcmaIYgefx-ZgFxkwffFP1bJ6nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium bg-secondary/50 p-2 rounded-md">
                      <Calendar className="h-5 w-5"/>
                      <span>Agendar Sesión</span>
                  </Link>
                  <a href="mailto:hola@rubyvillarroel.cl" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium bg-secondary/50 p-2 rounded-md">
                      <Mail className="h-5 w-5"/>
                      <span>Enviar Email</span>
                  </a>
              </div>
          </motion.div>
      </motion.div>
    </div>
  );
}
