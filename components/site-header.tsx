import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image src="/images/logo_neolux.svg" alt="NeoSaaS Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl">
              Neo<span className="text-[#CD7F32]">SaaS</span>
            </span>
          </Link>
          <MainNav />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/auth/login">
            <Button variant="ghost" className="text-sm">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className="bg-[#CD7F32] hover:bg-[#B26B27] text-white text-sm border-none">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
