import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Build your SaaS business with NeoSaaS
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                All-in-one platform with everything you need to launch, grow, and manage your SaaS business.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/auth/register">
                <Button size="lg" className="gap-1">
                  Get Started <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Built for scale</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our platform is designed to help you scale your SaaS business with ease.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Powerful integrations</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Connect with your favorite tools and services to streamline your workflow.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Responsive support</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team is here to help you succeed at every step of your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
