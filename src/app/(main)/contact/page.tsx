
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
    <div className="py-24 md:py-32">
        <motion.div 
            className="container max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="text-center space-y-4 mb-12" variants={itemVariants}>
                <h1 className="text-4xl md:text-5xl font-headline tracking-tight">Contacto</h1>
                <p className="text-lg text-muted-foreground">
                    ¿Lista para dar el siguiente paso? Hablemos sobre cómo puedo ayudarte.
                </p>
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
                        <Label htmlFor="message" className="text-base">Mensaje</Label>
                        <Textarea id="message" placeholder="Cuéntame sobre tus desafíos..." rows={5} className="text-base"/>
                    </div>
                    <Button type="submit" size="lg" className="w-full text-base h-14">Enviar Mensaje</Button>
                </form>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-10 mt-10 border-t border-border/50 text-center">
                <h3 className="text-base font-semibold text-foreground">Otras formas de conectar</h3>
                <div className="flex justify-center items-center gap-6 text-sm">
                    <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0WEGseIdr_qscy_KLTOU5-XzSE9iHzTA2G_nVICz2LuuSh9KcmaIYgefx-ZgFxkwffFP1bJ6nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                        <Calendar className="h-5 w-5"/>
                        <span>Agendar Sesión</span>
                    </Link>
                    <a href="mailto:hola@rubyvillarroel.cl" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                        <Mail className="h-5 w-5"/>
                        <span>Enviar Email</span>
                    </a>
                </div>
            </motion.div>
        </motion.div>
    </div>
  );
}
