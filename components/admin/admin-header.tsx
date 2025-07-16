"use client"

import { Button } from "@/components/ui/button"
import { Bell, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"

export function AdminHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { logout } = useAuth()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <button
            className="lg:hidden mr-4 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/admin/dashboard" className="flex items-center">
            <span className="text-xl font-bold text-red-500">Dennis Karuri</span>
            <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded-md">Admin</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <Button variant="outline" size="sm" className="gap-2" onClick={logout}>
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

