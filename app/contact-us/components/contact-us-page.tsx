"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"



interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  );
}

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon!",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

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
        <div className="max-w-7xl mx-auto">
          {/* Contact Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">Get in Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions or need help? We're here for you. Fill out the form below and our team will get back to you
              shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="border-gray-200 dark:bg-slate-800 dark:border-slate-700 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">support@shopadmin.com</p>
                        <p className="text-gray-600 dark:text-gray-300">sales@shopadmin.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:bg-slate-800 dark:border-slate-700 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Call Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                        <p className="text-gray-600 dark:text-gray-300">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:bg-slate-800 dark:border-slate-700 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Visit Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">123 Commerce Street</p>
                        <p className="text-gray-600 dark:text-gray-300">Tech City, TC 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg p-6 text-white">
                  <h3 className="text-lg font-medium mb-2">Join Our Community</h3>
                  <p className="mb-4 opacity-90">Get tips, updates, and connect with other ShopAdmin users</p>
                  <Button className="bg-white text-teal-600 hover:bg-gray-100 w-full">
                    Join Forum
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-200 dark:bg-slate-800 dark:border-slate-700 shadow-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="dark:text-gray-300 font-medium">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="dark:text-gray-300 font-medium">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-gray-300 font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        required
                        className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="dark:text-gray-300 font-medium">
                        Phone Number (Optional)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="dark:text-gray-300 font-medium">
                        Subject
                      </Label>
                      <Select defaultValue="general">
                        <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                          <SelectItem value="general" className="dark:text-gray-300">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="support" className="dark:text-gray-300">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="billing" className="dark:text-gray-300">
                            Billing Question
                          </SelectItem>
                          <SelectItem value="sales" className="dark:text-gray-300">
                            Sales Question
                          </SelectItem>
                          <SelectItem value="feedback" className="dark:text-gray-300">
                            Feedback
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="dark:text-gray-300 font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        required
                        className="min-h-32 dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 font-poppins">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <FaqItem
                question="How quickly can I expect a response?"
                answer="We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, our premium support plans offer faster response times."
              />
              <FaqItem
                question="Do you offer phone support?"
                answer="Yes, phone support is available for customers on our Professional and Enterprise plans. Standard plan customers receive email support."
              />
              <FaqItem
                question="Can I schedule a demo?"
                answer="You can request a personalized demo through the contact form above or by emailing sales@shopadmin.com."
              />
              <FaqItem
                question="Where can I find documentation?"
                answer="Our comprehensive documentation is available at shopadmin.com/documentation. It includes guides, tutorials, and API references."
              />
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

