"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar"
import DashboardContent from "@/components/dashboard/dashboard-content"
import { AnimatePresence } from "framer-motion"
import { toast } from "@/components/ui/use-toast"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const router = useRouter()

  const handleProfileClick = () => {
    router.push("/dashboard/profile")
  }

  const handleNotificationsClick = () => {
    router.push("/dashboard/notifications")
  }

  const handleSettingsClick = () => {
    router.push("/dashboard/settings")
  }

  const handleRefreshData = () => {
    setIsRefreshing(true)

    // Simulate data refresh
    setTimeout(() => {
      setIsRefreshing(false)
      toast({
        title: "Data refreshed",
        description: "All dashboard data has been updated with the latest information.",
      })
    }, 2000)
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900 font-inter">
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <DashboardSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsSidebarOpen={setIsSidebarOpen}
            onProfileClick={handleProfileClick}
            onSettingsClick={handleSettingsClick}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onProfileClick={handleProfileClick}
          onNotificationsClick={handleNotificationsClick}
          onSettingsClick={handleSettingsClick}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-slate-900">
          <DashboardContent
            activeTab={activeTab}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isRefreshing={isRefreshing}
            onRefreshData={handleRefreshData}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            searchQuery={searchQuery}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </main>
      </div>
    </div>
  )
}

