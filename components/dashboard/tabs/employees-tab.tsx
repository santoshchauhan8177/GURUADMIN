"use client"

import { motion } from "framer-motion"
import { ChevronDown, Edit, Loader2, Plus, Trash2 } from "lucide-react"
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

import { useState, useEffect } from "react"
import axios from "axios"

interface EmployeesTabProps {
  isLoading: boolean
  selectedItems: string[]
  setSelectedItems: (items: string[]) => void
  searchQuery: string
  onDelete: (id: string) => void
  onBulkDelete: () => void
  onAddItem: (type: string) => void
  onUpdateItem: (id: string, type: string) => void
  onStatusChange: (id: string, newStatus: string, type: string) => void
}

export default function EmployeesTab({
  isLoading: propIsLoading, // Rename the prop to avoid conflict
  selectedItems,
  setSelectedItems,
  searchQuery,
  onDelete,
  onBulkDelete,
  onAddItem, // Use the prop function directly
  onUpdateItem,
  onStatusChange,
}: EmployeesTabProps) {
  const [employees, setEmployees] = useState<{ id: string; name: string; department: string; role: string; status: string; email: string; phone?: string }[]>([])
  const [isLoading, setIsLoading] = useState(false) // Local state for loading

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get("/api/employees") // Ensure the API endpoint is correct
        setEmployees(response.data)
      } catch (error) {
        console.error("Failed to fetch employees:", error)
      }
    }
    fetchEmployees()
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
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "On Leave":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
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
          <h1 className="text-2xl font-bold dark:text-white font-poppins">Employees Management</h1>
          <p className="text-muted-foreground dark:text-gray-400 font-inter">Manage your company employees</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-purple-600 hover:bg-purple-700 font-medium">
                <Plus className="w-4 h-4" />
                Add Employee
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] dark:bg-gray-800 dark:border-gray-700">
              <DialogHeader>
                <DialogTitle className="dark:text-white font-poppins">Add New Employee</DialogTitle>
                <DialogDescription className="dark:text-gray-400 font-inter">
                  Enter the details for the new employee. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="employee-name" className="dark:text-gray-300 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="employee-name"
                      className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="employee-role" className="dark:text-gray-300 font-medium">
                      Role
                    </Label>
                    <Input
                      id="employee-role"
                      className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="employee-department" className="dark:text-gray-300 font-medium">
                      Department
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                        <SelectItem value="sales" className="dark:text-gray-300">
                          Sales
                        </SelectItem>
                        <SelectItem value="marketing" className="dark:text-gray-300">
                          Marketing
                        </SelectItem>
                        <SelectItem value="support" className="dark:text-gray-300">
                          Support
                        </SelectItem>
                        <SelectItem value="operations" className="dark:text-gray-300">
                          Operations
                        </SelectItem>
                        <SelectItem value="it" className="dark:text-gray-300">
                          IT
                        </SelectItem>
                        <SelectItem value="hr" className="dark:text-gray-300">
                          Human Resources
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="employee-status" className="dark:text-gray-300 font-medium">
                      Status
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                        <SelectItem value="active" className="dark:text-gray-300">
                          Active
                        </SelectItem>
                        <SelectItem value="on-leave" className="dark:text-gray-300">
                          On Leave
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="employee-email" className="dark:text-gray-300 font-medium">
                      Email
                    </Label>
                    <Input
                      id="employee-email"
                      type="email"
                      className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="employee-phone" className="dark:text-gray-300 font-medium">
                      Phone
                    </Label>
                    <Input
                      id="employee-phone"
                      className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 font-medium">
                  Cancel
                </Button>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 font-medium"
                  onClick={() => onAddItem("Employee")} // Use the prop function
                  disabled={isLoading || propIsLoading} // Use both local and prop loading states
                >
                  {isLoading || propIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Employee"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {selectedItems.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="gap-2 font-medium">
                  <Trash2 className="w-4 h-4" />
                  Delete Selected
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="dark:bg-gray-800 dark:border-gray-700">
                <AlertDialogHeader>
                  <AlertDialogTitle className="dark:text-white font-poppins">Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription className="dark:text-gray-400 font-inter">
                    This action cannot be undone. This will permanently delete the selected employees from the server.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 font-medium">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-700 font-medium" onClick={onBulkDelete}>
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
            <CardTitle className="text-lg dark:text-white font-poppins">All Employees</CardTitle>
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger className="w-[180px] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                  <SelectItem value="all" className="dark:text-gray-300">
                    All Departments
                  </SelectItem>
                  <SelectItem value="sales" className="dark:text-gray-300">
                    Sales
                  </SelectItem>
                  <SelectItem value="marketing" className="dark:text-gray-300">
                    Marketing
                  </SelectItem>
                  <SelectItem value="support" className="dark:text-gray-300">
                    Support
                  </SelectItem>
                  <SelectItem value="operations" className="dark:text-gray-300">
                    Operations
                  </SelectItem>
                  <SelectItem value="it" className="dark:text-gray-300">
                    IT
                  </SelectItem>
                  <SelectItem value="hr" className="dark:text-gray-300">
                    Human Resources
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="py-3 px-2 text-left">
                    <Checkbox
                      checked={selectedItems.length === filteredEmployees.length && filteredEmployees.length > 0}
                      onCheckedChange={() => handleSelectAll(filteredEmployees)}
                      className="dark:border-gray-600"
                    />
                  </th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">ID</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Name</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Role</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Department</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Status</th>
                  <th className="py-3 px-2 text-left font-medium dark:text-gray-300">Email</th>
                  <th className="py-3 px-2 text-right font-medium dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="border-b dark:border-gray-700">
                    <td className="py-3 px-2">
                      <Checkbox
                        checked={selectedItems.includes(employee.id)}
                        onCheckedChange={() => handleSelectItem(employee.id)}
                        className="dark:border-gray-600"
                      />
                    </td>
                    <td className="py-3 px-2 dark:text-gray-300">{employee.id}</td>
                    <td className="py-3 px-2 dark:text-gray-300">{employee.name}</td>
                    <td className="py-3 px-2 dark:text-gray-300">{employee.role}</td>
                    <td className="py-3 px-2 dark:text-gray-300">{employee.department}</td>
                    <td className="py-3 px-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 p-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(employee.status)}`}>
                              {employee.status}
                            </span>
                            <ChevronDown className="h-4 w-4 ml-1" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="dark:bg-gray-800 dark:border-gray-700">
                          <DropdownMenuItem
                            className="dark:text-gray-300 dark:focus:bg-gray-700"
                            onClick={() => onStatusChange(employee.id, "Active", "Employee")}
                          >
                            Active
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="dark:text-gray-300 dark:focus:bg-gray-700"
                            onClick={() => onStatusChange(employee.id, "On Leave", "Employee")}
                          >
                            On Leave
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                    <td className="py-3 px-2 dark:text-gray-300">{employee.email}</td>
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
                              <DialogTitle className="dark:text-white font-poppins">
                                Edit Employee {employee.id}
                              </DialogTitle>
                              <DialogDescription className="dark:text-gray-400 font-inter">
                                Make changes to the employee details. Click save when you're done.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-employee-name" className="dark:text-gray-300 font-medium">
                                    Full Name
                                  </Label>
                                  <Input
                                    id="edit-employee-name"
                                    defaultValue={employee.name}
                                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                  />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-employee-role" className="dark:text-gray-300 font-medium">
                                    Role
                                  </Label>
                                  <Input
                                    id="edit-employee-role"
                                    defaultValue={employee.role}
                                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-employee-department" className="dark:text-gray-300 font-medium">
                                    Department
                                  </Label>
                                  <Select defaultValue={employee.department.toLowerCase()}>
                                    <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                      <SelectItem value="sales" className="dark:text-gray-300">
                                        Sales
                                      </SelectItem>
                                      <SelectItem value="marketing" className="dark:text-gray-300">
                                        Marketing
                                      </SelectItem>
                                      <SelectItem value="support" className="dark:text-gray-300">
                                        Support
                                      </SelectItem>
                                      <SelectItem value="operations" className="dark:text-gray-300">
                                        Operations
                                      </SelectItem>
                                      <SelectItem value="it" className="dark:text-gray-300">
                                        IT
                                      </SelectItem>
                                      <SelectItem value="human resources" className="dark:text-gray-300">
                                        Human Resources
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-employee-status" className="dark:text-gray-300 font-medium">
                                    Status
                                  </Label>
                                  <Select defaultValue={employee.status.toLowerCase().replace(" ", "-")}>
                                    <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                      <SelectItem value="active" className="dark:text-gray-300">
                                        Active
                                      </SelectItem>
                                      <SelectItem value="on-leave" className="dark:text-gray-300">
                                        On Leave
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-employee-email" className="dark:text-gray-300 font-medium">
                                    Email
                                  </Label>
                                  <Input
                                    id="edit-employee-email"
                                    defaultValue={employee.email}
                                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                  />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-employee-phone" className="dark:text-gray-300 font-medium">
                                    Phone
                                  </Label>
                                  <Input
                                    id="edit-employee-phone"
                                    defaultValue={employee.phone}
                                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                  />
                                </div>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 font-medium">
                                Cancel
                              </Button>
                              <Button
                                className="bg-purple-600 hover:bg-purple-700 font-medium"
                                onClick={() => onUpdateItem(employee.id, "Employee")}
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
                              <AlertDialogTitle className="dark:text-white font-poppins">
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription className="dark:text-gray-400 font-inter">
                                This action cannot be undone. This will permanently delete the employee {employee.id}{" "}
                                from the server.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 font-medium">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-red-600 hover:bg-red-700 font-medium"
                                onClick={() => onDelete(employee.id)}
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

