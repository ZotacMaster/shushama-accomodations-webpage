'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Bed, Coffee, Utensils, Wifi, Waves, Star, Menu, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function EnhancedGuestHouse() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Waves className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Shushama Accomodations</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#rooms">Rooms</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#amenities">Amenities</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#gallery">Gallery</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</Link>
            </nav>
          </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="secondary" className="ml-auto">Book Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container px-4 md:px-6 relative z-10"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Shushama Accomodations
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience tranquility and comfort in our guest house. Your perfect getaway awaits.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Book Your Stay</Button>
                <Button variant="outline">Take a Tour</Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Seaside Haven"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
        </section>
        <section id="rooms" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Ocean View Suite</CardTitle>
                    <CardDescription>Breathtaking views of the sea</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      height={300}
                      width={400}
                      alt="Ocean View Suite"
                      className="rounded-lg object-cover w-full"
                    />
                    <div className="mt-4">
                      <p>From $199/night</p>
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
                    <CardTitle>Retreat</CardTitle>
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
                      <p>From $149/night</p>
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
                    <CardTitle>Family Cottage</CardTitle>
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
                      <p>From $249/night</p>
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
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center space-y-2">
                <Wifi className="h-8 w-8" />
                <h3 className="font-semibold">Free Wi-Fi</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Stay connected throughout your stay</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center space-y-2">
                <Coffee className="h-8 w-8" />
                <h3 className="font-semibold">Complimentary Breakfast</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Start your day right with our delicious breakfast</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center space-y-2">
                <Bed className="h-8 w-8" />
                <h3 className="font-semibold">Comfortable Beds</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ensure a restful night's sleep</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center space-y-2">
                <Utensils className="h-8 w-8" />
                <h3 className="font-semibold">On-site Restaurant</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enjoy delicious meals without leaving the premises</p>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Gallery</h2>
            <div className="relative">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Guests Say</h2>
            <div className="max-w-2xl mx-auto">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        height={40}
                        width={40}
                        alt="Guest Avatar"
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle>Sarah Thompson</CardTitle>
                        <CardDescription>Stayed in Ocean View Suite</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      "Our stay at Seaside Haven was absolutely wonderful. The views were breathtaking, the staff was
                      incredibly friendly, and the amenities were top-notch. We can't wait to come back!"
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Have questions or ready to book your stay? Get in touch with us and we'll be happy to assist you.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm  text-gray-500 dark:text-gray-400">123 Seaside Avenue, Beachtown, BT 12345</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
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
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">About Us</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Seaside Haven is a charming guest house offering comfortable accommodations and breathtaking ocean views.
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
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Newsletter</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Subscribe to our newsletter for special offers and updates.</p>
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 Seaside Haven. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}