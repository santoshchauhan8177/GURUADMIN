"use client"

import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HelpCircle, LogOut, Settings, UserIcon } from "lucide-react"
import NotificationsPopover from "@/components/notifications/notifications-popover"

interface DashboardHeaderProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (open: boolean) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  onProfileClick: () => void
  onNotificationsClick: () => void
  onSettingsClick: () => void
}

export default function DashboardHeader({
  isSidebarOpen,
  setIsSidebarOpen,
  searchQuery,
  setSearchQuery,
  onProfileClick,
  onNotificationsClick,
  onSettingsClick,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white dark:bg-slate-800 border-b dark:border-slate-700 shadow-sm">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)} className="lg:hidden">
         <img src="guru logo.jpg" className="h-10 w-auto" alt="Guru-Electrical Logo" /> {/* Fixed logo usage */}
        </Button>

        <div className="hidden md:block">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white font-poppins">Welcome back, Admin!</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Here's what's happening today</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-full max-w-md">
          <Input
            placeholder="Search..."
            className="pl-10 bg-gray-50 border-gray-200 dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <NotificationsPopover onViewAllClick={onNotificationsClick} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="w-8 h-8 border dark:border-slate-700">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&q=80"
                  alt="Admin"
                />
                <AvatarFallback className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white">AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p className="font-medium text-sm dark:text-gray-100">Admin User</p>
                <p className="w-[200px] truncate text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
              </div>
            </div>
            <DropdownMenuSeparator className="dark:bg-slate-700" />
            <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-slate-700" onClick={onProfileClick}>
              <UserIcon className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-slate-700" onClick={onSettingsClick}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="dark:bg-slate-700" />
            <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-slate-700">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </DropdownMenuItem>
            <DropdownMenuSeparator className="dark:bg-slate-700" />
            <DropdownMenuItem
              className="dark:text-gray-300 dark:focus:bg-slate-700"
              onClick={() => (window.location.href = "/")}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

