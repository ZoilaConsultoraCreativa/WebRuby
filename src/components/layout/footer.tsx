import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { Logo } from '../logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary/30">
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-4 md:text-left">
          <div className="space-y-6 md:col-span-1 flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-base text-muted-foreground max-w-xs">
              Comunicación estratégica y liderazgo emocional.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://www.instagram.com/rubyvillarroelg/" aria-label="Instagram" className="p-2 rounded-full hover:bg-secondary/50 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="YouTube" className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
                <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 text-base sm:grid-cols-3 md:col-span-3">
            <div className="space-y-4">
              <h4 className="font-headline text-lg font-semibold">Navegación</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Sobre Mí</Link></li>
                <li><Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">Programas</Link></li>
                <li><Link href="/corporate" className="text-muted-foreground hover:text-primary transition-colors">Para Empresas</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-lg font-semibold">Recursos</h4>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-lg font-semibold">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos de Servicio</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ruby Villarroel. Todos los derechos reservados.</p>
          <p className="mt-2">Sitio creado con ♥ por Zoila Consultora Creativa.</p>
        </div>
      </div>
    </footer>
  );
}
