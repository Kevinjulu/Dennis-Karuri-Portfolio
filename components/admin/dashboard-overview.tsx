"use client"

import { Calendar, Eye, MessageSquare, TrendingUp, Users } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Page Views",
      value: "24,532",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "New Messages",
      value: "12",
      change: "+3",
      trend: "up",
      icon: MessageSquare,
    },
    {
      title: "Media Uploads",
      value: "156",
      change: "+24",
      trend: "up",
      icon: Calendar,
    },
    {
      title: "Social Followers",
      value: "637K+",
      change: "+5.2%",
      trend: "up",
      icon: Users,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div
                className={`p-3 rounded-full ${
                  stat.title === "Total Page Views"
                    ? "bg-blue-50 text-blue-500"
                    : stat.title === "New Messages"
                      ? "bg-red-50 text-red-500"
                      : stat.title === "Media Uploads"
                        ? "bg-amber-50 text-amber-500"
                        : "bg-green-50 text-green-500"
                }`}
              >
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className={`h-4 w-4 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`} />
              <span className={`ml-1 text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {stat.change}
              </span>
              <span className="ml-1 text-xs text-muted-foreground">since last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-medium">Recent Activity</h3>
            <button className="text-sm text-blue-500">View All</button>
          </div>

          <div className="space-y-4">
            {[
              { action: "New message received", time: "2 minutes ago" },
              { action: "Updated homepage hero section", time: "1 hour ago" },
              { action: "Uploaded 5 new photos to gallery", time: "3 hours ago" },
              { action: "Updated acting portfolio", time: "Yesterday" },
              { action: "New contact form submission", time: "2 days ago" },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
              >
                <p className="text-sm">{activity.action}</p>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-medium">Traffic Sources</h3>
            <button className="text-sm text-blue-500">View Report</button>
          </div>

          <div className="space-y-4">
            {[
              { source: "Direct", percentage: 35 },
              { source: "Social Media", percentage: 42 },
              { source: "Search Engines", percentage: 15 },
              { source: "Referrals", percentage: 8 },
            ].map((source) => (
              <div key={source.source} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">{source.source}</p>
                  <span className="text-sm font-medium">{source.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: `${source.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

