"use client"

import { useSearchParams } from "next/navigation"
import { BookingConfirmation } from "@/components/booking-confirmation"

export default function BookingConfirmationPage() {
  const searchParams = useSearchParams()

  // In a real application, you would likely fetch this data from your backend
  // or use data passed via URL parameters
  const bookingData = {
    name: searchParams.get("name") || "Jane Doe",
    email: searchParams.get("email") || "jane@example.com",
    date: searchParams.get("date") || "2023-06-15",
    time: searchParams.get("time") || "10:00 AM",
    projectType: searchParams.get("projectType") || "Children's Book",
    message: searchParams.get("message") || "",
  }

  return (
    <div className="min-h-screen bg-rose-50/30 py-12">
      <BookingConfirmation booking={bookingData} />
    </div>
  )
}
