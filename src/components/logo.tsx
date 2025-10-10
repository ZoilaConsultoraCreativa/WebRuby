import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <span className="text-2xl font-bold font-headline text-primary group-hover:text-primary/80 transition-colors">
        Ruby Villarroel
      </span>
    </Link>
  );
}
