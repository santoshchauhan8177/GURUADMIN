export type Product = {
  id: string
  name: string
  category: string
  subcategory: string
  price: number
  stock: number
  status: "in-stock" | "low-stock" | "out-of-stock"
  image: string
  description: string
  sku: string
  brand: string
  specifications?: Record<string, string>
}

export const products: Product[] = [
  {
    id: "prod-001",
    name: "LED Bulb - 9W",
    category: "Lighting",
    subcategory: "LED Bulbs",
    price: 299,
    stock: 120,
    status: "in-stock",
    image: "/placeholder.svg?height=80&width=80",
    description: "Energy-efficient 9W LED bulb with warm white light",
    sku: "LED-BLB-9W-001",
    brand: "Philips",
    specifications: {
      Wattage: "9W",
      "Color Temperature": "3000K",
      Lumens: "800lm",
      "Life Hours": "15000h",
    },
  },
  {
    id: "prod-002",
    name: "2-Way Switch",
    category: "Switches",
    subcategory: "Modular Switches",
    price: 85,
    stock: 200,
    status: "in-stock",
    image: "/placeholder.svg?height=80&width=80",
    description: "High-quality 2-way modular switch",
    sku: "SW-MOD-2W-002",
    brand: "Havells",
    specifications: {
      Type: "2-Way",
      "Current Rating": "6A",
      Material: "Polycarbonate",
    },
  },
  {
    id: "prod-003",
    name: "3-Pin Socket",
    category: "Sockets",
    subcategory: "Wall Sockets",
    price: 120,
    stock: 150,
    status: "in-stock",
    image: "/placeholder.svg?height=80&width=80",
    description: "Durable 3-pin wall socket with safety shutter",
    sku: "SOC-3PIN-003",
    brand: "Anchor",
    specifications: {
      Type: "3-Pin",
      "Current Rating": "16A",
      Material: "Polycarbonate",
    },
  },
  {
    id: "prod-004",
    name: "Copper Wire - 1.5mm²",
    category: "Wires & Cables",
    subcategory: "Copper Wires",
    price: 1200,
    stock: 10,
    status: "low-stock",
    image: "/placeholder.svg?height=80&width=80",
    description: "100m roll of 1.5mm² copper wire",
    sku: "WIRE-CU-1.5-004",
    brand: "Finolex",
    specifications: {
      Material: "Copper",
      "Cross-section": "1.5mm²",
      Length: "100m",
      Insulation: "PVC",
    },
  },
  {
    id: "prod-005",
    name: "MCB - 32A",
    category: "Protection Devices",
    subcategory: "MCBs",
    price: 350,
    stock: 75,
    status: "in-stock",
    image: "/placeholder.svg?height=80&width=80",
    description: "32A Miniature Circuit Breaker for residential use",
    sku: "MCB-32A-005",
    brand: "Schneider",
    specifications: {
      "Current Rating": "32A",
      Poles: "Single",
      "Breaking Capacity": "10kA",
    },
  },
  {
    id: "prod-006",
    name: "Distribution Box - 8 Way",
    category: "Distribution",
    subcategory: "Distribution Boxes",
    price: 850,
    stock: 0,
    status: "out-of-stock",
    image: "/placeholder.svg?height=80&width=80",
    description: "8-way distribution box for residential applications",
    sku: "DB-8W-006",
    brand: "Legrand",
    specifications: {
      Ways: "8",
      Type: "Double Door",
      Material: "Metal",
    },
  },
  {
    id: "prod-007",
    name: "Ceiling Fan - 1200mm",
    category: "Fans",
    subcategory: "Ceiling Fans",
    price: 1500,
    stock: 25,
    status: "in-stock",
    image: "/placeholder.svg?height=80&width=80",
    description: "High-speed 1200mm ceiling fan with 5-star energy rating",
    sku: "FAN-CEL-1200-007",
    brand: "Crompton",
    specifications: {
      Size: "1200mm",
      Speed: "380 RPM",
      Power: "75W",
      "Energy Rating": "5 Star",
    },
  },
  {
    id: "prod-008",
    name: "Digital Multimeter",
    category: "Tools",
    subcategory: "Testing Equipment",
    price: 1200,
    stock: 5,
    status: "low-stock",
    image: "/placeholder.svg?height=80&width=80",
    description: "Professional digital multimeter for electrical testing",
    sku: "TOOL-DMM-008",
    brand: "Fluke",
    specifications: {
      Display: "Digital",
      Measures: "Voltage, Current, Resistance",
      "Auto-ranging": "Yes",
    },
  },
]

