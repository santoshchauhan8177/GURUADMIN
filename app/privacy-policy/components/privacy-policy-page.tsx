"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-2 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">ShopAdmin</h1>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/features"
            className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 font-medium"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 font-medium"
          >
            Pricing
          </Link>
          <Link
            href="/documentation"
            className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 font-medium"
          >
            Documentation
          </Link>
          <Link href="/signup">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/20"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center mb-6 text-sm font-medium text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Last updated: March 15, 2023</p>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-4">
                At ShopAdmin, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our e-commerce management
                platform.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Information We Collect</h2>

              <p className="mb-4">We collect information that you provide directly to us when you:</p>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Register for an account</li>
                <li>Use our services</li>
                <li>Participate in surveys or promotions</li>
                <li>Contact our customer support</li>
                <li>Subscribe to our newsletters</li>
              </ul>

              <p className="mb-4">The types of information we may collect include:</p>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personal identifiers (name, email address, phone number)</li>
                <li>Business information (company name, address)</li>
                <li>Payment information (processed through secure third-party payment processors)</li>
                <li>Usage data (how you interact with our services)</li>
                <li>Device information (IP address, browser type, operating system)</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">How We Use Your Information</h2>

              <p className="mb-4">We may use the information we collect for various purposes, including to:</p>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative messages, updates, and security alerts</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Sharing of Information</h2>

              <p className="mb-4">We may share your information with:</p>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with whom we jointly offer products or services</li>
                <li>Third parties in connection with a business transaction</li>
                <li>Law enforcement or other third parties as required by law</li>
              </ul>

              <p className="mb-4">We do not sell your personal information to third parties.</p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Data Security</h2>

              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please be aware that no method of transmission over the Internet or electronic
                storage is 100% secure.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Your Rights and Choices</h2>

              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing of your personal information</li>
                <li>Data portability</li>
                <li>Objection to processing of your personal information</li>
              </ul>

              <p className="mb-4">To exercise these rights, please contact us using the information provided below.</p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Changes to This Privacy Policy
              </h2>

              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Contact Us</h2>

              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>

              <p className="mb-4">
                Email: privacy@shopadmin.com
                <br />
                Address: 123 Commerce Street, Tech City, TC 12345
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-1.5 rounded-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2023 ShopAdmin. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact-us"
              className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

