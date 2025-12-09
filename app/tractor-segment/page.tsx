"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const tractorProducts = [
  {
    id: "tracton-20w40-sn",
    name: "TRACTON 20W40-SN",
    specs: "API SN, 20W40",
    description: "Premium tractor engine oil designed for agricultural machinery and heavy-duty farm equipment",
    sizes: ["6LTR - Rs.2583", "7LTR - Rs.2994", "7.5LTR - Rs.3238", "10LTR - Rs.3643"],
    features: [
      "Agricultural Machinery Optimized",
      "Heavy-Duty Protection",
      "Extended Service Intervals",
      "All-Weather Performance",
    ],
  },
  {
    id: "utto-sae30",
    name: "UTTO SAE-30-85W/SL-4",
    specs: "SAE 30, 85W/SL-4",
    description: "Universal Tractor Transmission Oil for hydraulic systems, transmissions, and wet brakes",
    sizes: ["26LTR - Rs.12088"],
    features: [
      "Universal Application",
      "Hydraulic System Compatible",
      "Transmission Protection",
      "Wet Brake Performance",
    ],
  },
]

export default function TractorSegmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link href="/" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Tractor Segment</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized lubricants for agricultural machinery and tractors. Engineered to withstand harsh farming
              conditions and provide reliable performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tractorProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                    <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                      {product.specs}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>



                <div className="flex gap-3">
                  <Link href={`/product/${product.id}`} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
