"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>KM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Kenya Media</p>
          <p className="text-sm text-muted-foreground">
            Requested collaboration for upcoming show
          </p>
        </div>
        <div className="ml-auto font-medium">Today</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>SF</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Safaricom</p>
          <p className="text-sm text-muted-foreground">
            Viewed acting portfolio for potential campaign
          </p>
        </div>
        <div className="ml-auto font-medium">Yesterday</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>FB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Fashion Brand X</p>
          <p className="text-sm text-muted-foreground">
            Contacted about modeling opportunity
          </p>
        </div>
        <div className="ml-auto font-medium">2 days ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>TF</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">TikTok Fan</p>
          <p className="text-sm text-muted-foreground">
            Shared your influencer content with 50K followers
          </p>
        </div>
        <div className="ml-auto font-medium">3 days ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>TV</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">TV Network</p>
          <p className="text-sm text-muted-foreground">
            Booked for presenting role at upcoming event
          </p>
        </div>
        <div className="ml-auto font-medium">5 days ago</div>
      </div>
    </div>
  )
}
