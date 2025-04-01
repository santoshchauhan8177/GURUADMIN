"use client"
import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 flex flex-col">
      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        {/* Rest of the content remains the same */}
        <div className="max-w-7xl mx-auto">
          {/* Pricing Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that's right for your business
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-slate-700 p-1 rounded-lg inline-flex">
              <button className="px-4 py-2 rounded-md bg-white dark:bg-slate-600 text-gray-900 dark:text-white font-medium shadow-sm">
                Monthly
              </button>
              <button className="px-4 py-2 rounded-md text-gray-600 dark:text-gray-300 font-medium">
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-gray-200 dark:bg-slate-800 dark:border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins dark:text-white">Starter</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Perfect for small businesses just getting started
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">₹999</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <PricingFeature feature="Up to 100 products" />
                  <PricingFeature feature="Basic analytics" />
                  <PricingFeature feature="1 admin user" />
                  <PricingFeature feature="Email support" />
                  <PricingFeature feature="Order management" />
                  <PricingFeature feature="Inventory tracking" />
                  <PricingFeature feature="Standard reports" />
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Professional Plan */}
            <Card className="border-teal-200 dark:border-teal-800 bg-gradient-to-b from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 shadow-xl relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gray-900 dark:text-white">Professional</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Ideal for growing businesses with more needs
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">₹2,499</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <PricingFeature feature="Up to 1,000 products" />
                  <PricingFeature feature="Advanced analytics" />
                  <PricingFeature feature="5 admin users" />
                  <PricingFeature feature="Priority email support" />
                  <PricingFeature feature="Order management" />
                  <PricingFeature feature="Inventory tracking" />
                  <PricingFeature feature="Advanced reports" />
                  <PricingFeature feature="Customer segmentation" />
                  <PricingFeature feature="Multi-channel selling" />
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-gray-200 dark:bg-slate-800 dark:border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins dark:text-white">Enterprise</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  For large businesses with custom requirements
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">₹5,999</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <PricingFeature feature="Unlimited products" />
                  <PricingFeature feature="Custom analytics" />
                  <PricingFeature feature="Unlimited admin users" />
                  <PricingFeature feature="24/7 phone & email support" />
                  <PricingFeature feature="Order management" />
                  <PricingFeature feature="Inventory tracking" />
                  <PricingFeature feature="Custom reports" />
                  <PricingFeature feature="Customer segmentation" />
                  <PricingFeature feature="Multi-channel selling" />
                  <PricingFeature feature="API access" />
                  <PricingFeature feature="Dedicated account manager" />
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-poppins">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <FaqItem
                question="Can I upgrade or downgrade my plan later?"
                answer="Yes, you can upgrade or downgrade your plan at any time. Changes to your billing will be prorated."
              />
              <FaqItem
                question="Is there a free trial available?"
                answer="Yes, we offer a 14-day free trial on all plans. No credit card required to start."
              />
              <FaqItem
                question="What payment methods do you accept?"
                answer="We accept all major credit cards, PayPal, and bank transfers for annual plans."
              />
              <FaqItem
                question="Can I cancel my subscription anytime?"
                answer="Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
              />
              <FaqItem
                question="Do you offer discounts for non-profits?"
                answer="Yes, we offer special pricing for non-profit organizations. Please contact our sales team for details."
              />
              <FaqItem
                question="Is my data secure with ShopAdmin?"
                answer="Absolutely. We use industry-standard encryption and security practices to keep your data safe and secure."
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Ready to grow your business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust ShopAdmin for their e-commerce needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-teal-600 hover:bg-gray-100">Start Your Free Trial</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

function PricingFeature({ feature, tooltip = null }: { feature: string; tooltip?: string | null }) {
  if (tooltip) {
    return (
      <TooltipProvider>
        <li className="flex items-center">
          <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-gray-400 ml-1.5 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-64">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </TooltipProvider>
    )
  }

  return (
    <li className="flex items-center">
      <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
    </li>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  )
}

