import Image from 'next/image';
import { Check } from 'lucide-react';

const values = [
  "Humanidad estratégica – Lo emocional como ventaja competitiva.",
  "Claridad valiente – Decir lo que importa, con respeto.",
  "Diseño que potencia el mensaje – Visualidad y estructura como parte del impacto.",
  "Transformación sostenible – Procesos reales, medibles y duraderos.",
  "Coherencia profesional – Ser en privado lo que se enseña en público.",
  "Inspiración aplicable – Ideas que bajan a conversaciones y decisiones reales."
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Sobre Ruby Villarroel</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Mi marca no solo se recuerda: se siente.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 relative w-full h-96 md:h-[500px] rounded-lg shadow-xl">
            <Image
              src="https://picsum.photos/seed/2/600/800"
              alt="Ruby Villarroel"
              fill
              className="object-cover rounded-lg"
              data-ai-hint="professional woman"
            />
          </div>
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Identidad de Marca</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ruby Villarroel es una marca personal que representa comunicación estratégica, liderazgo emocional y acompañamiento transformacional. No enseña desde la teoría, sino desde la experiencia vivida como mujer en entornos corporativos masculinizados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No forma oradoras. Forma líderes con voz propia, capaces de sostener sus ideas, generar impacto y ser recordadas por su forma de decir lo que importa. Ruby transforma conversaciones en relaciones que perduran. Su escucha genera vínculos, su presencia hace sentir a las personas importantes, vistas y valoradas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Misión y Visión</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-primary">Misión</h3>
                <p className="mt-2 text-muted-foreground">
                  Desde mi experiencia como exgerenta en entornos exigentes, acompaño a mujeres líderes a comunicar con confianza, encontrar su voz, establecer límites sin culpa y ejercer autoridad con autenticidad. Mi misión es posicionar la comunicación consciente como herramienta clave para transformar cómo lideramos en contextos técnicos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Visión</h3>
                <p className="mt-2 text-muted-foreground">
                  Ser una referencia latinoamericana en comunicación consciente para mujeres que lideran en industrias técnicas, mostrando que se puede aprender a liderar y comunicar con confianza, generando impacto sin renunciar a la identidad femenina ni a la calidad profesional.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Valores</h2>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1 mr-3" />
                  <span className="text-muted-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
