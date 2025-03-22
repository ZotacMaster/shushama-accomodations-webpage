'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Bed, AirVent, ArrowsUpFromLine, Coffee, Utensils, Wifi, Waves, Star, Menu, ChevronLeft, ChevronRight, X, MapPin, Phone, Mail} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import dynamic from 'next/dynamic'

const LocationMap = dynamic(() => import('@/components/ui/location-map'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-500 rounded-lg flex items-center justify-center">
      <p className="text-gray-500 dark:text-gray-400">Loading map...</p>
    </div>
  )
})

export default function EnhancedGuestHouse() {
  const [currentImage, setCurrentImage] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLocation, setActiveLocation] = useState(0)
  const mapRef = useRef(null)

  const images = [
    "/assets/images/mainhall.jpeg",
    "/assets/images/room1.jpeg",
    "/assets/images/room2.jpeg",
    "/assets/images/bathroom.jpeg",
  ]

  const locations = [
    {
    id: 1,
    name: "Sushama Accommodations",
    address: "AL/1/A/16, Street Number 5,New Town Action Area-1A, Kolkata 700156",
    phone: "+919831804356",
    email: "info@seasidehaven.com",
    description: "",
    image: "/images/seaside-haven-hero.jpg",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    maplink:"https://maps.app.goo.gl/G1FVsnka2quiUbkg8",
    rooms: {stamdard: 0 , delux: 1200, super_delux: 1500}
   },
   {
    id: 2,
    name: "Deep Residency",
    address: "BD-180, Street Number 117,New Town Action Area-1, Kolkata 700156 (Opposite Biswa Bangla Convention Center)",
    phone: "+919339456091",
    email: "info@seasidehaven.com",
    description: "Our flagship property with direct beach access and stunning ocean views.",
    image: "/images/seaside-haven-hero.jpg",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    maplink:"",
    rooms: {standard: 1100, delux: 0, super_delux:0}
   },
   {
    id: 3,
    name: "Sushama Guest House",
    address: "DA 103, Salt Lake Sector-1,Kolkata 700064 (Opposite Rehabana Rehab Centre)",
    phone: "+919339456091",
    email: "info@seasidehaven.com",
    description: "Peak property located near City Center 1",
    image: "/images/seaside-haven-hero.jpg",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    maplink:"https://maps.app.goo.gl/n4QnvRTG1dnSvt5n6",
    rooms: {standard: 1200, delux: 1500, super_delux:1800}
   }
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Waves className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Sushama Accomodations</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#rooms">Rooms</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#amenities">Amenities</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#gallery">Gallery</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</Link>
            </nav>
          </div>
          <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-background border-t">
            <Link 
                  className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium" 
                  href="#rooms"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Rooms
            </Link>
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium" 
                href="#amenities"
                onClick={() => setMobileMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium" 
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium" 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
        )}
      </header>
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden"
                 style={{ 
                  backgroundImage: "url('/assets/images/mainhall2.jpeg')", 
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                  }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="content-center px-4 md:px-6 relative z-10"
          >
            <div className="mx-auto flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Sushama Accomodations
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl dark:white">
                  Experience tranquility and comfort in our guest house. Your perfect getaway awaits.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Book Your Stay</Button>
                <Button variant="outline">Take a Tour</Button>
              </div>
            </div>
          </motion.div>
          
        </section>

        <section id="locations" className="w-full py-12 md:py-24 lg:py-32">
          <div className="content-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Locations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

              {/* Map */}
              <div className="z-10 order-1 w-full min-h-[200px] min-w-[200px]">
                <LocationMap 
                  locations={locations} 
                  activeLocation={activeLocation} 
                  setActiveLocation={setActiveLocation} 
                />
              </div>

              {/* Locations List and Details */}
              <div className="order-2 w-full md:w-auto">
                  <Tabs 
                    defaultValue={locations[0].id.toString()} 
                    className="w-full" 
                    onValueChange={(value) => setActiveLocation(parseInt(value) - 1)}
                    value={locations[activeLocation].id.toString()}
                  >
                    <TabsList className="w-full h-full grid md:max-grid-rows-3 lg:grid-cols-3 mb-0 relative z-10">
                      {locations.map((location) => (
                        <TabsTrigger className="w-full pt-2 content-center" key={location.id} value={location.id.toString()}>
                          {location.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    <div className="w-full pt-3 md:pt-5">
                      {locations.map((location, index) => (
                        <TabsContent key={location.id} value={location.id.toString()}>
                          <Card>
                            <CardHeader>
                              <CardTitle>{location.name}</CardTitle>
                              <CardDescription>
                                {location.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="aspect-video overflow-hidden rounded-md">
                                <Image
                                  src={location.image || "/placeholder.svg"}
                                  alt={location.name}
                                  width={600}
                                  height={400}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                  <p className="text-sm">{location.address}</p>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                                  <p className="text-sm">{location.phone}</p>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                                  <p className="text-sm">{location.email}</p>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter>
                                <Button 
                                  className="w-full"
                                  size="sm"
                                  onClick={() => window.open(location.maplink, '_blank')}
                                >
                                  Get Directions
                                </Button>
                            </CardFooter>
                          </Card>
                        </TabsContent>
                      ))}
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section id="rooms" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-100">
          <div className="content-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly gap-6 text-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Standard Rooms</CardTitle>
                    <CardDescription>Affordable and comfortable rooms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      height={300}
                      width={400}
                      alt="Standard Suite"
                      className="rounded-lg object-cover w-full"
                    />
                    <div className="mt-4">
                      <p>From ₹1100/night</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Delux Rooms</CardTitle>
                    <CardDescription>Peaceful and serene environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      height={300}
                      width={400}
                      alt="Retreat"
                      className="rounded-lg object-cover w-full"
                    />
                    <div className="mt-4">
                      <p>From ₹1200/night</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Super Delux Rooms</CardTitle>
                    <CardDescription>Spacious and comfortable for families</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      height={300}
                      width={400}
                      alt="Family Cottage"
                      className="rounded-lg object-cover w-full"
                    />
                    <div className="mt-4">
                      <p>From ₹1500/night</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="amenities" className="w-full py-12 md:py-24 lg:py-32">
          <div className="content-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center space-y-2">
                <Wifi className="h-8 w-8" />
                <h3 className="font-semibold">Free Wi-Fi</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Stay connected throughout your stay</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center space-y-2">
                <Bed className="h-8 w-8" />
                <h3 className="font-semibold">Comfortable Beds</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ensure a restful night's sleep</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center space-y-2">
                <ArrowsUpFromLine className="h-8 w-8" />
                <h3 className="font-semibold">Lifts available</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">No need to extert yourself</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center space-y-2">
                <AirVent className="h-8 w-8" />
                <h3 className="font-semibold">Air Conditioned Rooms</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Respite from the heat</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-100">
          <div className="content-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Gallery</h2>
            <div className="relative w-full max-w-3xl mx-auto">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images[currentImage]}
                  alt={`Gallery image ${currentImage + 1}`}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-[600px]"
                />
              </motion.div>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="content-center px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Have questions or ready to book your stay? Get in touch with us and we'll be happy to assist you.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm  text-gray-500 dark:text-gray-400">DA 103, Salt Lake Sector-1,Kolkata 700064</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+919339456091</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">info@seasidehaven.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Send us a message</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-100">
        <div className="content-center px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">About Us</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sushama Accommodations is a charming guest house offering comfortable accommodations and easy access to the city.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><Link href="#rooms">Rooms</Link></li>
                <li><Link href="#amenities">Amenities</Link></li>
                <li><Link href="#gallery">Gallery</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Policies</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Cancellation Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}