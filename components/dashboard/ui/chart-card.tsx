import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ChartCardProps {
  title: string
  description: string
  children: ReactNode
}

export function ChartCard({ title, description, children }: ChartCardProps) {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-white">{title}</CardTitle>
        <CardDescription className="dark:text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

