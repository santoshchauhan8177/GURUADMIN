"use client"

import { useState } from "react"
import {
  AlertCircle,
  Bell,
  Check,
  ChevronDown,
  Clock,
  DollarSign,
  FileText,
  Package,
  RefreshCw,
  Settings,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsPage() {
  const [selectedTab, setSelectedTab] = useState("all")
  const [selectedItems, setSelectedItems] = useState([])

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
    {
      id: 6,
      title: "Refund Processed",
      description: "Refund for Order #ORD-006 has been processed",
      time: "Yesterday",
      read: true,
      type: "refund",
    },
    {
      id: 7,
      title: "System Update",
      description: "System will undergo maintenance tonight",
      time: "2 days ago",
      read: true,
      type: "system",
    },
    {
      id: 8,
      title: "New Order Received",
      description: "Order #ORD-011 has been placed",
      time: "2 days ago",
      read: true,
      type: "order",
    },
    {
      id: 9,
      title: "Payment Failed",
      description: "Payment for Order #ORD-010 has failed",
      time: "3 days ago",
      read: true,
      type: "payment",
    },
    {
      id: 10,
      title: "Product Review",
      description: "New 5-star review for Wireless Headphones",
      time: "4 days ago",
      read: true,
      type: "product",
    },
    {
      id: 11,
      title: "Inventory Update",
      description: "10 new items added to inventory",
      time: "5 days ago",
      read: true,
      type: "inventory",
    },
    {
      id: 12,
      title: "Customer Support Ticket",
      description: "New support ticket #45678 opened",
      time: "1 week ago",
      read: true,
      type: "customer",
    },
  ]

  const filteredNotifications = notifications.filter((notification) => {
    if (selectedTab === "all") return true
    if (selectedTab === "unread") return !notification.read
    return notification.type === selectedTab
  })

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleSelectAll = () => {
    if (selectedItems.length === filteredNotifications.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(filteredNotifications.map((notification) => notification.id))
    }
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "order":
        return <ShoppingCart className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
      case "payment":
        return <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
      case "inventory":
        return <Package className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
      case "customer":
        return <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
      case "shipping":
        return <Truck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      case "refund":
        return <RefreshCw className="h-5 w-5 text-red-600 dark:text-red-400" />
      case "system":
        return <AlertCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      case "product":
        return <FileText className="h-5 w-5 text-orange-600 dark:text-orange-400" />
      default:
        return <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
    }
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold dark:text-white">Notifications</h1>
          <p className="text-muted-foreground dark:text-gray-400">Manage your notifications and preferences</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl dark:text-white">All Notifications</CardTitle>
                <div className="flex items-center gap-2">
                  {selectedItems.length > 0 ? (
                    <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-gray-300">
                      <Check className="mr-2 h-4 w-4" />
                      Mark as Read
                    </Button>
                  ) : (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-gray-300">
                          <Settings className="mr-2 h-4 w-4" />
                          Actions
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="dark:bg-gray-800 dark:border-gray-700">
                        <DropdownMenuLabel className="dark:text-gray-300">Notification Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator className="dark:bg-gray-700" />
                        <DropdownMenuCheckboxItem checked={false} className="dark:text-gray-300 dark:focus:bg-gray-700">
                          Mark all as read
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked={false} className="dark:text-gray-300 dark:focus:bg-gray-700">
                          Delete all read notifications
                        </DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
              <Tabs defaultValue="all" onValueChange={setSelectedTab}>
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all" className="dark:data-[state=active]:bg-gray-700 dark:text-gray-300">All</TabsTrigger>
                  <TabsTrigger value="unread" className="dark:data-[state=active]:bg-gray-700 dark:text-gray-300">Unread</TabsTrigger>
                  <TabsTrigger value="order" className="dark:data-[state=active]:bg-gray-700 dark:text-gray-300">Orders</TabsTrigger>
                  <TabsTrigger value="payment" className="dark:data-[state=active]:bg-gray-700 dark:text-gray-300">Payments</TabsTrigger>
                  <TabsTrigger value="system" className="dark:data-[state=active]:bg-gray-700 dark:text-gray-300">System</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border dark:border-gray-700">
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                  <div className="flex items-center">
                    <Checkbox 
                      checked={selectedItems.length === filteredNotifications.length && filteredNotifications.length > 0} 
                      onCheckedChange={handleSelectAll}
                      className="mr-2 dark:border-gray-600"
                    />
                    <span className="text-sm font-medium dark:text-gray-300">Select All</span>
                  </div>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px] h-8 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectItem value="newest" className="dark:text-gray-300">Newest First</SelectItem>
                      <SelectItem value="oldest" className="dark:text-gray-300">Oldest First</SelectItem>
                      <SelectItem value="unread" className="dark:text-gray-300">Unread First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <ScrollArea className="h-[500px]">
                  <div className="divide-y dark:divide-gray-700">
                    {filteredNotifications.length > 0 ? (
                      filteredNotifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className={`p-4 ${notification.read ? 'opacity-70' : 'bg-gray-50 dark:bg-gray-700/50'}`}
                        >
                          <div className="flex items-start gap-3">
                            <Checkbox 
                              checked={selectedItems.includes(notification.id)} 
                              onCheckedChange={() => handleSelectItem(notification.id)}
                              className="mt-1 dark:border-gray-600"
                            />
                            <div className={`p-2 rounded-full 
                              ${notification.type === 'order' ? 'bg-indigo-100 dark:bg-indigo-900/50' : ''}
                              ${notification.type === 'payment' ? 'bg-green-100 dark:bg-green-900/50' : ''}
                              ${notification.type === 'inventory' ? 'bg-yellow-100 dark:bg-yellow-900/50' : ''}
                              ${notification.type === 'customer' ? 'bg-purple-100 dark:bg-purple-900/50' : ''}
                              ${notification.type === 'shipping' ? 'bg-blue-100 dark:bg-blue-900/50' : ''}
                              ${notification.type === 'refund' ? 'bg-red-100 dark:bg-red-900/50' : ''}
                              ${notification.type === 'system' ? 'bg-gray-100 dark:bg-gray-700' : ''}
                              ${notification.type === 'product' ? 'bg-orange-100 dark:bg-orange-900/50' : ''}
                            `}>
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1">
                              <h5 className="text-sm font-medium dark:text-white">{notification.title}</h5>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.description}</p>
                              <div className="flex items-center mt-2">
                                <Clock className="w-3 h-3 text-gray-400 mr-1" />
                                <span className="text-xs text-gray-400">{notification.time}</span>
                              </div>
                            </div>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center p-8">
                        <div className="p-3 bg-gray-100 rounded-full dark:bg-gray-700 mb-4">
                          <Bell className="h-6 w-6 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium dark:text-white">No notifications found</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">
                          There are no notifications in this category.
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground dark:text-gray-400">
                Showing {filteredNotifications.length} of {notifications.length} notifications
              </p>
              <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                Load More
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-1 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Notification Settings</CardTitle>
              <CardDescription className="dark:text-gray-400">Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium dark:text-white">Notification Channels</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-indigo-500">Email</Badge>
                      <Label htmlFor="email-notifications" className="text-sm dark:text-gray-300">Email Notifications</Label>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-indigo-500">Push</Badge>
                      <Label htmlFor="push-notifications" className="text-sm dark:text-gray-300">Push Notifications</Label>
                    </div>
                    <Switch id="push-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-indigo-500">SMS</Badge>
                      <Label htmlFor="sms-notifications" className="text-sm dark:text-gray-300">SMS Notifications</Label>
                    </div>
                    <Switch id="sms-notifications" />
                  </div>
                </div>
              </div>
              <Separator className="dark:bg-gray-700" />
              <div className="space-y-4">
                <h4 className="text-sm font-medium dark:text-white">Notification Types</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      <Label htmlFor="order-notifications" className="text-sm dark:text-gray-300">Order Updates</Label>
                    </div>
                    <Switch id="order-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <Label htmlFor="payment-notifications" className="text-sm dark:text-gray-300">Payment Updates</Label>
                    </div>
                    <Switch id="payment-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                      <Label htmlFor="inventory-notifications" className="text-sm dark:text-gray-300">Inventory Alerts</Label>
                    </div>
                    <Switch id="inventory-notifications" defaultChecked />
                  </div>
                  <div className="  defaultChecked />
                  </div>
                  <div className=\"flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <Label htmlFor="customer-notifications" className="text-sm dark:text-gray-300">Customer Updates</Label>
                    </div>
                    <Switch id="customer-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <Label htmlFor="system-notifications" className="text-sm dark:text-gray-300">System Alerts</Label>
                    </div>
                    <Switch id="system-notifications" defaultChecked />
                  </div>
                </div>
              </div>
              <Separator className="dark:bg-gray-700" />
              <div className="space-y-4">
                <h4 className="text-sm font-medium dark:text-white">Email Digest</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="digest-frequency" className="text-sm dark:text-gray-300">Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger className="w-[140px] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                        <SelectItem value="realtime" className="dark:text-gray-300">Real-time</SelectItem>
                        <SelectItem value="daily" className="dark:text-gray-300">Daily</SelectItem>
                        <SelectItem value="weekly" className="dark:text-gray-300">Weekly</SelectItem>
                        <SelectItem value="never" className="dark:text-gray-300">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    Receive a summary of your notifications based on your selected frequency.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Save Preferences</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function Truck(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L16 6h-4v11h3" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}

