import { Button } from "@/components/ui/button";
import { Footer2 } from "@/components/footer2";
import { ScrollHeader } from "@/components/scroll-header";
import { HomeIcon, LineChart, Package, Package2, PanelLeft, Settings, ShoppingCart, Users2, User, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { DesktopNav } from "@/components/DesktopNav";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { motion } from "motion/react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-muted/40">
      <DesktopNav />
      <ScrollHeader />
      <div className="pt-10">
          <MobileNav />
        <main className="">
          {children}
        </main>
      </div>
      <Footer2/>
    </main>
  );
}

function MobileNav() {
  const logo = {
    src: "/images/hermanos_logo.png",
    alt: "blocks for shadcn/ui",
    url: "https://www.shadcnblocks.com",
  }

  return (
    <div className=" h-20 flex flex-row items-center  w-full bg-white/50 backdrop-blur-sm md:hidden  border-gray-200 dark:border-gray-800 dark:bg-gray-950/80 sticky top-0 z-50   justify-center   sm:static  visible">
      
      <Sheet >
        
        <SheetTrigger asChild className="absolute top-4 left-4">
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 bg-primary p-2 rounded-lg"
                  />
                </div>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 mb-6">
              <Search className="h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search inventory..."
                className="flex-1"
              />
            </div>
      
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <HomeIcon className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="/categories"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Shop
              </Link>
              <Link
                href="/departments"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                Departments
              </Link>
              
              <Link
                href="/sign-in"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <User className="h-5 w-5" />
                Sign In
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      <Link
                href="/"
                className="flex items-center gap-2 font-semibold place-self-center text-center justify-self-center"
              >
                <div className="flex items-center gap-2 place-self-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 bg-primary p-2 rounded-lg"
                  />
                </div>
              </Link>
    </div>
  );
} 