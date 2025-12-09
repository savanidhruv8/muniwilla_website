"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const productCategories = [
  {
    name: "MOTORCYCLE / BIKE MOPED ENGINE OIL",
    icon: "🏍️",
    description: "Premium engine oils for motorcycles, bikes, and mopeds",
    href: "/motorcycle-oil",
    products: ["STAREX 20W40-SL", "STAREX SILVER 20W40-SM", "STAREX GOLD 20W40-SN", "SUPER RIDE 10W30-SN"],
  },
  {
    name: "AUTOMOTIVE HEAVYDUTY ENGINE OIL",
    icon: "🚛",
    description: "Heavy-duty engine oils for commercial vehicles",
    href: "/automotive-heavy-duty",
    products: ["SUPEREX 15W40-CF-4", "SUPEREX 15W40-CH-4", "SUPEREX 15W40-CI-4+", "ROYAL-EX 15W50-SN"],
  },
  {
    name: "AUTOMOTIVE PRODUCT",
    icon: "🚗",
    description: "Complete range of automotive fluids and products",
    href: "/automotive-products",
    products: ["ATF DEX II (DEXRON II)", "FORK OIL 10W", "BRAKE FLUID (DOT-3/DOT-4)", "COOLANT (BIS 5759 2006)"],
  },
  {
    name: "SEMI SYNTHETIC CAR ENGINE OIL",
    icon: "🚙",
    description: "Semi-synthetic oils for diesel and gasoline cars",
    href: "/semi-synthetic-car",
    products: ["GELEXY (CNG SPECIAL) 20W50-SL", "ULTRA 0.2 20W50-SN", "SYNTHEX 5W30-SN", "ASTOL 5W40-SN"],
  },
  {
    name: "TRACTOR SEGMENT",
    icon: "🚜",
    description: "Specialized lubricants for agricultural machinery",
    href: "/tractor-segment",
    products: ["TRACTON 20W40-SN", "UTTO SAE-30-85W/SL-4"],
  },
  {
    name: "INDUSTRIAL LUBRICANTS PRODUCT",
    icon: "🏭",
    description: "Industrial grade lubricants for heavy machinery",
    href: "/industrial-lubricants",
    products: ["GEAR GT - EP-90-GL 4/5", "HYDRO - YELLOW(ISO VG 32,46,68)", "COMPRESSOR - 150", "TRANSFORMER OIL"],
  },
  {
    name: "AUTOMOTIVE THREE WHEELER ENGINE OIL",
    icon: "🛺",
    description: "Specialized oils for three-wheeler vehicles",
    href: "/three-wheeler",
    products: ["CNG 2T", "RED X"],
  },
  {
    name: "AUTOMOTIVE & INDUSTRIAL GREASE PRODUCT",
    icon: "🧴",
    description: "Multi-purpose greases for various applications",
    href: "/grease-products",
    products: ["CALCIUM GREASE MP-3", "LITHIUM GREASE AP-3", "RED JELLY GREASE", "EP-2"],
  },
]

export default function ProductCategories() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      gsap.fromTo(
        ".product-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Our Product Categories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of premium lubricants engineered for every automotive and industrial need.
          </p>
        </motion.div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="product-card group"
            >
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-400 transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden h-full">
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>

                  {/* Sample Products */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Featured Products:</h4>
                    <div className="space-y-1">
                      {category.products.slice(0, 3).map((product, idx) => (
                        <div key={idx} className="text-xs text-gray-500 flex items-center">
                          <div className="w-1 h-1 bg-yellow-500 rounded-full mr-2"></div>
                          {product}
                        </div>
                      ))}
                      {category.products.length > 3 && (
                        <div className="text-xs text-yellow-600 font-medium">
                          +{category.products.length - 3} more products
                        </div>
                      )}
                    </div>
                  </div>

                  <Link href={category.href}>
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-medium transition-all duration-300 transform group-hover:scale-105">
                      View Products
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
