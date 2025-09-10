import { IdealClientProfileForm } from "./client-form";

export default function IdealClientProfilePage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Herramienta: Perfil de Cliente Ideal</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Descubre si te identificas con el perfil de líderes que más se benefician de mi acompañamiento. Esta herramienta de IA te dará un análisis preliminar.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <IdealClientProfileForm />
        </div>
      </section>
    </>
  );
}
