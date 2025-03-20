import Link from "next/link"
import { MainNav } from "@/components/layout/main-nav"
import { Zap } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-electric-600 to-energy-500 text-white p-2 rounded-lg">
            <Zap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Guru-Electrical</h1>
        </Link>
      </div>
      <MainNav />
    </header>
  )
}

