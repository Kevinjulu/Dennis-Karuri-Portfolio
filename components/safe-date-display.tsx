"use client"

import { useClientDateFormat } from "@/hooks/use-safe-date"

interface SafeDateDisplayProps {
  date: string | Date
  options?: Intl.DateTimeFormatOptions
  fallback?: string
  className?: string
}

export function SafeDateDisplay({ 
  date, 
  options,
  fallback = 'Loading...', 
  className 
}: SafeDateDisplayProps) {
  const formattedDate = useClientDateFormat(date, options)

  return (
    <span className={className}>
      {formattedDate || fallback}
    </span>
  )
}

// Specific component for local date display
export function SafeLocaleDateDisplay({ 
  date, 
  fallback = 'Loading...', 
  className 
}: Omit<SafeDateDisplayProps, 'options'>) {
  return (
    <SafeDateDisplay
      date={date}
      options={{
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }}
      fallback={fallback}
      className={className}
    />
  )
}
