"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import * as React from "react"
 
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Produce",
    href: "/categories/produce",
    description:
      "Fresh fruits, vegetables, and organic produce section.",
  },
  {
    title: "Dairy & Eggs",
    href: "/categories/dairy",
    description:
      "Milk, cheese, yogurt, and fresh eggs.",
  },
  {
    title: "Meat & Seafood",
    href: "/categories/meat",
    description:
      "Fresh meat, poultry, seafood, and deli items.",
  },
  {
    title: "Bakery",
    href: "/categories/bakery",
    description: "Fresh bread, pastries, and custom cakes.",
  },
  {
    title: "Frozen Foods",
    href: "/categories/frozen",
    description:
      "Frozen meals, ice cream, and frozen vegetables.",
  },
  {
    title: "Pantry",
    href: "/categories/pantry",
    description:
      "Canned goods, pasta, rice, and dry goods.",
  },
]

export function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition <= 100);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm dark:bg-gray-950/80 mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-center h-16">
        <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="border-r-2 border-white text-white">
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Three Brothers Market
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your neighborhood grocery store with fresh, quality products and exceptional service.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/weekly-specials" title="Weekly Specials">
                Check out our latest deals and promotions.
              </ListItem>
              <ListItem href="/new-arrivals" title="New Arrivals">
                Discover our newest products and seasonal items.
              </ListItem>
              <ListItem href="/recipes" title="Recipes & Ideas">
                Get inspired with our recipe collection and meal ideas.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="border-r-2 border-white text-white">
          <NavigationMenuTrigger>Departments</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="border-r-2 border-white text-white !rounded-none">
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !rounded-none`}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
        </div>
      </div>
       
    </motion.div>
  );
} 

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
