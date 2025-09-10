"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { transformReviewsToSocialPosts } from "@/ai/flows/transform-reviews-to-social-posts";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  clientReview: z.string().min(20, "El testimonio debe tener al menos 20 caracteres."),
});

type FormData = z.infer<typeof formSchema>;

const brandColors = "#C2573A, #FCF1E4, #BCC9AD, #1A2D3F";
const brandVoiceInstructions = `Tono cálido, humano, empático y cercano. Usa un lenguaje preciso, emocionalmente inteligente y directo. Evita la jerga técnica. El objetivo es inspirar y mostrar la transformación.`;

export function SocialPostGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { clientReview: "" },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setResult(null);
    try {
      const { socialMediaPost } = await transformReviewsToSocialPosts({
        clientReview: values.clientReview,
        brandColors,
        brandVoiceInstructions,
      });
      setResult(socialMediaPost);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo generar el post. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (result) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Post Sugerido (Generado por IA)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
             <div className="p-6 rounded-lg" style={{ background: 'linear-gradient(135deg, hsl(33, 82%, 94%), hsl(14, 30%, 90%))' }}>
              <p className="text-foreground whitespace-pre-wrap font-serif text-lg">{result}</p>
              <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
                  <ThumbsUp className="h-5 w-5 text-primary"/>
                  <span className="text-sm font-semibold text-primary">#LiderazgoConsciente #ComunicacionEstrategica</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button onClick={() => { setResult(null); form.reset(); }}>Generar un nuevo post</Button>
      </div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Generador de Posts</CardTitle>
        <CardDescription>
          Pega un testimonio o reseña de un cliente para transformarlo en un post para redes sociales con la voz de la marca.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="clientReview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Testimonio del Cliente</FormLabel>
                  <FormControl>
                    <Textarea rows={6} placeholder="Pega aquí el testimonio..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generando post...
                </>
              ) : (
                "Generar Post con IA"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
