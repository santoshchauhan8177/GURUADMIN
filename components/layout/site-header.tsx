import Link from "next/link"
import { MainNav } from "@/components/layout/main-nav"
export function SiteHeader() {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
          <img src="guru logo.jpg" className="h-10 w-auto" alt="Guru-Electrical Logo" /> {/* Fixed logo usage */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">Guru-Electrical</h1>
        </Link>
      </div>
      <MainNav />
    </header>
  )
}

