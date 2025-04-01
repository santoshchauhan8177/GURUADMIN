"use client"

import { motion } from "framer-motion"
import { ChevronDown, Edit, Filter, Loader2, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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
import { Badge } from "@/components/ui/badge"

import { useState, useEffect } from "react"
import axios from "axios"

interface OrdersTabProps {
  isLoading: boolean
  selectedItems: string[]
  setSelectedItems: (items: string[]) => void
  searchQuery: string
  filterStatus: string
  setFilterStatus: (status: string) => void
  onDelete: (id: string) => void
  onBulkDelete: () => void
  onAddItem: (type: string) => void
  onUpdateItem: (id: string, type: string) => void
  onStatusChange: (id: string, newStatus: string, type: string) => void
}

export default function OrdersTab({
  isLoading,
  selectedItems,
  setSelectedItems,
  searchQuery,
  filterStatus,
  setFilterStatus,
  onDelete,
  onBulkDelete,
  onAddItem,
  onUpdateItem,
  onStatusChange,
}: OrdersTabProps) {
  interface Order {
    id: string
    customer: string
    date: string
    items: string
    payment: string
    status: string
    total: string
    image?: string
  }

  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get("/api/orders")
        setOrders(response.data)
      } catch (error) {
        console.error("Failed to fetch orders:", error)
      }
    }
    fetchOrders()
  }, [])

  const handleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleSelectAll = (items: any[]) => {
    if (selectedItems.length === items.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(items.map((item) => item.id))
    }
  }

  const getStatusColor = (status: string) => {
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
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || order.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
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
                      <Button variant="outline" size="sm" className="h-8 dark:border-gray-600 dark:text-gray-300">
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
                  <Textarea id="notes" className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                  Cancel
                </Button>
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => onAddItem("Order")}
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
                    This action cannot be undone. This will permanently delete the selected orders from the server.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={onBulkDelete}>
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
                            onClick={() => onStatusChange(order.id, "Pending", "Order")}
                          >
                            Pending
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="dark:text-gray-300 dark:focus:bg-gray-700"
                            onClick={() => onStatusChange(order.id, "Processing", "Order")}
                          >
                            Processing
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="dark:text-gray-300 dark:focus:bg-gray-700"
                            onClick={() => onStatusChange(order.id, "Shipped", "Order")}
                          >
                            Shipped
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="dark:text-gray-300 dark:focus:bg-gray-700"
                            onClick={() => onStatusChange(order.id, "Completed", "Order")}
                          >
                            Completed
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="dark:text-gray-300 dark:focus:bg-gray-700"
                            onClick={() => onStatusChange(order.id, "Cancelled", "Order")}
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
                                  <Label htmlFor="edit-customer-name" className="dark:text-gray-300">
                                    Customer Name
                                  </Label>
                                  <Input
                                    id="edit-customer-name"
                                    defaultValue={order.customer}
                                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                  />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-order-date" className="dark:text-gray-300">
                                    Order Date
                                  </Label>
                                  <Input
                                    id="edit-order-date"
                                    type="date"
                                    defaultValue={order.date}
                                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                  />
                                </div>
                              </div>
                              <div>
                                <Label htmlFor="edit-payment-method" className="dark:text-gray-300">
                                  Payment Method
                                </Label>
                                <Select defaultValue={order.payment.toLowerCase().replace(" ", "-")}>
                                  <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                    <SelectValue />
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
                              <div>
                                <Label htmlFor="edit-order-status" className="dark:text-gray-300">
                                  Status
                                </Label>
                                <Select defaultValue={order.status.toLowerCase()}>
                                  <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                    <SelectItem value="pending" className="dark:text-gray-300">
                                      Pending
                                    </SelectItem>
                                    <SelectItem value="processing" className="dark:text-gray-300">
                                      Processing
                                    </SelectItem>
                                    <SelectItem value="shipped" className="dark:text-gray-300">
                                      Shipped
                                    </SelectItem>
                                    <SelectItem value="completed" className="dark:text-gray-300">
                                      Completed
                                    </SelectItem>
                                    <SelectItem value="cancelled" className="dark:text-gray-300">
                                      Cancelled
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="edit-total" className="dark:text-gray-300">
                                  Total Amount
                                </Label>
                                <Input
                                  id="edit-total"
                                  defaultValue={order.total}
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
                                onClick={() => onUpdateItem(order.id, "Order")}
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
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 dark:border-gray-600 dark:text-gray-300"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="dark:bg-gray-800 dark:border-gray-700">
                            <AlertDialogHeader>
                              <AlertDialogTitle className="dark:text-white">Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription className="dark:text-gray-400">
                                This action cannot be undone. This will permanently delete the order {order.id} from the
                                server.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-red-600 hover:bg-red-700"
                                onClick={() => onDelete(order.id)}
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
  )
}

