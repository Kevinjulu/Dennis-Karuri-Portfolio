"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { apiClient } from "@/lib/api-client"
import { Loader2, Save } from "lucide-react"

interface SettingsState {
  general: {
    siteName: string;
    siteDescription: string;
    contactEmail: string;
    phoneNumber: string;
    footerText: string;
  };
  social: {
    instagram: string;
    twitter: string;
    tiktok: string;
    youtube: string;
    facebook: string;
    linkedin: string;
  };
  appearance: {
    primaryColor: string;
    accentColor: string;
    darkMode: boolean;
    showSocialStats: boolean;
    itemsPerPage: number;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    googleAnalyticsId: string;
  };
}

const defaultSettings: SettingsState = {
  general: {
    siteName: "Diana Luvanda",
    siteDescription: "Actress, Model & Digital Content Creator",
    contactEmail: "contact@dianaluvanda.com",
    phoneNumber: "",
    footerText: "© 2025 Diana Luvanda. All rights reserved.",
  },
  social: {
    instagram: "https://instagram.com/dianaluvanda",
    twitter: "https://twitter.com/dianaluvanda",
    tiktok: "https://tiktok.com/@dianaluvanda",
    youtube: "https://youtube.com/dianaluvanda",
    facebook: "https://facebook.com/dianaluvanda",
    linkedin: "https://linkedin.com/in/dianaluvanda",
  },
  appearance: {
    primaryColor: "#FF0000",
    accentColor: "#000000",
    darkMode: false,
    showSocialStats: true,
    itemsPerPage: 12,
  },
  seo: {
    metaTitle: "Diana Luvanda | Actress, Model & Digital Content Creator",
    metaDescription: "Diana Luvanda is a talented actress, model and digital content creator based in Kenya.",
    ogImage: "/images/diana-og.jpg",
    googleAnalyticsId: "",
  },
}

export function SettingsManager() {
  const [settings, setSettings] = useState<SettingsState>(defaultSettings)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("general")

  // Fetch settings on component mount
  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    setIsLoading(true)
    try {
      const data = await apiClient.settings.getAll()
      
      // Merge fetched settings with defaults to ensure all fields exist
      const mergedSettings = {
        general: { ...defaultSettings.general, ...(data.general || {}) },
        social: { ...defaultSettings.social, ...(data.social || {}) },
        appearance: { ...defaultSettings.appearance, ...(data.appearance || {}) },
        seo: { ...defaultSettings.seo, ...(data.seo || {}) },
      }
      
      setSettings(mergedSettings)
    } catch (error) {
      console.error("Error fetching settings:", error)
      toast({
        title: "Error",
        description: "Failed to fetch settings",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (category: keyof SettingsState, key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }))
  }

  const saveSettings = async (category: keyof SettingsState) => {
    setIsSaving(true)
    try {
      // Save each setting in the category
      const categorySettings = settings[category]
      
      for (const [key, value] of Object.entries(categorySettings)) {
        await apiClient.settings.update(key, {
          value,
          category,
        })
      }
      
      toast({
        title: "Success",
        description: `${category.charAt(0).toUpperCase() + category.slice(1)} settings saved successfully`,
      })
    } catch (error) {
      console.error("Error saving settings:", error)
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Website Settings</h2>
        <p className="text-muted-foreground">Manage your portfolio website settings</p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-red-500" />
        </div>
      ) : (
        <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>
          
          {/* General Settings */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Basic information about your portfolio website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={settings.general.siteName}
                    onChange={(e) => handleInputChange("general", "siteName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.general.siteDescription}
                    onChange={(e) => handleInputChange("general", "siteDescription", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={settings.general.contactEmail}
                    onChange={(e) => handleInputChange("general", "contactEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    value={settings.general.phoneNumber}
                    onChange={(e) => handleInputChange("general", "phoneNumber", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="footerText">Footer Text</Label>
                  <Input
                    id="footerText"
                    value={settings.general.footerText}
                    onChange={(e) => handleInputChange("general", "footerText", e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="ml-auto bg-red-500 hover:bg-red-600" 
                  onClick={() => saveSettings("general")}
                  disabled={isSaving}
                >
                  {isSaving && activeTab === "general" ? (
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
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Social Media Settings */}
          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>
                  Configure your social media profiles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram URL</Label>
                  <Input
                    id="instagram"
                    value={settings.social.instagram}
                    onChange={(e) => handleInputChange("social", "instagram", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter URL</Label>
                  <Input
                    id="twitter"
                    value={settings.social.twitter}
                    onChange={(e) => handleInputChange("social", "twitter", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tiktok">TikTok URL</Label>
                  <Input
                    id="tiktok"
                    value={settings.social.tiktok}
                    onChange={(e) => handleInputChange("social", "tiktok", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="youtube">YouTube URL</Label>
                  <Input
                    id="youtube"
                    value={settings.social.youtube}
                    onChange={(e) => handleInputChange("social", "youtube", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook URL</Label>
                  <Input
                    id="facebook"
                    value={settings.social.facebook}
                    onChange={(e) => handleInputChange("social", "facebook", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    value={settings.social.linkedin}
                    onChange={(e) => handleInputChange("social", "linkedin", e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="ml-auto bg-red-500 hover:bg-red-600" 
                  onClick={() => saveSettings("social")}
                  disabled={isSaving}
                >
                  {isSaving && activeTab === "social" ? (
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
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Appearance Settings */}
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how your portfolio looks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="primaryColor"
                      value={settings.appearance.primaryColor}
                      onChange={(e) => handleInputChange("appearance", "primaryColor", e.target.value)}
                    />
                    <div 
                      className="h-10 w-10 rounded-md border" 
                      style={{ backgroundColor: settings.appearance.primaryColor }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accentColor">Accent Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="accentColor"
                      value={settings.appearance.accentColor}
                      onChange={(e) => handleInputChange("appearance", "accentColor", e.target.value)}
                    />
                    <div 
                      className="h-10 w-10 rounded-md border" 
                      style={{ backgroundColor: settings.appearance.accentColor }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="darkMode">Dark Mode</Label>
                  <Switch
                    id="darkMode"
                    checked={settings.appearance.darkMode}
                    onCheckedChange={(checked) => handleInputChange("appearance", "darkMode", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="showSocialStats">Show Social Stats</Label>
                  <Switch
                    id="showSocialStats"
                    checked={settings.appearance.showSocialStats}
                    onCheckedChange={(checked) => handleInputChange("appearance", "showSocialStats", checked)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="itemsPerPage">Items Per Page</Label>
                  <Input
                    id="itemsPerPage"
                    type="number"
                    min="4"
                    max="48"
                    value={settings.appearance.itemsPerPage}
                    onChange={(e) => handleInputChange("appearance", "itemsPerPage", parseInt(e.target.value))}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="ml-auto bg-red-500 hover:bg-red-600" 
                  onClick={() => saveSettings("appearance")}
                  disabled={isSaving}
                >
                  {isSaving && activeTab === "appearance" ? (
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
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* SEO Settings */}
          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>
                  Optimize your portfolio for search engines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    value={settings.seo.metaTitle}
                    onChange={(e) => handleInputChange("seo", "metaTitle", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    value={settings.seo.metaDescription}
                    onChange={(e) => handleInputChange("seo", "metaDescription", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ogImage">OG Image URL</Label>
                  <Input
                    id="ogImage"
                    value={settings.seo.ogImage}
                    onChange={(e) => handleInputChange("seo", "ogImage", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                  <Input
                    id="googleAnalyticsId"
                    value={settings.seo.googleAnalyticsId}
                    onChange={(e) => handleInputChange("seo", "googleAnalyticsId", e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="ml-auto bg-red-500 hover:bg-red-600" 
                  onClick={() => saveSettings("seo")}
                  disabled={isSaving}
                >
                  {isSaving && activeTab === "seo" ? (
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
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
