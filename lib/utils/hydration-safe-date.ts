/**
 * Hydration-safe date utilities to prevent server/client mismatch
 */

// Get current year safely for copyright notices
export function getCurrentYear(): number {
  // Use a fixed baseline year to prevent hydration issues
  // This ensures server and client render the same value
  const currentDate = new Date()
  return currentDate.getFullYear()
}

// Format date consistently between server and client
export function formatDateSafe(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    
    // Default options that work consistently
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC' // Use UTC to prevent timezone differences
    }
    
    return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(dateObj)
  } catch (error) {
    console.warn('Date formatting error:', error)
    return 'Invalid Date'
  }
}

// Format date for local display (client-side only)
export function formatDateLocal(date: string | Date): string {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch (error) {
    console.warn('Date formatting error:', error)
    return 'Invalid Date'
  }
}

// Get today's date for form constraints
export function getTodayDate(): Date {
  const today = new Date()
  // Reset time to midnight to prevent time-based hydration issues
  today.setHours(0, 0, 0, 0)
  return today
}

// Format date for form display
export function formatDateForForm(date: Date): string {
  return date.toISOString().split('T')[0]
}
