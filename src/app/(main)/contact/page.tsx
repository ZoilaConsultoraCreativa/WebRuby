
'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ImageDimensions } from "@/components/image-dimensions";

const contactImage = getPlaceholderImage("contact-hero");

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
)

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
      <div className="absolute inset-0 bg-background/60"></div>

      <motion.div 
          className="relative z-10 w-full max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
      >
          <motion.div className="text-center space-y-4 mb-10" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-headline tracking-tight">Contacto</h1>
              <p className="text-lg text-muted-foreground">
                  ¿Lista para dar el siguiente paso?
              </p>
              <p className="text-lg text-muted-foreground">
                  Hablemos sobre cómo puedo ayudarte.
              </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-background/80 border border-border/30 rounded-lg p-6 md:p-8 shadow-2xl backdrop-blur-sm">
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
              <div className="flex justify-center items-center gap-4 text-sm flex-wrap">
                  <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0WEGseIdr_qscy_KLTOU5-XzSE9iHzTA2G_nVICz2LuuSh9KcmaIYgefx-ZgFxkwffFP1bJ6nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium bg-secondary/50 p-2 rounded-md">
                      <Calendar className="h-5 w-5"/>
                      <span>Agenda Sesión</span>
                  </Link>
                  <a href="http://l.rubyvillarroel.cl/Escribeme" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium bg-secondary/50 p-2 rounded-md">
                      <WhatsAppIcon className="h-5 w-5"/>
                      <span>WhatsApp</span>
                  </a>
              </div>
          </motion.div>
      </motion.div>
    </div>
  );
}
