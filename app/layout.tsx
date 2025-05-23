import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import { NavItem } from '@/components/nav-links';
import { HomeIcon, LineChart, Package, Package2, PanelLeft, Settings, ShoppingCart, Users2, User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Footer2 } from '@/components/footer2';
import { ScrollHeader } from '@/components/scroll-header';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Supermarket Inventory Management',
  description: 'Manage your supermarket inventory efficiently with our comprehensive inventory management system.',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      lang="en"
      className={` dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <UserProvider userPromise={userPromise}>
              {children}
            </UserProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}

