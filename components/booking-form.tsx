"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface BookingFormProps {
  className?: string
}

export function BookingForm({ className }: BookingFormProps) {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ ...formData, date })
    // Show success message
    alert("Thank you for your inquiry! I'll get back to you soon.")
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
                <SelectItem value="acting">Acting</SelectItem>
                <SelectItem value="modeling">Modeling</SelectItem>
                <SelectItem value="hosting">Event Hosting</SelectItem>
                <SelectItem value="content">Content Creation</SelectItem>
                <SelectItem value="brand">Brand Ambassador</SelectItem>
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
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
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
                <SelectItem value="0-50k">0 - 50,000 KES</SelectItem>
                <SelectItem value="50k-100k">50,000 - 100,000 KES</SelectItem>
                <SelectItem value="100k-200k">100,000 - 200,000 KES</SelectItem>
                <SelectItem value="200k+">200,000+ KES</SelectItem>
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

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500"
        >
          Submit Request
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          I'll get back to you within 24-48 hours with a detailed quote.
        </p>
      </form>
    </motion.div>
  )
}

