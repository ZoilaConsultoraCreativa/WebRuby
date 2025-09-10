import { AskRubyForm } from "./client-form";

export default function AskRubyPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Herramienta: Pregúntale a Ruby (IA)</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Recibe una orientación instantánea. Esta IA ha sido entrenada para responder con la voz, empatía y estilo de Ruby Villarroel.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <AskRubyForm />
        </div>
      </section>
    </>
  );
}
