"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Calendar,
  MapPin,
  Search,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function PetsOnPlanesLanding() {
  const [flyWithPet, setFlyWithPet] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log("Form data sent:", data); // Log sent data

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json(); // Parse response
      console.log("API response:", result); // Log response
      if (response.ok) {
        toast.success("Success", {
          description:
            "Your details have been submitted to our partner agency!",
        });
      } else {
        throw new Error("Search failed");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch error:", error.message); // Log fetch errors
      } else {
        console.error("Fetch error:", error); // Fallback for non-Error types
      }
      toast.error("Error", {
        description: "Failed to submit details. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-200 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-300 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        />
        <PawPrint
          className="absolute top-1/2 left-1/6 w-6 h-6 text-orange-200 opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <PawPrint
          className="absolute bottom-1/4 right-1/6 w-4 h-4 text-blue-200 opacity-25 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <PawPrint className="h-6 w-6 text-blue-600 group-hover:text-orange-500 transition-colors duration-300" />
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              pets-on-planes.com
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {["British Airways", "Travel", "FAQ", "Contact"].map((item) => (
              <Link
                key={item}
                href="#"
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-orange-500/25 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="#hero-form">Request Quote</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {["British Airways", "Travel", "FAQ", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Enhanced Form */}
      <section
        id="hero-form"
        className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16 lg:py-24 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-20 animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-15 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-200 to-orange-200 rounded-full opacity-25 animate-bounce"
            style={{ animationDuration: "4s" }}
          />
        </div> */}

        <div className="absolute inset-0 z-0 bg-[url('/clouds-background.webp')] bg-cover bg-center opacity-50" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in-50 slide-in-from-left duration-1000">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Worldwide Pet Travel Made Easy!
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Relocate, go on holiday, or travel stress-free with your pet.
              </p>
            </div>

            {/* Enhanced Pet Travel Search Form */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Find Your Perfect Pet Travel Solution
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Standard Travel Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      From
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-blue-400" />
                      <Input
                        placeholder="Departure city"
                        name="from"
                        className="pl-10 bg-white/80 backdrop-blur-sm border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/90"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      To
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-blue-400" />
                      <Input
                        placeholder="Destination city"
                        name="to"
                        className="pl-10 bg-white/80 backdrop-blur-sm border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/90"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-blue-400" />
                      <Input
                        name="date"
                        type="date"
                        className="pl-10 bg-white/80 backdrop-blur-sm border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/90"
                        aria-label="Travel date"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Trip Type
                    </label>
                    <Select name="tripType">
                      <SelectTrigger className="bg-white/80 backdrop-blur-sm border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/90">
                        <SelectValue placeholder="Select trip type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-way">One Way</SelectItem>
                        <SelectItem value="return">Return</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Pet Travel Checkbox */}
                <div className="flex items-center space-x-2 py-2">
                  <Checkbox
                    id="fly-with-pet"
                    checked={flyWithPet}
                    onCheckedChange={(checked) =>
                      setFlyWithPet(checked === true)
                    }
                    className="border-2 border-blue-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <label
                    htmlFor="fly-with-pet"
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    Fly with my pet
                  </label>
                </div>

                {/* Pet-Specific Fields with Animation */}
                {flyWithPet && (
                  <div className="space-y-4 animate-in fade-in-50 slide-in-from-top duration-500 border-t border-white/30 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Pet Type
                        </label>
                        <Select>
                          <SelectTrigger className="bg-white/80 backdrop-blur-sm border-white/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 hover:bg-white/90">
                            <SelectValue placeholder="Select pet type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cat">Cat</SelectItem>
                            <SelectItem value="dog">Dog</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Pet Weight
                        </label>
                        <Select>
                          <SelectTrigger className="bg-white/80 backdrop-blur-sm border-white/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 hover:bg-white/90">
                            <SelectValue placeholder="Select weight range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-6kg">{"< 6kg"}</SelectItem>
                            <SelectItem value="6-10kg">6-10kg</SelectItem>
                            <SelectItem value="over-10kg">
                              {"> 10kg"}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Pet Breed
                        </label>
                        <Input
                          placeholder="Enter pet breed"
                          className="bg-white/80 backdrop-blur-sm border-white/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 hover:bg-white/90"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Pet Age
                        </label>
                        <Input
                          type="number"
                          placeholder="Age in years"
                          className="bg-white/80 backdrop-blur-sm border-white/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 hover:bg-white/90"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Search Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg py-4 shadow-lg hover:shadow-orange-500/25 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <Search className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Search Pet Travel Options
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Feature Cards */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* <div className="flex rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in-50 slide-in-from-bottom duration-1000">
              <Image
                src="/Lastminute.webp"
                alt="Last minute pet travel"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div> */}

            {[
              {
                icon: Clock,
                title: "Last-Minute Pet Travel?",
                description:
                  "We handle urgent pet relocations with our express service network.",
                delay: "delay-200",
              },
              {
                icon: Clock,
                title: "Last-Minute Pet Travel?",
                description:
                  "We handle urgent pet relocations with our express service network.",
                delay: "delay-200",
              },
              {
                icon: MessageSquare,
                title: "What Customers Say",
                description:
                  '"Outstanding service! Made our move to Australia seamless." - Sarah M.',
                delay: "delay-400",
              },
              {
                icon: CreditCard,
                title: "Interest-Free Payment Options",
                description:
                  "Flexible payment plans to make pet travel more affordable.",
                delay: "delay-600",
              },
            ].map((card, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 animate-in fade-in-50 slide-in-from-bottom duration-1000 ${card.delay}`}
              >
                <CardHeader className="text-center">
                  <card.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
                  <CardTitle className="text-xl group-hover:text-blue-700 transition-colors duration-300">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Popular Destinations */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 animate-in fade-in-50 slide-in-from-top duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600">
              We help pets travel to over 300 destinations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: "Poland", image: "/poland.jpg" },
              { name: "Spain", image: "/spain.jpeg" },
              { name: "Portugal", image: "/portugal2.jpeg" },
              { name: "Romania", image: "/romania.jpeg" },
            ].map((destination, index) => (
              <Card
                key={destination.name}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 p-0 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-${
                  index * 200
                }`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4 bg-gradient-to-br from-white to-gray-50">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {destination.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-800">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-transparent"
            >
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Free Guide Form */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10" />
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat bg-[length:60px_60px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='a' patternUnits='userSpaceOnUse' width='60' height='60'%3e%3ccircle cx='30' cy='30' r='2' fill='%23ffffff' fillOpacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23a)'/%3e%3c/svg%3e")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in-50 slide-in-from-bottom duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get Your Free Pet Travel Guide
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Everything you need to know about traveling with your pet
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/90 h-12 backdrop-blur-sm border-white/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 hover:bg-white"
              />
              <Select>
                <SelectTrigger className="bg-white/90 backdrop-blur-sm border-white/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 hover:bg-white">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="south-africa">South Africa</SelectItem>
                  <SelectItem value="uae">UAE</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-orange-500/25 hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Free Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Travel Options */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 animate-in fade-in-50 slide-in-from-top duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Choose Your Travel Plan
            </h2>
            <p className="text-xl text-gray-600">
              Tailored services for every pet travel need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group border-2 hover:border-blue-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-blue-50 animate-in fade-in-50 slide-in-from-left duration-1000">
              <CardHeader>
                <CardTitle className="text-2xl text-center group-hover:text-blue-600 transition-colors duration-300">
                  Traveller Plan
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  Entry level, basic service
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Basic documentation assistance",
                    "Standard pet carrier",
                    "Airport drop-off service",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:text-gray-700 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Find Out More
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 border-orange-200 hover:border-orange-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-orange-50 animate-in fade-in-50 slide-in-from-right duration-1000">
              <CardHeader>
                <CardTitle className="text-2xl text-center group-hover:text-orange-600 transition-colors duration-300">
                  Premium Plan
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  All-inclusive, high-touch service
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Full documentation & permits",
                    "Premium comfort cabin",
                    "Door-to-door service",
                    "24/7 support & tracking",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:text-gray-700 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                  Find Out More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Why Pets-on-Planes */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 animate-in fade-in-50 slide-in-from-top duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Why Pets-on-Planes?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Check,
                title: "Trusted Expertise",
                description:
                  "Over 15 years of experience in pet relocation services",
                delay: "delay-0",
              },
              {
                icon: Globe,
                title: "300+ Destinations",
                description:
                  "Worldwide network covering every major destination",
                delay: "delay-200",
              },
              {
                icon: Home,
                title: "Comfy Pet Cabins",
                description:
                  "Climate-controlled, spacious cabins for maximum comfort",
                delay: "delay-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center group animate-in fade-in-50 slide-in-from-bottom duration-1000 ${item.delay}`}
              >
                <div className="relative inline-block mb-6">
                  <item.icon className="h-16 w-16 text-blue-600 mx-auto group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 -z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Video Promo Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in-50 slide-in-from-bottom duration-1000">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-500 hover:shadow-xl group">
              <Plane className="h-16 w-16 text-gray-400 mx-auto mb-4 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Video Promo Section
              </h3>
              <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                Placeholder for embedded video content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Previews */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 animate-in fade-in-50 slide-in-from-top duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Latest Pet Travel Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "How to Prepare Your Dog for Long-Distance Travel",
                excerpt:
                  "Essential tips for making your dog's journey comfortable and stress-free.",
                image: "/longdog.jpg",
              },
              {
                title: "How Moving Can Trigger Anxiety",
                excerpt:
                  "Understanding and managing pet anxiety during relocation.",
                image: "/petanxiety.jpg",
              },
              {
                title: "Top 5 Myths About Shipping Pets",
                excerpt:
                  "Debunking common misconceptions about pet travel services.",
                image: "/pet-myth.webp",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 p-0 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-${
                  index * 200
                }`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-orange-500 font-medium transition-colors duration-300 group-hover:underline"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
