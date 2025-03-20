"use client"

import { Bell, Clock, ShoppingCart, DollarSign, Package, Users, Truck, RefreshCw, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface NotificationsPopoverProps {
  onViewAllClick: () => void
}

export default function NotificationsPopover({ onViewAllClick }: NotificationsPopoverProps) {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "New Order Received",
      description: "Order #ORD-012 has been placed",
      time: "5 minutes ago",
      read: false,
      type: "order",
    },
    {
      id: 2,
      title: "Payment Successful",
      description: "Payment for Order #ORD-008 has been received",
      time: "1 hour ago",
      read: false,
      type: "payment",
    },
    {
      id: 3,
      title: "Low Stock Alert",
      description: "Wireless Mouse is running low on stock",
      time: "3 hours ago",
      read: true,
      type: "inventory",
    },
    {
      id: 4,
      title: "New Customer Registered",
      description: "Alex Johnson has created an account",
      time: "5 hours ago",
      read: true,
      type: "customer",
    },
    {
      id: 5,
      title: "Order Shipped",
      description: "Order #ORD-007 has been shipped",
      time: "Yesterday",
      read: true,
      type: "shipping",
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-full w-9 h-9 border-gray-200 dark:border-gray-700"
        >
          <Bell className="w-5 h-5 dark:text-gray-300" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white border-2 border-white dark:border-gray-800">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 dark:bg-gray-800 dark:border-gray-700" align="end">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h4 className="font-medium dark:text-white">Notifications</h4>
          <Button variant="ghost" size="sm" className="h-8 text-xs dark:text-gray-300">
            Mark all as read
          </Button>
        </div>
        <ScrollArea className="h-[300px]">
          <div className="divide-y dark:divide-gray-700">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 ${notification.read ? "opacity-70" : "bg-purple-50 dark:bg-purple-900/10"}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-full 
                    ${notification.type === "order" ? "bg-indigo-100 dark:bg-indigo-900/50" : ""}
                    ${notification.type === "payment" ? "bg-green-100 dark:bg-green-900/50" : ""}
                    ${notification.type === "inventory" ? "bg-yellow-100 dark:bg-yellow-900/50" : ""}
                    ${notification.type === "customer" ? "bg-purple-100 dark:bg-purple-900/50" : ""}
                    ${notification.type === "shipping" ? "bg-blue-100 dark:bg-blue-900/50" : ""}
                    ${notification.type === "refund" ? "bg-red-100 dark:bg-red-900/50" : ""}
                    ${notification.type === "system" ? "bg-gray-100 dark:bg-gray-700" : ""}
                  `}
                  >
                    {notification.type === "order" && (
                      <ShoppingCart className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    )}
                    {notification.type === "payment" && (
                      <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
                    )}
                    {notification.type === "inventory" && (
                      <Package className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    )}
                    {notification.type === "customer" && (
                      <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    )}
                    {notification.type === "shipping" && <Truck className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                    {notification.type === "refund" && <RefreshCw className="w-4 h-4 text-red-600 dark:text-red-400" />}
                    {notification.type === "system" && (
                      <AlertCircle className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-medium dark:text-white">{notification.title}</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.description}</p>
                    <div className="flex items-center mt-2">
                      <Clock className="w-3 h-3 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-400">{notification.time}</span>
                    </div>
                  </div>
                  {!notification.read && <div className="w-2 h-2 bg-purple-500 rounded-full"></div>}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t dark:border-gray-700">
          <Button
            variant="outline"
            className="w-full dark:border-gray-700 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
            onClick={onViewAllClick}
          >
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

