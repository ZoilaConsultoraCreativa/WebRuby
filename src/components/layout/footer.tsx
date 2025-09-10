import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { Logo } from '../logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Comunicación estratégica y liderazgo emocional.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-headline text-sm font-semibold">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">Sobre Mí</Link></li>
                <li><Link href="/programs" className="text-muted-foreground hover:text-primary">Programas</Link></li>
                <li><Link href="/corporate" className="text-muted-foreground hover:text-primary">Para Empresas</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-sm font-semibold">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Términos de Servicio</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ruby Villarroel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
