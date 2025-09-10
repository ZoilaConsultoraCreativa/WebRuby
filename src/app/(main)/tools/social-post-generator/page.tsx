import { SocialPostGeneratorForm } from "./client-form";

export default function SocialPostGeneratorPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Herramienta: Generador de Posts para Redes</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Ahorra tiempo y mantén la coherencia de tu marca. Esta herramienta de IA transforma testimonios en contenido valioso para tus redes sociales.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SocialPostGeneratorForm />
        </div>
      </section>
    </>
  );
}
