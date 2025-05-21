"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, Palette, Lightbulb } from "lucide-react"

export function BookingForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    date: "",
    time: "10:00 AM", // Default time
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Redirect to confirmation page
        router.push(data.redirectUrl)
      } else {
        // Handle error
        console.error("Submission failed:", data.error)
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gradient-to-br from-rose-400 to-lavender-400 p-8 text-white">
        <h3 className="text-2xl font-medium mb-4 font-display">Let's Transform Your Story</h3>
        <p className="mb-6 text-white/90 font-light">
          Schedule a free 30-minute consultation to discuss your vision and discover how Jenni can help bring your story
          to life.
        </p>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-full mr-4">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium">Discover Your Story's Potential</h4>
              <p className="text-white/80 text-sm">Explore how your idea can transform into a captivating narrative</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-full mr-4">
              <Palette className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium">Visual Storytelling Guidance</h4>
              <p className="text-white/80 text-sm">Learn how illustrations can enhance your story's impact</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-full mr-4">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium">Creative Direction</h4>
              <p className="text-white/80 text-sm">Get expert insights on your story's development</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-rose-700">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-rose-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="projectType" className="text-sm font-medium text-rose-700">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              <option value="">Select your project type</option>
              <option value="Children's Book">Children's Book</option>
              <option value="Brand Story">Brand Story</option>
              <option value="Personal Narrative">Personal Narrative</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-rose-700">
              Tell us about your story
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Briefly describe your story idea or project..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-2xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium text-rose-700">
              Preferred Consultation Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-rose-400 hover:bg-rose-500 text-white rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Scheduling..." : "Schedule Consultation"}
          </Button>
        </form>
      </div>
    </div>
  )
}
