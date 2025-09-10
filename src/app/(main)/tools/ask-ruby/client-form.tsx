"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { respondInRubyPersona } from "@/ai/flows/respond-in-ruby-persona";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Send, Sparkles, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  query: z.string().min(5, "Tu pregunta debe tener al menos 5 caracteres."),
});

type FormData = z.infer<typeof formSchema>;

type Message = {
  sender: 'user' | 'ai';
  text: string;
};

export function AskRubyForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { query: "" },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    const userMessage: Message = { sender: 'user', text: values.query };
    setMessages(prev => [...prev, userMessage]);
    form.reset();

    try {
      const { response } = await respondInRubyPersona({ query: values.query });
      const aiMessage: Message = { sender: 'ai', text: response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo obtener una respuesta. Inténtalo de nuevo.",
        variant: "destructive",
      });
      setMessages(prev => prev.slice(0, -1)); // Remove user message on error
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardContent className="p-0">
        <div className="flex flex-col h-[600px]">
          <ScrollArea className="flex-grow p-6">
            <div className="space-y-6">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground p-8">
                  <Sparkles className="mx-auto h-8 w-8 mb-2"/>
                  <p>Haz una pregunta sobre liderazgo, comunicación o un desafío que estés enfrentando.</p>
                </div>
              )}
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                  {message.sender === 'ai' && (
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/2/150/150" data-ai-hint="professional woman"/>
                      <AvatarFallback>IA</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`rounded-lg p-3 max-w-[80%] ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                   {message.sender === 'user' && (
                    <Avatar>
                      <AvatarFallback><User /></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
               {isLoading && (
                  <div className="flex items-start gap-3">
                     <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/2/150/150" data-ai-hint="professional woman"/>
                      <AvatarFallback>IA</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg p-3 bg-secondary flex items-center">
                        <Loader2 className="h-5 w-5 text-muted-foreground animate-spin"/>
                    </div>
                  </div>
              )}
            </div>
          </ScrollArea>
          <div className="p-4 border-t bg-background">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="query"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input placeholder="Escribe tu pregunta aquí..." {...field} disabled={isLoading} autoComplete="off" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
