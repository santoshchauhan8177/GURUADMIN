"use client"

import { motion } from "framer-motion"
import { ChevronDown, Edit, Filter, Loader2, Plus, Trash2, Upload } from "lucide-react"
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

import axios from "axios"
import { useState, useEffect } from "react"

interface ProductsTabProps {
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

export default function ProductsTab({
  isLoading,
  selectedItems,
  setSelectedItems,
  searchQuery,
  onDelete,
  onBulkDelete,
  onAddItem,
  onUpdateItem,
  onStatusChange,
}: ProductsTabProps) {
  const [products, setProducts] = useState<{ id: string; name: string; category: string; price: string; description: string; stock: number; status: string; image: string; sales?: number }[]>([]); // Add state for products
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    stock: 0,
    status: "in-stock",
    image: "",
  }); // State for new product

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setNewProduct((prev) => ({ ...prev, image: response.data.url })); // Update image URL in state
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  async function fetchProducts() {
    try {
      const response = await axios.get("/api/products"); // Fetch products from API
      setProducts(response.data); // Update products state
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error while fetching products:", error.response?.data || error.message)
      } else {
        console.error("Unexpected error while fetching products:", error)
      }
    }
  }

  async function handleAddProduct() {
    try {
      const response = await axios.post("/api/products", newProduct); // POST request to add product
      const addedProduct = response.data; // Ensure the response contains the new product
      if (addedProduct && addedProduct.id) {
        setProducts((prevProducts) => [...prevProducts, addedProduct]); // Update products state
      } else {
        console.error("Invalid response data:", response.data);
      }
      setNewProduct({
        name: "",
        category: "",
        price: "",
        description: "",
        stock: 0,
        status: "in-stock",
        image: "",
      }); // Reset new product state
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error while adding product:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error while adding product:", error);
      }
    }
  }

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, [])

  const [orders, setOrders] = useState([]) // Add state for orders

  async function fetchOrders() {
    try {
      const response = await axios.get("/api/orders")
      setOrders(response.data) // Use setOrders to update state
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error while fetching orders:", error.response?.data || error.message)
      } else {
        console.error("Unexpected error while fetching orders:", error)
      }
    }
  }

  useEffect(() => {
    fetchOrders() // Fetch orders when the component mounts
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

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  // Convert $ to ₹ in product prices
  const formatPrice = (price: unknown) => {
    const priceStr = String(price); // Ensure it's a string
    return priceStr.includes("$") ? priceStr.replace("$", "₹") : priceStr;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-white font-poppins">Products Management</h1>
          <p className="text-muted-foreground dark:text-gray-400 font-inter">Manage your product inventory</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-purple-600 hover:bg-purple-700 font-medium">
                <Plus className="w-4 h-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] dark:bg-gray-800 dark:border-gray-700">
              <DialogHeader>
                <DialogTitle className="dark:text-white font-poppins">Add New Product</DialogTitle>
                <DialogDescription className="dark:text-gray-400 font-inter">
                  Enter the details for the new product. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="product-name" className="dark:text-gray-300 font-medium">
                      Product Name
                    </Label>
                    <Input
                      id="product-name"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                      className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="product-category" className="dark:text-gray-300 font-medium">
                      Category
                    </Label>
                    <Select
                      value={newProduct.category}
                      onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                    >
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
                    <Label htmlFor="product-price" className="dark:text-gray-300 font-medium">
                      Price
                    </Label>
                    <Input
                      id="product-price"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      placeholder="₹0.00"
                      className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="product-description" className="dark:text-gray-300 font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="product-description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="product-stock" className="dark:text-gray-300 font-medium">
                      Stock Quantity
                    </Label>
                    <Input
                      id="product-stock"
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
                      className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="product-status" className="dark:text-gray-300 font-medium">
                      Status
                    </Label>
                    <Select
                      value={newProduct.status}
                      onValueChange={(value) => setNewProduct({ ...newProduct, status: value })}
                    >
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
                  <Label htmlFor="product-image" className="dark:text-gray-300 font-medium">
                    Product Image
                  </Label>
                  <div className="mt-1 flex items-center gap-4">
                    <div className="w-20 h-20 rounded-md border flex items-center justify-center dark:border-gray-700">
                      {newProduct.image ? (
                        <img
                          src={newProduct.image}
                          alt="Uploaded"
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <Upload className="w-8 h-8 text-gray-400" />
                      )}
                    </div>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="dark:border-gray-600 dark:text-gray-300"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                  Cancel
                </Button>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={handleAddProduct}
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
                <Button variant="destructive" className="gap-2 font-medium">
                  <Trash2 className="w-4 h-4" />
                  Delete Selected
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="dark:bg-gray-800 dark:border-gray-700">
                <AlertDialogHeader>
                  <AlertDialogTitle className="dark:text-white font-poppins">Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription className="dark:text-gray-400 font-inter">
                    This action cannot be undone. This will permanently delete the selected products from the server.
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
            <CardTitle className="text-lg dark:text-white font-poppins">All Products</CardTitle>
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
            <table className="w-full text-sm font-inter">
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
                    <td className="py-3 px-2 dark:text-gray-300">{formatPrice(product.price)}</td>
                    <td className="py-3 px-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 p-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(product.status)}`}>
                              {product.status}
                            </span>
                            <ChevronDown className="h-4 w-4 ml-1" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="dark:bg-gray-800 dark:border-gray-700">
                          <DropdownMenuItem
                            className="dark:text-gray-300 dark:focus:bg-gray-700"
                            onClick={() => onStatusChange(product.id, "In Stock", "Product")}
                          >
                            In Stock
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="dark:text-gray-300 dark:focus:bg-gray-700"
                            onClick={() => onStatusChange(product.id, "Low Stock", "Product")}
                          >
                            Low Stock
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="dark:text-gray-300 dark:focus:bg-gray-700"
                            onClick={() => onStatusChange(product.id, "Out of Stock", "Product")}
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
                              <DialogTitle className="dark:text-white font-poppins">
                                Edit Product {product.id}
                              </DialogTitle>
                              <DialogDescription className="dark:text-gray-400 font-inter">
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
                                  <Label htmlFor="edit-product-name" className="dark:text-gray-300 font-medium">
                                    Product Name
                                  </Label>
                                  <Input
                                    id="edit-product-name"
                                    defaultValue={product.name}
                                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                  />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-product-category" className="dark:text-gray-300 font-medium">
                                    Category
                                  </Label>
                                  <Select defaultValue={product.category.toLowerCase()}>
                                    <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                      <SelectValue />
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
                                  <Label htmlFor="edit-product-price" className="dark:text-gray-300 font-medium">
                                    Price
                                  </Label>
                                  <Input
                                    id="edit-product-price"
                                    defaultValue={formatPrice(product.price)}
                                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                  />
                                </div>
                              </div>
                              <div>
                                <Label htmlFor="edit-product-description" className="dark:text-gray-300 font-medium">
                                  Description
                                </Label>
                                <Textarea
                                  id="edit-product-description"
                                  className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-product-stock" className="dark:text-gray-300 font-medium">
                                    Stock Quantity
                                  </Label>
                                  <Input
                                    id="edit-product-stock"
                                    type="number"
                                    defaultValue={product.stock}
                                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                  />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                  <Label htmlFor="edit-product-status" className="dark:text-gray-300 font-medium">
                                    Status
                                  </Label>
                                  <Select defaultValue={product.status.toLowerCase().replace(" ", "-")}>
                                    <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                      <SelectValue />
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
                            </div>
                            <DialogFooter>
                              <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 font-medium">
                                Cancel
                              </Button>
                              <Button
                                className="bg-purple-600 hover:bg-purple-700 font-medium"
                                onClick={() => onUpdateItem(product.id, "Product")}
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
                                This action cannot be undone. This will permanently delete the product {product.id} from
                                the server.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 font-medium">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-red-600 hover:bg-red-700 font-medium"
                                onClick={() => onDelete(product.id)}
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

