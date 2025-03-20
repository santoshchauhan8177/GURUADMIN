"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export function RecentOrdersCard() {
  const router = useRouter()

  // Sample data for recent orders
  const recentOrders = [
    { id: "#ORD-001", customer: "John Doe", date: "2023-05-15", status: "Completed", total: "$120.00" },
    { id: "#ORD-002", customer: "Jane Smith", date: "2023-05-14", status: "Processing", total: "$85.50" },
    { id: "#ORD-003", customer: "Robert Johnson", date: "2023-05-14", status: "Shipped", total: "$220.75" },
    { id: "#ORD-004", customer: "Emily Davis", date: "2023-05-13", status: "Pending", total: "$65.25" },
    { id: "#ORD-005", customer: "Michael Brown", date: "2023-05-12", status: "Completed", total: "$175.00" },
  ]

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
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  return (
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
          onClick={() => router.push("/?tab=orders")}
        >
          View All Orders
        </Button>
      </CardFooter>
    </Card>
  )
}

