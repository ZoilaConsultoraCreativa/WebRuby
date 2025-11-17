
'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";
import Link from "next/link";

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
    <div className="container py-16 md:py-24 min-h-[calc(100vh-theme(height.20))] flex items-center">
      <motion.div 
        className="grid md:grid-cols-2 gap-16 md:gap-24 w-full items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-headline tracking-tight">Contacto</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            ¿Lista para dar el siguiente paso? Conversemos sobre cómo puedo ayudarte a potenciar tu liderazgo y comunicación.
          </p>
          <div className="space-y-4 pt-4 border-t border-border/50">
             <h3 className="text-lg font-semibold text-foreground">Otras formas de conectar:</h3>
             <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <Calendar className="h-5 w-5"/>
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0WEGseIdr_qscy_KLTOU5-XzSE9iHzTA2G_nVICz2LuuSh9KcmaIYgefx-ZgFxkwffFP1bJ6nl" target="_blank" rel="noopener noreferrer" className="font-semibold">
                    Agendar una sesión directamente
                </Link>
             </div>
             <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5"/>
                <a href="mailto:hola@rubyvillarroel.cl" className="font-semibold">hola@rubyvillarroel.cl</a>
             </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Nombre</Label>
                <Input id="name" placeholder="Tu nombre" className="h-12 text-base"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" className="h-12 text-base"/>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-base">Asunto</Label>
              <Input id="subject" placeholder="Ej: Consulta sobre programa 1:1" className="h-12 text-base"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">Mensaje</Label>
              <Textarea id="message" placeholder="Cuéntame un poco sobre tus desafíos y lo que buscas..." rows={5} className="text-base"/>
            </div>
            <Button type="submit" size="lg" className="w-full text-base h-14">Enviar Mensaje</Button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
