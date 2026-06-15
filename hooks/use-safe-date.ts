"use client"

import { useState, useEffect } from 'react'

/**
 * Hook for hydration-safe date handling
 * Returns null during server-side rendering and hydration,
 * then provides the actual date once client-side
 */
export function useSafeDate(initialDate?: Date | (() => Date)) {
  const [date, setDate] = useState<Date | null>(null)

  useEffect(() => {
    if (typeof initialDate === 'function') {
      setDate(initialDate())
    } else if (initialDate) {
      setDate(initialDate)
    } else {
      setDate(new Date())
    }
  }, [initialDate])

  return date
}

/**
 * Hook for getting current year safely
 */
export function useSafeYear() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return year
}

/**
 * Hook for client-side date formatting
 */
export function useClientDateFormat(date: string | Date | null, options?: Intl.DateTimeFormatOptions) {
  const [formattedDate, setFormattedDate] = useState<string | null>(null)

  useEffect(() => {
    if (!date) {
      setFormattedDate(null)
      return
    }

    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date
      const defaultOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
      
      setFormattedDate(
        new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(dateObj)
      )
    } catch (error) {
      console.warn('Date formatting error:', error)
      setFormattedDate('Invalid Date')
    }
  }, [date, options])

  return formattedDate
}
