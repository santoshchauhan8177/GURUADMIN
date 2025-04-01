"use client"

import { motion } from "framer-motion"
import { Box, DollarSign, Loader2, RefreshCw, ShoppingCart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { StatsCard } from "@/components/dashboard/ui/stats-card"
import { ChartCard } from "@/components/dashboard/ui/chart-card"
import { RecentOrdersCard } from "@/components/dashboard/ui/recent-orders-card"

interface DashboardOverviewProps {
  isRefreshing: boolean
  onRefreshData: () => void
}

export default function DashboardOverview({ isRefreshing, onRefreshData }: DashboardOverviewProps) {
  // Sample data for charts
  const revenueData = [
    { name: "Jan", revenue: 400000, profit: 240000 },
    { name: "Feb", revenue: 300000, profit: 139800 },
    { name: "Mar", revenue: 500000, profit: 300000 },
    { name: "Apr", revenue: 450000, profit: 278000 },
    { name: "May", revenue: 600000, profit: 389000 },
    { name: "Jun", revenue: 550000, profit: 330000 },
    { name: "Jul", revenue: 700000, profit: 430000 },
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

  const COLORS = ["#0ea5e9", "#14b8a6", "#f59e0b", "#10b981", "#8b5cf6"]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold dark:text-white font-poppins">Dashboard Overview</h1>
        <Button
          className="gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
          onClick={onRefreshData}
          disabled={isRefreshing}
        >
          {isRefreshing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Refreshing...
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              Refresh Data
            </>
          )}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="₹24,78,000"
          change="+12.5% from last month"
          icon={<DollarSign className="w-6 h-6 text-teal-600 dark:text-teal-400" />}
          color="emerald"
          delay={0.1}
        />
        <StatsCard
          title="Total Orders"
          value="1,245"
          change="+8.2% from last month"
          icon={<ShoppingCart className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
          color="cyan"
          delay={0.2}
        />
        <StatsCard
          title="Total Products"
          value="450"
          change="+5.3% from last month"
          icon={<Box className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
          color="emerald"
          delay={0.3}
        />
        <StatsCard
          title="Total Customers"
          value="2,456"
          change="+15.7% from last month"
          icon={<Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          color="indigo"
          delay={0.4}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChartCard title="Revenue Overview" description="Monthly revenue and profit for the current year">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" tickFormatter={(value) => `₹${value / 1000}K`} />
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, undefined]} />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#14b8a6"
                fillOpacity={1}
                fill="url(#colorRevenue)"
                name="Revenue"
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#0ea5e9"
                fillOpacity={1}
                fill="url(#colorProfit)"
                name="Profit"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Sales Statistics" description="Daily sales for the current week">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#14b8a6" radius={[4, 4, 0, 0]} name="Sales" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Category Distribution and Recent Orders */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1 dark:bg-slate-800 dark:border-slate-700 border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="dark:text-white font-poppins">Category Distribution</CardTitle>
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
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <RecentOrdersCard />
      </div>
    </motion.div>
  )
}

