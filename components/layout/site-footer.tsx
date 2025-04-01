import Link from "next/link"
export function SiteFooter() {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
         
          <img src="guru logo.jpg" className="h-8 w-auto" alt="Guru-Electrical Logo" /> {/* Fixed logo usage */}
          
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2023 Guru-Electrical. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-gray-600 hover:text-electric-600 dark:text-gray-400 dark:hover:text-electric-400"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm text-gray-600 hover:text-electric-600 dark:text-gray-400 dark:hover:text-electric-400"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact-us"
            className="text-sm text-gray-600 hover:text-electric-600 dark:text-gray-400 dark:hover:text-electric-400"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}

