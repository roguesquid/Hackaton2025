import { Header } from '@/components/header';
import { NavMenu } from '@/components/nav-menu';
import { TopFlavors } from '@/components/top-flavors';
import { FocusGroupUpload } from '@/components/focus-group-upload';

export const dynamic = 'force-dynamic';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="space-y-16">
          <TopFlavors />
          <NavMenu />
        </div>
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        Desarrollado por Jorge Ramírez, Luis Martín, Massiel Perozo
      </footer>
    </div>
  );
}
