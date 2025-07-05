// import Header from "@/components/layout/header";
// import HeroSection from "@/components/sections/HeroSection";
// import NewsletterSection from "@/components/sections/NewsletterSection";
// import PopularDestinations from "@/components/sections/PopularDestinations";
// import PricingSection from "@/components/sections/PricingSection";
// import ServiceCards from "@/components/sections/ServiceCards";
// import TestimonialSection from "@/components/sections/TestimonialSection";

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       {/* <Header /> */}
//       <HeroSection />
//       <ServiceCards />
//       <PopularDestinations />
//       <TestimonialSection />
//       <NewsletterSection />
//       <PricingSection />
//     </main>
//   );
// }

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  PawPrint,
  Clock,
  MessageSquare,
  CreditCard,
  Check,
  Globe,
  Home,
  Plane,
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PetsOnPlanesLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">pets-on-planes.com</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              British Airways
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Travel
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Request Quote</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/clouds-background.webp')] bg-cover bg-center opacity-50" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Worldwide Pet Travel Made Easy!
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Relocate, go on holiday, or travel stress-free with your pet.
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4">
                Get a Pet Travel Quote
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Pet traveling with airplane"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex rounded-md">
              <Image
                src="/Lastminute.webp"
                alt="Pet traveling with airplane"
                width={300}
                height={200}
                className="rounded-md"
              />
            </div>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Last-Minute Pet Travel?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We handle urgent pet relocations with our express service network.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">What Customers Say</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {'"Outstanding service! Made our move to Australia seamless."'} - Sarah M.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Interest-Free Payment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Flexible payment plans to make pet travel more affordable.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">We help pets travel to over 300 destinations worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: "Australia", image: "/pets-to-australia.webp" },
              { name: "South Africa", image: "/pets-to-south-africa.webp" },
              { name: "UAE", image: "/pets-to-united-arab-emirates.webp" },
              { name: "USA", image: "/Pets-To-The-USA.webp" },
            ].map((destination) => (
              <Card key={destination.name} className="overflow-hidden hover:shadow-lg transition-shadow p-0">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-center">{destination.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Free Guide Form */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get Your Free Pet Travel Guide</h2>
            <p className="text-xl text-blue-100 mb-8">Everything you need to know about traveling with your pet</p>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-white" />
              <Select>
                <SelectTrigger className="md:w-48 bg-white">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="south-africa">South Africa</SelectItem>
                  <SelectItem value="uae">UAE</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Free Guide</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Choose Your Travel Plan</h2>
            <p className="text-xl text-gray-600">Tailored services for every pet travel need</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Traveller Plan</CardTitle>
                <CardDescription className="text-center text-lg">Entry level, basic service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Basic documentation assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Standard pet carrier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Airport drop-off service</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Find Out More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Premium Plan</CardTitle>
                <CardDescription className="text-center text-lg">All-inclusive, high-touch service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Full documentation & permits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Premium comfort cabin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Door-to-door service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>24/7 support & tracking</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Find Out More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Pets-on-Planes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Pets-on-Planes?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Check className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Expertise</h3>
              <p className="text-gray-600">Over 15 years of experience in pet relocation services</p>
            </div>

            <div className="text-center">
              <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">300+ Destinations</h3>
              <p className="text-gray-600">Worldwide network covering every major destination</p>
            </div>

            <div className="text-center">
              <Home className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comfy Pet Cabins</h3>
              <p className="text-gray-600">Climate-controlled, spacious cabins for maximum comfort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Promo Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-100 rounded-2xl p-12 border-2 border-dashed border-gray-300">
              <Plane className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Video Promo Section</h3>
              <p className="text-gray-500">Placeholder for embedded video content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Previews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Pet Travel Tips</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "How to Prepare Your Dog for Long-Distance Travel",
                excerpt: "Essential tips for making your dog's journey comfortable and stress-free.",
                image: "/longdog.jpg",
              },
              {
                title: "How Moving Can Trigger Anxiety",
                excerpt: "Understanding and managing pet anxiety during relocation.",
                image: "/petanxiety.jpg",
              },
              {
                title: "Top 5 Myths About Shipping Pets",
                excerpt: "Debunking common misconceptions about pet travel services.",
                image: "/pet-myth.webp",
              },
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow p-0">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}