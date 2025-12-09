"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const heavyDutyProducts = [
  {
    id: "superex-15w40-cf4",
    name: "SUPEREX 15W40-CF-4",
    specs: "API CF-4, 15W40",
    description: "Heavy-duty diesel engine oil for commercial vehicles and trucks",
    sizes: [
      "500ML - Rs.230",
      "1LTR - Rs.445",
      "3LTR - Rs.1335",
      "5LTR - Rs.2225",
      "10LTR - Rs.4309",
      "20LTR - Rs.8533",
    ],
    features: ["Heavy-Duty Protection", "Diesel Engine Optimized", "Extended Drain Intervals", "Superior Wear Control"],
  },
  {
    id: "superex-15w40-ch4",
    name: "SUPEREX 15W40-CH-4",
    specs: "API CH-4, 15W40",
    description: "Advanced heavy-duty engine oil with enhanced performance characteristics",
    sizes: [
      "500ML - Rs.238",
      "1LTR - Rs.459",
      "3LTR - Rs.1361",
      "5LTR - Rs.2268",
      "10LTR - Rs.4423",
      "20LTR - Rs.8981",
    ],
    features: [
      "Advanced Additive Package",
      "Improved Oxidation Resistance",
      "Better Thermal Stability",
      "Reduced Oil Consumption",
    ],
  },
  {
    id: "superex-15w40-ci4plus",
    name: "SUPEREX 15W40-CI-4+",
    specs: "API CI-4+, 15W40",
    description: "Premium heavy-duty oil meeting the latest industry standards",
    sizes: [
      "500ML - Rs.247",
      "1LTR - Rs.485",
      "3LTR - Rs.1437",
      "5LTR - Rs.2396",
      "10LTR - Rs.4678",
      "20LTR - Rs.9185",
    ],
    features: ["Latest API Standards", "Enhanced Soot Control", "Improved Fuel Economy", "Extended Engine Life"],
  },
  {
    id: "royal-ex-15w50-sn",
    name: "ROYAL-EX 15W50-SN",
    specs: "API SN, 15W50",
    description: "Royal grade engine oil for premium heavy-duty applications",
    sizes: ["2.5LTR - Rs.1153", "10LTR - Rs.4266", "20LTR - Rs.8824"],
    features: ["Premium Grade Quality", "High Viscosity Index", "Excellent Shear Stability", "Superior Protection"],
  },
]

export default function AutomotiveHeavyDutyPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Automotive Heavy Duty Engine Oil</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Heavy-duty engine oils engineered for commercial vehicles, trucks, and industrial applications. Delivering
              maximum protection under extreme operating conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {heavyDutyProducts.map((product, index) => (
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
