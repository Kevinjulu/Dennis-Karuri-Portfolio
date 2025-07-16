"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Save, Upload } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"

export function SettingsPanel() {
  const [activeTab, setActiveTab] = useState("general")
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  // General settings
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Dennis Karuri",
    siteDescription: "Actress, Model, and Digital Content Creator from Kenya",
    contactEmail: "contact@dianaluvanda.com",
    contactPhone: "+254 700 000 000",
    address: "Nairobi, Kenya",
  })

  // SEO settings
  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "Dennis Karuri | Makeup Artist & Beauty Influencer",
    metaDescription:
      "Dennis Karuri is a renowned Kenyan makeup artist, beauty influencer, and digital content creator with a strong social media presence.",
    ogTitle: "Dennis Karuri | Makeup Artist & Beauty Influencer",
    ogDescription: "Discover Dennis Karuri's portfolio - Kenyan makeup artist and beauty influencer.",
    twitterHandle: "@dianaluvanda",
    googleAnalyticsId: "UA-XXXXXXXXX-X",
    indexingEnabled: true,
  })

  // Social media settings
  const [socialSettings, setSocialSettings] = useState({
    instagram: "https://www.instagram.com/dianaluvanda",
    tiktok: "https://www.tiktok.com/@dianaluvanda",
    youtube: "https://www.youtube.com/@DianaLuvanda",
    twitter: "https://twitter.com/dianaluvanda",
    facebook: "https://facebook.com/dianaluvanda",
  })

  // Branding settings
  const [brandingSettings, setBrandingSettings] = useState({
    primaryColor: "#E11D48",
    secondaryColor: "#FDA4AF",
    logoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562595365.jpg-i5hFfoSILVYzJcvykuEVUukufxsIwX.jpeg",
    faviconUrl: "/favicon.ico",
  })

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setSaveSuccess(true)

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Website Settings</h2>
        <Button onClick={handleSave} disabled={isSaving} className="bg-red-500 hover:bg-red-600">
          {isSaving ? (
            <>Saving...</>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      {saveSuccess && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <AlertCircle className="h-4 w-4 text-green-800" />
          <AlertDescription>Settings saved successfully!</AlertDescription>
        </Alert>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic information about your website.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input
                    id="site-name"
                    value={generalSettings.siteName}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-description">Site Description</Label>
                  <Input
                    id="site-description"
                    value={generalSettings.siteDescription}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={generalSettings.contactEmail}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Contact Phone</Label>
                  <Input
                    id="contact-phone"
                    value={generalSettings.contactPhone}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, contactPhone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={generalSettings.address}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, address: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input
                  id="meta-title"
                  value={seoSettings.metaTitle}
                  onChange={(e) => setSeoSettings({ ...seoSettings, metaTitle: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">Recommended length: 50-60 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea
                  id="meta-description"
                  value={seoSettings.metaDescription}
                  onChange={(e) => setSeoSettings({ ...seoSettings, metaDescription: e.target.value })}
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">Recommended length: 150-160 characters</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="og-title">Open Graph Title</Label>
                  <Input
                    id="og-title"
                    value={seoSettings.ogTitle}
                    onChange={(e) => setSeoSettings({ ...seoSettings, ogTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter-handle">Twitter Handle</Label>
                  <Input
                    id="twitter-handle"
                    value={seoSettings.twitterHandle}
                    onChange={(e) => setSeoSettings({ ...seoSettings, twitterHandle: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="og-description">Open Graph Description</Label>
                <Textarea
                  id="og-description"
                  value={seoSettings.ogDescription}
                  onChange={(e) => setSeoSettings({ ...seoSettings, ogDescription: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ga-id">Google Analytics ID</Label>
                <Input
                  id="ga-id"
                  value={seoSettings.googleAnalyticsId}
                  onChange={(e) => setSeoSettings({ ...seoSettings, googleAnalyticsId: e.target.value })}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="indexing"
                  checked={seoSettings.indexingEnabled}
                  onCheckedChange={(checked) => setSeoSettings({ ...seoSettings, indexingEnabled: checked })}
                />
                <Label htmlFor="indexing">Allow search engines to index this site</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Settings</CardTitle>
              <CardDescription>Connect your social media accounts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram URL</Label>
                <Input
                  id="instagram"
                  value={socialSettings.instagram}
                  onChange={(e) => setSocialSettings({ ...socialSettings, instagram: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tiktok">TikTok URL</Label>
                <Input
                  id="tiktok"
                  value={socialSettings.tiktok}
                  onChange={(e) => setSocialSettings({ ...socialSettings, tiktok: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="youtube">YouTube URL</Label>
                <Input
                  id="youtube"
                  value={socialSettings.youtube}
                  onChange={(e) => setSocialSettings({ ...socialSettings, youtube: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter URL</Label>
                <Input
                  id="twitter"
                  value={socialSettings.twitter}
                  onChange={(e) => setSocialSettings({ ...socialSettings, twitter: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook URL</Label>
                <Input
                  id="facebook"
                  value={socialSettings.facebook}
                  onChange={(e) => setSocialSettings({ ...socialSettings, facebook: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding">
          <Card>
            <CardHeader>
              <CardTitle>Branding Settings</CardTitle>
              <CardDescription>Customize your website's look and feel.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="primary-color"
                      value={brandingSettings.primaryColor}
                      onChange={(e) => setBrandingSettings({ ...brandingSettings, primaryColor: e.target.value })}
                    />
                    <div
                      className="w-10 h-10 rounded-md border"
                      style={{ backgroundColor: brandingSettings.primaryColor }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="secondary-color"
                      value={brandingSettings.secondaryColor}
                      onChange={(e) => setBrandingSettings({ ...brandingSettings, secondaryColor: e.target.value })}
                    />
                    <div
                      className="w-10 h-10 rounded-md border"
                      style={{ backgroundColor: brandingSettings.secondaryColor }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-24 rounded-md border overflow-hidden">
                    <Image
                      src={brandingSettings.logoUrl || "/placeholder.svg"}
                      alt="Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Logo
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Favicon</Label>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md border overflow-hidden">
                    <Image
                      src={brandingSettings.faviconUrl || "/placeholder.svg"}
                      alt="Favicon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Favicon
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Recommended size: 32x32px or 64x64px, PNG or ICO format</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving} className="bg-red-500 hover:bg-red-600 ml-auto">
                {isSaving ? (
                  <>Saving...</>
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
    </div>
  )
}

