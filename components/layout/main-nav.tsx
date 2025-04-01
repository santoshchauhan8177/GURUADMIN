"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainNav() {

  return (
    <div className="hidden md:flex gap-6 items-center">
     

      <div className="flex items-center gap-2">
        <Link href="/login" passHref>
          <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
            Log in
          </Button>
        </Link>
        <Link href="/signup" passHref>
          <Button className="bg-gradient-to-r from-electric-600 to-energy-500 text-white hover:from-electric-700 hover:to-energy-600">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  )
}

