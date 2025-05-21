import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, Clock, BookOpen, ArrowRight, Mail, Phone } from "lucide-react"

interface BookingConfirmationProps {
  booking: {
    name: string
    email: string
    date: string
    time: string
    projectType: string
    message?: string
  }
  isEmailTemplate?: boolean
}

export function BookingConfirmation({ booking, isEmailTemplate = false }: BookingConfirmationProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className={`w-full max-w-3xl mx-auto ${isEmailTemplate ? "p-0" : "p-8"}`}>
      <div className="bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-400 to-lavender-400 p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-medium font-display mb-2">Your Story Journey Begins!</h1>
          <p className="text-white/90 font-light">Your consultation with Jenni has been confirmed</p>
        </div>

        {/* Booking Details */}
        <div className="p-8">
          <div className="bg-rose-50/50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-medium text-rose-700 font-display mb-4">Booking Details</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-rose-100 p-2 rounded-full mr-4">
                  <Calendar className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-sm text-rose-600/80">Date</p>
                  <p className="text-rose-700 font-medium">{formatDate(booking.date)}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-rose-100 p-2 rounded-full mr-4">
                  <Clock className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-sm text-rose-600/80">Time</p>
                  <p className="text-rose-700 font-medium">{booking.time}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-rose-100 p-2 rounded-full mr-4">
                  <BookOpen className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-sm text-rose-600/80">Project Type</p>
                  <p className="text-rose-700 font-medium">{booking.projectType}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Message */}
          <div className="mb-8">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src="/jenni-avatar.png?height=100&width=100&query=friendly+professional+woman+avatar+soft+colors"
                    alt="Jenni"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-lavender-50 p-4 rounded-2xl rounded-tl-none">
                <p className="text-lavender-700 italic font-light">
                  "I'm excited to learn about your story and help bring it to life! Please come prepared to share your
                  vision, and don't worry if it's not fully formed yet—that's what I'm here for."
                </p>
                <p className="text-right text-lavender-600 mt-2 font-medium">— Jenni</p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-rose-700 font-display mb-4">What to Expect</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-rose-400 mr-2 shrink-0 mt-0.5" />
                <span className="text-rose-700/80 font-light">
                  Our consultation will take place via Zoom. You'll receive a link 30 minutes before our scheduled time.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-rose-400 mr-2 shrink-0 mt-0.5" />
                <span className="text-rose-700/80 font-light">
                  We'll discuss your story idea, creative vision, and goals for your project.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-rose-400 mr-2 shrink-0 mt-0.5" />
                <span className="text-rose-700/80 font-light">
                  I'll share insights on how we might work together to bring your story to life.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-rose-400 mr-2 shrink-0 mt-0.5" />
                <span className="text-rose-700/80 font-light">
                  Feel free to bring any existing materials, sketches, or notes you'd like to share.
                </span>
              </li>
            </ul>
          </div>

          {/* Need to Reschedule */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-rose-700 font-display mb-4">Need to Make Changes?</h2>
            <p className="text-rose-700/80 font-light mb-4">
              If you need to reschedule or have any questions before our meeting, please contact me:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-rose-400 mr-2" />
                <a href="mailto:jenni@bookangel.com" className="text-rose-600 hover:text-rose-500">
                  jenni@bookangel.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-rose-400 mr-2" />
                <a href="tel:+15551234567" className="text-rose-600 hover:text-rose-500">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Add to Calendar */}
          <div className="text-center">
            <p className="text-rose-700/80 font-light mb-4">Add this appointment to your calendar:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full">
                Google Calendar
              </Button>
              <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full">
                Apple Calendar
              </Button>
              <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full">
                Outlook
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-rose-50/50 p-6 text-center border-t border-rose-100">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-rose-400" />
            <span className="text-lg font-medium text-rose-700 font-display">Book Angel</span>
          </div>
          <p className="text-rose-600/80 text-sm">Turning Ideas into Stories That Come to Life</p>
        </div>
      </div>
    </div>
  )
}
