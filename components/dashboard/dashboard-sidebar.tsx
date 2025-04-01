"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  CreditCard,
  Home,
  LogOut,
  Package,
  Settings,
  ShoppingCart,
  User,
  Users,
  Zap,
  Lightbulb,
  Cable,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  setIsSidebarOpen: (open: boolean) => void
  onProfileClick: () => void
  onSettingsClick: () => void
}

export default function DashboardSidebar({
  activeTab,
  setActiveTab,
  setIsSidebarOpen,
  onProfileClick,
  onSettingsClick,
}: DashboardSidebarProps) {
  return (
    <motion.div
      className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 shadow-lg transform lg:relative lg:translate-x-0"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b dark:border-slate-700">
        <div className="flex items-center">
          <div >
          <img src="guru logo.jpg" className="h-10 w-auto" alt="Guru-Electrical Logo" /> {/* Fixed logo usage */}
          </div>
          {/* <span className="text-xl font-semibold dark:text-white font-poppins">Guru-Electrical</span> */}
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
      
        </Button>
      </div>

      <div className="flex flex-col h-[calc(100%-4rem)] overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-electric-500/10 to-energy-500/10 mb-4">
            <Avatar className="h-10 w-10 border dark:border-slate-700">
              <AvatarImage
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&q=80"
                alt="Admin"
              />
              <AvatarFallback className="bg-gradient-to-r from-electric-400 to-energy-400 text-white">
                AD
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Admin User</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">admin@guru-electrical.com</p>
            </div>
          </div>
        </div>

        <nav className="px-3 py-2">
          <div className="mb-2">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
              Main
            </h3>
          </div>

          <div className="space-y-1">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 font-normal ${
                activeTab === "dashboard"
                  ? "bg-gradient-to-r from-electric-500/20 to-energy-500/20 text-electric-700 dark:text-electric-400"
                  : "dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <Home className="w-5 h-5" />
              Dashboard
            </Button>

           
          </div>

          <Separator className="my-4 dark:bg-slate-700" />

          <div className="mb-2">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
              Inventory
            </h3>
          </div>

          <div className="space-y-1">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 font-normal ${
                activeTab === "orders"
                  ? "bg-gradient-to-r from-electric-500/20 to-energy-500/20 text-electric-700 dark:text-electric-400"
                  : "dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("orders")}
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Orders</span>
                </div>
                <Badge className="bg-electric-100 text-electric-700 dark:bg-electric-900 dark:text-electric-300 font-medium">
                  12
                </Badge>
              </div>
            </Button>

            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 font-normal ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-electric-500/20 to-energy-500/20 text-electric-700 dark:text-electric-400"
                  : "dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("products")}
            >
              <Package className="w-5 h-5" />
              Products
            </Button>

            
          </div>

          <Separator className="my-4 dark:bg-slate-700" />

          <div className="mb-2">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
              Management
            </h3>
          </div>

          <div className="space-y-1">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 font-normal ${
                activeTab === "employees"
                  ? "bg-gradient-to-r from-electric-500/20 to-energy-500/20 text-electric-700 dark:text-electric-400"
                  : "dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("employees")}
            >
              <Users className="w-5 h-5" />
              Employees
            </Button>

            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 font-normal ${
                activeTab === "transactions"
                  ? "bg-gradient-to-r from-electric-500/20 to-energy-500/20 text-electric-700 dark:text-electric-400"
                  : "dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("transactions")}
            >
              <CreditCard className="w-5 h-5" />
              Transactions
            </Button>
          </div>

          <Separator className="my-4 dark:bg-slate-700" />

          <div className="mb-2">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
              Account
            </h3>
          </div>

          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 font-normal dark:text-gray-300"
              onClick={onProfileClick}
            >
              <User className="w-5 h-5" />
              Profile
            </Button>

            <Link href="/dashboard/notifications">
              <Button variant="ghost" className="w-full justify-start gap-3 font-normal dark:text-gray-300">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5" />
                    <span>Notifications</span>
                  </div>
                  <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 font-medium">3</Badge>
                </div>
              </Button>
            </Link>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 font-normal dark:text-gray-300"
              onClick={onSettingsClick}
            >
              <Settings className="w-5 h-5" />
              Settings
            </Button>
          </div>
        </nav>

        <div className="mt-auto p-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-3 font-normal text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:border-red-900/30 dark:hover:bg-red-900/20"
            onClick={() => (window.location.href = "/")}
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

