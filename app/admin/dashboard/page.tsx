"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminHeader } from "@/components/admin/admin-header"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { Overview } from "@/components/admin/overview"
import { ContentManager } from "@/components/admin/content-manager"
import { MediaManager } from "@/components/admin/media-manager"
import { SettingsManager } from "@/components/admin/settings-manager"
import { DashboardHeader } from "@/components/admin/dashboard-header"
import { DashboardShell } from "@/components/admin/dashboard-shell"
import { useAuth } from "@/contexts/auth-context"
import { apiClient } from "@/lib/api-client"

export default function AdminDashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    async function getProfile() {
      if (user?.id) {
        try {
          // Get user profile from MongoDB
          const userData = await apiClient.auth.getUser();
          setProfile(userData);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      }
    }

    getProfile()
  }, [user])

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminHeader />

      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 overflow-y-auto">
          <DashboardShell>
            <DashboardHeader 
              heading="Dashboard" 
              text={`Welcome back, ${profile?.name || user.email}`}
            />

            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Overview />
              </TabsContent>

              <TabsContent value="content">
                <ContentManager />
              </TabsContent>

              <TabsContent value="media">
                <MediaManager />
              </TabsContent>

              <TabsContent value="settings">
                <SettingsManager />
              </TabsContent>
            </Tabs>
          </DashboardShell>
        </main>
      </div>
    </div>
  )
}
