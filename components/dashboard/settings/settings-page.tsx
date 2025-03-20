"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Bell, Check, Globe, Loader2, Lock, Mail, Save, Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSave = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    }, 1500)
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
              className="h-9 w-9 border-gray-200 dark:border-slate-700"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold dark:text-white font-poppins">Settings</h1>
              <p className="text-muted-foreground dark:text-gray-400">Manage your account settings and preferences</p>
            </div>
          </div>
          <Button
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-gray-100 dark:bg-slate-800 p-1 w-full max-w-md">
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 dark:text-gray-300 font-medium"
            >
              General
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 dark:text-gray-300 font-medium"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 dark:text-gray-300 font-medium"
            >
              Security
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TabsContent value="general" className="space-y-6">
              <Card className="dark:bg-slate-800 dark:border-slate-700 border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 dark:text-white font-poppins">
                    <User className="h-5 w-5 text-teal-500" />
                    Account Information
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">Update your account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="dark:text-gray-300 font-medium">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        defaultValue="Admin"
                        className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="dark:text-gray-300 font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        defaultValue="User"
                        className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="dark:text-gray-300 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="admin@example.com"
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="dark:text-gray-300 font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      defaultValue="ShopAdmin Inc."
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-slate-800 dark:border-slate-700 border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 dark:text-white font-poppins">
                    <Globe className="h-5 w-5 text-teal-500" />
                    Preferences
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">Customize your dashboard experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language" className="dark:text-gray-300 font-medium">
                      Language
                    </Label>
                    <Select defaultValue="en">
                      <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                        <SelectItem value="en" className="dark:text-gray-300">
                          English
                        </SelectItem>
                        <SelectItem value="es" className="dark:text-gray-300">
                          Spanish
                        </SelectItem>
                        <SelectItem value="fr" className="dark:text-gray-300">
                          French
                        </SelectItem>
                        <SelectItem value="de" className="dark:text-gray-300">
                          German
                        </SelectItem>
                        <SelectItem value="hi" className="dark:text-gray-300">
                          Hindi
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone" className="dark:text-gray-300 font-medium">
                      Timezone
                    </Label>
                    <Select defaultValue="utc+5.5">
                      <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                        <SelectItem value="utc+0" className="dark:text-gray-300">
                          UTC (GMT+0)
                        </SelectItem>
                        <SelectItem value="utc-5" className="dark:text-gray-300">
                          Eastern Time (GMT-5)
                        </SelectItem>
                        <SelectItem value="utc-8" className="dark:text-gray-300">
                          Pacific Time (GMT-8)
                        </SelectItem>
                        <SelectItem value="utc+1" className="dark:text-gray-300">
                          Central European Time (GMT+1)
                        </SelectItem>
                        <SelectItem value="utc+5.5" className="dark:text-gray-300">
                          Indian Standard Time (GMT+5:30)
                        </SelectItem>
                        <SelectItem value="utc+8" className="dark:text-gray-300">
                          China Standard Time (GMT+8)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency" className="dark:text-gray-300 font-medium">
                      Currency
                    </Label>
                    <Select defaultValue="inr">
                      <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                        <SelectItem value="usd" className="dark:text-gray-300">
                          USD ($)
                        </SelectItem>
                        <SelectItem value="eur" className="dark:text-gray-300">
                          EUR (€)
                        </SelectItem>
                        <SelectItem value="gbp" className="dark:text-gray-300">
                          GBP (£)
                        </SelectItem>
                        <SelectItem value="inr" className="dark:text-gray-300">
                          INR (₹)
                        </SelectItem>
                        <SelectItem value="jpy" className="dark:text-gray-300">
                          JPY (¥)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300 font-medium">Theme</Label>
                    <RadioGroup defaultValue="system" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="theme-light" />
                        <Label htmlFor="theme-light" className="dark:text-gray-300">
                          Light
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dark" id="theme-dark" />
                        <Label htmlFor="theme-dark" className="dark:text-gray-300">
                          Dark
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="system" id="theme-system" />
                        <Label htmlFor="theme-system" className="dark:text-gray-300">
                          System
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="dark:bg-slate-800 dark:border-slate-700 border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 dark:text-white font-poppins">
                    <Bell className="h-5 w-5 text-teal-500" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">Choose how you want to be notified</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium dark:text-white">Notification Channels</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications" className="text-sm dark:text-gray-300">
                            Email Notifications
                          </Label>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Receive notifications via email
                          </p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-notifications" className="text-sm dark:text-gray-300">
                            Push Notifications
                          </Label>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Receive notifications in the app
                          </p>
                        </div>
                        <Switch id="push-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-notifications" className="text-sm dark:text-gray-300">
                            SMS Notifications
                          </Label>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Receive notifications via SMS
                          </p>
                        </div>
                        <Switch id="sms-notifications" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-slate-800 dark:border-slate-700 border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 dark:text-white font-poppins">
                    <Mail className="h-5 w-5 text-teal-500" />
                    Email Digest
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Configure your email notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="digest-frequency" className="dark:text-gray-300 font-medium">
                      Email Digest Frequency
                    </Label>
                    <Select defaultValue="daily">
                      <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                        <SelectItem value="realtime" className="dark:text-gray-300">
                          Real-time
                        </SelectItem>
                        <SelectItem value="daily" className="dark:text-gray-300">
                          Daily
                        </SelectItem>
                        <SelectItem value="weekly" className="dark:text-gray-300">
                          Weekly
                        </SelectItem>
                        <SelectItem value="never" className="dark:text-gray-300">
                          Never
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium dark:text-white">Notification Types</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="order-notifications" className="text-sm dark:text-gray-300">
                          Order Updates
                        </Label>
                        <Switch id="order-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="payment-notifications" className="text-sm dark:text-gray-300">
                          Payment Updates
                        </Label>
                        <Switch id="payment-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="inventory-notifications" className="text-sm dark:text-gray-300">
                          Inventory Alerts
                        </Label>
                        <Switch id="inventory-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="customer-notifications" className="text-sm dark:text-gray-300">
                          Customer Updates
                        </Label>
                        <Switch id="customer-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="system-notifications" className="text-sm dark:text-gray-300">
                          System Alerts
                        </Label>
                        <Switch id="system-notifications" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card className="dark:bg-slate-800 dark:border-slate-700 border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 dark:text-white font-poppins">
                    <Lock className="h-5 w-5 text-teal-500" />
                    Password
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">Change your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password" className="dark:text-gray-300 font-medium">
                      Current Password
                    </Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="••••••••"
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password" className="dark:text-gray-300 font-medium">
                      New Password
                    </Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="••••••••"
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="dark:text-gray-300 font-medium">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white">
                    <Check className="mr-2 h-4 w-4" />
                    Update Password
                  </Button>
                </CardFooter>
              </Card>

              <Card className="dark:bg-slate-800 dark:border-slate-700 border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 dark:text-white font-poppins">
                    <Shield className="h-5 w-5 text-teal-500" />
                    Security Settings
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Manage your account security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="2fa" className="text-sm dark:text-gray-300">
                        Two-Factor Authentication
                      </Label>
                      <p className="text-xs text-muted-foreground dark:text-gray-400">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch id="2fa" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="login-alerts" className="text-sm dark:text-gray-300">
                        Login Alerts
                      </Label>
                      <p className="text-xs text-muted-foreground dark:text-gray-400">
                        Receive alerts for new login attempts
                      </p>
                    </div>
                    <Switch id="login-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout" className="text-sm dark:text-gray-300">
                        Session Timeout
                      </Label>
                      <p className="text-xs text-muted-foreground dark:text-gray-400">
                        Automatically log out after inactivity
                      </p>
                    </div>
                    <Switch id="session-timeout" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <h4 className="text-sm font-medium dark:text-white mb-2">Session Timeout Duration</h4>
                  <Select defaultValue="60">
                    <SelectTrigger className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-gray-100 border-gray-200">
                      <SelectValue placeholder="Select timeout duration" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                      <SelectItem value="15" className="dark:text-gray-300">
                        15 minutes
                      </SelectItem>
                      <SelectItem value="30" className="dark:text-gray-300">
                        30 minutes
                      </SelectItem>
                      <SelectItem value="60" className="dark:text-gray-300">
                        1 hour
                      </SelectItem>
                      <SelectItem value="120" className="dark:text-gray-300">
                        2 hours
                      </SelectItem>
                      <SelectItem value="240" className="dark:text-gray-300">
                        4 hours
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

