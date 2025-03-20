"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  CalendarDays,
  Camera,
  CreditCard,
  Edit,
  FileText,
  Lock,
  Mail,
  MapPin,
  Phone,
  Save,
  User,
  ArrowLeft,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSave = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setIsEditing(false)
    }, 1000)
  }

  return (
    <div className="container py-10 font-inter">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => router.back()}
              className="h-9 w-9 border-gray-200 dark:border-gray-700"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold dark:text-white font-poppins">My Profile</h1>
              <p className="text-muted-foreground dark:text-gray-400">Manage your account settings and preferences</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="md:col-span-1 dark:bg-gray-800 dark:border-gray-700 border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="dark:text-white font-poppins">Profile Picture</CardTitle>
              <CardDescription className="dark:text-gray-400">Update your profile photo</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative mb-4">
                <Avatar className="h-32 w-32 border-4 border-white dark:border-gray-900 shadow-md">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&q=80"
                    alt="Admin User"
                  />
                  <AvatarFallback className="text-2xl bg-purple-200 text-purple-700 dark:bg-purple-800 dark:text-purple-200">
                    AU
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-md"
                >
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">Upload new picture</span>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium dark:text-white">Admin User</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">admin@example.com</p>
                <p className="text-xs text-muted-foreground dark:text-gray-400 mt-1">Administrator</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="outline"
                className="w-full dark:border-gray-700 dark:text-gray-300 border-gray-200 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
              >
                Change Photo
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-2 dark:bg-gray-800 dark:border-gray-700 border-gray-200 shadow-sm">
            <Tabs defaultValue="personal">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="dark:text-white font-poppins">Profile Information</CardTitle>
                  {!isEditing ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(true)}
                      className="dark:border-gray-700 dark:text-gray-300 border-gray-200 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleSave}
                      disabled={loading}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="mr-2 h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  )}
                </div>
                <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-700/50">
                  <TabsTrigger
                    value="personal"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 dark:text-gray-300 font-medium"
                  >
                    Personal
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 dark:text-gray-300 font-medium"
                  >
                    Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="billing"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 dark:text-gray-300 font-medium"
                  >
                    Billing
                  </TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent>
                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="fullName" className="dark:text-gray-300 font-medium">
                        Full Name
                      </Label>
                      <div className="flex items-center mt-1">
                        <User className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="fullName"
                          defaultValue="Admin User"
                          disabled={!isEditing}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-gray-200"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="dark:text-gray-300 font-medium">
                        Email Address
                      </Label>
                      <div className="flex items-center mt-1">
                        <Mail className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          defaultValue="admin@example.com"
                          disabled={!isEditing}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-gray-200"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="dark:text-gray-300 font-medium">
                        Phone Number
                      </Label>
                      <div className="flex items-center mt-1">
                        <Phone className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          defaultValue="+1 (555) 123-4567"
                          disabled={!isEditing}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-gray-200"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="dob" className="dark:text-gray-300 font-medium">
                        Date of Birth
                      </Label>
                      <div className="flex items-center mt-1">
                        <CalendarDays className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="dob"
                          type="date"
                          defaultValue="1990-01-01"
                          disabled={!isEditing}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-gray-200"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address" className="dark:text-gray-300 font-medium">
                      Address
                    </Label>
                    <div className="flex items-center mt-1">
                      <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                      <Input
                        id="address"
                        defaultValue="123 Main St, Anytown, CA 12345"
                        disabled={!isEditing}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-gray-200"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio" className="dark:text-gray-300 font-medium">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself"
                      defaultValue="E-commerce administrator with 5+ years of experience managing online retail platforms."
                      disabled={!isEditing}
                      className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-gray-200"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="security" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="current-password" className="dark:text-gray-300 font-medium">
                        Current Password
                      </Label>
                      <div className="flex items-center mt-1">
                        <Lock className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="current-password"
                          type="password"
                          placeholder="••••••••"
                          disabled={!isEditing}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-gray-200"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="new-password" className="dark:text-gray-300 font-medium">
                        New Password
                      </Label>
                      <div className="flex items-center mt-1">
                        <Lock className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="new-password"
                          type="password"
                          placeholder="••••••••"
                          disabled={!isEditing}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-gray-200"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="confirm-password" className="dark:text-gray-300 font-medium">
                        Confirm New Password
                      </Label>
                      <div className="flex items-center mt-1">
                        <Lock className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                          disabled={!isEditing}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-gray-200"
                        />
                      </div>
                    </div>
                    <Separator className="my-4 dark:bg-gray-700" />
                    <div>
                      <h4 className="text-sm font-medium mb-2 dark:text-white">Two-Factor Authentication</h4>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm dark:text-gray-300">Protect your account with 2FA</p>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">Currently disabled</p>
                        </div>
                        <Switch id="2fa" disabled={!isEditing} />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="billing" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2 dark:text-white">Payment Methods</h4>
                      <div className="rounded-md border p-4 dark:border-gray-700 border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-100 rounded-md dark:bg-gray-700">
                              <CreditCard className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                            </div>
                            <div>
                              <p className="text-sm font-medium dark:text-white">Visa ending in 4242</p>
                              <p className="text-xs text-muted-foreground dark:text-gray-400">Expires 12/2024</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            disabled={!isEditing}
                            className="dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
                          >
                            Edit
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 dark:border-gray-700 dark:text-gray-300 border-gray-200 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
                        disabled={!isEditing}
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Add Payment Method
                      </Button>
                    </div>
                    <Separator className="my-4 dark:bg-gray-700" />
                    <div>
                      <h4 className="text-sm font-medium mb-2 dark:text-white">Billing History</h4>
                      <div className="space-y-2">
                        {[
                          { id: "INV-001", date: "May 15, 2023", amount: "₹4,999", status: "Paid" },
                          { id: "INV-002", date: "Apr 15, 2023", amount: "₹4,999", status: "Paid" },
                          { id: "INV-003", date: "Mar 15, 2023", amount: "₹4,999", status: "Paid" },
                        ].map((invoice) => (
                          <div
                            key={invoice.id}
                            className="flex items-center justify-between rounded-md border p-3 dark:border-gray-700 border-gray-200"
                          >
                            <div className="flex items-center gap-4">
                              <div className="p-2 bg-gray-100 rounded-md dark:bg-gray-700">
                                <FileText className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                              </div>
                              <div>
                                <p className="text-sm font-medium dark:text-white">{invoice.id}</p>
                                <p className="text-xs text-muted-foreground dark:text-gray-400">{invoice.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <p className="text-sm font-medium dark:text-white">{invoice.amount}</p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
                              >
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}

