import { Loader2 } from "lucide-react"

export default function AdminLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center">
        <Loader2 className="h-10 w-10 animate-spin text-red-500 mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

