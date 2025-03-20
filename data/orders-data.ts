export type Order = {
  id: string
  customer: {
    name: string
    email: string
    phone: string
  }
  date: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  items: {
    id: string
    name: string
    quantity: number
    price: number
  }[]
  total: number
  paymentMethod: string
  shippingAddress: string
}

export const orders: Order[] = [
  {
    id: "ORD-001",
    customer: {
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      phone: "+91 9876543210",
    },
    date: "2023-03-15T10:30:00Z",
    status: "delivered",
    items: [
      {
        id: "prod-001",
        name: "LED Bulb - 9W",
        quantity: 10,
        price: 299,
      },
      {
        id: "prod-002",
        name: "2-Way Switch",
        quantity: 5,
        price: 85,
      },
    ],
    total: 3415,
    paymentMethod: "Credit Card",
    shippingAddress: "123 Main Street, Delhi, 110001",
  },
  {
    id: "ORD-002",
    customer: {
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 8765432109",
    },
    date: "2023-03-16T14:45:00Z",
    status: "shipped",
    items: [
      {
        id: "prod-004",
        name: "Copper Wire - 1.5mm²",
        quantity: 2,
        price: 1200,
      },
    ],
    total: 2400,
    paymentMethod: "UPI",
    shippingAddress: "456 Park Avenue, Mumbai, 400001",
  },
  {
    id: "ORD-003",
    customer: {
      name: "Amit Patel",
      email: "amit@example.com",
      phone: "+91 7654321098",
    },
    date: "2023-03-17T09:15:00Z",
    status: "processing",
    items: [
      {
        id: "prod-005",
        name: "MCB - 32A",
        quantity: 3,
        price: 350,
      },
      {
        id: "prod-003",
        name: "3-Pin Socket",
        quantity: 8,
        price: 120,
      },
    ],
    total: 2010,
    paymentMethod: "Cash on Delivery",
    shippingAddress: "789 Lake Road, Bangalore, 560001",
  },
  {
    id: "ORD-004",
    customer: {
      name: "Sunita Verma",
      email: "sunita@example.com",
      phone: "+91 6543210987",
    },
    date: "2023-03-18T16:20:00Z",
    status: "pending",
    items: [
      {
        id: "prod-007",
        name: "Ceiling Fan - 1200mm",
        quantity: 2,
        price: 1500,
      },
    ],
    total: 3000,
    paymentMethod: "Bank Transfer",
    shippingAddress: "101 Hill View, Chennai, 600001",
  },
  {
    id: "ORD-005",
    customer: {
      name: "Vikram Singh",
      email: "vikram@example.com",
      phone: "+91 5432109876",
    },
    date: "2023-03-19T11:05:00Z",
    status: "cancelled",
    items: [
      {
        id: "prod-008",
        name: "Digital Multimeter",
        quantity: 1,
        price: 1200,
      },
    ],
    total: 1200,
    paymentMethod: "Credit Card",
    shippingAddress: "202 River Side, Kolkata, 700001",
  },
]

