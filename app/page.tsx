"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductCategories from "@/components/product-categories"
import WhyChooseUs from "@/components/why-choose-us"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <div ref={mainRef} className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  )
}
