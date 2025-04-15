"use client"
import Link from "next/link"
import { LayoutDashboard, FileText, ImageIcon, Settings, Users, MessageSquare, Home } from "lucide-react"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const menuItems = [
    {
      name: "Overview",
      value: "overview",
      icon: LayoutDashboard,
    },
    {
      name: "Content",
      value: "content",
      icon: FileText,
    },
    {
      name: "Media",
      value: "media",
      icon: ImageIcon,
    },
    {
      name: "Messages",
      value: "messages",
      icon: MessageSquare,
      badge: 3,
    },
    {
      name: "Users",
      value: "users",
      icon: Users,
    },
    {
      name: "Settings",
      value: "settings",
      icon: Settings,
    },
  ]

  return (
    <aside className="hidden lg:block w-64 border-r border-gray-200 bg-white">
      <div className="h-full flex flex-col">
        <div className="p-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
          >
            <Home className="h-4 w-4" />
            View Website
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`
                w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-left
                ${activeTab === item.value ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"}
              `}
              onClick={() => setActiveTab(item.value)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="text-xs text-muted-foreground">Logged in as</p>
            <p className="font-medium">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

