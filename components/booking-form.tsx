"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format, addDays } from "date-fns"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "sonner"

interface BookingFormProps {
  className?: string
}

export function BookingForm({ className }: BookingFormProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    budget: "",
  })

  // Disable dates before today
  const disabledDates = {
    before: new Date(),
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!date) {
      toast.error("Please select a preferred date")
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, you would send this data to your backend
      console.log({ ...formData, date })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        details: "",
        budget: "",
      })
      setDate(undefined)
      
      // Show success message
      toast.success("Thank you for your inquiry! I'll get back to you within 24-48 hours.")
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("glass-card p-6 rounded-xl", className)}
    >
      <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <Input
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Service Type</label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="makeup-artistry">Makeup Artistry</SelectItem>
                <SelectItem value="beauty-consulting">Beauty Consulting</SelectItem>
                <SelectItem value="content-creation">Content Creation</SelectItem>
                <SelectItem value="brand-ambassador">Brand Ambassador</SelectItem>
                <SelectItem value="masterclass">Makeup Masterclass</SelectItem>
                <SelectItem value="celebrity-styling">Celebrity Styling</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal border-gray-200 hover:bg-gray-50", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-rose-400" />
                  {date ? format(date, "MMMM d, yyyy") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 border-gray-200 shadow-md" align="start">
                <Calendar 
                  mode="single" 
                  selected={date} 
                  onSelect={setDate} 
                  disabled={disabledDates}
                  initialFocus 
                  fromDate={new Date()} 
                  toDate={addDays(new Date(), 90)}
                  className="rounded-md border-0"
                />
                <div className="p-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 rounded-b-md">
                  <p>Available for bookings up to 90 days in advance</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Budget Range</label>
            <Select
              value={formData.budget}
              onValueChange={(value) => setFormData({ ...formData, budget: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-15k">0 - 15,000 KES</SelectItem>
                <SelectItem value="15k-30k">15,000 - 30,000 KES</SelectItem>
                <SelectItem value="30k-50k">30,000 - 50,000 KES</SelectItem>
                <SelectItem value="50k-100k">50,000 - 100,000 KES</SelectItem>
                <SelectItem value="100k+">100,000+ KES</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Project Details</label>
          <Textarea
            placeholder="Tell me more about your project..."
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            required
            rows={4}
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-8 bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          I'll get back to you within 24-48 hours with a detailed quote.
        </p>
      </form>
    </motion.div>
  )
}

