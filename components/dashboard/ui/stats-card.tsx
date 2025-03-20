"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: ReactNode
  color: "indigo" | "cyan" | "emerald" | "purple"
  delay: number
}

export function StatsCard({ title, value, change, icon, color, delay }: StatsCardProps) {
  const borderColorClass = {
    indigo: "border-indigo-500 dark:border-indigo-400",
    cyan: "border-cyan-500 dark:border-cyan-400",
    emerald: "border-emerald-500 dark:border-emerald-400",
    purple: "border-purple-500 dark:border-purple-400",
  }

  const bgColorClass = {
    indigo: "bg-indigo-100 dark:bg-indigo-900",
    cyan: "bg-cyan-100 dark:bg-cyan-900",
    emerald: "bg-emerald-100 dark:bg-emerald-900",
    purple: "bg-purple-100 dark:bg-purple-900",
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay }}>
      <Card
        className={`border-l-4 ${borderColorClass[color]} dark:bg-gray-800 dark:border-l-4 dark:border-t dark:border-r dark:border-b`}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground dark:text-gray-400">{title}</p>
              <h3 className="text-2xl font-bold dark:text-white">{value}</h3>
              <p className="text-xs text-green-500 mt-1">{change}</p>
            </div>
            <div className={`p-3 rounded-full ${bgColorClass[color]}`}>{icon}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

