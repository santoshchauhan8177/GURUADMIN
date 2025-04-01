import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Shield, Clock, Wrench, Lightbulb, Cable } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric-50 to-energy-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-poppins leading-tight">
                  Manage Your Electrical Shop with Ease
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Guru-Electrical admin dashboard helps you track inventory, manage orders, and grow your electrical
                  supplies business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/signup">
                    <Button className="bg-gradient-to-r from-electric-600 to-energy-500 text-white hover:from-electric-700 hover:to-energy-600 h-12 px-8 text-lg">
                      Get Started
                    </Button>
                  </Link>
                 
                </div>
              </div>
              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-electric-500 to-energy-500 rounded-lg blur-lg opacity-30"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop?height=600&width=800"
                      alt="Guru-Electrical Dashboard"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
                Everything You Need to Run Your Electrical Business
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our specialized tools help electrical shop owners manage inventory, track sales, and grow their
                business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-electric-100 dark:bg-electric-900/50 p-3 rounded-lg w-fit mb-6">
                  <Lightbulb className="w-6 h-6 text-electric-600 dark:text-electric-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Electrical Inventory Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Easily track bulbs, switches, wires, and all electrical components with specialized categories and
                  attributes.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-energy-100 dark:bg-energy-900/50 p-3 rounded-lg w-fit mb-6">
                  <Zap className="w-6 h-6 text-energy-600 dark:text-energy-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Order Processing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Streamline your order fulfillment process with automated workflows designed for electrical supply
                  businesses.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-electric-100 dark:bg-electric-900/50 p-3 rounded-lg w-fit mb-6">
                  <Cable className="w-6 h-6 text-electric-600 dark:text-electric-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cable & Wire Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track cable lengths, types, and inventory with specialized tools for electrical supply shops.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-energy-100 dark:bg-energy-900/50 p-3 rounded-lg w-fit mb-6">
                  <Shield className="w-6 h-6 text-energy-600 dark:text-energy-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Secure Transactions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Process payments securely and maintain detailed financial records for your electrical business.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-electric-100 dark:bg-electric-900/50 p-3 rounded-lg w-fit mb-6">
                  <Clock className="w-6 h-6 text-electric-600 dark:text-electric-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Real-time Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get insights into your best-selling electrical products and optimize your inventory accordingly.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-energy-100 dark:bg-energy-900/50 p-3 rounded-lg w-fit mb-6">
                  <Wrench className="w-6 h-6 text-energy-600 dark:text-energy-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Service Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track electrical installation services, repairs, and maintenance jobs all in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric-600 to-energy-500">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6">
              Ready to Electrify Your Business Management?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of electrical shop owners who have streamlined their operations with Guru-Electrical.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button className="bg-white text-electric-600 hover:bg-gray-100 h-12 px-8 text-lg">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8 text-lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

