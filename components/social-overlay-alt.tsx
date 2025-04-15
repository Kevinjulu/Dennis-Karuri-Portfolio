"use client"
import { Instagram, Facebook } from "lucide-react"

export function SocialOverlayAlt() {
  return (
    <>
      {/* TikTok Overlay */}
      <div
        className="absolute -right-4 sm:right-4 top-1/4 glass-card p-4 rounded-xl shadow-xl z-10 backdrop-blur-sm bg-white/30 border border-white/30 animate-float"
        style={{ animationDelay: "0s", maxWidth: "150px" }}
      >
        <div className="flex items-center gap-2">
          <div className="bg-black rounded-full p-1.5">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-lg">437K+</p>
            <p className="text-xs text-black/70">TikTok Followers</p>
          </div>
        </div>
      </div>

      {/* Instagram Overlay */}
      <div
        className="absolute -left-4 sm:left-4 bottom-1/4 glass-card p-4 rounded-xl shadow-xl z-10 backdrop-blur-sm bg-white/30 border border-white/30 animate-float"
        style={{ animationDelay: "1s", maxWidth: "150px" }}
      >
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full p-1.5">
            <Instagram className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-lg">200K+</p>
            <p className="text-xs text-black/70">Instagram Followers</p>
          </div>
        </div>
      </div>

      {/* Facebook Overlay */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-4 sm:bottom-4 glass-card p-4 rounded-xl shadow-xl z-10 backdrop-blur-sm bg-white/30 border border-white/30 animate-float"
        style={{ animationDelay: "2s", maxWidth: "150px" }}
      >
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 rounded-full p-1.5">
            <Facebook className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-lg">200K+</p>
            <p className="text-xs text-black/70">Facebook Followers</p>
          </div>
        </div>
      </div>
    </>
  )
}

