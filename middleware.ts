import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getAuthUser } from "@/lib/auth"

// Specify Node.js runtime
export const runtime = 'nodejs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Check authentication for admin routes
  if (req.nextUrl.pathname.startsWith("/admin") && req.nextUrl.pathname !== "/admin") {
    const user = await getAuthUser(req)
    
    // If there's no authenticated user, redirect to the admin login page
    if (!user) {
      const redirectUrl = new URL("/admin", req.url)
      return NextResponse.redirect(redirectUrl)
    }
  }

  return res
}

// Update the matcher to be more specific
export const config = {
  matcher: ["/admin/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
