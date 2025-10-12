
'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <section className="py-32 md:py-48 text-center bg-secondary/30">
        <div className="container animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-headline tracking-tight">Contacto</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            ¿Lista para dar el siguiente paso? Conversemos.
          </p>
        </div>
      </section>
      <section className="py-24 md:py-32">
        <motion.div 
            className="container max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="p-4 md:p-8 border-none shadow-2xl bg-card">
            <CardHeader>
              <CardTitle className="text-3xl font-headline">Envíame un mensaje</CardTitle>
              <CardDescription className="text-base pt-2">
                Completa el formulario y te responderé a la brevedad para coordinar una primera conversación.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
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
                  <Textarea id="message" placeholder="Cuéntame un poco sobre tus desafíos y lo que buscas..." rows={6} className="text-base"/>
                </div>
                <Button type="submit" size="lg" className="w-full text-base">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </>
  );
}
