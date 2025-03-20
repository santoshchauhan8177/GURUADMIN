"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">Terms of Service</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Last updated: March 15, 2023</p>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-4">
                Please read these Terms of Service ("Terms") carefully before using the ShopAdmin website and e-commerce
                management platform (the "Service") operated by ShopAdmin Inc. ("us", "we", or "our").
              </p>

              <p className="mb-4">
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these
                Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>

              <p className="mb-4">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part
                of the terms, then you may not access the Service.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Accounts</h2>

              <p className="mb-4">
                When you create an account with us, you must provide accurate, complete, and current information at all
                times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
                your account on our Service.
              </p>

              <p className="mb-4">
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password, whether your password is with our Service or a third-party
                service.
              </p>

              <p className="mb-4">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your account.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                2. Subscription and Payments
              </h2>

              <p className="mb-4">
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a
                recurring and periodic basis (such as monthly or annually), depending on the type of subscription plan
                you select.
              </p>

              <p className="mb-4">
                At the end of each period, your subscription will automatically renew under the same conditions unless
                you cancel it or we cancel it. You may cancel your subscription either through your online account
                management page or by contacting our customer support team.
              </p>

              <p className="mb-4">
                A valid payment method, including credit card or other payment methods, is required to process the
                payment for your subscription. You shall provide accurate and complete billing information including
                full name, address, state, zip code, telephone number, and valid payment method information.
              </p>

              <p className="mb-4">
                Should automatic billing fail to occur for any reason, we will issue an electronic invoice indicating
                that you must proceed manually, within a certain deadline date, with the full payment corresponding to
                the billing period as indicated on the invoice.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Free Trial</h2>

              <p className="mb-4">
                We may, at our sole discretion, offer a subscription with a free trial for a limited period of time.
              </p>

              <p className="mb-4">
                You may be required to enter your billing information in order to sign up for the free trial. If you do
                enter your billing information when signing up for a free trial, you will not be charged by us until the
                free trial has expired. On the last day of the free trial period, unless you canceled your subscription,
                you will be automatically charged the applicable subscription fee for the type of subscription you have
                selected.
              </p>

              <p className="mb-4">
                At any time and without notice, we reserve the right to (i) modify the terms and conditions of the free
                trial offer, or (ii) cancel such free trial offer.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Intellectual Property</h2>

              <p className="mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of ShopAdmin Inc. and its licensors. The Service is protected by copyright, trademark, and
                other laws of both the United States and foreign countries. Our trademarks and trade dress may not be
                used in connection with any product or service without the prior written consent of ShopAdmin Inc.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">5. Termination</h2>

              <p className="mb-4">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>

              <p className="mb-4">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">6. Limitation of Liability</h2>

              <p className="mb-4">
                In no event shall ShopAdmin Inc., nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct
                or content of any third party on the Service; (iii) any content obtained from the Service; and (iv)
                unauthorized access, use or alteration of your transmissions or content, whether based on warranty,
                contract, tort (including negligence) or any other legal theory, whether or not we have been informed of
                the possibility of such damage.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">7. Changes</h2>

              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <p className="mb-4">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">8. Contact Us</h2>

              <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>

              <p className="mb-4">
                Email: legal@shopadmin.com
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

