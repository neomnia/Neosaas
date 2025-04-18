"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex gap-6">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-[#CD7F32]",
          pathname === "/" ? "text-[#CD7F32]" : "text-foreground/60",
        )}
      >
        Home
      </Link>
      <Link
        href="/features"
        className={cn(
          "text-sm font-medium transition-colors hover:text-[#CD7F32]",
          pathname === "/features" ? "text-[#CD7F32]" : "text-foreground/60",
        )}
      >
        Features
      </Link>
      <Link
        href="/pricing"
        className={cn(
          "text-sm font-medium transition-colors hover:text-[#CD7F32]",
          pathname === "/pricing" ? "text-[#CD7F32]" : "text-foreground/60",
        )}
      >
        Pricing
      </Link>
      <Link
        href="/appearance"
        className={cn(
          "text-sm font-medium transition-colors hover:text-[#CD7F32]",
          pathname === "/appearance" ? "text-[#CD7F32]" : "text-foreground/60",
        )}
      >
        Appearance
      </Link>
      <Link
        href="/brand"
        className={cn(
          "text-sm font-medium transition-colors hover:text-[#CD7F32]",
          pathname === "/brand" ? "text-[#CD7F32]" : "text-foreground/60",
        )}
      >
        Brand
      </Link>
    </nav>
  )
}
