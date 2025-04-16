"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview as OverviewChart } from "@/components/admin/overview-chart"
import { RecentSales } from "@/components/admin/recent-sales"
import { Button } from "@/components/ui/button"
import { apiClient } from "@/lib/api-client"
import { Loader2 } from "lucide-react"
import { 
  BarChart3, 
  ImageIcon, 
  Film, 
  FileText, 
  Users, 
  Eye, 
  ThumbsUp, 
  MessageSquare,
  TrendingUp
} from "lucide-react"

interface DashboardStats {
  portfolioItems: {
    total: number;
    acting: number;
    modeling: number;
    influencing: number;
    presenting: number;
    featured: number;
  };
  media: {
    total: number;
    images: number;
    videos: number;
    documents: number;
  };
  social: {
    followers: {
      instagram: number;
      tiktok: number;
      youtube: number;
      twitter: number;
      facebook: number;
    };
    engagement: number;
    growth: number;
  };
  visitors: {
    total: number;
    today: number;
    thisWeek: number;
    thisMonth: number;
  };
}

export function Overview() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDashboardStats()
  }, [])

  const fetchDashboardStats = async () => {
    setIsLoading(true)
    try {
      // In a real implementation, we would fetch this data from an API
      // For now, we'll use mock data
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock data
      const mockStats: DashboardStats = {
        portfolioItems: {
          total: 20,
          acting: 5,
          modeling: 4,
          influencing: 4,
          presenting: 7,
          featured: 8,
        },
        media: {
          total: 48,
          images: 35,
          videos: 10,
          documents: 3,
        },
        social: {
          followers: {
            instagram: 125000,
            tiktok: 250000,
            youtube: 75000,
            twitter: 45000,
            facebook: 30000,
          },
          engagement: 4.8,
          growth: 12.3,
        },
        visitors: {
          total: 25678,
          today: 342,
          thisWeek: 2456,
          thisMonth: 12345,
        },
      }
      
      setStats(mockStats)
    } catch (error) {
      console.error("Error fetching dashboard stats:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    } else {
      return num.toString()
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-red-500" />
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground">Failed to load dashboard statistics</p>
        <Button 
          variant="outline" 
          className="ml-4"
          onClick={fetchDashboardStats}
        >
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Portfolio Items
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.portfolioItems.total}</div>
          <p className="text-xs text-muted-foreground">
            {stats.portfolioItems.featured} featured items
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <span>Acting: {stats.portfolioItems.acting}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>Modeling: {stats.portfolioItems.modeling}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Influencing: {stats.portfolioItems.influencing}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span>Presenting: {stats.portfolioItems.presenting}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Media Library</CardTitle>
          <ImageIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.media.total}</div>
          <p className="text-xs text-muted-foreground">
            Files in your media library
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>Images: {stats.media.images}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span>Videos: {stats.media.videos}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-amber-500"></div>
              <span>Docs: {stats.media.documents}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Social Followers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatNumber(
              Object.values(stats.social.followers).reduce((a, b) => a + b, 0)
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500">+{stats.social.growth}%</span> from last month
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-pink-500"></div>
              <span>IG: {formatNumber(stats.social.followers.instagram)}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
              <span>TT: {formatNumber(stats.social.followers.tiktok)}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <span>YT: {formatNumber(stats.social.followers.youtube)}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>TW: {formatNumber(stats.social.followers.twitter)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Website Visitors</CardTitle>
          <Eye className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatNumber(stats.visitors.total)}</div>
          <p className="text-xs text-muted-foreground">
            {formatNumber(stats.visitors.today)} visitors today
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>This Week: {formatNumber(stats.visitors.thisWeek)}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>This Month: {formatNumber(stats.visitors.thisMonth)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <OverviewChart />
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Recent Engagements</CardTitle>
          <CardDescription>
            Latest interactions with your portfolio content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentSales />
        </CardContent>
      </Card>
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Social Stats</CardTitle>
          <CardDescription>
            Engagement across platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <ThumbsUp className="mr-2 h-4 w-4 text-blue-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Likes
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(15420)} this month
                </p>
              </div>
              <div className="text-sm font-medium text-green-500">+12.5%</div>
            </div>
            <div className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4 text-purple-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Comments
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(3250)} this month
                </p>
              </div>
              <div className="text-sm font-medium text-green-500">+8.2%</div>
            </div>
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4 text-red-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Engagement Rate
                </p>
                <p className="text-xs text-muted-foreground">
                  {stats.social.engagement}% average
                </p>
              </div>
              <div className="text-sm font-medium text-green-500">+2.1%</div>
            </div>
            <div className="flex items-center">
              <Eye className="mr-2 h-4 w-4 text-green-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Impressions
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(425000)} this month
                </p>
              </div>
              <div className="text-sm font-medium text-green-500">+18.3%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
