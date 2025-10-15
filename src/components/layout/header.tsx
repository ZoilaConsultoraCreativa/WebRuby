'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Mí', href: '/about' },
  { label: 'Programas', href: '/programs' },
  { label: 'Para Empresas', href: '/corporate' },
  { label: 'Newsletter', href: '/newsletter' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const NavLink = ({ href, label, className }: { href: string; label:string, className?: string }) => (
    <Link
      href={href}
      className={cn(
        'text-base font-medium transition-colors hover:text-primary',
        pathname === href ? 'text-primary' : 'text-foreground/80',
        className
      )}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60">
      <div className="container flex h-20 items-center">
        <div className="mr-8 hidden md:flex">
          <Logo />
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background w-[80vw]">
               <div className="flex justify-between items-center mb-8 pr-6">
                 <Logo />
                 <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close Menu</span>
                    </Button>
                 </SheetClose>
               </div>
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} className="text-xl px-6 py-2" />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-center md:justify-start">
           <div className="md:hidden">
             <Logo />
           </div>
          <nav className="hidden items-center space-x-8 text-sm md:flex">
            {navItems.map((item) => <NavLink key={item.href} {...item} />)}
          </nav>
        </div>

        <div className="flex items-center justify-end">
          <Button asChild size="lg" className="hidden md:flex">
            <Link href="/contact">Contacto</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
