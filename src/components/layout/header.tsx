'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Mí', href: '/about' },
  { label: 'Programas', href: '/programs' },
  { label: 'Para Empresas', href: '/corporate' },
];

export default function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string; label:string }) => (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        pathname === href ? 'text-primary' : 'text-foreground/80'
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mb-6 flex items-center">
                <Logo />
              </Link>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-primary">
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-center md:justify-start">
           <div className="md:hidden">
             <Logo />
           </div>
          <nav className="hidden items-center space-x-6 text-sm md:flex">
            {navItems.map((item) => <NavLink key={item.href} {...item} />)}
          </nav>
        </div>

        <div className="flex items-center justify-end">
          <Button asChild>
            <Link href="/contact">Contactar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
