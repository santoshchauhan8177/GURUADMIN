"use client"

import { motion } from "framer-motion"
import { ChevronDown, Loader2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

// Import sample data
import { transactions } from "@/data/transactions-data"

interface TransactionsTabProps {
  isLoading: boolean
  searchQuery: string
  onDelete: (id: string) => void
}

export default function TransactionsTab({ isLoading, searchQuery, onDelete }: TransactionsTabProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Processed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Sale":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Refund":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      transaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  // Convert $ to ₹ in transaction amounts
  const formatAmount = (amount: string) => {
    return amount.replace("$", "₹")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-white font-poppins">Transactions</h1>
          <p className="text-muted-foreground dark:text-gray-400 font-inter">
            View and manage all financial transactions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
              <SelectItem value="all" className="dark:text-gray-300">
                All Types
              </SelectItem>
              <SelectItem value="sale" className="dark:text-gray-300">
                Sales
              </SelectItem>
              <SelectItem value="refund" className="dark:text-gray-300">
                Refunds
              </SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
              <SelectItem value="all" className="dark:text-gray-300">
                All Statuses
              </SelectItem>
              <SelectItem value="completed" className="dark:text-gray-300">
                Completed
              </SelectItem>
              <SelectItem value="processed" className="dark:text-gray-300">
                Processed
              </SelectItem>
              <SelectItem value="pending" className="dark:text-gray-300">
                Pending
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg dark:text-white font-poppins">Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Transaction ID</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Date</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Type</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Customer</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Method</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Status</th>
                  <th className="py-3 px-2 text-right font-medium dark:text-gray-300">Amount</th>
                  <th className="py-3 px-2 text-right font-medium dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b dark:border-gray-700">
                    <td className="py-3 px-2 dark:text-gray-300">{transaction.id}</td>
                    <td className="py-3 px-2 dark:text-gray-300">{transaction.date}</td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(transaction.type)}`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="py-3 px-2 dark:text-gray-300">{transaction.customer}</td>
                    <td className="py-3 px-2 dark:text-gray-300">{transaction.method}</td>
                    <td className="py-3 px-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 p-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(transaction.status)}`}>
                              {transaction.status}
                            </span>
                            <ChevronDown className="h-4 w-4 ml-1" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="dark:bg-gray-800 dark:border-gray-700">
                          <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
                            Completed
                          </DropdownMenuItem>
                          <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
                            Processed
                          </DropdownMenuItem>
                          <DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
                            Pending
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                    <td
                      className={`py-3 px-2 text-right font-medium ${transaction.type === "Refund" ? "text-red-600 dark:text-red-400" : "dark:text-gray-300"}`}
                    >
                      {formatAmount(transaction.amount)}
                    </td>
                    <td className="py-3 px-2 text-right">
                      <div className="flex justify-end">
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
                              <AlertDialogTitle className="dark:text-white font-poppins">
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription className="dark:text-gray-400 font-inter">
                                This action cannot be undone. This will permanently delete the transaction{" "}
                                {transaction.id} from the server.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 font-medium">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-red-600 hover:bg-red-700 font-medium"
                                onClick={() => onDelete(transaction.id)}
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

      {/* Transaction Summary */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg dark:text-white font-poppins">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold dark:text-white">₹1,247,500</p>
              <span className="text-sm text-green-500 font-medium">+12.5%</span>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mt-2">Compared to last month</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg dark:text-white font-poppins">Total Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold dark:text-white">₹75,490</p>
              <span className="text-sm text-red-500 font-medium">+3.2%</span>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mt-2">Compared to last month</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg dark:text-white font-poppins">Net Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold dark:text-white">₹1,172,010</p>
              <span className="text-sm text-green-500 font-medium">+10.8%</span>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mt-2">Compared to last month</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

