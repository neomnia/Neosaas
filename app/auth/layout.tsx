import type React from "react"
import type { Metadata } from "next/metadata"
import Link from "next/link"
import { MinimalFooter } from "@/components/minimal-footer"

export const metadata: Metadata = {
  title: "Authentication - NeoSaaS",
  description: "Authentication pages for NeoSaaS",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl">
            Neo<span className="text-primary">SaaS</span>
          </span>
        </Link>
      </div>
      <div className="flex-1">{children}</div>
      <MinimalFooter />
    </div>
  )
}
