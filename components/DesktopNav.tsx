'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

export function DesktopNav() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 100], [0, -100]);
  const contentY = useTransform(scrollY, [0, 100], [0, -50]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-40 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-white/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 dark:bg-gray-950/80"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute inset-0 flex items-center"
        style={{ y: contentY }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold"
            >
              <span className="text-xl">Interfood 3 Hermanos</span>
            </Link>
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <Link href="/sign-in">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 