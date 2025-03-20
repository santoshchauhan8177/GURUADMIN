"use client"
import DashboardOverview from "@/components/dashboard/tabs/dashboard-overview"
import OrdersTab from "@/components/dashboard/tabs/orders-tab"
import ProductsTab from "@/components/dashboard/tabs/products-tab"
import EmployeesTab from "@/components/dashboard/tabs/employees-tab"
import AnalyticsTab from "@/components/dashboard/tabs/analytics-tab"
import TransactionsTab from "@/components/dashboard/tabs/transactions-tab"
import { toast } from "@/components/ui/use-toast"

interface DashboardContentProps {
  activeTab: string
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  isRefreshing: boolean
  onRefreshData: () => void
  selectedItems: string[]
  setSelectedItems: (items: string[]) => void
  searchQuery: string
  filterStatus: string
  setFilterStatus: (status: string) => void
}

export default function DashboardContent({
  activeTab,
  isLoading,
  setIsLoading,
  isRefreshing,
  onRefreshData,
  selectedItems,
  setSelectedItems,
  searchQuery,
  filterStatus,
  setFilterStatus,
}: DashboardContentProps) {
  // Common handlers for all tabs
  const handleDelete = (id: string) => {
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

  const handleAddItem = (type: string) => {
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

  const handleUpdateItem = (id: string, type: string) => {
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

  const handleStatusChange = (id: string, newStatus: string, type: string) => {
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

  // Render the appropriate tab content
  return (
    <>
      {activeTab === "dashboard" && <DashboardOverview isRefreshing={isRefreshing} onRefreshData={onRefreshData} />}

      {activeTab === "orders" && (
        <OrdersTab
          isLoading={isLoading}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          searchQuery={searchQuery}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          onDelete={handleDelete}
          onBulkDelete={handleBulkDelete}
          onAddItem={handleAddItem}
          onUpdateItem={handleUpdateItem}
          onStatusChange={handleStatusChange}
        />
      )}

      {activeTab === "products" && (
        <ProductsTab
          isLoading={isLoading}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          searchQuery={searchQuery}
          onDelete={handleDelete}
          onBulkDelete={handleBulkDelete}
          onAddItem={handleAddItem}
          onUpdateItem={handleUpdateItem}
          onStatusChange={handleStatusChange}
        />
      )}

      {activeTab === "employees" && (
        <EmployeesTab
          isLoading={isLoading}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          searchQuery={searchQuery}
          onDelete={handleDelete}
          onBulkDelete={handleBulkDelete}
          onAddItem={handleAddItem}
          onUpdateItem={handleUpdateItem}
          onStatusChange={handleStatusChange}
        />
      )}

      {activeTab === "analytics" && <AnalyticsTab />}

      {activeTab === "transactions" && (
        <TransactionsTab isLoading={isLoading} searchQuery={searchQuery} onDelete={handleDelete} />
      )}
    </>
  )
}

