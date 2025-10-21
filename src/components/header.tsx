import { Cookie } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-primary/90 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <Cookie className="h-7 w-7 text-yellow-300" />
          <h1 className="text-xl font-bold text-primary-foreground">
            Flips Insights
          </h1>
        </Link>
      </div>
    </header>
  );
}
