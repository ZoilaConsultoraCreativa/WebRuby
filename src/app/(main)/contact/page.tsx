
'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Calendar, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ImageDimensions } from "@/components/image-dimensions";
import { useSearchParams } from 'next/navigation';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendEmail, type SendEmailFormState } from './actions';
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactImage = getPlaceholderImage("contact-hero");

// Define the schema for the form data
const sendEmailSchema = z.object({
  name: z.string().min(2, { message: 'Tu nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'Tu mensaje debe tener al menos 10 caracteres.' }),
});

type ValidationSchema = z.infer<typeof sendEmailSchema>;


const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
)

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full text-base h-14" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : 'Enviar Mensaje'}
    </Button>
  );
}

function ContactPageComponent() {
  const { toast } = useToast();
  const [formState, formAction] = useFormState<SendEmailFormState, FormData>(sendEmail, {
    message: '',
    status: 'idle',
  });

  const searchParams = useSearchParams();
  const messageParam = searchParams.get('message');

  const { register, formState: { errors }, setValue, reset } = useForm<ValidationSchema>({
    resolver: zodResolver(sendEmailSchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      message: messageParam || '',
    }
  });
  
  useEffect(() => {
    if (messageParam) {
      setValue('message', messageParam);
    }
  }, [messageParam, setValue]);

  useEffect(() => {
    if (formState.status === 'success') {
      toast({
        title: "Mensaje Enviado",
        description: formState.message,
      });
      reset();
    } else if (formState.status === 'error') {
      toast({
        variant: "destructive",
        title: "Error",
        description: formState.message,
      });
    }
  }, [formState, toast, reset]);

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
    <div className="relative min-h-[calc(100vh-theme(height.20))] flex items-center justify-center">
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
          <motion.div className="text-center space-y-2 mb-8" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-headline tracking-tight">Contacto</h1>
              <p className="text-lg text-muted-foreground">
                  ¿Lista para dar el siguiente paso? Hablemos.
              </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-background/80 border border-border/30 rounded-lg p-6 md:p-8 shadow-2xl backdrop-blur-sm">
              <form action={formAction} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                          <Label htmlFor="name" className="text-base">Nombre</Label>
                          <Input id="name" {...register('name')} placeholder="Tu nombre" className="h-12 text-base bg-secondary/50"/>
                          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                          <Label htmlFor="email" className="text-base">Email</Label>
                          <Input id="email" type="email" {...register('email')} placeholder="tu@email.com" className="h-12 text-base bg-secondary/50"/>
                          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                      </div>
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">Mensaje</Label>
                      <Textarea id="message" {...register('message')} placeholder="Cuéntame sobre tus desafíos..." rows={4} className="text-base bg-secondary/50"/>
                      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                  </div>
                  <SubmitButton />
              </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3 pt-6 text-center">
              <h3 className="text-base font-semibold text-foreground">Otras formas de conectar</h3>
              <div className="flex justify-center items-center gap-4 text-sm flex-wrap">
                  <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0WEGseIdr_qscy_KLTOU5-XzSE9iHzTA2G_nVICz2LuuSh9KcmaIYgefx-ZgFxkwffFP1bJ6nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium bg-secondary/50 p-2 rounded-md">
                      <Calendar className="h-5 w-5"/>
                      <span>Agenda Sesión</span>
                  </Link>
                  <a href="http://l.rubyvillarroel.cl/Escribeme" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium bg-secondary/50 p-2 rounded-md">
                      <WhatsAppIcon className="h-5 w-5"/>
                      <span>Envía WhatsApp</span>
                  </a>
              </div>
          </motion.div>
      </motion.div>
    </div>
  );
}

export default function ContactPage() {
    return (
        <ContactPageComponent />
    );
}
