"use client"

import { useState } from "react"
import {
  Box,
  ChevronDown,
  CreditCard,
  DollarSign,
  Edit,
  Filter,
  Home,
  LineChartIcon,
  Loader2,
  Menu,
  Package,
  Plus,
  RefreshCw,
  Search,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Upload,
  Users,
  X,
  Bell,
  Clock,
  HelpCircle,
  LogOut,
  Palette,
  PieChart,
  SettingsIcon,
  UserIcon,
} from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  ResponsiveContainer,
  Tooltip as ChartTooltipRecharts,
  XAxis,
  YAxis,
} from "recharts"
import { motion, AnimatePresence } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "@/components/ui/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Truck, AlertCircle } from "lucide-react"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Sample data for charts
  const revenueData = [
    { name: "Jan", revenue: 4000, profit: 2400 },
    { name: "Feb", revenue: 3000, profit: 1398 },
    { name: "Mar", revenue: 5000, profit: 3000 },
    { name: "Apr", revenue: 4500, profit: 2780 },
    { name: "May", revenue: 6000, profit: 3890 },
    { name: "Jun", revenue: 5500, profit: 3300 },
    { name: "Jul", revenue: 7000, profit: 4300 },
  ]

  const salesData = [
    { name: "Mon", sales: 120 },
    { name: "Tue", sales: 200 },
    { name: "Wed", sales: 150 },
    { name: "Thu", sales: 180 },
    { name: "Fri", sales: 250 },
    { name: "Sat", sales: 300 },
    { name: "Sun", sales: 200 },
  ]

  const categoryData = [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
    { name: "Home", value: 200 },
    { name: "Beauty", value: 150 },
    { name: "Sports", value: 100 },
  ]

  const COLORS = ["#4f46e5", "#06b6d4", "#f59e0b", "#10b981", "#8b5cf6"]

  const recentOrders = [
    { id: "#ORD-001", customer: "John Doe", date: "2023-05-15", status: "Completed", total: "$120.00" },
    { id: "#ORD-002", customer: "Jane Smith", date: "2023-05-14", status: "Processing", total: "$85.50" },
    { id: "#ORD-003", customer: "Robert Johnson", date: "2023-05-14", status: "Shipped", total: "$220.75" },
    { id: "#ORD-004", customer: "Emily Davis", date: "2023-05-13", status: "Pending", total: "$65.25" },
    { id: "#ORD-005", customer: "Michael Brown", date: "2023-05-12", status: "Completed", total: "$175.00" },
  ]

  // Add notifications data
  const notifications = [
    { id: 1, title: "New Order Received", description: "Order #ORD-012 has been placed", time: "5 minutes ago", read: false, type: "order" },
    { id: 2, title: "Payment Successful", description: "Payment for Order #ORD-008 has been received", time: "1 hour ago", read: false, type: "payment" },
    { id: 3, title: "Low Stock Alert", description: "Wireless Mouse is running low on stock", time: "3 hours ago", read: true, type: "inventory" },
    { id: 4, title: "New Customer Registered", description: "Alex Johnson has created an account", time: "5 hours ago", read: true, type: "customer" },
    { id: 5, title: "Order Shipped", description: "Order #ORD-007 has been shipped", time: "Yesterday", read: true, type: "shipping" },
    { id: 6, title: "Refund Processed", description: "Refund for Order #ORD-006 has been processed", time: "Yesterday", read: true, type: "refund" },
    { id: 7, title: "System Update", description: "System will undergo maintenance tonight", time: "2 days ago", read: true, type: "system" },
  ]

  // Add more detailed analytics data
  const detailedAnalytics = {
    trafficSources: [
      { source: "Direct", value: 30 },
      { source: "Organic Search", value: 25 },
      { source: "Social Media", value: 20 },
      { source: "Referral", value: 15 },
      { source: "Email", value: 10 },
    ],
    deviceUsage: [
      { device: "Mobile", value: 55 },
      { device: "Desktop", value: 35 },
      { device: "Tablet", value: 10 },
    ],
    customerSegments: [
      { segment: "New Customers", value: 40 },
      { segment: "Returning", value: 35 },
      { segment: "Loyal", value: 25 },
    ],
    hourlyTraffic: [
      { hour: "00:00", visitors: 20 },
      { hour: "02:00", visitors: 12 },
      { hour: "04:00", visitors: 8 },
      { hour: "06:00", visitors: 15 },
      { hour: "08:00", visitors: 45 },
      { hour: "10:00", visitors: 68 },
      { hour: "12:00", visitors: 80 },
      { hour: "14:00", visitors: 75 },
      { hour: "16:00", visitors: 65 },
      { hour: "18:00", visitors: 55 },
      { hour: "20:00", visitors: 40 },
      { hour: "22:00", visitors: 30 },
    ],
  }

  // Replace the products array with this enhanced version that includes images
  const products = [
    { id: "#PRD-001", name: "Wireless Headphones", category: "Electronics", stock: 45, price: "$89.99", sales: 120, status: "In Stock", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&q=80" },
    { id: "#PRD-002", name: "Smart Watch", category: "Electronics", stock: 32, price: "$199.99", sales: 98, status: "In Stock", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&q=80" },
    { id: "#PRD-003", name: "Bluetooth Speaker", category: "Electronics", stock: 56, price: "$59.99", sales: 87, status: "In Stock", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop&q=80" },
    { id: "#PRD-004", name: "Laptop Backpack", category: "Accessories", stock: 78, price: "$49.99", sales: 76, status: "In Stock", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=200&h=200&fit=crop&q=80" },
    { id: "#PRD-005", name: "Phone Case", category: "Accessories", stock: 120, price: "$19.99", sales: 65, status: "In Stock", image: "https://images.unsplash.com/photo-1541877944-ac82a091518a?w=200&h=200&fit=crop&q=80" },
    { id: "#PRD-006", name: "Wireless Charger", category: "Electronics", stock: 25, price: "$29.99", sales: 54, status: "In Stock", image: "https://images.unsplash.com/photo-1618333258404-f509733839c4?w=200&h=200&fit=crop&q=80" },
    { id: "#PRD-007", name: "Fitness Tracker", category: "Electronics", stock: 18, price: "$79.99", sales: 42, status: "Low Stock", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=200&h=200&fit=crop&q=80" },
    { id: "#PRD-008", name: "Desk Lamp", category: "Home", stock: 60, price: "$39.99", sales: 38, status: "In Stock", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop&q=80" },
    { id: "#PRD-009", name: "Mechanical Keyboard", category: "Electronics", stock: 12, price: "$129.99", sales: 35, status: "Low Stock", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=200&h=200&fit=crop&q=80" },
    { id: "#PRD-010", name: "Wireless Mouse", category: "Electronics", stock: 0, price: "$24.99", sales: 30, status: "Out of Stock", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=200&h=200&fit=crop&q=80" },
  ]

  // Replace the allOrders array with this enhanced version that includes product images
  const allOrders = [
    { id: "#ORD-001", customer: "John Doe", date: "2023-05-15", status: "Completed", total: "$120.00", items: 3, payment: "Credit Card", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&q=80" },
    { id: "#ORD-002", customer: "Jane Smith", date: "2023-05-14", status: "Processing", total: "$85.50", items: 2, payment: "PayPal", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&q=80" },
    { id: "#ORD-003", customer: "Robert Johnson", date: "2023-05-14", status: "Shipped", total: "$220.75", items: 5, payment: "Credit Card", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop&q=80" },
    { id: "#ORD-004", customer: "Emily Davis", date: "2023-05-13", status: "Pending", total: "$65.25", items: 1, payment: "Bank Transfer", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=200&h=200&fit=crop&q=80" },
    { id: "#ORD-005", customer: "Michael Brown", date: "2023-05-12", status: "Completed", total: "$175.00", items: 4, payment: "Credit Card", image: "https://images.unsplash.com/photo-1541877944-ac82a091518a?w=200&h=200&fit=crop&q=80" },
    { id: "#ORD-006", customer: "Sarah Wilson", date: "2023-05-11", status: "Cancelled", total: "$95.20", items: 2, payment: "PayPal", image: "https://images.unsplash.com/photo-1618333258404-f509733839c4?w=200&h=200&fit=crop&q=80" },
    { id: "#ORD-007", customer: "David Miller", date: "2023-05-10", status: "Completed", total: "$135.75", items: 3, payment: "Credit Card", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=200&h=200&fit=crop&q=80" },
    { id: "#ORD-008", customer: "Lisa Anderson", date: "2023-05-09", status: "Shipped", total: "$210.50", items: 4, payment: "Credit Card", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop&q=80" },
    { id: "#ORD-009", customer: "Thomas White", date: "2023-05-08", status: "Processing", total: "$45.99", items: 1, payment: "PayPal", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=200&h=200&fit=crop&q=80" },
    { id: "#ORD-010", customer: "Jennifer Clark", date: "2023-05-07", status: "Completed", total: "$189.99", items: 3, payment: "Credit Card", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=200&h=200&fit=crop&q=80" },
  ]

  const employees = [
    {
      id: "#EMP-001",
      name: "Sarah Johnson",
      role: "Sales Manager",
      department: "Sales",
      status: "Active",
      email: "sarah@example.com",
      phone: "+1 234-567-8901",
    },
    {
      id: "#EMP-002",
      name: "David Williams",
      role: "Product Specialist",
      department: "Marketing",
      status: "Active",
      email: "david@example.com",
      phone: "+1 234-567-8902",
    },
    {
      id: "#EMP-003",
      name: "Lisa Brown",
      role: "Customer Support",
      department: "Support",
      status: "On Leave",
      email: "lisa@example.com",
      phone: "+1 234-567-8903",
    },
    {
      id: "#EMP-004",
      name: "Kevin Miller",
      role: "Inventory Manager",
      department: "Operations",
      status: "Active",
      email: "kevin@example.com",
      phone: "+1 234-567-8904",
    },
    {
      id: "#EMP-005",
      name: "Amanda Wilson",
      role: "Content Writer",
      department: "Marketing",
      status: "Active",
      email: "amanda@example.com",
      phone: "+1 234-567-8905",
    },
    {
      id: "#EMP-006",
      name: "Michael Chen",
      role: "Web Developer",
      department: "IT",
      status: "Active",
      email: "michael@example.com",
      phone: "+1 234-567-8906",
    },
    {
      id: "#EMP-007",
      name: "Jessica Taylor",
      role: "HR Specialist",
      department: "Human Resources",
      status: "Active",
      email: "jessica@example.com",
      phone: "+1 234-567-8907",
    },
    {
      id: "#EMP-008",
      name: "Robert Garcia",
      role: "Logistics Coordinator",
      department: "Operations",
      status: "On Leave",
      email: "robert@example.com",
      phone: "+1 234-567-8908",
    },
  ]

  const transactions = [
    {
      id: "#TRX-001",
      date: "2023-05-15",
      type: "Sale",
      amount: "$120.00",
      status: "Completed",
      customer: "John Doe",
      method: "Credit Card",
    },
    {
      id: "#TRX-002",
      date: "2023-05-14",
      type: "Refund",
      amount: "-$45.50",
      status: "Processed",
      customer: "Jane Smith",
      method: "PayPal",
    },
    {
      id: "#TRX-003",
      date: "2023-05-14",
      type: "Sale",
      amount: "$220.75",
      status: "Completed",
      customer: "Robert Johnson",
      method: "Credit Card",
    },
    {
      id: "#TRX-004",
      date: "2023-05-13",
      type: "Sale",
      amount: "$65.25",
      status: "Pending",
      customer: "Emily Davis",
      method: "Bank Transfer",
    },
    {
      id: "#TRX-005",
      date: "2023-05-12",
      type: "Sale",
      amount: "$175.00",
      status: "Completed",
      customer: "Michael Brown",
      method: "Credit Card",
    },
    {
      id: "#TRX-006",
      date: "2023-05-11",
      type: "Refund",
      amount: "-$29.99",
      status: "Processed",
      customer: "Sarah Wilson",
      method: "PayPal",
    },
    {
      id: "#TRX-007",
      date: "2023-05-10",
      type: "Sale",
      amount: "$135.75",
      status: "Completed",
      customer: "David Miller",
      method: "Credit Card",
    },
    {
      id: "#TRX-008",
      date: "2023-05-09",
      type: "Sale",
      amount: "$210.50",
      status: "Completed",
      customer: "Lisa Anderson",
      method: "Credit Card",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Shipped":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "On Leave":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Processed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "In Stock":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Out of Stock":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleSelectAll = (items) => {
    if (selectedItems.length === items.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(items.map((item) => item.id))
    }
  }

  const handleDelete = (id) => {
    // Simulate delete operation
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Item deleted",
        description: `Item ${id} has been deleted successfully.`,
      })
    }, 800)
  }

  const handleBulkDelete = () => {
    // Simulate bulk delete operation
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSelectedItems([])
      toast({
        title: "Items deleted",
        description: `${selectedItems.length} items have been deleted successfully.`,
      })
    }, 1000)
  }

  const handleAddItem = (type) => {
    // Simulate add operation
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: `${type} added`,
        description: `New ${type.toLowerCase()} has been added successfully.`,
      })
    }, 1000)
  }

  const handleUpdateItem = (id, type) => {
    // Simulate update operation
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: `${type} updated`,
        description: `${type} ${id} has been updated successfully.`,
      })
    }, 800)
  }

  const handleStatusChange = (id, newStatus, type) => {
    // Simulate status change operation
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Status updated",
        description: `${type} ${id} status changed to ${newStatus}.`,
      })
    }, 600)
  }

  const filteredOrders = allOrders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || order.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      transaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform lg:relative lg:translate-x-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between h-16 px-6 border-b dark:border-gray-700">
                <div className="flex items-center">
                  <ShoppingBag className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="ml-2 text-xl font-semibold dark:text-white">ShopAdmin</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex flex-col h-[calc(100%-4rem)] overflow-y-auto">
                <nav className="p-4 space-y-1">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-3 font-normal ${activeTab === "dashboard" ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400" : "dark:text-gray-300"}`}
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <Home className="w-5 h-5" />
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-3 font-normal ${activeTab === "orders" ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400" : "dark:text-gray-300"}`}
                    onClick={() => setActiveTab("orders")}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Orders
                  </Button>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-3 font-normal ${activeTab === "products" ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400" : "dark:text-gray-300"}`}
                    onClick={() => setActiveTab("products")}
                  >
                    <Package className="w-5 h-5" />
                    Products
                  </Button>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-3 font-normal ${activeTab === "employees" ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400" : "dark:text-gray-300"}`}
                    onClick={() => setActiveTab("employees")}
                  >
                    <Users className="w-5 h-5" />
                    Employees
                  </Button>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-3 font-normal ${activeTab === "analytics" ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400" : "dark:text-gray-300"}`}
                    onClick={() => setActiveTab("analytics")}
                  >
                    <LineChartIcon className="w-5 h-5" />
                    Analytics
                  </Button>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-3 font-normal ${activeTab === "transactions" ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400" : "dark:text-gray-300"}`}
                    onClick={() => setActiveTab("transactions")}
                  >
                    <CreditCard className="w-5 h-5" />
                    Transactions
                  </Button>
                </nav>
                <div className="mt-auto p-4 border-t dark:border-gray-700">
                  <Button variant="ghost" className="w-full justify-start gap-3 font-normal dark:text-gray-300">
                    <Settings className="w-5 h-5" />
                    Settings
                  </Button>
                  <div className="mt-4 flex items-center">
                    <Avatar className="w-8 h-8 border dark:border-gray-700">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="text-sm font-medium dark:text-white">Admin User</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)} className="lg:hidden">
              <Menu className="w-5 h-5 dark:text-gray-300" />
            </Button>
            <div className="flex items-center w-full max-w-md ml-auto">
              <div className="relative w-full">
                <Input
                  placeholder="Search..."
                  className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex items-center ml-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2 relative">
                    <Bell className="w-5 h-5 dark:text-gray-300" />
                    {notifications.filter(n => !n.read).length > 0 && (
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0 dark:bg-gray-800 dark:border-gray-700" align="end">
                  <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                    <h4 className="font-medium dark:text-white">Notifications</h4>
                    <Button variant="ghost" size="sm" className="h-8 text-xs dark:text-gray-300">Mark all as read</Button>
                  </div>
                  <ScrollArea className="h-[300px]">
                    <div className="divide-y dark:divide-gray-700">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 ${notification.read ? 'opacity-70' : 'bg-gray-50 dark:bg-gray-700/50'}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-full
                            ${notification.type === 'order' ? 'bg-indigo-100 dark:bg-indigo-900/50' : ''}
                            ${notification.type === 'payment' ? 'bg-green-100 dark:bg-green-900/50' : ''}
                            ${notification.type === 'inventory' ? 'bg-yellow-100 dark:bg-yellow-900/50' : ''}
                            ${notification.type === 'customer' ? 'bg-purple-100 dark:bg-purple-900/50' : ''}
                            ${notification.type === 'shipping' ? 'bg-blue-100 dark:bg-blue-900/50' : ''}
                            ${notification.type === 'refund' ? 'bg-red-100 dark:bg-red-900/50' : ''}
                            ${notification.type === 'system' ? 'bg-gray-100 dark:bg-gray-700' : ''}
                          `}>
                              {notification.type === 'order' && <ShoppingCart className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />}
                              {notification.type === 'payment' && <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />}
                              {notification.type === 'inventory' && <Package className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />}
                              {notification.type === 'customer' && <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
                              {notification.type === 'shipping' && <Truck className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                              {notification.type === 'refund' && <RefreshCw className="w-4 h-4 text-red-600 dark:text-red-400" />}
                              {notification.type === 'system' && <AlertCircle className="w-4 h-4 text-gray-600 dark:text-gray-400" />}
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
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="p-4 border-t dark:border-gray-700">
                    <Button variant="outline" className="w-full dark:border-gray-600 dark:text-gray-300">
                      View all notifications
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="w-8 h-8 border dark:border-gray-700">
                      <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&q=80" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-sm dark:text-gray-100">Admin User</p>
                      <p className="w-[200px] truncate text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="dark:bg-gray-700" />
                  <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
                    <UserIcon className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
                    <Palette className="mr-2 h-4 w-4" />
                    Appearance
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="dark:bg-gray-700" />
                  <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Help & Support
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="dark:bg-gray-700" />
                  <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900">
            {/* Dashboard */}
            {activeTab === "dashboard" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold dark:text-white">Dashboard Overview</h1>
                  <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
                    <RefreshCw className="w-4 h-4" />
                    Refresh Data
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Card className="border-l-4 border-indigo-500 dark:bg-gray-800 dark:border-indigo-400 dark:border-l-4 dark:border-t dark:border-r dark:border-b">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground dark:text-gray-400">Total Revenue</p>
                            <h3 className="text-2xl font-bold dark:text-white">$24,780</h3>
                            <p className="text-xs text-green-500 mt-1">+12.5% from last month</p>
                          </div>
                          <div className="p-3 bg-indigo-100 rounded-full dark:bg-indigo-900">
                            <DollarSign className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Card className="border-l-4 border-cyan-500 dark:bg-gray-800 dark:border-cyan-400 dark:border-l-4 dark:border-t dark:border-r dark:border-b">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground dark:text-gray-400">Total Orders</p>
                            <h3 className="text-2xl font-bold dark:text-white">1,245</h3>
                            <p className="text-xs text-green-500 mt-1">+8.2% from last month</p>
                          </div>
                          <div className="p-3 bg-cyan-100 rounded-full dark:bg-cyan-900">
                            <ShoppingCart className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Card className="border-l-4 border-emerald-500 dark:bg-gray-800 dark:border-emerald-400 dark:border-l-4 dark:border-t dark:border-r dark:border-b">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground dark:text-gray-400">Total Products</p>
                            <h3 className="text-2xl font-bold dark:text-white">450</h3>
                            <p className="text-xs text-green-500 mt-1">+5.3% from last month</p>
                          </div>
                          <div className="p-3 bg-emerald-100 rounded-full dark:bg-emerald-900">
                            <Box className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <Card className="border-l-4 border-purple-500 dark:bg-gray-800 dark:border-purple-400 dark:border-l-4 dark:border-t dark:border-r dark:border-b">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground dark:text-gray-400">
                              Total Customers
                            </p>
                            <h3 className="text-2xl font-bold dark:text-white">2,456</h3>
                            <p className="text-xs text-green-500 mt-1">+15.7% from last month</p>
                          </div>
                          <div className="p-3 bg-purple-100 rounded-full dark:bg-purple-900">
                            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="dark:text-white">Revenue Overview</CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Monthly revenue for the current year
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#888888" />
                            <YAxis stroke="#888888" />
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <ChartTooltipRecharts />
                            <Legend />
                            <Area
                              type="monotone"
                              dataKey="revenue"
                              stroke="#4f46e5"
                              fillOpacity={1}
                              fill="url(#colorRevenue)"
                              name="Revenue"
                            />
                            <Area
                              type="monotone"
                              dataKey="profit"
                              stroke="#06b6d4"
                              fillOpacity={1}
                              fill="url(#colorProfit)"
                              name="Profit"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="dark:text-white">Sales Statistics</CardTitle>
                      <CardDescription className="dark:text-gray-400">Daily sales for the current week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="name" stroke="#888888" />
                            <YAxis stroke="#888888" />
                            <ChartTooltipRecharts />
                            <Legend />
                            <Bar dataKey="sales" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Sales" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Category Distribution and Recent Orders */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <Card className="lg:col-span-1 dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="dark:text-white">Category Distribution</CardTitle>
                      <CardDescription className="dark:text-gray-400">Sales by product category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={categoryData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <ChartTooltipRecharts />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-2 dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="dark:text-white">Recent Orders</CardTitle>
                      <CardDescription className="dark:text-gray-400">Latest 5 orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b dark:border-gray-700">
                              <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Order ID</th>
                              <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Customer</th>
                              <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Date</th>
                              <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Status</th>
                              <th className="py-3 px-2 text-right font-medium dark:text-gray-300">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {recentOrders.map((order) => (
                              <tr key={order.id} className="border-b dark:border-gray-700">
                                <td className="py-3 px-2 dark:text-gray-300">{order.id}</td>
                                <td className="py-3 px-2 dark:text-gray-300">{order.customer}</td>
                                <td className="py-3 px-2 dark:text-gray-300">{order.date}</td>
                                <td className="py-3 px-2">
                                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                                    {order.status}
                                  </span>
                                </td>
                                <td className="py-3 px-2 text-right dark:text-gray-300">{order.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="dark:border-gray-600 dark:text-gray-300"
                        onClick={() => setActiveTab("orders")}
                      >
                        View All Orders
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </motion.div>
            )}

            {/* Orders */}
            {activeTab === "orders" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold dark:text-white">Orders Management</h1>
                    <p className="text-muted-foreground dark:text-gray-400">Manage and process customer orders</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
                          <Plus className="w-4 h-4" />
                          Add Order
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] dark:bg-gray-800 dark:border-gray-700">
                        <DialogHeader>
                          <DialogTitle className="dark:text-white">Add New Order</DialogTitle>
                          <DialogDescription className="dark:text-gray-400">
                            Enter the details for the new order. Click save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 sm:col-span-1">
                              <Label htmlFor="customer-name" className="dark:text-gray-300">
                                Customer Name
                              </Label>
                              <Input
                                id="customer-name"
                                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <Label htmlFor="order-date" className="dark:text-gray-300">
                                Order Date
                              </Label>
                              <Input
                                id="order-date"
                                type="date"
                                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="order-items" className="dark:text-gray-300">
                              Order Items
                            </Label>
                            <div className="mt-1 border rounded-md p-3 dark:border-gray-700">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium dark:text-gray-300">Product List</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 dark:border-gray-600 dark:text-gray-300"
                                >
                                  <Plus className="w-4 h-4 mr-1" /> Add Item
                                </Button>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 bg-gray-50 rounded dark:bg-gray-700">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm dark:text-gray-300">Wireless Headphones</span>
                                    <Badge className="bg-indigo-500 hover:bg-indigo-600">x1</Badge>
                                  </div>
                                  <span className="text-sm font-medium dark:text-gray-300">$89.99</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-gray-50 rounded dark:bg-gray-700">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm dark:text-gray-300">Smart Watch</span>
                                    <Badge className="bg-indigo-500 hover:bg-indigo-600">x1</Badge>
                                  </div>
                                  <span className="text-sm font-medium dark:text-gray-300">$199.99</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 sm:col-span-1">
                              <Label htmlFor="payment-method" className="dark:text-gray-300">
                                Payment Method
                              </Label>
                              <Select>
                                <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                  <SelectValue placeholder="Select payment method" />
                                </SelectTrigger>
                                <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                  <SelectItem value="credit-card" className="dark:text-gray-300">
                                    Credit Card
                                  </SelectItem>
                                  <SelectItem value="paypal" className="dark:text-gray-300">
                                    PayPal
                                  </SelectItem>
                                  <SelectItem value="bank-transfer" className="dark:text-gray-300">
                                    Bank Transfer
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <Label htmlFor="order-status" className="dark:text-gray-300">
                                Status
                              </Label>
                              <Select>
                                <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                  <SelectItem value="pending" className="dark:text-gray-300">
                                    Pending
                                  </SelectItem>
                                  <SelectItem value="processing" className="dark:text-gray-300">
                                    Processing
                                  </SelectItem>
                                  <SelectItem value="completed" className="dark:text-gray-300">
                                    Completed
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="notes" className="dark:text-gray-300">
                              Notes
                            </Label>
                            <Textarea
                              id="notes"
                              className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            Cancel
                          </Button>
                          <Button
                            className="bg-indigo-600 hover:bg-indigo-700"
                            onClick={() => handleAddItem("Order")}
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              "Save Order"
                            )}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    {selectedItems.length > 0 && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" className="gap-2">
                            <Trash2 className="w-4 h-4" />
                            Delete Selected
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="dark:bg-gray-800 dark:border-gray-700">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="dark:text-white">Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription className="dark:text-gray-400">
                              This action cannot be undone. This will permanently delete the selected orders from the
                              server.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={handleBulkDelete}>
                              {isLoading ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Deleting...
                                </>
                              ) : (
                                "Delete"
                              )}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </div>
                </div>

                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg dark:text-white">All Orders</CardTitle>
                      <div className="flex items-center gap-2">
                        <Select value={filterStatus} onValueChange={setFilterStatus}>
                          <SelectTrigger className="w-[180px] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                            <SelectItem value="all" className="dark:text-gray-300">
                              All Statuses
                            </SelectItem>
                            <SelectItem value="Pending" className="dark:text-gray-300">
                              Pending
                            </SelectItem>
                            <SelectItem value="Processing" className="dark:text-gray-300">
                              Processing
                            </SelectItem>
                            <SelectItem value="Shipped" className="dark:text-gray-300">
                              Shipped
                            </SelectItem>
                            <SelectItem value="Completed" className="dark:text-gray-300">
                              Completed
                            </SelectItem>
                            <SelectItem value="Cancelled" className="dark:text-gray-300">
                              Cancelled
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon" className="dark:border-gray-600 dark:text-gray-300">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b dark:border-gray-700">
                            <th className="py-3 px-2 text-left">
                              <Checkbox
                                checked={selectedItems.length === filteredOrders.length && filteredOrders.length > 0}
                                onCheckedChange={() => handleSelectAll(filteredOrders)}
                                className="dark:border-gray-600"
                              />
                            </th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Order ID</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Customer</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Date</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Items</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Payment</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Status</th>
                            <th className="py-3 px-2 text-right font-medium dark:text-gray-300">Total</th>
                            <th className="py-3 px-2 text-right font-medium dark:text-gray-300">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredOrders.map((order) => (
                            <tr key={order.id} className="border-b dark:border-gray-700">
                              <td className="py-3 px-2">
                                <Checkbox
                                  checked={selectedItems.includes(order.id)}
                                  onCheckedChange={() => handleSelectItem(order.id)}
                                  className="dark:border-gray-600"
                                />
                              </td>
                              <td className="py-3 px-2 dark:text-gray-300">{order.id}</td>
                              <td className="py-3 px-2 dark:text-gray-300">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={order.image || "/placeholder.svg"}
                                    alt={`Order ${order.id}`}
                                    className="w-10 h-10 rounded-md object-cover border dark:border-gray-700"
                                  />
                                  <span>{order.customer}</span>
                                </div>
                              </td>
                              <td className="py-3 px-2 dark:text-gray-300">{order.date}</td>
                              <td className="py-3 px-2 dark:text-gray-300">{order.items}</td>
                              <td className="py-3 px-2 dark:text-gray-300">{order.payment}</td>
                              <td className="py-3 px-2">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 p-2">
                                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                                        {order.status}
                                      </span>
                                      <ChevronDown className="h-4 w-4 ml-1" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="start" className="dark:bg-gray-800 dark:border-gray-700">
                                    <DropdownMenuItem
                                      className="dark:text-gray-300 dark:focus:bg-gray-700"
                                      onClick={() => handleStatusChange(order.id, "Pending", "Order")}
                                    >
                                      Pending
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      className="dark:text-gray-300 dark:focus:bg-gray-700"
                                      onClick={() => handleStatusChange(order.id, "Processing", "Order")}
                                    >
                                      Processing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      className="dark:text-gray-300 dark:focus:bg-gray-700"
                                      onClick={() => handleStatusChange(order.id, "Shipped", "Order")}
                                    >
                                      Shipped
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      className="dark:text-gray-300 dark:focus:bg-gray-700"
                                      onClick={() => handleStatusChange(order.id, "Completed", "Order")}
                                    >
                                      Completed
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      className="dark:text-gray-300 dark:focus:bg-gray-700"
                                      onClick={() => handleStatusChange(order.id, "Cancelled", "Order")}
                                    >
                                      Cancelled
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </td>
                              <td className="py-3 px-2 text-right dark:text-gray-300">{order.total}</td>
                              <td className="py-3 px-2 text-right">
                                <div className="flex justify-end gap-2">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button variant="outline" size="icon" className="h-8 w-8 dark:border-gray-600 dark:text-gray-300">
                                        <Edit className="h-4 w-4" />
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px] dark:bg-gray-800 dark:border-gray-700">
                                      <DialogHeader>
                                        <DialogTitle className="dark:text-white">Edit Order {order.id}</DialogTitle>
                                        <DialogDescription className="dark:text-gray-400">
                                          Make changes to the order details. Click save when you're done.
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="grid gap-4 py-4">
                                        <div className="flex items-center gap-4">
                                          <img
                                            src={order.image || "/placeholder.svg"}
                                            alt={`Order ${order.id}`}
                                            className="w-20 h-20 rounded-md object-cover border dark:border-gray-700"
                                          />
                                          <div>
                                            <p className="font-medium dark:text-white">Product Image</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Main product in this order</p>
                                          </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                          <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="edit-customer-name" className="dark:text-gray-300">Customer Name</Label>
                                            <Input id="edit-customer-name" defaultValue={order.customer} className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                                          </div>
                                          <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="edit-order-date" className="dark:text-gray-300">Order Date</Label>
                                            <Input id="edit-order-date" type="date" defaultValue={order.date} className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                                          </div>
                                        </div>
                                        <div>
                                          <Label htmlFor="edit-payment-method" className="dark:text-gray-300">Payment Method</Label>
                                          <Select defaultValue={order.payment.toLowerCase().replace(' ', '-')}>
                                            <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                              <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                              <SelectItem value="credit-card" className="dark:text-gray-300">Credit Card</SelectItem>
                                              <SelectItem value="paypal" className="dark:text-gray-300">PayPal</SelectItem>
                                              <SelectItem value="bank-transfer" className="dark:text-gray-300">Bank Transfer</SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                        <div>
                                          <Label htmlFor="edit-order-status" className="dark:text-gray-300">Status</Label>
                                          <Select defaultValue={order.status.toLowerCase()}>
                                            <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                              <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                              <SelectItem value="pending" className="dark:text-gray-300">Pending</SelectItem>
                                              <SelectItem value="processing" className="dark:text-gray-300">Processing</SelectItem>
                                              <SelectItem value="shipped" className="dark:text-gray-300">Shipped</SelectItem>
                                              <SelectItem value="completed" className="dark:text-gray-300">Completed</SelectItem>
                                              <SelectItem value="cancelled" className="dark:text-gray-300">Cancelled</SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                        <div>
                                          <Label htmlFor="edit-total" className="dark:text-gray-300">Total Amount</Label>
                                          <Input id="edit-total" defaultValue={order.total} className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                                        </div>
                                      </div>
                                      <DialogFooter>
                                        <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">-600 dark:text-gray-300">Cancel</Button>
                                        <Button
                                          className="bg-indigo-600 hover:bg-indigo-700"
                                          onClick={() => handleUpdateItem(order.id, "Order")}
                                          disabled={isLoading}
                                        >
                                          {isLoading ? (
                                            <>
                                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                              Saving...
                                            </>
                                          ) : (
                                            "Save Changes"
                                          )}
                                        </Button>
                                      </DialogFooter>
                                    </DialogContent>
                                  </Dialog>
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button variant="outline" size="icon" className="h-8 w-8 dark:border-gray-600 dark:text-gray-300">
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="dark:bg-gray-800 dark:border-gray-700">
                                      <AlertDialogHeader>
                                        <AlertDialogTitle className="dark:text-white">Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription className="dark:text-gray-400">
                                          This action cannot be undone. This will permanently delete the order {order.id} from the server.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel className="dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">Cancel</AlertDialogCancel>
                                        <AlertDialogAction
                                          className="bg-red-600 hover:bg-red-700"
                                          onClick={() => handleDelete(order.id)}
                                        >
                                          {isLoading ? (
                                            <>
                                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                              Deleting...
                                            </>
                                          ) : (
                                            "Delete"
                                          )}
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Products */}
            {activeTab === "products" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold dark:text-white">Products Management</h1>
                    <p className="text-muted-foreground dark:text-gray-400">Manage your product inventory</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
                          <Plus className="w-4 h-4" />
                          Add Product
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] dark:bg-gray-800 dark:border-gray-700">
                        <DialogHeader>
                          <DialogTitle className="dark:text-white">Add New Product</DialogTitle>
                          <DialogDescription className="dark:text-gray-400">
                            Enter the details for the new product. Click save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                              <Label htmlFor="product-name" className="dark:text-gray-300">
                                Product Name
                              </Label>
                              <Input
                                id="product-name"
                                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <Label htmlFor="product-category" className="dark:text-gray-300">
                                Category
                              </Label>
                              <Select>
                                <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                  <SelectItem value="electronics" className="dark:text-gray-300">
                                    Electronics
                                  </SelectItem>
                                  <SelectItem value="accessories" className="dark:text-gray-300">
                                    Accessories
                                  </SelectItem>
                                  <SelectItem value="home" className="dark:text-gray-300">
                                    Home
                                  </SelectItem>
                                  <SelectItem value="clothing" className="dark:text-gray-300">
                                    Clothing
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <Label htmlFor="product-price" className="dark:text-gray-300">
                                Price
                              </Label>
                              <Input
                                id="product-price"
                                placeholder="$0.00"
                                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="product-description" className="dark:text-gray-300">
                              Description
                            </Label>
                            <Textarea
                              id="product-description"
                              className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 sm:col-span-1">
                              <Label htmlFor="product-stock" className="dark:text-gray-300">
                                Stock Quantity
                              </Label>
                              <Input
                                id="product-stock"
                                type="number"
                                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <Label htmlFor="product-status" className="dark:text-gray-300">
                                Status
                              </Label>
                              <Select>
                                <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                  <SelectItem value="in-stock" className="dark:text-gray-300">
                                    In Stock
                                  </SelectItem>
                                  <SelectItem value="low-stock" className="dark:text-gray-300">
                                    Low Stock
                                  </SelectItem>
                                  <SelectItem value="out-of-stock" className="dark:text-gray-300">
                                    Out of Stock
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="product-image" className="dark:text-gray-300">
                              Product Image
                            </Label>
                            <div className="mt-1 flex items-center gap-4">
                              <div className="w-20 h-20 rounded-md border flex items-center justify-center dark:border-gray-700">
                                <Upload className="w-8 h-8 text-gray-400" />
                              </div>
                              <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                                <Upload className="w-4 h-4 mr-2" />
                                Upload Image
                              </Button>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            Cancel
                          </Button>
                          <Button
                            className="bg-indigo-600 hover:bg-indigo-700"
                            onClick={() => handleAddItem("Product")}
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              "Save Product"
                            )}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    {selectedItems.length > 0 && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" className="gap-2">
                            <Trash2 className="w-4 h-4" />
                            Delete Selected
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="dark:bg-gray-800 dark:border-gray-700">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="dark:text-white">Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription className="dark:text-gray-400">
                              This action cannot be undone. This will permanently delete the selected products from the
                              server.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={handleBulkDelete}>
                              {isLoading ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Deleting...
                                </>
                              ) : (
                                "Delete"
                              )}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </div>
                </div>

                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg dark:text-white">All Products</CardTitle>
                      <div className="flex items-center gap-2">
                        <Select>
                          <SelectTrigger className="w-[180px] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                            <SelectValue placeholder="Filter by category" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                            <SelectItem value="all" className="dark:text-gray-300">
                              All Categories
                            </SelectItem>
                            <SelectItem value="electronics" className="dark:text-gray-300">
                              Electronics
                            </SelectItem>
                            <SelectItem value="accessories" className="dark:text-gray-300">
                              Accessories
                            </SelectItem>
                            <SelectItem value="home" className="dark:text-gray-300">
                              Home
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon" className="dark:border-gray-600 dark:text-gray-300">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b dark:border-gray-700">
                            <th className="py-3 px-2 text-left">
                              <Checkbox
                                checked={selectedItems.length === filteredProducts.length && filteredProducts.length > 0}
                                onCheckedChange={() => handleSelectAll(filteredProducts)}
                                className="dark:border-gray-600"
                              />
                            </th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">ID</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Product Name</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Category</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Stock</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Price</th>
                            <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Status</th>
                            <th className="py-3 px-2 text-right font-medium dark:text-gray-300">Sales</th>
                            <th className="py-3 px-2 text-right font-medium dark:text-gray-300">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredProducts.map((product) => (
                            <tr key={product.id} className="border-b dark:border-gray-700">
                              <td className="py-3 px-2">
                                <Checkbox
                                  checked={selectedItems.includes(product.id)}
                                  onCheckedChange={() => handleSelectItem(product.id)}
                                  className="dark:border-gray-600"
                                />
                              </td>
                              <td className="py-3 px-2 dark:text-gray-300">{product.id}</td>
                              <td className="py-3 px-2 dark:text-gray-300">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-10 h-10 rounded-md object-cover border dark:border-gray-700"
                                  />
                                  <span>{product.name}</span>
                                </div>
                              </td>
                              <td className="py-3 px-2 dark:text-gray-300">{product.category}</td>
                              <td className="py-3 px-2 dark:text-gray-300">{product.stock}</td>
                              <td className="py-3 px-2 dark:text-gray-300">{product.price}</td>
                              <td className="py-3 px-2">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 p-2">
                                      <span
                                        className={`px-2 py-1 text-xs rounded-full ${getStatusColor(product.status)}`}
                                      >
                                        {product.status}
                                      </span>
                                      <ChevronDown className="h-4 w-4 ml-1" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="start" className="dark:bg-gray-800 dark:border-gray-700">
                                    <DropdownMenuItem
                                      className="dark:text-gray-300 dark:focus:bg-gray-700"
                                      onClick={() => handleStatusChange(product.id, "In Stock", "Product")}
                                    >
                                      In Stock
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      className="dark:text-gray-300 dark:focus:bg-gray-700"
                                      onClick={() => handleStatusChange(product.id, "Low Stock", "Product")}
                                    >
                                      Low Stock
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      className="dark:text-gray-300 dark:focus:bg-gray-700"
                                      onClick={() => handleStatusChange(product.id, "Out of Stock", "Product")}
                                    >
                                      Out of Stock
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </td>
                              <td className="py-3 px-2 text-right dark:text-gray-300">{product.sales}</td>
                              <td className="py-3 px-2 text-right">
                                <div className="flex justify-end gap-2">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 dark:border-gray-600 dark:text-gray-300"
                                      >
                                        <Edit className="h-4 w-4" />
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px] dark:bg-gray-800 dark:border-gray-700">
                                      <DialogHeader>
                                        <DialogTitle className="dark:text-white">Edit Product {product.id}</DialogTitle>
                                        <DialogDescription className="dark:text-gray-400">
                                          Make changes to the product details. Click save when you're done.
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="grid gap-4 py-4">
                                        <div className="flex items-center gap-4">
                                          <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            className="w-20 h-20 rounded-md object-cover border dark:border-gray-700"
                                          />
                                          <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                                            <Upload className="w-4 h-4 mr-2" />
                                            Change Image
                                          </Button>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                          <div className="col-span-2">
                                            <Label htmlFor="edit-product-name" className="dark:text-gray-300">Product Name</Label>
                                            <Input id="edit-product-name" defaultValue={product.name} className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                                          </div>
                                          <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="edit-product-category" className="dark:text-gray-300">Category</Label>
                                            <Select defaultValue={product.category.toLowerCase()}>
                                              <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                                <SelectValue />
                                              </SelectTrigger>
                                              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                                <SelectItem value="electronics" className="dark:text-gray-300">Electronics</SelectItem>
                                                <SelectItem value="accessories" className="dark:text-gray-300">Accessories</SelectItem>
                                                <SelectItem value="home" className="dark:text-gray-300">Home</SelectItem>
                                                <SelectItem value="clothing" className="dark:text-gray-300">Clothing</SelectItem>
                                              </SelectContent>
                                            </Select>
                                          </div>
                                          <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="edit-product-price" className="dark:text-gray-300">Price</Label>
                                            <Input id="edit-product-price" defaultValue={product.price} className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                                          </div>
                                        </div>
                                        <div>
                                          <Label htmlFor="edit-product-description" className="dark:text-gray-300">Description</Label>
                                          <Textarea id="edit-product-description" className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                          <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="edit-product-stock" className="dark:text-gray-300">Stock Quantity</Label>
                                            <Input id="edit-product-stock" type="number" defaultValue={product.stock} className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                                          </div>
                                          <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="edit-product-status" className="dark:text-gray-300">Status</Label>
                                            <Select defaultValue={product.status.toLowerCase().replace(' ', '-')}>
                                              <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                                <SelectValue />
                                              </SelectTrigger>
                                              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                                <SelectItem value="in-stock" className="dark:text-gray-300">In Stock</SelectItem>
                                                <SelectItem value="low-stock" className="dark:text-gray-300">Low Stock</SelectItem>
                                                <SelectItem value="out-of-stock" className="dark:text-gray-300">Out of Stock</SelectItem>
                                              </SelectContent>
                                            </Select>
                                          </div>
                                        </div>
                                      </div>
                                      <DialogFooter>
                                        <Button variant="outline" className="dark:border-gray

