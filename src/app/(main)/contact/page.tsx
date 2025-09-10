import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Contacto</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            ¿Lista para dar el siguiente paso? Conversemos.
          </p>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderé a la brevedad para coordinar una primera conversación.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Ej: Consulta sobre programa 1:1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Cuéntame un poco sobre tus desafíos y lo que buscas..." rows={6} />
                </div>
                <Button type="submit" className="w-full">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
