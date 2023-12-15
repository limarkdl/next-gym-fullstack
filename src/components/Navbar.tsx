"use client"

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

const tools: { title: string; href: string; description: string }[] = [
  {
    title: "BMI Calculator",
    href: "/dashboard/bmi",
    description:
      "Calculates your BMI.",
  },
  {
    title: "Water Logger",
    href: "/dashboard/water-logger",
    description:
      "Logs your water intake.",
  },
  {
    title: "Calorie Calculator",
    href: "/dashboard/calorie-calculator",
    description:
      "Calculates your expected daily calorie intake.",
  },
  {
    title: "Statistics",
    href: "/dashboard/statistics",
    description: "View your statistics.",
  },
  {
    title: "Exercise Catalog",
    href: "/dashboard/exercise-catalog",
    description:
      "View a catalog of exercises.",
  },
  {
    title: "Measurements",
    href: "/dashboard/measurements",
    description:
      "Your body measurements.",
  },
]

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light">Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {tools.map((tool) => (
                <ListItem
                  key={tool.title}
                  title={tool.title}
                  href={tool.href}
                >
                  {tool.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light">About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[300px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              
              <ListItem href="/docs" title="Introduction">
                Documentation and overview of the functionality. 
              </ListItem>
              <ListItem href="/docs/installation" title="Legal Info">
                How your data is being stored and used.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Authors">
                Developers, Sources
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
