"use client"

import { cn } from "@/lib/utils"

// This interface extends HTMLAttributes without adding new properties
type DashboardShellProps = React.HTMLAttributes<HTMLDivElement>;

export function DashboardShell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div className={cn("grid items-start gap-8 p-4", className)} {...props}>
      {children}
    </div>
  )
}
