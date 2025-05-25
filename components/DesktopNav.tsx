'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Search } from 'lucide-react';

import Link from "next/link";
import { Input } from "./ui/input";

export function DesktopNav() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 100], [0, -100]);
  const contentY = useTransform(scrollY, [0, 100], [0, -50]);
  const logo = {
    src: "/images/hermanos_logo.png",
    alt: "blocks for shadcn/ui",
    url: "https://www.shadcnblocks.com",
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-40 overflow-hidden block md:visible">
      <motion.div 
        className="absolute inset-0 bg-white backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 dark:bg-gray-950/80"
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
              <div className="flex items-center gap-2 lg:justify-start">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 bg-primary p-2 rounded-lg object-cover invisible md:visible"
                  />
              </div>
            </Link>
            <div className="flex-1" />
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search inventory..."
                className="flex-1"
              />
            </div>
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