import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookingForm } from "@/components/booking-form"
import {
  BookOpen,
  Heart,
  Sparkles,
  Star,
  Cloud,
  Palette,
  BookMarked,
  MessageCircle,
  Zap,
  Lightbulb,
  PenTool,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-rose-50/30">
      <header className="sticky top-0 z-50 w-full border-b border-rose-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-400" />
            <span className="text-xl font-medium tracking-tight text-rose-700 font-display">Book Angel</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-rose-600 hover:text-rose-400 transition-colors">
              About Jenni
            </Link>
            <Link href="#services" className="text-sm font-medium text-rose-600 hover:text-rose-400 transition-colors">
              Services
            </Link>
            <Link href="#portals" className="text-sm font-medium text-rose-600 hover:text-rose-400 transition-colors">
              Creative Portals
            </Link>
            <Link href="#booking" className="text-sm font-medium text-rose-600 hover:text-rose-400 transition-colors">
              Book a Session
            </Link>
          </nav>
          <Button className="bg-rose-400 hover:bg-rose-500 text-white rounded-full px-6" asChild>
            <Link href="#portals">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50 py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-lavender-50/50 opacity-30"></div>
          <div className="container relative flex flex-col items-center text-center">
            <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-100 rounded-full px-4 py-1 font-medium">
              Story Transformation Specialist
            </Badge>
            <h1 className="mb-6 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-display text-rose-800">
              Turning <span className="text-rose-500">Ideas into Stories</span> That Come to Life
            </h1>
            <p className="mb-8 max-w-[700px] text-lg text-rose-700/80 md:text-xl font-light">
              Jenni helps authors, founders, and creatives transform their ideas into captivating stories, finished
              books, and powerful brands that resonate with audiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-rose-400 hover:bg-rose-500 text-white rounded-full px-8">
                Bring Your Story to Life
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-rose-200 text-rose-600 hover:bg-rose-100"
              >
                Book a Consultation
              </Button>
            </div>

            <div className="mt-16 relative w-full max-w-4xl aspect-[1/1] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/magical-portal.png"
                alt="Magical portal to storytelling"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Jenni Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/jenni-portrait.png?height=1000&width=800&query=creative+woman+professional+portrait+soft+lighting"
                    alt="Jenni - The Book Angel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-rose-100 rounded-3xl p-6 shadow-lg max-w-xs">
                  <p className="text-rose-700 font-display text-lg italic">
                    "Every person has a story they were born to tell. My mission is to help you bring that story to
                    life."
                  </p>
                  <p className="text-right text-rose-500 mt-2">— Jenni</p>
                </div>
              </div>
              <div>
                <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-100 rounded-full px-4 py-1 font-medium">
                  Meet Your Story Guide
                </Badge>
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl mb-6 font-display text-rose-800">
                  About Jenni
                </h2>
                <div className="space-y-4 text-rose-700/80 font-light">
                  <p>
                    Jenni is a visionary creative, author, and founder who has built a career around helping others
                    bring their stories to life. She spent a significant part of her career at Netflix Animation, where
                    she helped shape and tell powerful stories that reached global audiences.
                  </p>
                  <p>
                    With a rich background in illustration, animation, book publishing, and creative direction, Jenni
                    blends intuitive storytelling with sharp business insight. She now channels that experience into
                    supporting aspiring authors, founders, and creatives—guiding them to uncover their voice, move past
                    creative blocks, and turn ideas into finished books, brands, and bodies of work.
                  </p>
                  <p>
                    Whether through one-on-one coaching or collaborative projects, Jenni's mission is to empower others
                    to share the stories they were born to tell.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full">
                    <Zap className="h-5 w-5 text-rose-400" />
                    <span className="text-rose-700">Netflix Animation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-mint-50 px-4 py-2 rounded-full">
                    <Palette className="h-5 w-5 text-mint-500" />
                    <span className="text-mint-700">Illustration</span>
                  </div>
                  <div className="flex items-center gap-2 bg-lavender-50 px-4 py-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-lavender-500" />
                    <span className="text-lavender-700">Book Publishing</span>
                  </div>
                  <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                    <PenTool className="h-5 w-5 text-amber-400" />
                    <span className="text-amber-700">Creative Direction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Transformation Process */}
        <section className="py-20 bg-gradient-to-b from-white to-rose-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-100 rounded-full px-4 py-1 font-medium">
                The Magic Behind the Stories
              </Badge>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl mb-4 font-display text-rose-800">
                How Jenni Brings Stories to Life
              </h2>
              <p className="max-w-[700px] mx-auto text-rose-700/80 font-light">
                Discover the transformative journey your story will take from initial concept to finished creation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-rose-100 rounded-3xl transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-300 to-rose-400"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-rose-400" />
                  </div>
                  <CardTitle className="text-rose-700 font-display">Idea Excavation</CardTitle>
                  <CardDescription className="text-rose-600/80">
                    Uncovering the heart of your story and its unique potential
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">Deep-dive creative sessions to unearth your core message</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">Identifying your unique voice and storytelling approach</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">Breaking through creative blocks and limitations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-mint-100 rounded-3xl transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mint-300 to-mint-500"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-4">
                    <PenTool className="h-6 w-6 text-mint-500" />
                  </div>
                  <CardTitle className="text-mint-700 font-display">Creative Development</CardTitle>
                  <CardDescription className="text-mint-600/80">
                    Crafting and refining your story with expert guidance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Structured story development and narrative architecture</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Character development and world-building</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Manuscript editing and visual direction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-lavender-100 rounded-3xl transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lavender-300 to-lavender-500"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-lavender-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-lavender-500" />
                  </div>
                  <CardTitle className="text-lavender-700 font-display">Story Realization</CardTitle>
                  <CardDescription className="text-lavender-600/80">
                    Bringing your vision to life in its final, polished form
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Professional illustration and visual storytelling</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Book design, formatting, and production</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Publishing guidance and marketing strategy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-100 rounded-full px-4 py-1 font-medium">
                Story Transformation Services
              </Badge>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl mb-4 font-display text-rose-800">
                How Jenni Can Help You
              </h2>
              <p className="max-w-[700px] mx-auto text-rose-700/80 font-light">
                Specialized services to transform your ideas into captivating stories that resonate with your audience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-rose-50 to-white border-rose-100 rounded-3xl transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-rose-400" />
                  </div>
                  <CardTitle className="text-rose-700 font-display">Story Development</CardTitle>
                  <CardDescription className="text-rose-600/80">
                    Transforming your ideas into compelling narratives with emotional depth
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">Character development with emotional resonance</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">Plot structuring and narrative flow</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">Theme exploration and message refinement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-mint-50 to-white border-mint-100 rounded-3xl transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-mint-500" />
                  </div>
                  <CardTitle className="text-mint-700 font-display">Visual Storytelling</CardTitle>
                  <CardDescription className="text-mint-600/80">
                    Bringing your stories to life with captivating illustrations and visual elements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Custom illustration styles to match your vision</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Character design and world-building</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Visual narrative and pacing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-lavender-50 to-white border-lavender-100 rounded-3xl transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-lavender-100 flex items-center justify-center mb-4">
                    <Cloud className="h-6 w-6 text-lavender-500" />
                  </div>
                  <CardTitle className="text-lavender-700 font-display">Creative Coaching</CardTitle>
                  <CardDescription className="text-lavender-600/80">
                    Guiding you past creative blocks to unlock your full storytelling potential
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Overcoming creative obstacles and self-doubt</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Finding your authentic voice and style</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-amber-400 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Developing sustainable creative practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Creative Portals Section */}
        <section id="portals" className="py-20 bg-gradient-to-b from-white to-rose-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-100 rounded-full px-4 py-1 font-medium">
                Transformation Packages
              </Badge>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl mb-4 font-display text-rose-800">
                Creative Portals
              </h2>
              <p className="max-w-[700px] mx-auto text-rose-700/80 font-light">
                Choose the perfect pathway to bring your story to life with these customizable packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative overflow-hidden border-rose-200 rounded-3xl transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-300 to-rose-400"></div>
                <CardHeader>
                  <CardTitle className="text-rose-700 font-display">Stardust Portal</CardTitle>
                  <div className="text-3xl font-medium text-rose-600">$997</div>
                  <CardDescription className="text-rose-600/80">
                    Perfect for first-time authors with a clear vision
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-rose-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">Story development consultation (2 sessions)</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="h-5 w-5 text-rose-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">Basic manuscript editing</span>
                    </li>
                    <li className="flex items-start">
                      <Palette className="h-5 w-5 text-rose-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">5 custom illustrations</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="h-5 w-5 text-rose-400 mr-2 shrink-0" />
                      <span className="text-rose-700/80">Digital format preparation</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-rose-400 hover:bg-rose-500 text-white rounded-full">
                    Choose Stardust
                  </Button>
                </CardFooter>
              </Card>

              <Card className="relative overflow-hidden border-mint-200 rounded-3xl transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mint-300 to-mint-500"></div>
                <CardHeader>
                  <CardTitle className="text-mint-700 font-display">Moonbeam Portal</CardTitle>
                  <div className="text-3xl font-medium text-mint-600">$1,997</div>
                  <CardDescription className="text-mint-600/80">
                    Our most popular option for comprehensive support
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-mint-500 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Story development consultation (4 sessions)</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="h-5 w-5 text-mint-500 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Comprehensive manuscript editing</span>
                    </li>
                    <li className="flex items-start">
                      <Palette className="h-5 w-5 text-mint-500 mr-2 shrink-0" />
                      <span className="text-mint-700/80">12 custom illustrations</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="h-5 w-5 text-mint-500 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Digital and print format preparation</span>
                    </li>
                    <li className="flex items-start">
                      <MessageCircle className="h-5 w-5 text-mint-500 mr-2 shrink-0" />
                      <span className="text-mint-700/80">Marketing guidance</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-mint-500 hover:bg-mint-600 text-white rounded-full">
                    Choose Moonbeam
                  </Button>
                </CardFooter>
              </Card>

              <Card className="relative overflow-hidden border-lavender-200 rounded-3xl transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lavender-300 to-lavender-500"></div>
                <CardHeader>
                  <CardTitle className="text-lavender-700 font-display">Celestial Portal</CardTitle>
                  <div className="text-3xl font-medium text-lavender-600">$3,997</div>
                  <CardDescription className="text-lavender-600/80">
                    The ultimate transformative book creation experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-lavender-500 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Story development consultation (8 sessions)</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="h-5 w-5 text-lavender-500 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Premium manuscript editing and ghostwriting</span>
                    </li>
                    <li className="flex items-start">
                      <Palette className="h-5 w-5 text-lavender-500 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Full book custom illustrations</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="h-5 w-5 text-lavender-500 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">All formats + interactive elements</span>
                    </li>
                    <li className="flex items-start">
                      <MessageCircle className="h-5 w-5 text-lavender-500 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Complete marketing strategy and support</span>
                    </li>
                    <li className="flex items-start">
                      <BookMarked className="h-5 w-5 text-lavender-500 mr-2 shrink-0" />
                      <span className="text-lavender-700/80">Publishing guidance and connections</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-lavender-500 hover:bg-lavender-600 text-white rounded-full">
                    Choose Celestial
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-rose-700/80 mb-4 font-light">Need something more customized?</p>
              <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full">
                Request Custom Portal
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-100 rounded-full px-4 py-1 font-medium">
                Stories Brought to Life
              </Badge>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl mb-4 font-display text-rose-800">
                Story Transformations
              </h2>
              <p className="max-w-[700px] mx-auto text-rose-700/80 font-light">
                Explore a selection of stories that Jenni has helped bring to life
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <Image
                    src={`/story-sample-${item}.png?height=800&width=600&query=children+book+illustration+story+transformation+${item}`}
                    alt={`Story transformation ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-500/70 via-rose-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-medium text-xl font-display">The Magical Journey</h3>
                    <p className="text-white/80">A story of self-discovery and inner magic</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-rose-400 hover:bg-rose-500 text-white rounded-full">View Full Gallery</Button>
            </div>
          </div>
        </section>

        {/* Booking System */}
        <section id="booking" className="py-20 bg-rose-50/50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-100 rounded-full px-4 py-1 font-medium">
                Schedule Your Story Transformation
              </Badge>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl mb-4 font-display text-rose-800">
                Book a Session with Jenni
              </h2>
              <p className="max-w-[700px] mx-auto text-rose-700/80 font-light">
                Take the first step in bringing your story to life by scheduling a consultation
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-rose-100 rounded-3xl shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <BookingForm />
                </CardContent>
              </Card>

              <div className="mt-8 text-center text-rose-700/80 font-light">
                <p>
                  Need immediate assistance? Email{" "}
                  <span className="text-rose-600 font-medium">hello@bookangel.com</span> or call{" "}
                  <span className="text-rose-600 font-medium">(555) 123-4567</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-100 rounded-full px-4 py-1 font-medium">
                Success Stories
              </Badge>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl mb-4 font-display text-rose-800">
                Transformed Storytellers
              </h2>
              <p className="max-w-[700px] mx-auto text-rose-700/80 font-light">
                Hear from authors and creatives who have experienced Jenni's story transformation magic
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Children's Book Author",
                  quote:
                    "Working with Jenni transformed my simple story idea into a magical journey that children absolutely adore. Her background at Netflix Animation really shows in how she helped me create characters and scenes that truly come to life on the page.",
                },
                {
                  name: "Michael Chen",
                  role: "Founder & Brand Storyteller",
                  quote:
                    "I needed to articulate my company's story in a way that would resonate with customers. Jenni helped me uncover the emotional core of my brand and create a narrative that has transformed our marketing. Our engagement has increased by 300% since working with her.",
                },
                {
                  name: "Amara Williams",
                  role: "First-time Author",
                  quote:
                    "As someone with no prior writing experience, I was nervous about creating a children's book. Jenni's Moonbeam Portal provided everything I needed - from story development to illustrations. She helped me find my voice and bring my vision to life beautifully.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white border-none shadow-md rounded-3xl">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-current text-amber-400" />
                      ))}
                    </div>
                    <p className="italic mb-6 text-rose-700/80 font-light">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                        <span className="text-rose-500 font-medium">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-rose-700">{testimonial.name}</h4>
                        <p className="text-sm text-rose-600/80">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-400 to-lavender-400 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl mb-6 font-display">
                Ready to Bring Your Story to Life?
              </h2>
              <p className="mb-8 text-white/90 text-lg font-light">
                Book a free 30-minute consultation to discuss your vision and discover how Jenni can transform your
                ideas into captivating stories that resonate with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-rose-500 hover:bg-white/90 rounded-full px-8">
                  Book Your Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  Explore Creative Portals
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white border-t border-rose-100 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-medium tracking-tight text-rose-700 font-display">Book Angel</span>
            </div>
            <nav className="flex gap-8 mb-4 md:mb-0">
              <Link href="#about" className="text-sm font-medium text-rose-600 hover:text-rose-400 transition-colors">
                About Jenni
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-rose-600 hover:text-rose-400 transition-colors"
              >
                Services
              </Link>
              <Link href="#portals" className="text-sm font-medium text-rose-600 hover:text-rose-400 transition-colors">
                Creative Portals
              </Link>
              <Link href="#booking" className="text-sm font-medium text-rose-600 hover:text-rose-400 transition-colors">
                Book a Session
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 hover:bg-rose-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 hover:bg-rose-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 hover:bg-rose-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-rose-100 text-center text-sm text-rose-600/80">
            <p>&copy; {new Date().getFullYear()} Book Angel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
