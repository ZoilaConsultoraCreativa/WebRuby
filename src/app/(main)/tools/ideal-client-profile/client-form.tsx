"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateIdealClientProfile, IdealClientProfileOutput } from "@/ai/flows/generate-ideal-client-profile";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  leadershipExperience: z.string().min(20, "Por favor, detalla más tu experiencia."),
  communicationChallenges: z.string().min(20, "Por favor, detalla más tus desafíos."),
  aspirations: z.string().min(20, "Por favor, detalla más tus aspiraciones."),
  previousSolutions: z.string().min(10, "Describe brevemente soluciones anteriores."),
  idealSupport: z.string().min(10, "Describe brevemente tu soporte ideal."),
});

type FormData = z.infer<typeof formSchema>;

export function IdealClientProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IdealClientProfileOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      leadershipExperience: "",
      communicationChallenges: "",
      aspirations: "",
      previousSolutions: "",
      idealSupport: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setResult(null);
    try {
      const output = await generateIdealClientProfile(values);
      setResult(output);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo generar el perfil. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (result) {
    return (
      <Card className="max-w-4xl mx-auto shadow-xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Tu Perfil de Cliente Ideal (Generado por IA)</CardTitle>
          </div>
          <CardDescription>
            Este es un análisis preliminar basado en tus respuestas para ayudarte a reflexionar sobre tu momento actual.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-bold text-lg font-headline text-primary">Resumen del Perfil</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">{result.profileSummary}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg font-headline text-primary">Evaluación de Adecuación</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">{result.suitabilityAssessment}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg font-headline text-primary">Recomendaciones Clave</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">{result.keyRecommendations}</p>
          </div>
          <Button onClick={() => setResult(null)}>Generar un nuevo perfil</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Cuestionario de Autoevaluación</CardTitle>
        <CardDescription>
          Tómate unos minutos para responder con honestidad. Tus respuestas son confidenciales y se usarán para generar tu perfil.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="leadershipExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experiencia de Liderazgo</FormLabel>
                  <FormControl>
                    <Textarea rows={4} placeholder="Describe tu experiencia como líder, los equipos que has dirigido y los desafíos que has enfrentado." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="communicationChallenges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desafíos de Comunicación</FormLabel>
                  <FormControl>
                    <Textarea rows={4} placeholder="¿Cuáles son los mayores desafíos de comunicación que enfrentas en tu rol?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aspirations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aspiraciones Profesionales</FormLabel>
                  <FormControl>
                    <Textarea rows={4} placeholder="¿Cuáles son tus aspiraciones y qué tipo de impacto quieres generar?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="previousSolutions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soluciones Anteriores</FormLabel>
                  <FormControl>
                    <Input placeholder="¿Qué has intentado antes para abordar tus desafíos?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="idealSupport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soporte Ideal</FormLabel>
                  <FormControl>
                    <Input placeholder="¿Qué tipo de apoyo o guía crees que sería más beneficioso para ti?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generando perfil...
                </>
              ) : (
                "Generar mi Perfil con IA"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
